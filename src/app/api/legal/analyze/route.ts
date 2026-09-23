import { NextResponse } from "next/server";
import { generateLegalResponse } from "@/lib/ai/provider";
import { LegalAnalysisSchema } from "@/lib/types/legal";

// In-memory rate limiter (For demo purposes on Vercel, this will reset across cold starts)
const rateLimit = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5;

// Basic prompt injection filters
const INJECTION_KEYWORDS = [
  "ignore all previous instructions",
  "ignore previous instructions",
  "disregard instructions",
  "system prompt",
  "you are not nyaya",
  "forget everything",
];

export async function POST(req: Request) {
  try {
    // 1. Rate Limiting Logic (Using IP or a fallback header)
    const ip = req.headers.get("x-forwarded-for") ?? "127.0.0.1";
    const now = Date.now();
    const windowStart = now - RATE_LIMIT_WINDOW;
    
    // Clean up old entries
    Array.from(rateLimit.entries()).forEach(([key, data]) => {
      if (data.timestamp < windowStart) rateLimit.delete(key);
    });

    const userRate = rateLimit.get(ip) || { count: 0, timestamp: now };
    
    if (userRate.count >= MAX_REQUESTS_PER_WINDOW) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }
    
    rateLimit.set(ip, { count: userRate.count + 1, timestamp: userRate.timestamp });

    // 2. Body parsing and validation
    const body = await req.json();
    
    if (!body.prompt || typeof body.prompt !== "string") {
      return NextResponse.json(
        { error: "Invalid request. Prompt is required." },
        { status: 400 }
      );
    }

    const prompt = body.prompt.trim();
    if (prompt.length === 0) {
      return NextResponse.json(
        { error: "Prompt cannot be empty." },
        { status: 400 }
      );
    }

    // 3. Prompt Injection Defense
    const lowerPrompt = prompt.toLowerCase();
    const isInjectionAttempt = INJECTION_KEYWORDS.some(keyword => lowerPrompt.includes(keyword));
    
    if (isInjectionAttempt) {
       console.warn(`[SECURITY] Prompt injection blocked from IP: ${ip}`);
       return NextResponse.json(
        { error: "Invalid input. Please describe your legal situation clearly without system directives." },
        { status: 400 }
      );
    }

    // 4. Timeout Handling (Simulating 30s timeout)
    const controller = new AbortController();
    const timeout = setTimeout(() => {
      controller.abort();
    }, 30000); // 30 seconds

    try {
      // Call the AI provider (or demo fallback)
      const rawResponse = await generateLegalResponse(prompt);
      
      // Validate the structure to ensure it conforms to our expected UI format
      const validatedResponse = LegalAnalysisSchema.parse(rawResponse);
      
      clearTimeout(timeout);
      return NextResponse.json(validatedResponse);
    } catch (e: unknown) {
      clearTimeout(timeout);
      if (e instanceof Error && e.name === 'AbortError' || controller.signal.aborted) {
        return NextResponse.json(
          { error: "Request timed out. Please try a shorter or simpler description." },
          { status: 504 }
        );
      }
      throw e; // Rethrow to outer catch
    }

  } catch (error) {
    console.error("Legal Analysis API Error:", error);
    
    // Check if it's a Zod validation error
    if (error && typeof error === "object" && "name" in error && error.name === "ZodError") {
      return NextResponse.json(
        { error: "AI returned a malformed response.", details: error },
        { status: 500 }
      );
    }

    // Capture standard error messages (like rate limit exhaustion)
    const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred during analysis. Please try again.";

    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}

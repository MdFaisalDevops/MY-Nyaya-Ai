import { NextResponse } from "next/server";
import { analyzeDocument } from "@/lib/ai/doc-provider";
import { z } from "zod";

const ALLOWED_MIME_TYPES = [
  "application/pdf",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "text/plain",
  "image/jpeg",
  "image/png"
];

const UploadSchema = z.object({
  fileName: z.string(),
  fileSize: z.number().max(5 * 1024 * 1024, "File size must be under 5MB"),
  fileType: z.string().refine(val => ALLOWED_MIME_TYPES.includes(val), {
    message: "Invalid file type. Only PDF, DOCX, TXT, JPG, and PNG are allowed."
  })
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validate request payload
    const validatedData = UploadSchema.parse(body);

    // Call the AI provider abstraction (currently simulating network/parsing)
    const analysis = await analyzeDocument();

    return NextResponse.json(analysis);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid file data provided.", details: error.issues },
        { status: 400 }
      );
    }

    console.error("Document analysis error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred during document analysis." },
      { status: 500 }
    );
  }
}

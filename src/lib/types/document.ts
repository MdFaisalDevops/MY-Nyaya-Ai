import { z } from "zod";

export const DocumentAnalysisSchema = z.object({
  simpleSummary: z.string().describe("A plain language summary of the document's purpose."),
  parties: z.array(z.object({
    name: z.string(),
    role: z.string(),
    organization: z.string().optional()
  })).describe("Important parties involved in the document."),
  importantDates: z.array(z.object({
    date: z.string(),
    event: z.string(),
    isDeadline: z.boolean().default(false)
  })).describe("Specific dates found in the document. Do not invent dates."),
  clauses: z.array(z.object({
    title: z.string(),
    explanation: z.string(),
    whyItMatters: z.string()
  })).describe("Important clauses explained in simple terms."),
  questionsToAsk: z.array(z.string()).describe("Questions the user may want to discuss with a qualified professional."),
  attentionAreas: z.array(z.object({
    title: z.string(),
    description: z.string()
  })).describe("Areas labeled as 'Potentially important', 'May require review', etc. Never state something is illegal."),
});

export type DocumentAnalysis = z.infer<typeof DocumentAnalysisSchema>;

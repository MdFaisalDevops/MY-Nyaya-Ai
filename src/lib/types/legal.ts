import { z } from "zod";

export const LegalAnalysisSchema = z.object({
  triageCategory: z.enum([
    "Employment", "Consumer", "Rental/Housing", "Family", "Property", 
    "Cybercrime", "Banking/Finance", "Traffic", "Identity/Fraud", 
    "Contracts", "Civil dispute", "Criminal matter", "Government services", "Other"
  ]).describe("Broad category of the legal issue."),
  triageExplanation: z.string().describe("Short explanation of the triage category."),
  issue: z.string().describe("Specific issue, e.g., 'Possible employment-related payment dispute'."),
  summary: z.string().describe("A brief summary of the user's situation based strictly on their input."),
  urgency: z.enum([
    "Normal", "Time-sensitive", "Urgent", "Emergency", "Deadline requires verification"
  ]).describe("Urgency indicator of the situation."),
  jurisdiction: z.object({
    country: z.string().optional(),
    state: z.string().optional(),
    city: z.string().optional()
  }).describe("Jurisdiction details (prioritizing India for MVP)."),
  knownFacts: z.array(z.string()).describe("List of facts explicitly provided by the user."),
  missingInformation: z.array(z.string()).describe("List of clarifying questions to gather missing information."),
  possibleOptions: z.array(z.string()).describe("List of possible paths the user could take."),
  actionPlan: z.array(z.object({
    id: z.string(),
    title: z.string(),
    status: z.enum(["Not started", "In progress", "Completed"]).default("Not started"),
    evidenceRequired: z.array(z.string()).optional()
  })).describe("A structured checklist of practical next steps with required evidence."),
  documents: z.array(z.string()).describe("List of documents that may be relevant."),
  importantDates: z.array(z.string()).describe("List of dates mentioned by the user."),
  risks: z.array(z.string()).optional().describe("Potential risks or complications."),
  sources: z.array(z.object({
    id: z.string(),
    title: z.string(),
    status: z.enum(["Verified source", "Verification required", "No source available"])
  })).describe("List of verified sources if available."),
  confidence: z.enum(["Low", "Medium", "High"]).describe("Confidence level in understanding the provided information."),
  humanHelpRecommended: z.boolean().describe("True if the situation requires a lawyer."),
  isEmergency: z.boolean().default(false).describe("True if immediate danger or threat is detected."),
  highRiskCategory: z.array(z.string()).optional().describe("E.g., violence, child safety, criminal allegations."),
  disclaimer: z.string().describe("A standard disclaimer stating this is AI guidance, not legal advice."),
});

export type LegalAnalysis = z.infer<typeof LegalAnalysisSchema>;

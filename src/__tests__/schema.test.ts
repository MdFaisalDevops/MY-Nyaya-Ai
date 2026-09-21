import { LegalAnalysisSchema } from '@/lib/types/legal';

describe('LegalAnalysisSchema', () => {
  it('validates a correct legal analysis payload', () => {
    const validPayload = {
      triageCategory: "Employment",
      triageExplanation: "The situation describes a common employment dispute.",
      issue: "Unpaid Salary",
      summary: "Employer has not paid for 2 months.",
      urgency: "Normal",
      jurisdiction: { country: "India" },
      knownFacts: ["Employed for 1 year"],
      missingInformation: ["Employment contract"],
      possibleOptions: ["Send a formal notice"],
      actionPlan: [{ id: "1", title: "Review contract", status: "Not started" }],
      documents: ["Emails"],
      importantDates: [],
      risks: [],
      sources: [],
      confidence: "High",
      humanHelpRecommended: true,
      isEmergency: false,
      disclaimer: "This is not legal advice."
    };

    const result = LegalAnalysisSchema.safeParse(validPayload);
    expect(result.success).toBe(true);
  });

  it('fails on missing required fields', () => {
    const invalidPayload = {
      triageCategory: "Employment"
      // Missing everything else
    };

    const result = LegalAnalysisSchema.safeParse(invalidPayload);
    expect(result.success).toBe(false);
  });
});

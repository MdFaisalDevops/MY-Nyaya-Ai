import { LegalAnalysis } from "../types/legal";

export const DEMO_SCENARIOS: Record<string, LegalAnalysis> = {
  "employment": {
    triageCategory: "Employment",
    triageExplanation: "This issue involves disputes between an employer and employee regarding compensation.",
    issue: "Possible employment-related payment dispute",
    summary: "You have stated that your employer has not paid your salary.",
    urgency: "Time-sensitive",
    jurisdiction: { country: "India" },
    knownFacts: [
      "You are an employee.",
      "Salary has not been paid."
    ],
    missingInformation: [
      "Which state or city are you employed in?",
      "How long is the salary overdue?",
      "Do you have a written employment contract?",
      "Have you formally asked your employer in writing for the unpaid wages?"
    ],
    possibleOptions: [
      "Gather all employment records and pay stubs.",
      "Send a formal written request to your employer.",
      "File a wage claim with your local labor department.",
      "Consult with an employment attorney."
    ],
    actionPlan: [
      { id: "step-1", title: "Locate your employment contract", status: "Not started", evidenceRequired: ["Employment contract or offer letter"] },
      { id: "step-2", title: "Collect past pay stubs and bank statements", status: "Not started", evidenceRequired: ["Recent pay stubs", "Bank statements"] },
      { id: "step-3", title: "Document the exact amount owed", status: "Not started", evidenceRequired: ["Timesheets or proof of hours worked"] },
      { id: "step-4", title: "Write a formal demand email to HR", status: "Not started", evidenceRequired: [] }
    ],
    documents: [
      "Employment contract or offer letter",
      "Recent pay stubs",
      "Timesheets or proof of hours worked",
      "Written communications regarding the unpaid salary"
    ],
    importantDates: [],
    risks: [
      "There may be strict time limits (statutes of limitations) for filing wage claims."
    ],
    sources: [
      { id: "payment_of_wages_act", title: "Payment of Wages Act, 1936", status: "Verified source" }
    ],
    confidence: "High",
    humanHelpRecommended: true,
    isEmergency: false,
    disclaimer: "NyayaAI provides AI-generated legal information and assistance. It is not a law firm and does not replace qualified legal advice."
  },
  "rental": {
    triageCategory: "Rental/Housing",
    triageExplanation: "This matter relates to a dispute between a landlord and tenant over the return of a security deposit.",
    issue: "Possible rental / security deposit dispute",
    summary: "You indicated that your landlord has not returned your security deposit after you moved out.",
    urgency: "Normal",
    jurisdiction: { country: "India" },
    knownFacts: [
      "You were a tenant.",
      "You have moved out.",
      "The landlord holds a security deposit.",
      "The deposit has not been returned."
    ],
    missingInformation: [
      "When exactly did you move out and return the keys?",
      "Did you provide a forwarding address to the landlord?",
      "Did the landlord provide an itemized list of deductions?",
      "What state or local jurisdiction did you rent in?"
    ],
    possibleOptions: [
      "Send a formal demand letter for the return of the deposit.",
      "Check local tenant rights regarding the timeframe landlords have to return deposits.",
      "Consider filing a claim in small claims court.",
      "Contact a local tenant union or legal aid office."
    ],
    actionPlan: [
      { id: "step-1", title: "Verify the date you vacated the property", status: "Not started", evidenceRequired: ["Move-out documentation or emails"] },
      { id: "step-2", title: "Check your lease agreement for deposit return terms", status: "Not started", evidenceRequired: ["Lease agreement"] },
      { id: "step-3", title: "Draft and send a certified demand letter", status: "Not started", evidenceRequired: [] },
      { id: "step-4", title: "Gather photos or videos taken at move-out", status: "Not started", evidenceRequired: ["Photos or videos of the property condition"] }
    ],
    documents: [
      "Lease agreement",
      "Move-in/Move-out inspection checklists",
      "Photos or videos of the property condition",
      "Proof of rent and deposit payment"
    ],
    importantDates: [],
    risks: [
      "Failure to provide a forwarding address may affect your right to claim the deposit in some jurisdictions."
    ],
    sources: [
      { id: "model_tenancy_act", title: "Model Tenancy Act, 2021", status: "Verified source" }
    ],
    confidence: "Medium",
    humanHelpRecommended: false,
    isEmergency: false,
    disclaimer: "NyayaAI provides AI-generated legal information and assistance. It is not a law firm and does not replace qualified legal advice."
  },
  "legal_notice": {
    triageCategory: "Civil dispute",
    triageExplanation: "Receipt of a formal demand or legal notice requires immediate review to avoid default judgments.",
    issue: "Receipt of formal legal notice or demand",
    summary: "You have received a formal legal notice from another party.",
    urgency: "Deadline requires verification",
    jurisdiction: { country: "India" },
    knownFacts: [
      "A legal notice was received."
    ],
    missingInformation: [
      "Who sent the notice (e.g., a court, a lawyer, a debt collector)?",
      "What is the exact nature of the demand?",
      "Is there a specified deadline to respond?",
      "What jurisdiction or court is mentioned?"
    ],
    possibleOptions: [
      "Carefully read the entire document to identify any deadlines.",
      "Do not ignore the notice; failure to respond can result in default judgments.",
      "Gather any documents related to the subject of the notice.",
      "Seek immediate consultation with a qualified attorney."
    ],
    actionPlan: [
      { id: "step-1", title: "Scan or copy the notice for your records", status: "Not started", evidenceRequired: ["The legal notice received"] },
      { id: "step-2", title: "Highlight any dates or deadlines", status: "Not started", evidenceRequired: [] },
      { id: "step-3", title: "Identify the sender and their authority", status: "Not started", evidenceRequired: [] },
      { id: "step-4", title: "Schedule a consultation with a lawyer", status: "Not started", evidenceRequired: ["Prior correspondence with the sender"] }
    ],
    documents: [
      "The legal notice received",
      "Any accompanying documents or exhibits",
      "Prior correspondence with the sender"
    ],
    importantDates: [],
    risks: [
      "Ignoring a legal notice can lead to severe consequences, including default judgments or loss of rights."
    ],
    sources: [],
    confidence: "Low",
    humanHelpRecommended: true,
    isEmergency: true,
    highRiskCategory: ["legal notices", "urgent deadlines"],
    disclaimer: "NyayaAI provides AI-generated legal information and assistance. It is not a law firm and does not replace qualified legal advice."
  }
};

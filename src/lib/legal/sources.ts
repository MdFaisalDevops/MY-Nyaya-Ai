export type SourceType = "Government" | "Court" | "Legislation" | "Regulator" | "Legal Aid" | "Public Service";
export type VerificationStatus = "Verified source" | "Verification required" | "No source available";

export interface LegalSource {
  id: string;
  title: string;
  authority: string;
  jurisdiction: string;
  sourceType: SourceType;
  url: string;
  publicationDate?: string;
  lastVerified: string;
  description: string;
  status: VerificationStatus;
}

export const VERIFIED_SOURCES: Record<string, LegalSource> = {
  "payment_of_wages_act": {
    id: "payment_of_wages_act",
    title: "Payment of Wages Act, 1936",
    authority: "Ministry of Labour & Employment",
    jurisdiction: "India",
    sourceType: "Legislation",
    url: "https://labour.gov.in/sites/default/files/ThePaymentofWagesAct1936_0.pdf",
    lastVerified: new Date().toISOString().split('T')[0],
    description: "An Act to regulate the payment of wages to certain classes of employed persons.",
    status: "Verified source"
  },
  "industrial_disputes_act": {
    id: "industrial_disputes_act",
    title: "Industrial Disputes Act, 1947",
    authority: "Ministry of Labour & Employment",
    jurisdiction: "India",
    sourceType: "Legislation",
    url: "https://labour.gov.in/sites/default/files/TheIndustrialDisputesAct1947_0.pdf",
    lastVerified: new Date().toISOString().split('T')[0],
    description: "Provisions for the investigation and settlement of industrial disputes.",
    status: "Verified source"
  },
  "model_tenancy_act": {
    id: "model_tenancy_act",
    title: "Model Tenancy Act, 2021",
    authority: "Ministry of Housing and Urban Affairs",
    jurisdiction: "India",
    sourceType: "Government",
    url: "https://mohua.gov.in/upload/uploadfiles/files/Model-Tenancy-Act-English-02_06_2021.pdf",
    lastVerified: new Date().toISOString().split('T')[0],
    description: "Framework for regulating premises leasing and balancing landlord-tenant interests.",
    status: "Verified source"
  },
  "consumer_protection_act": {
    id: "consumer_protection_act",
    title: "Consumer Protection Act, 2019",
    authority: "Department of Consumer Affairs",
    jurisdiction: "India",
    sourceType: "Legislation",
    url: "https://consumeraffairs.nic.in/en/acts-and-rules/consumer-protection",
    lastVerified: new Date().toISOString().split('T')[0],
    description: "An Act to provide for protection of the interests of consumers.",
    status: "Verified source"
  }
};

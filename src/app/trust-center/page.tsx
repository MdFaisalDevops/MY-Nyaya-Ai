import PageHeader from "@/components/layout/PageHeader";
import { Shield, ShieldAlert, CheckCircle2, Search, Database, Lock, AlertCircle, FileWarning } from "lucide-react";

export default function TrustCenterPage() {
  return (
    <div className="container mx-auto py-8 px-4 max-w-4xl">
      <PageHeader 
        title="Trust Center" 
        description="Understanding how NyayaAI works, our limitations, and how we protect your privacy."
        breadcrumb={[{label: 'Home', href: '/'}, {label: 'Trust Center'}]} 
      />

      <div className="mt-8 space-y-12 text-slate-700 dark:text-slate-300">
        
        {/* Core Principles */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" /> What NyayaAI Does
            </h3>
            <ul className="space-y-3">
              <li>• Triages legal issues into clear categories.</li>
              <li>• Extracts relevant facts and identifies missing information.</li>
              <li>• Generates structured, practical action plans.</li>
              <li>• Cross-references concepts against verified source models.</li>
              <li>• Communicates confidence levels transparently.</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white flex items-center gap-2 mb-4">
              <ShieldAlert className="w-5 h-5 text-rose-500" /> What NyayaAI Does Not Do
            </h3>
            <ul className="space-y-3">
              <li>• <strong>Does not provide legal advice.</strong></li>
              <li>• Does not form an attorney-client relationship.</li>
              <li>• Does not guarantee legal outcomes.</li>
              <li>• Does not substitute for professional legal representation.</li>
              <li>• Does not verify external deadlines with 100% certainty.</li>
            </ul>
          </div>
        </section>

        {/* AI & Verification */}
        <section className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <Database className="w-6 h-6 text-indigo-500" /> How AI Responses Work
            </h3>
            <p className="leading-relaxed">
              NyayaAI uses large language models to parse your situation, structure data into predefined schemas, and suggest possible pathways. Every response is dynamically generated based on strict system prompts designed to prevent hallucination, though AI-generated legal information can still be incomplete or incorrect.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <Search className="w-6 h-6 text-indigo-500" /> How Sources Are Verified
            </h3>
            <p className="leading-relaxed mb-4">
              We maintain a curated registry of primary legal sources (legislation, government portals, courts). When an AI response mentions a statute, our system attempts to cross-reference it with our registry.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50 dark:bg-emerald-950/20 dark:border-emerald-900/50">
                <p className="font-semibold text-emerald-800 dark:text-emerald-400">✓ Verified Source</p>
                <p className="text-sm mt-1">Cross-referenced against our trusted registry with a secure outbound link.</p>
              </div>
              <div className="p-4 rounded-xl border border-amber-200 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-900/50">
                <p className="font-semibold text-amber-800 dark:text-amber-400">⚠ Verification Required</p>
                <p className="text-sm mt-1">Mentioned by AI but not explicitly verified in our trusted registry.</p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 dark:bg-slate-900/50 dark:border-slate-800">
                <p className="font-semibold text-slate-700 dark:text-slate-400">No Source</p>
                <p className="text-sm mt-1">The system could not identify a relevant primary source.</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-indigo-500" /> How Uncertainty Is Communicated
            </h3>
            <p className="leading-relaxed">
              You will see a <strong>Confidence Badge</strong> on all analyses. This indicates the AI&apos;s confidence in <em>understanding the information provided</em> based on clarity and completeness. It <strong>does not</strong> represent certainty about legal outcomes.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <Shield className="w-6 h-6 text-indigo-500" /> When Human Legal Help Is Recommended
            </h3>
            <p className="leading-relaxed">
              If our system detects high-risk situations (such as active litigation, strict deadlines, criminal allegations, or complex civil disputes), it will flag the response with a recommendation for professional assistance. In emergencies, we surface verified emergency contact numbers immediately.
            </p>
          </div>
        </section>

        {/* Privacy & Reporting */}
        <section className="space-y-8 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <Lock className="w-6 h-6 text-slate-700 dark:text-slate-400" /> Privacy
            </h3>
            <p className="leading-relaxed mb-4">
              We treat your inputs as untrusted, sensitive data. To protect you:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>We do not place sensitive information in URLs.</li>
              <li>We do not log unnecessary personal information.</li>
              <li>You can delete your conversation, clear your session, and delete uploaded documents at any time from the Assistant interface.</li>
              <li>We utilize Prompt Injection Defenses to prevent malicious documents from hijacking the system.</li>
            </ul>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 text-center">
            <FileWarning className="w-8 h-8 text-slate-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Report an Incorrect Answer</h3>
            <p className="mb-4 max-w-md mx-auto">
              If you believe NyayaAI has provided factually incorrect or dangerous information, please let us know so we can improve our safeguards.
            </p>
            <a href="mailto:support@nyaya.ai" className="inline-flex h-9 items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-slate-50 shadow transition-colors hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90">
              Contact Trust & Safety
            </a>
          </div>
        </section>
        
      </div>
    </div>
  );
}

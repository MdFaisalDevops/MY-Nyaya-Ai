import { AlertCircle } from 'lucide-react';

export default function LegalDisclaimer() {
  return (
    <div className="bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500 p-4 rounded-r-lg">
      <div className="flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-500 shrink-0 mt-0.5" />
        <div className="text-sm text-amber-800 dark:text-amber-200/90 leading-relaxed">
          <span className="font-semibold block mb-1">Responsible AI Notice</span>
          AI-generated legal information can be incomplete or incorrect. Verify important information with authoritative sources or a qualified legal professional.
        </div>
      </div>
    </div>
  );
}

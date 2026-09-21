"use client";

import { useI18n } from "@/lib/i18n";
import { AlertCircle, Globe } from "lucide-react";
import { useState } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function LanguageSelector() {
  const { language, setLanguage } = useI18n();
  const [showWarning, setShowWarning] = useState(false);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value as "en" | "hi" | "mr";
    setLanguage(lang);
    if (lang !== "en") {
      setShowWarning(true);
      // Auto-hide warning after 8 seconds
      setTimeout(() => setShowWarning(false), 8000);
    } else {
      setShowWarning(false);
    }
  };

  return (
    <div className="relative flex items-center">
      <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2 py-1.5 rounded-md border border-slate-200 dark:border-slate-700">
        <Globe className="w-4 h-4 shrink-0" />
        <select 
          value={language} 
          onChange={handleLanguageChange}
          className="bg-transparent text-xs font-medium focus:outline-none cursor-pointer appearance-none pr-4"
        >
          <option value="en">English</option>
          <option value="hi">हिंदी (Hindi)</option>
          <option value="mr">मराठी (Marathi)</option>
        </select>
      </div>

      {showWarning && (
        <div className="absolute top-full right-0 mt-2 w-64 z-50">
          <Alert className="bg-amber-50 dark:bg-amber-950/90 border-amber-200 dark:border-amber-900 text-amber-800 dark:text-amber-200 shadow-lg">
            <AlertCircle className="h-4 w-4 text-amber-600 dark:text-amber-500" />
            <AlertDescription className="text-xs ml-2">
              Machine translation of dynamic legal text may contain inaccuracies. English is recommended for accuracy.
            </AlertDescription>
          </Alert>
        </div>
      )}
    </div>
  );
}

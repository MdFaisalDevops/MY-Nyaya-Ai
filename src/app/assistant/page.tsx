"use client";

import { useState } from "react";
import PageHeader from '@/components/layout/PageHeader';
import AssistantChat from "@/components/assistant/AssistantChat";
import dynamic from "next/dynamic";

const StructuredAnalysis = dynamic(() => import("@/components/assistant/StructuredAnalysis"), {
  loading: () => <div className="animate-pulse h-96 bg-slate-100 dark:bg-slate-800 rounded-xl"></div>,
  ssr: false
});
import LoadingAnimation from "@/components/ui/LoadingAnimation";
import { LegalAnalysis } from "@/lib/types/legal";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function AssistantPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [analysis, setAnalysis] = useState<LegalAnalysis | null>(null);

  const handleAnalyze = async (prompt: string) => {
    setIsLoading(true);
    setError(null);
    // Reset analysis only if we want to clear previous results
    // setAnalysis(null); 

    try {
      const response = await fetch("/api/legal/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to analyze situation");
      }

      setAnalysis(data as LegalAnalysis);
      // Save analysis to local storage so the Action Plan page can access it
      localStorage.setItem("nyaya_current_analysis", JSON.stringify(data));
    } catch (err: unknown) {
      console.error("Analysis failed:", err);
      setError((err as Error).message || "An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-8 px-4 flex flex-col h-[calc(100vh-4rem-auto)] min-h-[800px]">
      <div className="mb-6 shrink-0">
        <PageHeader 
          title="AI Legal Assistant" 
          description="Understand your situation and explore possible next steps."
          breadcrumb={[{label: 'Home', href: '/'}, {label: 'Assistant'}]} 
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-8 flex-1 min-h-0">
        
        {/* Left Column: Chat & Input */}
        <div className="w-full lg:w-1/3 xl:w-[400px] flex flex-col shrink-0 bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-800">
          <AssistantChat onAnalyze={handleAnalyze} isLoading={isLoading} />
        </div>

        {/* Right Column: Structured Analysis */}
        <div className="flex-1 bg-white dark:bg-slate-950 rounded-2xl p-6 lg:p-8 border border-slate-200 dark:border-slate-800 overflow-y-auto shadow-sm">
          {error && (
            <Alert variant="destructive" className="mb-6">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Analysis Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {isLoading ? (
            <div className="h-full flex items-center justify-center min-h-[400px]">
              <LoadingAnimation />
            </div>
          ) : analysis ? (
            <StructuredAnalysis analysis={analysis} />
          ) : !error ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 min-h-[400px] text-slate-500 dark:text-slate-400">
              <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center mb-2">
                <AlertCircle className="w-8 h-8 text-slate-300 dark:text-slate-700" />
              </div>
              <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100">Ready to analyze</h3>
              <p className="max-w-sm">
                Describe your situation on the left to receive a structured breakdown of possible legal issues, missing information, and next steps.
              </p>
            </div>
          ) : null}
        </div>

      </div>
    </div>
  );
}

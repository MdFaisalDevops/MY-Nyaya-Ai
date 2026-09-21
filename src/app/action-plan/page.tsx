"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import LegalJourney from "@/components/ui/LegalJourney";
import ProgressBar from "@/components/ui/ProgressBar";
import EvidenceChecklist from "@/components/ui/EvidenceChecklist";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, RotateCcw, Copy, Download, AlertCircle, Briefcase } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { LegalAnalysis } from "@/lib/types/legal";

type StepStatus = "Not started" | "In progress" | "Completed";

interface SavedState {
  analysisId: string | null;
  stepStatuses: Record<string, StepStatus>;
  evidenceStatuses: Record<string, boolean>;
}

import EmptyState from "@/components/ui/EmptyState";
import { CheckSquare } from "lucide-react";

export default function ActionPlanPage() {
  const [isMounted, setIsMounted] = useState(false);
  const [analysis, setAnalysis] = useState<LegalAnalysis | null>(null);
  
  // Local states
  const [stepStatuses, setStepStatuses] = useState<Record<string, StepStatus>>({});
  const [evidenceStatuses, setEvidenceStatuses] = useState<Record<string, boolean>>({});

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
    
    // Attempt to load the most recent analysis from local storage
    const currentAnalysisStr = localStorage.getItem("nyaya_current_analysis");
    
    if (currentAnalysisStr) {
      try {
        setAnalysis(JSON.parse(currentAnalysisStr));
      } catch (e) {
        console.error("Failed to parse current analysis", e);
      }
    }

    const saved = localStorage.getItem("nyaya_action_plan");
    if (saved) {
      try {
        const parsed: SavedState = JSON.parse(saved);
        setStepStatuses(parsed.stepStatuses || {});
        setEvidenceStatuses(parsed.evidenceStatuses || {});
      } catch (e) {
        console.error("Failed to parse saved state", e);
      }
    }
  }, []);

  // Save to local storage whenever statuses change
  useEffect(() => {
    if (!isMounted) return;
    const stateToSave: SavedState = {
      analysisId: "custom",
      stepStatuses,
      evidenceStatuses,
    };
    localStorage.setItem("nyaya_action_plan", JSON.stringify(stateToSave));
  }, [stepStatuses, evidenceStatuses, isMounted]);

  if (!isMounted) return null;

  if (!analysis) {
    return (
      <div className="pt-20">
        <EmptyState 
          title="No Action Plan Yet" 
          description="We need to understand your situation first before we can generate a personalized action plan."
          icon={<CheckSquare className="w-10 h-10" />}
        />
      </div>
    );
  }

  const handleStepToggle = (stepId: string) => {
    setStepStatuses(prev => ({
      ...prev,
      [stepId]: prev[stepId] === "Completed" ? "Not started" : "Completed"
    }));
  };

  const handleEvidenceToggle = (stepId: string, doc: string, provided: boolean) => {
    setEvidenceStatuses(prev => ({
      ...prev,
      [`${stepId}-${doc}`]: provided
    }));
  };

  const handleReset = () => {
    if (confirm("Are you sure you want to reset your progress?")) {
      setStepStatuses({});
      setEvidenceStatuses({});
      localStorage.removeItem("nyaya_action_plan");
    }
  };

  const handleCopy = () => {
    const text = analysis.actionPlan.map((step, i) => {
      const status = stepStatuses[step.id] === "Completed" ? "[x]" : "[ ]";
      return `${status} Step ${i + 1}: ${step.title}`;
    }).join("\n");
    navigator.clipboard.writeText(`My Action Plan:\n\n${text}`);
    alert("Copied to clipboard!");
  };

  const handleExport = () => {
    const text = analysis.actionPlan.map((step, i) => {
      const status = stepStatuses[step.id] === "Completed" ? "[x]" : "[ ]";
      let docText = "";
      if (step.evidenceRequired && step.evidenceRequired.length > 0) {
        docText = "\n  Documents:\n" + step.evidenceRequired.map(d => {
           const docStatus = evidenceStatuses[`${step.id}-${d}`] ? "[x]" : "[ ]";
           return `    ${docStatus} ${d}`;
        }).join("\n");
      }
      return `${status} Step ${i + 1}: ${step.title}${docText}`;
    }).join("\n\n");
    
    const blob = new Blob([`NyayaAI Action Plan\n===================\n\n${text}`], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "NyayaAI_Action_Plan.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  const totalSteps = analysis.actionPlan.length;
  const completedSteps = analysis.actionPlan.filter(s => stepStatuses[s.id] === "Completed").length;

  return (
    <div className="container mx-auto py-8 px-4 max-w-5xl">
      <PageHeader 
        title="Your Action Plan" 
        description="Follow these structured steps based on your situation analysis."
        breadcrumb={[{label: 'Home', href: '/'}, {label: 'Action Plan'}]} 
      />

      <div className="mt-8 mb-12">
        <LegalJourney currentStage="Action" />
      </div>

      <div className="space-y-8">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm sticky top-16 z-10">
          <ProgressBar completed={completedSteps} total={totalSteps} />
          
          <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-slate-100 dark:border-slate-800">
            <Button variant="outline" size="sm" onClick={handleReset}>
              <RotateCcw className="w-4 h-4 mr-2" /> Reset
            </Button>
            <Button variant="outline" size="sm" onClick={handleCopy}>
              <Copy className="w-4 h-4 mr-2" /> Copy
            </Button>
            <Button variant="outline" size="sm" onClick={handleExport}>
              <Download className="w-4 h-4 mr-2" /> Export
            </Button>
            <Link 
              href="/lawyer-brief"
              className="inline-flex h-9 items-center justify-center rounded-md border border-slate-200 bg-white px-3 text-sm font-medium transition-colors hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50"
            >
              <Briefcase className="w-4 h-4 mr-2" /> Prepare for Lawyer
            </Link>
          </div>
        </div>

        <div className="space-y-6">
          {analysis.actionPlan.map((step, index) => {
            const isCompleted = stepStatuses[step.id] === "Completed";
            
            return (
              <Card key={step.id} className={`transition-all duration-300 ${isCompleted ? 'border-emerald-200 bg-emerald-50/10 dark:border-emerald-900/30' : 'border-slate-200 dark:border-slate-800'}`}>
                <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-4">
                  <div className="space-y-1 pr-6">
                    <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Step {index + 1}</p>
                    <CardTitle className={`text-xl ${isCompleted ? 'text-slate-500 line-through decoration-slate-300' : 'text-slate-900 dark:text-slate-100'}`}>
                      {step.title}
                    </CardTitle>
                  </div>
                  <Button 
                    variant={isCompleted ? "outline" : "default"}
                    className={isCompleted ? "text-emerald-600 border-emerald-200 hover:bg-emerald-50 shrink-0" : "bg-indigo-600 hover:bg-indigo-700 shrink-0"}
                    onClick={() => handleStepToggle(step.id)}
                  >
                    <CheckCircle2 className="w-4 h-4 mr-2" />
                    {isCompleted ? "Completed" : "Mark Complete"}
                  </Button>
                </CardHeader>
                
                {step.evidenceRequired && step.evidenceRequired.length > 0 && (
                  <CardContent>
                    <div className="pl-0 md:pl-8 space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                      <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Required Documents / Evidence:</p>
                      <div className="space-y-3">
                        {step.evidenceRequired.map((doc, docIdx) => (
                          <EvidenceChecklist 
                            key={docIdx}
                            documentName={doc}
                            whyItMatters="Essential for verifying the facts of this step."
                            isProvided={!!evidenceStatuses[`${step.id}-${doc}`]}
                            onToggle={(provided) => handleEvidenceToggle(step.id, doc, provided)}
                          />
                        ))}
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>
            );
          })}
        </div>

        <Alert className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-900 text-amber-800 dark:text-amber-200">
          <AlertCircle className="h-4 w-4 text-amber-600 dark:text-amber-500" />
          <AlertTitle>Important Safety Notice</AlertTitle>
          <AlertDescription>
            Completing these steps does not guarantee a legal victory. This action plan is a general guide to help you organize your situation. Professional legal advice may be appropriate depending on the response you receive.
          </AlertDescription>
        </Alert>

      </div>
    </div>
  );
}

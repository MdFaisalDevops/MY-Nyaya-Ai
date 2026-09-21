"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { PlayCircle, Briefcase, Home, FileText, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { DEMO_SCENARIOS } from "@/lib/ai/demo-scenarios";

interface DemoSelectorProps {
  children?: React.ReactElement;
}

export default function DemoSelector({ children }: DemoSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleSelectScenario = (scenarioId: string, route: string) => {
    localStorage.removeItem("nyaya_current_analysis");
    localStorage.removeItem("nyaya_action_plan");
    localStorage.removeItem("nyaya_timeline");
    localStorage.removeItem("nyaya_desired_outcome");
    
    const scenario = DEMO_SCENARIOS[scenarioId as keyof typeof DEMO_SCENARIOS];
    if (scenario) {
       localStorage.setItem("nyaya_current_analysis", JSON.stringify(scenario));
    }
    
    setIsOpen(false);
    router.push(route);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {children ? (
        <DialogTrigger render={children} />
      ) : (
        <DialogTrigger className="inline-flex h-11 items-center justify-center rounded-full bg-emerald-600 px-8 text-base font-medium text-white hover:bg-emerald-700 transition-colors">
          <PlayCircle className="w-4 h-4 mr-2" />
          Try Demo
        </DialogTrigger>
      )}
      <DialogContent className="sm:max-w-[600px] bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center mb-2">Choose a Demo Scenario</DialogTitle>
          <p className="text-center text-slate-500 dark:text-slate-400 text-sm mb-6">
            Experience how NyayaAI breaks down complex situations into actionable steps.
          </p>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          
          {/* Scenario 1: Salary */}
          <Card 
            className="cursor-pointer hover:border-indigo-400 hover:shadow-md transition-all dark:bg-slate-900 border-slate-200 dark:border-slate-800"
            onClick={() => handleSelectScenario("employment", "/assistant")}
          >
            <CardContent className="p-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center shrink-0">
                <Briefcase className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-slate-900 dark:text-slate-100">Employment Dispute</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">“My employer hasn&apos;t paid my salary for two months.”</p>
              </div>
              <ArrowRight className="w-5 h-5 text-slate-300" />
            </CardContent>
          </Card>

          {/* Scenario 2: Deposit */}
          <Card 
            className="cursor-pointer hover:border-indigo-400 hover:shadow-md transition-all dark:bg-slate-900 border-slate-200 dark:border-slate-800"
            onClick={() => handleSelectScenario("housing", "/assistant")}
          >
            <CardContent className="p-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center shrink-0">
                <Home className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-slate-900 dark:text-slate-100">Housing / Rental</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">“My landlord hasn&apos;t returned my security deposit.”</p>
              </div>
              <ArrowRight className="w-5 h-5 text-slate-300" />
            </CardContent>
          </Card>

          {/* Scenario 3: Legal Notice */}
          <Card 
            className="cursor-pointer hover:border-indigo-400 hover:shadow-md transition-all dark:bg-slate-900 border-slate-200 dark:border-slate-800"
            onClick={() => {
              setIsOpen(false);
              router.push("/documents"); // Routes directly to document analyzer
            }}
          >
            <CardContent className="p-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center shrink-0">
                <FileText className="w-6 h-6 text-rose-600 dark:text-rose-400" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-slate-900 dark:text-slate-100">Document Analysis</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">“I received a legal notice and don&apos;t understand it.”</p>
              </div>
              <ArrowRight className="w-5 h-5 text-slate-300" />
            </CardContent>
          </Card>

        </div>
      </DialogContent>
    </Dialog>
  );
}

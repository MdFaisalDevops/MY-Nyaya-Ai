"use client";

import { cn } from "@/lib/utils";
import { Check, Target, Bot, Search, FileText, CheckCircle2, Users, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface LegalJourneyProps {
  currentStage: string;
}

export const JOURNEY_STAGES = [
  { id: "Problem", icon: Target, label: "My Situation" },
  { id: "Triage", icon: Bot, label: "AI Understanding" },
  { id: "Information", icon: Search, label: "Verification" },
  { id: "Evidence", icon: FileText, label: "Evidence" },
  { id: "Action", icon: CheckCircle2, label: "Action Plan" },
  { id: "Human Help", icon: Users, label: "Professional Help" },
  { id: "Resolution", icon: ArrowRight, label: "Next Steps" }
];

export default function LegalJourney({ currentStage }: LegalJourneyProps) {
  const currentIndex = JOURNEY_STAGES.findIndex(s => s.id === currentStage);

  return (
    <div className="w-full py-6 overflow-x-auto pb-10 scrollbar-hide">
      <div className="min-w-[800px] flex items-center justify-between relative px-4 mx-auto">
        
        {/* Background Connecting Line */}
        <div className="absolute left-[5%] right-[5%] top-1/2 -translate-y-1/2 h-1 bg-slate-100 dark:bg-slate-800 rounded-full -z-10" />
        
        {/* Active Connecting Line (Animated) */}
        <motion.div 
          className="absolute left-[5%] top-1/2 -translate-y-1/2 h-1 bg-gradient-to-r from-indigo-500 to-emerald-400 rounded-full -z-10"
          initial={{ width: 0 }}
          animate={{ width: `${Math.max(0, (currentIndex / (JOURNEY_STAGES.length - 1)) * 90)}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />

        {JOURNEY_STAGES.map((stage, index) => {
          const isCompleted = index < currentIndex;
          const isActive = index === currentIndex;
          
          return (
            <motion.div 
              key={stage.id} 
              className="flex flex-col items-center gap-3 relative cursor-default"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <motion.div 
                className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm border-4 border-white dark:border-slate-950",
                  isCompleted 
                    ? "bg-emerald-500 text-white" 
                    : isActive 
                      ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300 ring-2 ring-indigo-500 ring-offset-2 dark:ring-offset-slate-950"
                      : "bg-white text-slate-300 dark:bg-slate-900 dark:text-slate-600 border-slate-100 dark:border-slate-800"
                )}
                whileHover={{ scale: 1.1 }}
                animate={isActive ? { scale: [1, 1.1, 1] } : {}}
                transition={isActive ? { repeat: Infinity, duration: 2 } : {}}
              >
                {isCompleted ? <Check className="w-5 h-5" /> : <stage.icon className="w-5 h-5" />}
              </motion.div>
              <span 
                className={cn(
                  "text-xs font-semibold absolute -bottom-7 whitespace-nowrap",
                  isActive || isCompleted ? "text-slate-900 dark:text-slate-100" : "text-slate-400 dark:text-slate-500"
                )}
              >
                {stage.label}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

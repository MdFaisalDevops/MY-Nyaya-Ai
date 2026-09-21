"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ChevronDown, ChevronUp, BookOpen, Lightbulb, CheckSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ExplainSimplyProps {
  originalText: string;
  plainLanguage: string;
  whatThisMeans: string;
  whatToCheck: string;
}

export default function ExplainSimply({ originalText, plainLanguage, whatThisMeans, whatToCheck }: ExplainSimplyProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-4 border border-indigo-100 dark:border-indigo-900/50 rounded-xl overflow-hidden bg-white/50 dark:bg-slate-900/50">
      <Button 
        variant="ghost" 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-3 h-auto hover:bg-indigo-50 dark:hover:bg-indigo-950/30 text-indigo-700 dark:text-indigo-400 font-medium text-sm transition-colors"
      >
        <span className="flex items-center gap-2">
          <Sparkles className="w-4 h-4" />
          Explain Simply
        </span>
        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="p-4 border-t border-indigo-100 dark:border-indigo-900/50 space-y-5 bg-gradient-to-b from-indigo-50/30 to-transparent dark:from-indigo-950/20 text-sm">
              
              <div className="space-y-1">
                <h5 className="flex items-center gap-1.5 font-semibold text-slate-500 uppercase tracking-wider text-xs">
                  <BookOpen className="w-3.5 h-3.5" /> Legal Language
                </h5>
                <p className="text-slate-700 dark:text-slate-300 pl-5 italic border-l-2 border-slate-200 dark:border-slate-700 ml-1">
                  &quot;{originalText}&quot;
                </p>
              </div>

              <div className="space-y-1">
                <h5 className="flex items-center gap-1.5 font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider text-xs">
                  <Sparkles className="w-3.5 h-3.5" /> Plain Language
                </h5>
                <p className="text-slate-800 dark:text-slate-200 font-medium pl-5">
                  {plainLanguage}
                </p>
              </div>

              <div className="space-y-1">
                <h5 className="flex items-center gap-1.5 font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider text-xs">
                  <Lightbulb className="w-3.5 h-3.5" /> What This Means For You
                </h5>
                <p className="text-slate-700 dark:text-slate-300 pl-5">
                  {whatThisMeans}
                </p>
              </div>

              <div className="space-y-1">
                <h5 className="flex items-center gap-1.5 font-semibold text-amber-600 dark:text-amber-500 uppercase tracking-wider text-xs">
                  <CheckSquare className="w-3.5 h-3.5" /> What To Check
                </h5>
                <p className="text-slate-700 dark:text-slate-300 pl-5 bg-amber-50 dark:bg-amber-950/20 py-2 px-3 rounded-lg border border-amber-100 dark:border-amber-900/30 mt-1 inline-block w-full">
                  {whatToCheck}
                </p>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

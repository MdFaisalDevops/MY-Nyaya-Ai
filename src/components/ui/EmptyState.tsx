"use client";

import { motion } from "framer-motion";
import { FolderSearch, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import DemoSelector from "@/components/assistant/DemoSelector";

interface EmptyStateProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export default function EmptyState({ title, description, icon }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-10 shadow-sm"
      >
        <div className="w-20 h-20 mx-auto bg-indigo-50 dark:bg-indigo-950/30 rounded-2xl flex items-center justify-center mb-6 text-indigo-500">
          {icon || <FolderSearch className="w-10 h-10" />}
        </div>
        
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">
          {title}
        </h2>
        
        <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-col gap-3">
          <Link 
            href="/assistant"
            className="inline-flex w-full h-12 items-center justify-center rounded-xl bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
          >
            Tell us what happened
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
          <DemoSelector>
            <Button variant="outline" className="w-full border-slate-200 dark:border-slate-700 h-12 rounded-xl">
              Try a Demo Scenario
            </Button>
          </DemoSelector>
        </div>
      </motion.div>
    </div>
  );
}

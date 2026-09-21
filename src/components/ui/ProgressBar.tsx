"use client";

import { cn } from "@/lib/utils";

interface ProgressBarProps {
  completed: number;
  total: number;
  className?: string;
}

export default function ProgressBar({ completed, total, className }: ProgressBarProps) {
  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex justify-between items-center text-sm font-medium">
        <span className="text-slate-700 dark:text-slate-300">Action Plan Progress</span>
        <span className="text-indigo-600 dark:text-indigo-400">{completed} of {total} steps completed ({percentage}%)</span>
      </div>
      <div className="h-3 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
        <div 
          className="h-full bg-indigo-600 dark:bg-indigo-500 transition-all duration-500 ease-in-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

"use client";

import { CalendarDays } from "lucide-react";
import { DocumentAnalysis } from "@/lib/types/document";

interface DocumentTimelineProps {
  dates: DocumentAnalysis["importantDates"];
}

export default function DocumentTimeline({ dates }: DocumentTimelineProps) {
  if (!dates || dates.length === 0) return null;

  return (
    <div className="relative border-l-2 border-indigo-200 dark:border-indigo-900 ml-3 md:ml-6 space-y-8 py-4">
      {dates.map((item, index) => (
        <div key={index} className="relative pl-8 md:pl-10">
          {/* Timeline Dot */}
          <div className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 border-white dark:border-slate-950 ${item.isDeadline ? 'bg-rose-500' : 'bg-indigo-500'}`} />
          
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm relative group transition-all hover:border-indigo-300 dark:hover:border-indigo-700">
            {/* Arrow pointer */}
            <div className="absolute top-3 -left-2 w-2 h-2 bg-white dark:bg-slate-900 border-l border-b border-slate-200 dark:border-slate-800 rotate-45 group-hover:border-indigo-300 dark:group-hover:border-indigo-700 transition-colors" />
            
            <div className="flex items-start justify-between gap-4">
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">{item.event}</h4>
                <div className="flex items-center gap-1.5 mt-1 text-sm text-slate-600 dark:text-slate-400 font-medium">
                  <CalendarDays className="w-4 h-4 text-indigo-500" />
                  {item.date}
                </div>
              </div>
              {item.isDeadline && (
                <span className="shrink-0 bg-rose-50 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400 text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">
                  Deadline
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

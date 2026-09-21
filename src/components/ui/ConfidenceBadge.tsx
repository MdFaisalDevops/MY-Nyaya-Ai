"use client";

import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Info } from "lucide-react";

interface ConfidenceBadgeProps {
  level: "Low" | "Medium" | "High";
}

export default function ConfidenceBadge({ level }: ConfidenceBadgeProps) {
  const getColors = () => {
    switch (level) {
      case "High":
        return "bg-emerald-100 text-emerald-800 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:border-emerald-800";
      case "Medium":
        return "bg-amber-100 text-amber-800 border-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-800";
      case "Low":
        return "bg-rose-100 text-rose-800 border-rose-200 dark:bg-rose-900/30 dark:text-rose-300 dark:border-rose-800";
    }
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger render={<div />}>
          <Badge variant="outline" className={`flex items-center gap-1.5 cursor-help ${getColors()}`}>
            Confidence: {level}
            <Info className="w-3 h-3 opacity-70" />
          </Badge>
        </TooltipTrigger>
        <TooltipContent className="max-w-xs">
          <p>This indicates confidence in understanding the information provided. It does not represent certainty about legal outcomes.</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

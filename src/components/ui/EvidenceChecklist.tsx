"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { FileUp, Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface EvidenceChecklistProps {
  documentName: string;
  whyItMatters: string;
  isProvided: boolean;
  onToggle: (provided: boolean) => void;
}

export default function EvidenceChecklist({ documentName, whyItMatters, isProvided, onToggle }: EvidenceChecklistProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm transition-colors hover:border-indigo-200 dark:hover:border-indigo-900/50">
      <div className="flex items-start gap-3">
        <Checkbox 
          id={`evidence-${documentName}`} 
          checked={isProvided} 
          onCheckedChange={(checked) => onToggle(checked as boolean)}
          className="mt-1"
        />
        <div className="space-y-1">
          <label 
            htmlFor={`evidence-${documentName}`} 
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer text-slate-900 dark:text-slate-100"
          >
            {documentName}
          </label>
          <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
            <Info className="w-3.5 h-3.5" />
            <span>{whyItMatters}</span>
          </div>
        </div>
      </div>
      
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger render={<div />}>
            <Button variant="outline" size="sm" type="button" className="w-full sm:w-auto shrink-0" onClick={(e) => { e.preventDefault(); alert("File upload modal would open here."); }}>
              <FileUp className="w-4 h-4 mr-2" />
              Upload
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Upload a secure copy of this document</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}

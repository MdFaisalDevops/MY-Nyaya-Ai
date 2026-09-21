"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp, Play, Settings2, Trash2, XCircle } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface AssistantChatProps {
  onAnalyze: (prompt: string) => void;
  isLoading: boolean;
  onClearSession?: () => void;
}

function PrivacyControls({ onClearSession }: { onClearSession?: () => void }) {
  const handleClear = () => {
    localStorage.removeItem("nyaya_current_analysis");
    localStorage.removeItem("nyaya_action_plan");
    if (onClearSession) {
      onClearSession();
    } else {
      window.location.reload();
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="ghost" size="icon" className="text-slate-500 hover:text-slate-900 dark:hover:text-slate-100" />}>
        <Settings2 className="w-5 h-5" />
        <span className="sr-only">Privacy Settings</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>Privacy & Data</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleClear} className="text-rose-600 focus:text-rose-600 focus:bg-rose-50 dark:focus:bg-rose-950/50 cursor-pointer">
          <Trash2 className="w-4 h-4 mr-2" />
          Clear current session
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => alert("All uploaded documents deleted.")} className="text-rose-600 focus:text-rose-600 focus:bg-rose-50 dark:focus:bg-rose-950/50 cursor-pointer">
          <XCircle className="w-4 h-4 mr-2" />
          Delete uploaded documents
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default function AssistantChat({ onAnalyze, isLoading, onClearSession }: AssistantChatProps) {
  const [prompt, setPrompt] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [submittedPrompt, setSubmittedPrompt] = useState("");

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!prompt.trim() || isLoading) return;
    
    setSubmittedPrompt(prompt);
    setHasSubmitted(true);
    onAnalyze(prompt);
  };

  const handleExample = (text: string) => {
    setPrompt(text);
    setSubmittedPrompt(text);
    setHasSubmitted(true);
    onAnalyze(text);
  };

  return (
    <div className="flex flex-col h-full space-y-6">
      
      {/* Introduction / Empty State */}
      {!hasSubmitted && (
        <div className="space-y-4 relative">
          <div className="absolute right-0 top-0">
             <PrivacyControls onClearSession={onClearSession} />
          </div>
          <div className="pr-10">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Tell us what happened.</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-2">
              Describe your situation in your own words. We&apos;ll help you understand the possible legal implications and next steps.
            </p>
          </div>

          <div className="space-y-3 pt-4">
            <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Try an example:</p>
            <div className="flex flex-wrap gap-2">
              {[
                "My employer hasn't paid my salary.",
                "My landlord won't return my security deposit.",
                "I received a formal legal notice today."
              ].map((example, i) => (
                <Button 
                  key={i} 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleExample(example)}
                  className="text-left h-auto py-2 px-3 bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800"
                >
                  <Play className="w-3 h-3 mr-2 text-indigo-500 shrink-0" />
                  <span className="truncate max-w-[200px] sm:max-w-[300px]">{example}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Chat History (Only shows the user's prompt once submitted) */}
      {hasSubmitted && (
        <div className="flex-1 overflow-y-auto space-y-4 pb-4">
          <div className="flex justify-end">
            <div className="bg-indigo-600 text-white p-4 rounded-2xl rounded-tr-sm max-w-[90%] shadow-sm whitespace-pre-wrap">
              {submittedPrompt}
            </div>
          </div>
        </div>
      )}

      {/* Input Area */}
      <div className="mt-auto pt-4 border-t border-slate-200 dark:border-slate-800">
        <form onSubmit={handleSubmit} className="relative">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe your situation in your own words..."
            className="w-full min-h-[120px] p-4 pr-16 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-400 dark:focus:border-indigo-400 resize-none outline-none transition-all"
            disabled={isLoading}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSubmit();
              }
            }}
          />
          <div className="absolute right-3 bottom-4">
            <Button 
              type="submit" 
              size="icon" 
              disabled={!prompt.trim() || isLoading}
              className="rounded-full bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm transition-all"
            >
              <ArrowUp className="w-5 h-5" />
              <span className="sr-only">Analyze My Situation</span>
            </Button>
          </div>
        </form>
        {!hasSubmitted && (
          <p className="text-center text-xs text-slate-500 mt-3">
            Press Enter to analyze or Shift + Enter for a new line.
          </p>
        )}
      </div>
    </div>
  );
}

"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, CheckCircle2, AlertTriangle, HelpCircle } from "lucide-react";
import { LegalSource, VERIFIED_SOURCES } from "@/lib/legal/sources";

interface SourceCardProps {
  sourceId?: string;
  sourceObj?: { id: string, title: string, status: string };
}

export default function SourceCard({ sourceId, sourceObj }: SourceCardProps) {
  const id = sourceId || sourceObj?.id;
  const source: LegalSource | undefined = id ? VERIFIED_SOURCES[id] : undefined;
  
  const title = source?.title || sourceObj?.title || "Unknown Source";
  const status = source?.status || sourceObj?.status || "No source available";

  return (
    <Card className="border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col h-full">
      <CardContent className="p-4 flex flex-col h-full space-y-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-sm">{title}</h4>
            {source && (
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                {source.authority} • {source.jurisdiction}
              </p>
            )}
          </div>
        </div>

        <div className="space-y-3 mt-auto">
          {source && (
            <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2">
              {source.description}
            </p>
          )}
          
          <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-1.5">
              {status === "Verified source" ? (
                <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/30 dark:text-emerald-400 dark:border-emerald-900/50">
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                  Verified
                </Badge>
              ) : status === "Verification required" ? (
                <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/30 dark:text-amber-400 dark:border-amber-900/50">
                  <AlertTriangle className="w-3 h-3 mr-1" />
                  Needs Verification
                </Badge>
              ) : (
                <Badge variant="outline" className="bg-slate-50 text-slate-500 border-slate-200 dark:bg-slate-900 dark:text-slate-400 dark:border-slate-800">
                  <HelpCircle className="w-3 h-3 mr-1" />
                  Unverified
                </Badge>
              )}
            </div>

            {source?.url && (
              <a 
                href={source.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg text-xs font-medium transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 h-7 px-2 text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
              >
                View <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

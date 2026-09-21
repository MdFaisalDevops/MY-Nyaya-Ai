"use client";

import { DocumentAnalysis } from "@/lib/types/document";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, FileText, AlertTriangle, HelpCircle, CheckCircle2 } from "lucide-react";
import DocumentTimeline from "./DocumentTimeline";

interface DocumentAnalysisResultProps {
  analysis: DocumentAnalysis;
}

export default function DocumentAnalysisResult({ analysis }: DocumentAnalysisResultProps) {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Simple Summary */}
      <Card className="border-indigo-100 dark:border-indigo-900/50 shadow-sm overflow-hidden bg-white dark:bg-slate-900">
        <div className="bg-indigo-50 dark:bg-indigo-950/30 px-6 py-4 border-b border-indigo-100 dark:border-indigo-900/50 flex items-center gap-3">
          <FileText className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
          <h3 className="font-semibold text-indigo-900 dark:text-indigo-100 text-lg">Simple Summary</h3>
        </div>
        <CardContent className="p-6 text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
          {analysis.simpleSummary}
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
          
          {/* Important Clauses */}
          {analysis.clauses.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-indigo-500" />
                Important Clauses
              </h3>
              <div className="grid gap-4">
                {analysis.clauses.map((clause, idx) => (
                  <Card key={idx} className="shadow-sm border-slate-200 dark:border-slate-800">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg text-slate-900 dark:text-slate-100">{clause.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <p className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-1">Plain Language</p>
                        <p className="text-slate-700 dark:text-slate-300">{clause.explanation}</p>
                      </div>
                      <div className="bg-slate-50 dark:bg-slate-900/50 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Why it matters</p>
                        <p className="text-sm text-slate-700 dark:text-slate-300">{clause.whyItMatters}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Attention Areas */}
          {analysis.attentionAreas.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-amber-500" />
                Potential Attention Areas
              </h3>
              <div className="grid gap-4">
                {analysis.attentionAreas.map((area, idx) => (
                  <Card key={idx} className="shadow-sm border-amber-200 dark:border-amber-900/50 bg-amber-50/50 dark:bg-amber-950/10">
                    <CardContent className="p-4 flex gap-3">
                      <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-amber-900 dark:text-amber-200">{area.title}</h4>
                        <p className="text-sm text-amber-800/80 dark:text-amber-300/80 mt-1">{area.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

        </div>

        <div className="space-y-8">
          {/* Important Parties */}
          {analysis.parties.length > 0 && (
            <Card className="shadow-sm">
              <CardHeader className="pb-3 border-b border-slate-100 dark:border-slate-800">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Users className="w-5 h-5 text-indigo-500" />
                  Important Parties
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <ul className="divide-y divide-slate-100 dark:divide-slate-800">
                  {analysis.parties.map((party, idx) => (
                    <li key={idx} className="p-4">
                      <p className="font-semibold text-slate-900 dark:text-slate-100">{party.name}</p>
                      <div className="flex items-center justify-between mt-1 text-sm text-slate-500">
                        <span className="font-medium bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-slate-700 dark:text-slate-300">
                          {party.role}
                        </span>
                        {party.organization && <span>{party.organization}</span>}
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          {/* Timeline */}
          {analysis.importantDates.length > 0 && (
            <div className="bg-white dark:bg-slate-950 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Document Timeline</h3>
              <DocumentTimeline dates={analysis.importantDates} />
            </div>
          )}

          {/* Questions to Ask */}
          {analysis.questionsToAsk.length > 0 && (
            <Card className="shadow-sm border-indigo-200 dark:border-indigo-900/50 bg-indigo-50/50 dark:bg-indigo-950/20">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2 text-indigo-900 dark:text-indigo-200">
                  <HelpCircle className="w-5 h-5" />
                  Questions to Ask
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-indigo-700 dark:text-indigo-300/80 mb-4">Consider discussing these points with a qualified professional:</p>
                <ul className="space-y-3">
                  {analysis.questionsToAsk.map((q, idx) => (
                    <li key={idx} className="flex gap-2 text-sm text-indigo-900 dark:text-indigo-100">
                      <span className="font-bold text-indigo-400 mt-0.5">•</span>
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}

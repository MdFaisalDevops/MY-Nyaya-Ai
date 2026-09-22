"use client";

import { LegalAnalysis } from "@/lib/types/legal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import StatusBadge from "@/components/ui/StatusBadge";
import { Scale, CheckCircle2, FileText, Info, FileSearch, ArrowRight, MapPin, Clock, Briefcase, Calendar, GitCommit, Shield, AlertCircle, HelpCircle, CheckSquare, ShieldAlert } from "lucide-react";
import { motion } from "framer-motion";
import LegalDisclaimer from "../ui/LegalDisclaimer";
import Link from "next/link";
import EmergencyPanel from "../ui/EmergencyPanel";
import ConfidenceBadge from "../ui/ConfidenceBadge";
import SourceCard from "../ui/SourceCard";
import ExplainSimply from "./ExplainSimply";

interface StructuredAnalysisProps {
  analysis: LegalAnalysis;
}

export default function StructuredAnalysis({ analysis }: StructuredAnalysisProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="space-y-6"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={item}>
        <LegalDisclaimer />
      </motion.div>

      {/* Emergency Panel */}
      {analysis.isEmergency && (
        <div className="mb-6">
          <EmergencyPanel />
        </div>
      )}

      {/* Triage & Issue Card */}
      <motion.div variants={item}>
        <Card className="border-indigo-100 dark:border-indigo-900/50 shadow-sm overflow-hidden">
          <div className="bg-indigo-50 dark:bg-indigo-950/30 px-6 py-4 border-b border-indigo-100 dark:border-indigo-900/50 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <Scale className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <h3 className="font-semibold text-indigo-900 dark:text-indigo-100">Possible Legal Issue</h3>
            </div>
            <StatusBadge status="optional" className="bg-white dark:bg-slate-900 border-indigo-200 text-indigo-700 font-semibold px-3 py-1">
              {analysis.triageCategory}
            </StatusBadge>
          </div>
          <CardContent className="p-6 space-y-4">
            <div>
              <p className="text-xl font-medium text-slate-900 dark:text-slate-100">{analysis.issue}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">{analysis.triageExplanation}</p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-slate-400" />
                <span className="font-medium text-slate-600 dark:text-slate-300">Urgency:</span>
                <span className={`font-semibold ${
                  analysis.urgency === 'Emergency' ? 'text-rose-600' :
                  analysis.urgency === 'Urgent' ? 'text-orange-600' :
                  analysis.urgency === 'Time-sensitive' ? 'text-amber-600' :
                  'text-slate-600'
                }`}>
                  {analysis.urgency}
                </span>
              </div>
              
              {(analysis.jurisdiction?.country || analysis.jurisdiction?.state) && (
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-slate-400" />
                  <span className="font-medium text-slate-600 dark:text-slate-300">Jurisdiction context:</span>
                  <span className="text-slate-700 dark:text-slate-300">
                    {[analysis.jurisdiction.city, analysis.jurisdiction.state, analysis.jurisdiction.country].filter(Boolean).join(", ")}
                  </span>
                </div>
              )}
            </div>

            <ExplainSimply 
              originalText={analysis.triageExplanation}
              plainLanguage={`It seems you are dealing with a ${analysis.triageCategory.toLowerCase()} matter.`}
              whatThisMeans="Based on what you told us, specific laws regarding this category apply to your situation, meaning there are standard processes you can follow to seek a resolution."
              whatToCheck="Review the action plan below to see the specific steps and documents needed for this type of issue."
            />
          </CardContent>
        </Card>
      </motion.div>

      {/* What I Understand */}
      <motion.div variants={item}>
        <Card className="shadow-sm">
          <CardHeader className="pb-3 border-b border-slate-100 dark:border-slate-800">
            <CardTitle className="text-lg flex items-center gap-2">
              <Info className="w-5 h-5 text-slate-500" />
              What I Understand
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div>
              <p className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-2">AI Interpretation</p>
              <p className="text-slate-700 dark:text-slate-300">{analysis.summary}</p>
            </div>
            {analysis.knownFacts.length > 0 && (
              <div className="pt-2">
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-2">User-Provided Information</p>
                <ul className="list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-300">
                  {analysis.knownFacts.map((fact, i) => (
                    <li key={i}>{fact}</li>
                  ))}
                </ul>
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>

      {/* Information Missing */}
      {analysis.missingInformation.length > 0 && (
        <motion.div variants={item}>
          <Card className="shadow-sm bg-amber-50/50 dark:bg-amber-950/10 border-amber-100 dark:border-amber-900/30">
            <CardHeader className="pb-3 border-b border-amber-100 dark:border-amber-900/30">
              <CardTitle className="text-lg flex items-center gap-2 text-amber-800 dark:text-amber-500">
                <FileSearch className="w-5 h-5" />
                Information Missing
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-2">
                {analysis.missingInformation.map((q, i) => (
                  <li key={i} className="flex gap-2 text-amber-900 dark:text-amber-200/80">
                    <span className="font-bold shrink-0">•</span>
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Possible Options */}
      {analysis.possibleOptions && analysis.possibleOptions.length > 0 && (
        <motion.div variants={item}>
          <Card className="shadow-sm border-indigo-100 dark:border-indigo-900/30">
            <CardHeader className="pb-3 border-b border-indigo-100 dark:border-indigo-900/30 bg-indigo-50/30 dark:bg-indigo-950/20">
              <CardTitle className="text-lg flex items-center gap-2 text-indigo-900 dark:text-indigo-300">
                <HelpCircle className="w-5 h-5 text-indigo-500" />
                Paths to Consider (Options)
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-4">
                {analysis.possibleOptions.map((option, i) => (
                  <li key={i} className="flex gap-4 items-start bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                    <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 text-sm font-bold mt-0.5 shadow-sm">
                      {i + 1}
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium text-slate-800 dark:text-slate-200">Option {i + 1}</p>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">{option}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Action Plan CTA */}
      {analysis.actionPlan.length > 0 && (
        <motion.div variants={item}>
          <Card className="shadow-sm border-emerald-100 dark:border-emerald-900/30 bg-emerald-50/30 dark:bg-emerald-950/10 overflow-hidden relative">
            <div className="absolute right-0 top-0 w-64 h-full bg-gradient-to-l from-emerald-100 to-transparent dark:from-emerald-900/20 -z-10" />
            <CardContent className="p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-500 font-semibold text-lg">
                  <CheckCircle2 className="w-5 h-5" />
                  Your Action Plan is Ready
                </div>
                <p className="text-slate-600 dark:text-slate-400">
                  We&apos;ve generated {analysis.actionPlan.length} structured steps and an evidence checklist to help you proceed.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mt-4 sm:mt-0">
                <Link 
                  href="/lawyer-brief"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-emerald-200 bg-white/50 px-4 py-2 text-sm font-medium text-emerald-800 transition-colors hover:bg-white hover:text-emerald-900 dark:border-emerald-900/50 dark:bg-slate-900/50 dark:text-emerald-300"
                >
                  <Briefcase className="w-4 h-4 mr-2" /> Prepare for Lawyer
                </Link>
                <Link 
                  href="/action-plan"
                  className="shrink-0 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-6 py-2 text-sm font-medium inline-flex items-center justify-center transition-colors"
                >
                    Open Action Plan <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Documents & Dates */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div variants={item}>
          <Card className="shadow-sm h-full">
            <CardHeader className="pb-3 border-b border-slate-100 dark:border-slate-800">
              <CardTitle className="text-base flex items-center gap-2">
                <FileText className="w-4 h-4 text-slate-500" />
                Useful Documents
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              {analysis.documents.length > 0 ? (
                <ul className="list-disc pl-5 space-y-1 text-sm text-slate-700 dark:text-slate-300">
                  {analysis.documents.map((doc, i) => <li key={i}>{doc}</li>)}
                </ul>
              ) : (
                <p className="text-sm text-slate-500">None identified.</p>
              )}
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="shadow-sm h-full">
            <CardHeader className="pb-3 border-b border-slate-100 dark:border-slate-800">
              <CardTitle className="text-base flex items-center gap-2">
                <Calendar className="w-4 h-4 text-slate-500" />
                Important Dates
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              {analysis.importantDates.length > 0 ? (
                <ul className="list-disc pl-5 space-y-1 text-sm text-slate-700 dark:text-slate-300">
                  {analysis.importantDates.map((date, i) => <li key={i}>{date}</li>)}
                </ul>
              ) : (
                <p className="text-sm text-slate-500">None identified.</p>
              )}
              <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                <Link 
                  href="/timeline"
                  className="inline-flex h-9 w-full items-center justify-center rounded-md px-3 text-sm font-medium text-indigo-600 transition-colors hover:bg-slate-100 hover:text-indigo-700 dark:text-indigo-400 dark:hover:bg-slate-800 dark:hover:text-indigo-300"
                >
                  <GitCommit className="w-4 h-4 mr-2" /> View Interactive Timeline
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Sources Grid */}
      <motion.div variants={item} className="space-y-4">
        <div className="flex items-center gap-2 text-lg font-semibold text-slate-900 dark:text-slate-100">
          <Shield className="w-5 h-5 text-slate-500" />
          Verified Sources
        </div>
        
        {analysis.sources.length > 0 ? (
          <div className="grid sm:grid-cols-2 gap-4">
            {analysis.sources.map((sourceObj, i) => (
              <SourceCard key={i} sourceObj={sourceObj} />
            ))}
          </div>
        ) : (
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Source verification unavailable for this response.</p>
        )}
      </motion.div>

      {/* Confidence & Human Help */}
      <motion.div variants={item} className="flex flex-col sm:flex-row gap-4">
        <Card className="shadow-sm flex-1">
          <CardContent className="p-4 flex items-center justify-between gap-4">
            <div className="space-y-1">
              <p className="text-sm font-medium">Information Confidence</p>
              <p className="text-xs text-slate-500">AI confidence in understanding the provided information.</p>
            </div>
            <ConfidenceBadge level={analysis.confidence} />
          </CardContent>
        </Card>

        {analysis.humanHelpRecommended && !analysis.isEmergency && (
          <Card className="shadow-sm flex-1 border-rose-200 dark:border-rose-900/50 bg-rose-50/30 dark:bg-rose-950/10">
            <CardContent className="p-4 flex gap-3 items-center">
              <AlertCircle className="w-6 h-6 text-rose-500 shrink-0" />
              <div>
                <p className="text-sm font-medium text-rose-900 dark:text-rose-200">Professional Help Recommended</p>
                <p className="text-xs text-rose-700/80 dark:text-rose-400">This situation may benefit from qualified legal assistance.</p>
              </div>
            </CardContent>
          </Card>
        )}
      </motion.div>

    </motion.div>
  );
}

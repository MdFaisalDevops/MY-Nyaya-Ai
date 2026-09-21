"use client";

import { useState } from "react";
import PageHeader from "@/components/layout/PageHeader";
import FileUpload from "@/components/ui/FileUpload";
import DocumentAnalysisResult from "@/components/documents/DocumentAnalysisResult";
import { DocumentAnalysis } from "@/lib/types/document";
import { Lock, Trash2, AlertCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import LoadingAnimation from "@/components/ui/LoadingAnimation";

export default function DocumentsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [analysis, setAnalysis] = useState<DocumentAnalysis | null>(null);

  const handleAnalyze = async (file: File) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch("/api/document/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // We only send metadata to simulate upload for the MVP
        body: JSON.stringify({ 
          fileName: file.name,
          fileSize: file.size,
          fileType: file.type || "application/octet-stream"
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to analyze document");
      }

      setAnalysis(data as DocumentAnalysis);
    } catch (err: unknown) {
      console.error("Document analysis failed:", err);
      setError((err as Error).message || "An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this document and its analysis?")) {
      setAnalysis(null);
      setError(null);
      // In a real app, we would make a DELETE API call here to purge the file from storage
    }
  };

  return (
    <div className="container mx-auto py-8 px-4 max-w-6xl">
      <PageHeader 
        title="AI Legal Document Analyzer" 
        description="Understand contracts, notices, and agreements in simple language."
        breadcrumb={[{label: 'Home', href: '/'}, {label: 'Documents'}]} 
      />

      <div className="mt-8 space-y-8">
        
        {/* Privacy Banner */}
        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 flex items-start sm:items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
          <Lock className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5 sm:mt-0" />
          <p>
            <strong className="text-slate-900 dark:text-slate-200 font-semibold">Privacy Notice: </strong>
            Your document should only contain information necessary for analysis. Uploaded files are processed securely and you can delete them at any time.
          </p>
        </div>

        {error && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Upload Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {!analysis && !isLoading && (
          <div className="max-w-3xl mx-auto">
            <FileUpload onAnalyze={handleAnalyze} isLoading={isLoading} />
          </div>
        )}

        {isLoading && (
          <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
            <LoadingAnimation />
            <p className="text-slate-500 dark:text-slate-400 font-medium animate-pulse">
              Reading document and extracting clauses...
            </p>
          </div>
        )}

        {analysis && !isLoading && (
          <div className="space-y-6">
            <div className="flex flex-wrap justify-end gap-2">
              <Link 
                href="/timeline"
                className="inline-flex h-10 items-center justify-center rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50"
              >
                View Timeline
              </Link>
              <Link 
                href="/lawyer-brief"
                className="inline-flex h-10 items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-slate-50 transition-colors hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90"
              >
                Prepare for Lawyer
              </Link>
              <Button 
                variant="outline" 
                className="text-rose-600 border-rose-200 hover:bg-rose-50 hover:text-rose-700 dark:border-rose-900/50 dark:hover:bg-rose-950/50"
                onClick={handleDelete}
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Delete document
              </Button>
            </div>
            
            <DocumentAnalysisResult analysis={analysis} />
          </div>
        )}

      </div>
    </div>
  );
}

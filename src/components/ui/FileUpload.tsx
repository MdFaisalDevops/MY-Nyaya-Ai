"use client";

import { useState, useRef } from "react";
import { UploadCloud, FileType2, X, AlertCircle } from "lucide-react";
import { Button } from "./button";
import { Alert, AlertDescription } from "./alert";

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ALLOWED_TYPES = ["application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "text/plain", "image/png", "image/jpeg"];

interface FileUploadProps {
  onAnalyze: (file: File) => void;
  isLoading: boolean;
}

export default function FileUpload({ onAnalyze, isLoading }: FileUploadProps) {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const validateFile = (file: File): boolean => {
    setError(null);
    if (!ALLOWED_TYPES.includes(file.type)) {
      setError("Invalid file type. Please upload a PDF, DOCX, TXT, or Image file.");
      return false;
    }
    if (file.size > MAX_FILE_SIZE) {
      setError("File is too large. Maximum size is 10MB.");
      return false;
    }
    return true;
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (validateFile(file)) {
        setSelectedFile(file);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (validateFile(file)) {
        setSelectedFile(file);
      }
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    setError(null);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const loadDemo = () => {
    const demoFile = new File(["[Demo Content]"], "demo-rental-agreement.pdf", { type: "application/pdf" });
    setSelectedFile(demoFile);
    setError(null);
  };

  return (
    <div className="w-full">
      {error && (
        <Alert variant="destructive" className="mb-4">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {!selectedFile ? (
        <div 
          className={`relative flex flex-col items-center justify-center p-12 border-2 border-dashed rounded-2xl transition-colors ${
            dragActive ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20' : 'border-slate-300 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-600 bg-slate-50 dark:bg-slate-900/50'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input
            ref={inputRef}
            type="file"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            onChange={handleChange}
            accept=".pdf,.docx,.txt,image/png,image/jpeg"
            disabled={isLoading}
          />
          
          <div className="w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center mb-4">
            <UploadCloud className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
          </div>
          
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-1">Upload a legal document</h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 text-center max-w-sm">
            Drag and drop your file here, or click to browse. Supported formats: PDF, DOCX, TXT, PNG, JPG (Max 10MB)
          </p>
          
          <Button type="button" variant="outline" className="relative z-10 pointer-events-none">
            Select File
          </Button>
          
          <div className="mt-8 text-sm flex flex-col items-center gap-2">
            <span className="text-slate-400">or try it out with mock data</span>
            <Button type="button" variant="link" size="sm" onClick={loadDemo} className="h-auto p-0 relative z-10">
              Load Demo Document
            </Button>
          </div>
        </div>
      ) : (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center shrink-0">
                <FileType2 className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div className="truncate">
                <h4 className="font-medium text-slate-900 dark:text-slate-100 truncate flex items-center gap-2">
                  {selectedFile.name}
                  {selectedFile.name.includes("demo-rental") && (
                    <span className="bg-amber-100 text-amber-800 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                      Demo Document — Fictional
                    </span>
                  )}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {formatFileSize(selectedFile.size)} • {selectedFile.type || 'Unknown type'}
                </p>
              </div>
            </div>
            
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={removeFile}
              disabled={isLoading}
              className="text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/50"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
          
          <Button 
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white" 
            onClick={() => onAnalyze(selectedFile)}
            disabled={isLoading}
          >
            {isLoading ? "Analyzing Document..." : "Analyze Document"}
          </Button>
        </div>
      )}
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Info, 
  MessageCircleQuestion, 
  PhoneCall, 
  ShieldCheck, 
  BrainCircuit, 
  Scale, 
  ChevronDown, 
  ExternalLink,
  AlertTriangle
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Tab = "about" | "faq" | "support";

export default function LegalAiInfoPortal() {
  const [activeTab, setActiveTab] = useState<Tab>("about");

  const tabs: { id: Tab; label: string; icon: React.ReactNode }[] = [
    { id: "about", label: "About Legal AI", icon: <BrainCircuit className="w-4 h-4 mr-2" /> },
    { id: "faq", label: "FAQ", icon: <MessageCircleQuestion className="w-4 h-4 mr-2" /> },
    { id: "support", label: "Support & Helpline", icon: <PhoneCall className="w-4 h-4 mr-2" /> },
  ];

  return (
    <section className="py-24 bg-slate-50/50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 max-w-5xl">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Information Portal</h2>
          <p className="text-slate-600 dark:text-slate-400">Everything you need to know about NyayaAI, your privacy, and how to get help.</p>
        </div>

        {/* Custom Animated Tab Navigation */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-slate-200/50 dark:bg-slate-800/50 p-1.5 rounded-full relative backdrop-blur-sm shadow-inner border border-slate-200 dark:border-slate-800 overflow-x-auto max-w-full no-scrollbar">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center px-6 py-3 rounded-full text-sm font-semibold transition-colors outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 whitespace-nowrap ${
                    isActive ? "text-indigo-700 dark:text-indigo-300" : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                  }`}
                  aria-selected={isActive}
                  role="tab"
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabPortal"
                      className="absolute inset-0 bg-white dark:bg-slate-900 rounded-full shadow-sm border border-slate-200/50 dark:border-slate-700/50"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center">
                    {tab.icon}
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Area */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === "about" && <AboutSection />}
              {activeTab === "faq" && <FAQSection />}
              {activeTab === "support" && <SupportSection />}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// Tab 1: About Legal AI
// ----------------------------------------------------------------------
function AboutSection() {
  return (
    <Card className="border-none shadow-xl bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl rounded-3xl overflow-hidden">
      <CardContent className="p-8 md:p-12 space-y-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
              <BrainCircuit className="w-8 h-8 text-indigo-500" />
              What is Legal AI?
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
              NyayaAI uses advanced artificial intelligence to translate complex legal jargon into plain language. It empowers individuals by providing structured guidance, document summaries, and actionable steps.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-1">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100">It Can:</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Summarize contracts, identify potential legal issues (triage), and create preparatory briefs for lawyers.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-rose-100 dark:bg-rose-900/40 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0 mt-1">
                  <AlertTriangle className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100">It Cannot:</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Provide binding legal advice, represent you in court, or guarantee any legal outcomes.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 w-full bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
              <Scale className="w-5 h-5 text-indigo-500" />
              The AI Advantage
            </h4>
            <ul className="space-y-4">
              {[
                { title: "Accessibility", desc: "Available 24/7 without expensive consultation fees." },
                { title: "Clarity", desc: "Turns 10-page contracts into simple 3-point summaries." },
                { title: "Preparedness", desc: "Saves billable hours by organizing your facts before you meet an attorney." }
              ].map((item, i) => (
                <li key={i} className="bg-white dark:bg-slate-950 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800/60">
                  <span className="block font-semibold text-slate-800 dark:text-slate-200 text-sm mb-1">{item.title}</span>
                  <span className="block text-slate-500 dark:text-slate-400 text-sm">{item.desc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// ----------------------------------------------------------------------
// Tab 2: FAQ
// ----------------------------------------------------------------------
function FAQSection() {
  const faqs = [
    {
      q: "Is NyayaAI a replacement for a real lawyer?",
      a: "No. NyayaAI is designed to be an informational assistant. It helps you understand your situation, organize your facts, and prepare for legal proceedings, but it cannot offer binding legal advice."
    },
    {
      q: "Is my data and document information secure?",
      a: "Yes. We take privacy seriously. Uploaded documents are processed securely and are not used to train global AI models without your explicit consent. Please refer to our Privacy Center for detailed policies."
    },
    {
      q: "How accurate is the AI analysis?",
      a: "NyayaAI uses state-of-the-art AI models specifically prompted to act as safe, conservative legal assistants. However, AI can make mistakes (hallucinations). You should always verify critical information with an official source or professional."
    },
    {
      q: "What types of documents can I upload?",
      a: "You can upload PDFs, Word documents, and text files. Common use cases include rental agreements, employment contracts, legal notices, and consumer dispute letters."
    }
  ];

  return (
    <Card className="border-none shadow-xl bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl rounded-3xl overflow-hidden">
      <CardContent className="p-8 md:p-12">
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-200 dark:border-slate-800 rounded-2xl bg-slate-50/50 dark:bg-slate-900/50 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-slate-800 dark:text-slate-200 pr-4">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 text-slate-400"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-5 pt-0 text-slate-600 dark:text-slate-400 text-sm leading-relaxed border-t border-slate-200 dark:border-slate-800/50 mt-2">
              <div className="pt-4">{answer}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ----------------------------------------------------------------------
// Tab 3: Support & Helpline
// ----------------------------------------------------------------------
function SupportSection() {
  return (
    <Card className="border-none shadow-xl bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl rounded-3xl overflow-hidden">
      <CardContent className="p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Emergency & Helplines */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400 text-sm font-semibold mb-2">
              <AlertTriangle className="w-4 h-4" />
              Critical Helplines
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Need immediate human help?</h3>
            <p className="text-slate-600 dark:text-slate-400">
              If you are facing an emergency, physical danger, or require urgent legal protection, please contact these authorities immediately.
            </p>
            
            <div className="space-y-3 pt-2">
              <div className="flex justify-between items-center p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">National Emergency</div>
                  <div className="text-sm text-slate-500">Police, Fire, Ambulance</div>
                </div>
                <a href="tel:112" className="font-bold text-xl text-rose-600 dark:text-rose-400 tracking-wider">112</a>
              </div>
              <div className="flex justify-between items-center p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">Women&apos;s Helpline</div>
                  <div className="text-sm text-slate-500">Domestic Abuse Support</div>
                </div>
                <a href="tel:1091" className="font-bold text-xl text-indigo-600 dark:text-indigo-400 tracking-wider">1091</a>
              </div>
            </div>
          </div>

          {/* Technical Support & Pro Bono */}
          <div className="space-y-6 bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Info className="w-5 h-5 text-indigo-500" />
              App Support & Resources
            </h3>
            
            <div className="space-y-4">
              <div className="p-4 bg-white dark:bg-slate-950 rounded-xl shadow-sm border border-slate-200/50 dark:border-slate-800/50">
                <div className="font-semibold text-slate-800 dark:text-slate-200 mb-1">Technical Support</div>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">Having trouble using the platform or uploading documents?</p>
                <Button variant="outline" size="sm" className="w-full">
                  Contact App Support
                </Button>
              </div>

              <div className="p-4 bg-white dark:bg-slate-950 rounded-xl shadow-sm border border-slate-200/50 dark:border-slate-800/50">
                <div className="font-semibold text-slate-800 dark:text-slate-200 mb-1">Legal Aid Services</div>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">Find free or low-cost legal assistance in your jurisdiction.</p>
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white" size="sm">
                  Find Legal Aid <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>

        </div>
      </CardContent>
    </Card>
  );
}

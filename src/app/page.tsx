"use client";

import Link from "next/link";
import { ArrowRight, FileText, Scale, Shield, Users, Search, Zap, CheckCircle2, AlertTriangle, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import TrustBadge from "@/components/ui/TrustBadge";
import { motion } from "framer-motion";
import DemoSelector from "@/components/assistant/DemoSelector";

export default function Home() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white dark:bg-slate-950 pt-20 pb-24 md:pt-32 md:pb-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-100 via-white to-white dark:from-indigo-950/40 dark:via-slate-950 dark:to-slate-950 -z-10" />
        
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1 space-y-8 text-center lg:text-left">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
                  Legal help shouldn&apos;t be <span className="text-indigo-600 dark:text-indigo-400">complicated.</span>
                </h1>
                <p className="mt-6 text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  NyayaAI helps you understand your legal situation, organize important information, discover possible next steps and access trusted legal resources — in simple language.
                </p>
              </motion.div>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Button size="lg" className="bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-200 dark:text-slate-900 text-white rounded-full px-8 text-base">
                  <Link href="/assistant" className="flex items-center">
                    Tell us what happened
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <DemoSelector />
              </motion.div>
            </div>

            {/* Hero Demo Card */}
            <motion.div 
              className="flex-1 w-full max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <Card className="border border-slate-200 dark:border-slate-800 shadow-xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl overflow-hidden relative">
                <div className="h-10 bg-slate-100 dark:bg-slate-800/50 flex items-center px-4 border-b border-slate-200 dark:border-slate-800 gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  <span className="text-xs font-medium text-slate-500 ml-2">NyayaAI Assistant</span>
                </div>
                
                <CardContent className="p-6 space-y-6">
                  <motion.div 
                    className="flex justify-end"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                  >
                    <div className="bg-indigo-600 text-white p-4 rounded-2xl rounded-tr-sm max-w-[85%] shadow-sm">
                      <p className="text-sm">“My landlord hasn&apos;t returned my security deposit.”</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex justify-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 2.5 }}
                  >
                    <div className="bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 p-5 rounded-2xl rounded-tl-sm max-w-[95%] shadow-sm space-y-4">
                      
                      <div>
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Possible Issue</p>
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                          <Scale className="w-4 h-4 text-indigo-500" />
                          Rental / Security Deposit Dispute
                        </h4>
                      </div>

                      <div className="space-y-2">
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Next Steps</p>
                        <ul className="space-y-2">
                          {[
                            "Check rental agreement",
                            "Collect payment proof",
                            "Review communication",
                            "Check applicable rules"
                          ].map((step, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                              <div className="w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-[10px] font-bold shrink-0">
                                {i + 1}
                              </div>
                              {step}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* NEW: Social Proof / Audience Section */}
      <section className="py-12 border-y border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-8">
            Designed for people navigating:
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 items-center text-slate-800 dark:text-slate-200 font-medium">
            <span className="flex items-center gap-2 bg-white dark:bg-slate-800 px-4 py-2 rounded-full shadow-sm border border-slate-200 dark:border-slate-700">💼 Work Disputes</span>
            <span className="flex items-center gap-2 bg-white dark:bg-slate-800 px-4 py-2 rounded-full shadow-sm border border-slate-200 dark:border-slate-700">🏠 Housing & Tenancy</span>
            <span className="flex items-center gap-2 bg-white dark:bg-slate-800 px-4 py-2 rounded-full shadow-sm border border-slate-200 dark:border-slate-700">🛒 Consumer Rights</span>
            <span className="flex items-center gap-2 bg-white dark:bg-slate-800 px-4 py-2 rounded-full shadow-sm border border-slate-200 dark:border-slate-700">📄 Complex Documents</span>
            <span className="flex items-center gap-2 bg-white dark:bg-slate-800 px-4 py-2 rounded-full shadow-sm border border-slate-200 dark:border-slate-700">🏛️ Government Processes</span>
            <span className="flex items-center gap-2 bg-white dark:bg-slate-800 px-4 py-2 rounded-full shadow-sm border border-slate-200 dark:border-slate-700">⚖️ Legal Notices</span>
          </div>
        </div>
      </section>

      {/* NEW: Product Story - From Confusion to Clarity */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">From confusion to clarity.</h2>
            <p className="text-slate-600 dark:text-slate-400 mt-4 text-lg">See how NyayaAI transforms the legal experience.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Before */}
            <Card className="bg-slate-50 dark:bg-slate-900 border-none shadow-none p-2">
              <CardContent className="p-8 h-full flex flex-col justify-center text-center space-y-6 rounded-xl border border-slate-200/50 dark:border-slate-800/50 border-dashed">
                <div className="mx-auto w-16 h-16 bg-slate-200 dark:bg-slate-800 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-8 h-8 text-slate-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">Before NyayaAI</h3>
                <p className="text-slate-600 dark:text-slate-400 italic text-lg leading-relaxed">
                  “I don&apos;t know what this means, I don&apos;t know what documents I need, and I don&apos;t know what to do next.”
                </p>
              </CardContent>
            </Card>

            {/* After */}
            <Card className="bg-indigo-600 text-white border-none shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-indigo-500 to-transparent opacity-50" />
              <CardContent className="p-8 h-full flex flex-col justify-center text-center space-y-6 relative z-10">
                <div className="mx-auto w-16 h-16 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold">After NyayaAI</h3>
                <p className="text-indigo-100 italic text-lg leading-relaxed">
                  “I know what information I need, what I can verify, what my next steps may be, and when I should seek professional help.”
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Everything you need to get started</h2>
            <p className="text-slate-600 dark:text-slate-400">Tools designed to demystify the legal process and empower you with information.</p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            {[
              { icon: Zap, title: "AI Legal Assistant", desc: "Explain legal situations in simple, clear language without the complex jargon." },
              { icon: Search, title: "Legal Issue Triage", desc: "Understand what type of legal issue you may be dealing with and its scope." },
              { icon: CheckCircle2, title: "Action Plans", desc: "Turn confusion into practical, organized next steps you can take today." },
              { icon: FileText, title: "Document Intelligence", desc: "Understand important information and obligations in uploaded documents." },
              { icon: Users, title: "Lawyer Brief", desc: "Prepare a structured summary to save time before speaking with a lawyer." },
              { icon: Shield, title: "Trusted Resources", desc: "Find official, verified legal information and relevant authorities." }
            ].map((feature, i) => (
              <motion.div key={i} variants={fadeUp} className="flex gap-4 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                  <feature.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">{feature.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">AI assistance with human judgment at the center.</h2>
            <p className="text-slate-600 dark:text-slate-400">We prioritize transparency, safety, and responsible AI usage.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <TrustBadge icon={AlertTriangle} title="No Guaranteed Outcomes" description="NyayaAI provides information and guidance, not guarantees or formal legal counsel." />
            <TrustBadge icon={Search} title="Source-Aware" description="Important information should always be verified against reliable official sources." />
            <TrustBadge icon={Shield} title="Privacy Conscious" description="Users should only provide information necessary for their situation. Data is protected." />
            <TrustBadge icon={Users} title="Human Help" description="Complex or high-risk matters may require qualified professional legal assistance." />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-indigo-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Start your legal journey.</h2>
            <p className="text-indigo-200 text-lg">
              Take the first step towards understanding your situation and finding a resolution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button size="lg" className="bg-white text-indigo-950 hover:bg-indigo-50 font-semibold px-8 h-14 text-base">
                <Link href="/assistant" className="flex items-center w-full h-full justify-center">
                  Tell us what happened
                </Link>
              </Button>
              <DemoSelector>
                <Button size="lg" variant="outline" className="border-indigo-400 text-indigo-100 hover:bg-indigo-900/50 hover:text-white px-8 h-14 text-base">
                  <PlayCircle className="w-5 h-5 mr-2" /> Try Demo
                </Button>
              </DemoSelector>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

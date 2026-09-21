"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logo from "@/components/ui/Logo";
import LanguageSelector from "./LanguageSelector";
import { useI18n } from "@/lib/i18n";
import DemoSelector from "../assistant/DemoSelector";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useI18n();

  const navLinks = [
    { name: t("nav.knowYourRights"), href: "/know-your-rights" },
    { name: t("nav.legalResources"), href: "/resources" },
    { name: t("nav.documentAnalyzer"), href: "/documents" },
    { name: t("nav.timeline"), href: "/timeline" },
    { name: t("nav.trustCenter"), href: "/trust-center" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          <Link href="/know-your-rights" className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">
            {t("nav.knowYourRights")}
          </Link>
          <Link href="/resources" className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">
            {t("nav.legalResources")}
          </Link>
          <Link href="/documents" className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">
            {t("nav.documentAnalyzer")}
          </Link>
          <Link href="/timeline" className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">
            {t("nav.timeline")}
          </Link>
          <Link href="/trust-center" className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">
            {t("nav.trustCenter")}
          </Link>
          
          <div className="flex items-center gap-4 pl-4 border-l border-slate-200 dark:border-slate-800">
            <LanguageSelector />
            <Link 
              href="/assistant"
              className="inline-flex h-9 items-center justify-center rounded-full bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
            >
              {t("nav.getStarted")}
            </Link>
          </div>
        </div>

        <div className="flex lg:hidden items-center gap-4">
          <LanguageSelector />
          <button
            className="p-2 text-slate-600 dark:text-slate-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 flex flex-col space-y-3 border-t border-slate-100 dark:border-slate-800">
              <Link 
                href="/assistant"
                className="inline-flex w-full h-10 items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("nav.getStarted")}
              </Link>
              <DemoSelector />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

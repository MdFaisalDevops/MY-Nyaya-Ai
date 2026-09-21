import Link from "next/link";
import Logo from "@/components/ui/Logo";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <Logo />
            <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
              Legal help shouldn&apos;t be complicated.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li><Link href="/assistant" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">AI Assistant</Link></li>
              <li><Link href="/action-plan" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Action Plans</Link></li>
              <li><Link href="/documents" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Document Intelligence</Link></li>
              <li><Link href="/dashboard" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Dashboard</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li><Link href="/know-your-rights" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Know Your Rights</Link></li>
              <li><Link href="/resources" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Legal Resources</Link></li>
              <li><Link href="/lawyer-brief" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Lawyer Brief</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li><Link href="/about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">About Us</Link></li>
              <li><Link href="/trust-center" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Trust Center</Link></li>
              <li><Link href="/privacy" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-4xl leading-relaxed">
            NyayaAI provides AI-generated legal information and assistance. It is not a law firm and does not replace qualified legal advice. Legal rules may vary by jurisdiction and circumstances. Verify important information with authoritative sources or a qualified legal professional.
          </p>
          <div className="mt-6 flex items-center justify-between">
            <p className="text-xs text-slate-500 dark:text-slate-400">
              &copy; {new Date().getFullYear()} NyayaAI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

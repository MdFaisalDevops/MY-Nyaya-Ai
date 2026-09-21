import { Shield, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-600 text-white">
        <Shield className="w-5 h-5 absolute" />
        <Sparkles className="w-3 h-3 absolute -top-1 -right-1 text-amber-300" />
      </div>
      <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">
        Nyaya<span className="text-indigo-600">AI</span>
      </span>
    </Link>
  );
}

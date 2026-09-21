import { LucideIcon } from "lucide-react";

interface TrustBadgeProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function TrustBadge({ icon: Icon, title, description }: TrustBadgeProps) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-slate-950 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
      <div className="w-12 h-12 rounded-full bg-indigo-50 dark:bg-indigo-950/50 flex items-center justify-center mb-4 text-indigo-600 dark:text-indigo-400">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">{title}</h3>
      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

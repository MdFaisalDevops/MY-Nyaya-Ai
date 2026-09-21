import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: "required" | "optional" | "completed" | "pending";
  children: React.ReactNode;
  className?: string;
}

export default function StatusBadge({ status, children, className }: StatusBadgeProps) {
  const statusStyles = {
    required: "bg-rose-100 text-rose-700 dark:bg-rose-950/50 dark:text-rose-400 border-rose-200 dark:border-rose-900",
    optional: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700",
    completed: "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900",
    pending: "bg-amber-100 text-amber-700 dark:bg-amber-950/50 dark:text-amber-400 border-amber-200 dark:border-amber-900",
  };

  return (
    <span className={cn("inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border", statusStyles[status], className)}>
      {children}
    </span>
  );
}

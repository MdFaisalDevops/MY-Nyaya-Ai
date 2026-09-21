"use client";

import { AlertTriangle, Phone } from "lucide-react";
import { Button } from "./button";

export default function EmergencyPanel() {
  // Hardcoded for MVP as per plan
  const emergencyNumbers = [
    { label: "National Emergency", number: "112" },
    { label: "Police", number: "100" },
    { label: "Women Helpline", number: "1091" },
  ];

  return (
    <div className="bg-rose-600 dark:bg-rose-900 text-white rounded-2xl overflow-hidden shadow-lg border border-rose-700 dark:border-rose-800 animate-in fade-in slide-in-from-top-4 duration-500">
      <div className="bg-rose-700/50 dark:bg-rose-950/50 px-6 py-4 flex flex-col sm:flex-row items-center gap-4 justify-between border-b border-rose-500/30">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
            <AlertTriangle className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-lg tracking-wide">Professional Assistance Recommended</h3>
            <p className="text-rose-100 text-sm">Immediate danger or severe threats detected.</p>
          </div>
        </div>
      </div>
      <div className="p-6 space-y-4">
        <p className="font-medium text-rose-50">
          If you or someone else is in immediate danger, do not wait. Contact official emergency services.
        </p>
        <div className="grid sm:grid-cols-3 gap-3">
          {emergencyNumbers.map((em) => (
            <div key={em.label} className="bg-white/10 rounded-xl p-4 border border-white/20 flex flex-col items-center text-center justify-center gap-2 hover:bg-white/20 transition-colors">
              <span className="text-sm font-medium text-rose-100">{em.label}</span>
              <a href={`tel:${em.number}`} className="flex items-center gap-2 text-2xl font-bold">
                <Phone className="w-5 h-5" /> {em.number}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

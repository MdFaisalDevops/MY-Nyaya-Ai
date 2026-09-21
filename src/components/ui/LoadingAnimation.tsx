"use client";

import { motion } from "framer-motion";

export default function LoadingAnimation() {
  return (
    <div className="flex flex-col items-center justify-center p-8 space-y-4">
      <div className="flex space-x-2">
        <motion.div
          className="w-3 h-3 bg-indigo-600 dark:bg-indigo-400 rounded-full"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="w-3 h-3 bg-indigo-600 dark:bg-indigo-400 rounded-full"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        />
        <motion.div
          className="w-3 h-3 bg-indigo-600 dark:bg-indigo-400 rounded-full"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        />
      </div>
      <p className="text-sm font-medium text-slate-500 animate-pulse">AI is analyzing your situation...</p>
    </div>
  );
}

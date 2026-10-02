"use client";

import React from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-900 text-white min-h-screen flex items-center justify-center p-6 font-sans">
        <div className="max-w-md w-full text-center bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-2xl">
          <h2 className="text-2xl font-bold mb-3 text-red-400">Critical Error</h2>
          <p className="text-slate-300 text-sm mb-6 leading-relaxed">
            The application encountered a critical layout error. Our recovery system is standing by to reset the environment safely.
          </p>
          <button
            type="button"
            onClick={() => reset()}
            className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors cursor-pointer"
          >
            Reload Application
          </button>
        </div>
      </body>
    </html>
  );
}

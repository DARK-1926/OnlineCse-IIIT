import React from "react";

export default function DirectorMessage() {
  return (
    <section className="py-16 bg-[#f9f9ff] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-bold text-[#8b1c2e] uppercase font-mono tracking-widest block mb-1">
              // LEADERSHIP PERSPECTIVE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#193654] leading-tight font-grotesk">
              IIIT Dharwad’s Hybrid mode M.Tech in CSE: Insights from the Director
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-roboto">
              Get an insider’s view from Prof. S R Mahadeva Prasanna, Director – IIIT Dharwad, as he breaks down what the Hybrid mode M.Tech in CSE truly offers to working engineers across India.
            </p>
            <div className="pt-2">
              <div className="font-bold text-[#193654] text-sm font-grotesk">
                Prof. S. R. Mahadeva Prasanna
              </div>
              <div className="text-xs text-slate-500 font-medium font-roboto">
                Director, Indian Institute of Information Technology Dharwad
              </div>
            </div>
          </div>

          {/* Right Video Embed */}
          <div className="lg:col-span-7">
            <div className="relative aspect-video w-full rounded-xl overflow-hidden shadow-md border border-slate-300 bg-black">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/zdZeCvH0D5s"
                title="IIIT Dharwad Director Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full border-0"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

import React from "react";

export default function FacultySection() {
  const leadership = [
    {
      name: "Prof. S. R. Mahadeva Prasanna",
      role: "Director, IIIT Dharwad",
      qual: "Ph.D., IIT Madras",
      area: "Speech Processing, Artificial Intelligence, Signal Processing",
    },
    {
      name: "Dr. Krishnendu Ghosh",
      role: "Program Coordinator, Hybrid mode M.Tech in CSE",
      qual: "Assistant Professor, CSE",
      area: "Distributed Systems, Cloud Architecture, High Performance Computing",
    },
  ];

  const faculty = [
    { name: "Dr. Abdul Wahid", role: "Assistant Professor", area: "Cloud Computing, Distributed Algorithms, Network Protocols" },
    { name: "Dr. Girish G N", role: "Assistant Professor", area: "Computer Vision, Medical Image Analysis, Deep Learning" },
    { name: "Dr. Prabhu Prasad B M", role: "Assistant Professor", area: "Cybersecurity, Cryptography, Network Defense, Wireless Security" },
    { name: "Dr. Malay Kumar", role: "Assistant Professor", area: "Machine Learning, Natural Language Processing, Sentiment Analysis" },
    { name: "Dr. Pramod Yelmewad", role: "Assistant Professor", area: "Distributed Database Systems, Transaction Protocols, Cloud Storage" },
    { name: "Dr. Sunil Kumar P V", role: "Assistant Professor", area: "Pattern Recognition, Deep Neural Networks, Applied AI" },
  ];

  return (
    <section className="py-16 bg-[#f9f9ff] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#8b1c2e] uppercase font-mono tracking-widest block mb-1">
            // ACADEMIC MENTORSHIP
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#193654] font-grotesk">
            Program Leadership & Faculty
          </h2>
          <p className="text-sm text-slate-600 mt-2 font-roboto">
            Learn directly from doctoral scholars and researchers shaping the frontier of computer science:
          </p>
        </div>

        {/* Leadership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {leadership.map((l, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl border-2 border-[#193654] shadow-xs flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-[#193654] text-[#CCE70B] flex items-center justify-center font-bold text-lg flex-shrink-0 font-grotesk">
                {l.name.charAt(l.name.indexOf("Dr.") !== -1 ? 4 : 6)}
              </div>
              <div>
                <h3 className="text-base font-bold text-[#193654] font-grotesk">
                  {l.name}
                </h3>
                <div className="text-xs text-[#8b1c2e] font-semibold mt-0.5 font-mono">
                  {l.role}
                </div>
                <div className="text-xs text-slate-500 font-medium mt-0.5 font-roboto">
                  {l.qual}
                </div>
                <p className="text-xs text-slate-600 mt-2 font-normal font-roboto">
                  <strong className="text-slate-700">Research Focus:</strong> {l.area}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Extended Faculty Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {faculty.map((f, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-lg border border-slate-200 shadow-2xs hover:border-[#193654] transition-colors"
            >
              <div className="flex items-center gap-3 mb-2.5">
                <div className="w-9 h-9 rounded-full bg-slate-100 text-[#193654] flex items-center justify-center font-bold text-xs flex-shrink-0 font-grotesk">
                  {f.name.charAt(4)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#193654] font-grotesk">
                    {f.name}
                  </h4>
                  <div className="text-[11px] text-[#8b1c2e] font-medium mt-0.5 font-mono">
                    {f.role}
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed font-roboto">
                <strong className="text-slate-600">Specialization:</strong> {f.area}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

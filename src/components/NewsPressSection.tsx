import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function NewsPressSection() {
  const news = [
    {
      img: "/images/news_indian_express.jpg",
      title: "IIIT Dharwad Launches Online M.Tech in CSE with Specialisations in AI & ML, Cybersecurity & Cloud Computing",
      source: "The Indian Express",
      link: "https://indianexpress.com/article/education/online-mtech-course-aiml-cybersecurity-cloud-computing-jeemain-2026-advanced-10482423/",
    },
    {
      img: "/images/news_academic_press.jpg",
      title: "Executive Education Milestone: IIIT Dharwad Unveils Flexible Postgraduate Computing Degree for Working Technologists",
      source: "National Education Press",
      link: "https://onlinecse.iiitdwd.ac.in",
    },
    {
      img: "/images/news_tech_spotlight.jpg",
      title: "Bridging the Industry-Academia Divide: Advanced Research & Campus Immersion at IIIT Dharwad",
      source: "Tech Insights & Innovation",
      link: "https://onlinecse.iiitdwd.ac.in",
    },
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#8b1c2e] uppercase font-mono tracking-widest block mb-1">
            // MEDIA & COVERAGE
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#193654] font-grotesk">
            In the News
          </h2>
          <p className="text-sm text-slate-600 mt-2 font-roboto">
            Coverage and announcements about our executive program across national media and press:
          </p>
        </div>

        {/* 3 Authentic News Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-[#193654] text-[#CCE70B] text-[10px] font-bold px-2.5 py-1 rounded shadow-xs font-mono">
                    {item.source}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-sm font-bold text-[#193654] group-hover:text-[#8b1c2e] transition-colors line-clamp-3 leading-snug font-grotesk">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="p-5 pt-0">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#193654] hover:text-[#8b1c2e] uppercase tracking-wider font-grotesk"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

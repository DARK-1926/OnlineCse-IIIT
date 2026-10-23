import React from "react";
import Image from "next/image";

interface FacultyMember {
  name: string;
  role: string;
  dept: string;
  qual: string;
  image: string;
  isLeadership?: boolean;
}

export default function FacultySection() {
  const leadership: FacultyMember[] = [
    {
      name: "Prof. S. R. Mahadeva Prasanna",
      role: "Professor & Director",
      dept: "Data Science and Artificial Intelligence",
      qual: "Ph.D. (IIT Madras)",
      image: "https://iiitdwd.ac.in/images/SRMahadevaPrasanna.jpg",
      isLeadership: true,
    },
    {
      name: "Dr. Krishnendu Ghosh",
      role: "Program Coordinator, M.Tech in CSE",
      dept: "Computer Science & Engineering",
      qual: "Assistant Professor • Ph.D. (IIT Kharagpur)",
      image: "https://iiitdwd.ac.in/images/Dr.KrishnenduGhosh.png",
      isLeadership: true,
    },
  ];

  const facultyMembers: FacultyMember[] = [
    // Computer Science & Engineering
    {
      name: "Dr. Abdul Wahid",
      role: "Assistant Professor",
      dept: "Computer Science & Engineering",
      qual: "Ph.D. (IIT Dhanbad)",
      image: "https://iiitdwd.ac.in/images/Dr.AbdulWahid.jpeg",
    },
    {
      name: "Dr. Animesh Roy",
      role: "Assistant Professor",
      dept: "Computer Science & Engineering",
      qual: "Ph.D. (IIEST)",
      image: "https://iiitdwd.ac.in/images/Dr.AnimeshRoy.jpg",
    },
    {
      name: "Dr. Dibyajyoti Guha",
      role: "Assistant Professor",
      dept: "Computer Science & Engineering",
      qual: "Ph.D. (IIT Bhubaneswar)",
      image: "https://iiitdwd.ac.in/images/Dr.DibyajyotiGuha.jpg",
    },
    {
      name: "Dr. Girish G N",
      role: "Assistant Professor",
      dept: "Computer Science & Engineering",
      qual: "Ph.D. (NITK)",
      image: "https://iiitdwd.ac.in/images/Dr.GirishGN.jpeg",
    },
    {
      name: "Dr. Krishnendu Ghosh",
      role: "Assistant Professor",
      dept: "Computer Science & Engineering",
      qual: "Ph.D. (IIT Kharagpur)",
      image: "https://iiitdwd.ac.in/images/Dr.KrishnenduGhosh.png",
    },
    {
      name: "Dr. Milind Chabbi",
      role: "Professor of Practice",
      dept: "Computer Science & Engineering",
      qual: "Rice University",
      image: "https://iiitdwd.ac.in/images/Milind-Chabbi.png",
    },
    {
      name: "Dr. Prabhu Prasad B M",
      role: "Assistant Professor",
      dept: "Computer Science & Engineering",
      qual: "Ph.D. (NITK Surathkal)",
      image: "https://iiitdwd.ac.in/images/Dr.PrabhuPrasadBM.png",
    },
    {
      name: "Dr. Shrinivas Kulkarni",
      role: "Professor of Practice",
      dept: "Computer Science & Engineering",
      qual: "PhD - University of Edinburgh",
      image: "https://iiitdwd.ac.in/images/ShrinivasKulkarni.jpeg",
    },
    {
      name: "Dr. Sunil Kumar P V",
      role: "Assistant Professor",
      dept: "Computer Science & Engineering",
      qual: "Ph.D. (NIT, Calicut)",
      image: "https://iiitdwd.ac.in/images/Dr.SunilKumarPV.jpg",
    },
    {
      name: "Dr. Vivekraj V K",
      role: "Assistant Professor",
      dept: "Computer Science & Engineering",
      qual: "Ph.D. (IIT Roorkee)",
      image: "https://iiitdwd.ac.in/images/Dr.VivekrajVK.jpg",
    },
    {
      name: "Dr. Malay Kumar",
      role: "Assistant Professor",
      dept: "Computer Science & Engineering",
      qual: "Ph.D. (NIT Raipur)",
      image: "https://iiitdwd.ac.in/images/Dr.MalayKumar.jpg",
    },
    {
      name: "Dr. Pavan Kumar C",
      role: "Assistant Professor",
      dept: "Computer Science & Engineering",
      qual: "Ph.D. (VIT Vellore)",
      image: "https://iiitdwd.ac.in/images/Dr.PavanKumarC.jpg",
    },
    {
      name: "Dr. Pramod Yelmewad",
      role: "Assistant Professor",
      dept: "Computer Science & Engineering",
      qual: "Ph.D. (NITK Surathkal)",
      image: "https://iiitdwd.ac.in/images/Dr.PramodYelmewad.jpg",
    },
    {
      name: "Dr. Sunil C K",
      role: "Assistant Professor",
      dept: "Computer Science & Engineering",
      qual: "Ph.D. (NITK Surathkal)",
      image: "https://iiitdwd.ac.in/images/Dr.SunilCK.jpg",
    },
    {
      name: "Dr. Suvadip Hazra",
      role: "Assistant Professor",
      dept: "Computer Science & Engineering",
      qual: "Ph.D. (NIT Durgapur)",
      image: "https://iiitdwd.ac.in/images/Dr-Suvadip-Hazra.png",
    },
    {
      name: "Dr. Swagatika Sahoo",
      role: "Assistant Professor",
      dept: "Computer Science & Engineering",
      qual: "PhD: IIT Patna",
      image: "https://iiitdwd.ac.in/images/Swagatika_Sahoo.jpeg",
    },

    // Data Science & Artificial Intelligence
    {
      name: "Dr. Manjunath K V",
      role: "Assistant Professor",
      dept: "Data Science and Artificial Intelligence",
      qual: "Ph.D. (NITK Surathkal)",
      image: "https://iiitdwd.ac.in/images/Dr.ManjunathKV.jpg",
    },
    {
      name: "Dr. Rajendra Hegadi",
      role: "Associate Professor",
      dept: "Data Science and Artificial Intelligence",
      qual: "Ph.D. (MGRRI, Chennai)",
      image: "https://iiitdwd.ac.in/images/Dr.RajendraHegadi.jpeg",
    },
    {
      name: "Dr. Shirshendu Layek",
      role: "Assistant Professor",
      dept: "Data Science and Artificial Intelligence",
      qual: "Ph.D. (IIT Dhanbad)",
      image: "https://iiitdwd.ac.in/images/Dr.ShirshenduLayek.jpg",
    },
    {
      name: "Dr. Sunil Saumya",
      role: "Assistant Professor",
      dept: "Data Science and Artificial Intelligence",
      qual: "Ph.D. (NIT Patna)",
      image: "https://iiitdwd.ac.in/images/Dr.SunilSaumya.jpeg",
    },
    {
      name: "Dr. Girish Revadigar",
      role: "Assistant Professor",
      dept: "Data Science and Artificial Intelligence",
      qual: "PhD (UNSW Sydney, Australia)",
      image: "https://iiitdwd.ac.in/images/Girish_Revadigar_Photo_-_Dr._Girish_Revadigar__1_.jpg",
    },
    {
      name: "Dr. Ramesh Athe",
      role: "Assistant Professor",
      dept: "Data Science and Artificial Intelligence",
      qual: "Ph.D. (Osmania University, Hyderabad)",
      image: "https://iiitdwd.ac.in/images/Dr.RameshAthe.jpg",
    },
    {
      name: "Dr. Shruti Maralappanavar",
      role: "Assistant Professor",
      dept: "Data Science and Artificial Intelligence",
      qual: "PhD: IIT Dharwad",
      image: "https://iiitdwd.ac.in/images/Shruti.jpg",
    },
    {
      name: "Dr. Utkarsh Khaire",
      role: "Assistant Professor",
      dept: "Data Science and Artificial Intelligence",
      qual: "Ph.D. (NIT Nagaland)",
      image: "https://iiitdwd.ac.in/images/Dr.UtkarshKhaire.jpg",
    },

    // Electronics & Communication Engineering
    {
      name: "Dr. Deepak K T",
      role: "Assistant Professor",
      dept: "Electronics and Communication Engineering",
      qual: "Ph.D. (IIT Guwahati)",
      image: "https://iiitdwd.ac.in/images/Dr.DeepakKT.jpeg",
    },
    {
      name: "Dr. Chinmayananda A",
      role: "Assistant Professor",
      dept: "Electronics and Communication Engineering",
      qual: "Ph.D. (IISc Bengaluru)",
      image: "https://iiitdwd.ac.in/images/Dr.ChinmayanandaA.jpg",
    },
    {
      name: "Dr. Nataraj K S",
      role: "Assistant Professor",
      dept: "Electronics and Communication Engineering",
      qual: "Ph.D. (IIT Bombay)",
      image: "https://iiitdwd.ac.in/images/Dr.NatarajKS.jpg",
    },
  ];

  return (
    <section id="faculty" className="py-16 bg-[#f9f9ff] border-b border-slate-200">
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
            Learn directly from doctoral scholars and distinguished faculty members shaping the frontiers of computer science & allied fields:
          </p>
        </div>

        {/* Leadership Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {leadership.map((l, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl border-2 border-[#193654] shadow-xs flex items-start gap-4 hover:shadow-md transition-shadow"
            >
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-[#193654] bg-slate-100 flex-shrink-0 shadow-sm">
                <Image
                  src={l.image}
                  alt={l.name}
                  fill
                  sizes="96px"
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] uppercase font-mono font-bold px-2 py-0.5 rounded bg-blue-100 text-[#193654] inline-block mb-1">
                  Program Leadership
                </span>
                <h3 className="text-base sm:text-lg font-bold text-[#193654] font-grotesk leading-tight">
                  {l.name}
                </h3>
                <div className="text-xs text-[#8b1c2e] font-bold mt-1 font-mono">
                  {l.role}
                </div>
                <div className="text-xs text-slate-500 font-medium mt-0.5 font-roboto">
                  {l.dept}
                </div>
                <div className="text-xs font-semibold text-[#193654] mt-1 font-roboto">
                  {l.qual}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Faculty Roster Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-4">
          <span className="text-xs font-bold text-[#193654] font-grotesk uppercase tracking-wider">
            Teaching & Research Faculty ({facultyMembers.length} Members)
          </span>
          <span className="text-xs text-slate-500 font-mono">
            Scroll to explore ↓
          </span>
        </div>

        {/* Nested Scrollable Faculty Container */}
        <div className="max-h-[520px] overflow-y-auto pr-2 rounded-xl border border-slate-200 bg-white p-4 shadow-2xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {facultyMembers.map((f, idx) => (
              <div
                key={f.name + idx}
                className="bg-[#f9f9ff] p-4 rounded-xl border border-slate-200 shadow-2xs hover:border-[#193654] hover:bg-white hover:shadow-md transition-all flex items-start gap-3.5 group"
              >
                <div className="relative w-14 h-14 rounded-full overflow-hidden border border-slate-300 bg-slate-100 flex-shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                  <Image
                    src={f.image}
                    alt={f.name}
                    fill
                    sizes="56px"
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-sm font-bold text-[#193654] font-grotesk leading-snug group-hover:text-[#8b1c2e] transition-colors truncate">
                    {f.name}
                  </h4>
                  <div className="text-[11px] text-[#8b1c2e] font-semibold font-mono">
                    {f.role}
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium font-roboto truncate">
                    {f.dept}
                  </div>
                  <div className="text-[11px] text-slate-700 font-semibold font-roboto mt-0.5">
                    {f.qual}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

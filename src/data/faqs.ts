export interface FaqItem {
  id: string;
  category: "General Program Information" | "Eligibility and Admissions" | "Attendance, Pedagogy & Format" | "Degree, PhD & Career";
  question: string;
  answer: string;
}

export const faqsData: FaqItem[] = [
  // --- General Program Information ---
  {
    id: "faq-1",
    category: "General Program Information",
    question: "What is the M.Tech in Computer Science & Engineering program at IIIT Dharwad?",
    answer: "The M.Tech in Computer Science & Engineering is a 2-year (4 semesters, 60 credits) postgraduate degree program designed to prepare students and software engineers for high-impact roles in the technology industry, research, and academia. The program emphasizes project-based learning, rigorous computing theory, and research-driven problem solving across three specialized domains: AI & ML, Cyber Security, and Cloud Computing."
  },
  {
    id: "faq-2",
    category: "General Program Information",
    question: "What makes IIIT Dharwad different from other institutes?",
    answer: "IIIT Dharwad stands out through several distinctive institutional advantages: (1) Institute of National Importance status with full autonomy; (2) An academic Senate comprising premier academicians and industry executives; (3) Outcome-Based Education (OBE) directly aligned with enterprise needs; (4) Multi-exit and re-entry options allowing students to complete studies within up to a four-year window; (5) Extensive 30-credit hands-on project dissertation; (6) Full alumni privileges with an official Institute Email ID and library access; and (7) An exclusive 7-day campus immersion on the 60-acre campus in Dharwad, Karnataka."
  },
  {
    id: "faq-3",
    category: "General Program Information",
    question: "Is IIIT Dharwad recognized as an Institute of National Importance?",
    answer: "Yes, IIIT Dharwad is recognized as an Institute of National Importance by an Act of Parliament (Indian Institutes of Information Technology Public-Private Partnership Act). It was established in 2015 by the Ministry of Education, Government of India, the Government of Karnataka, and industry partner Keonics."
  },

  // --- Eligibility and Admissions ---
  {
    id: "faq-4",
    category: "Eligibility and Admissions",
    question: "What are the eligibility criteria for the M.Tech in CSE program?",
    answer: "Qualifications Required: Candidates must hold a B.E. / B.Tech degree in any engineering discipline OR an MCA / M.Sc in Computer Science, IT, Mathematics, Statistics, or Data Science from an AICTE/UGC recognized university. Both freshers and working professionals are eligible to apply. Minimum Academic Cutoffs: General / OBC / EWS candidates require a minimum of 60% aggregate marks (or 6.0 CGPA/CPI on a 10-point scale); SC / ST / PwD candidates require a minimum of 55% aggregate marks (or 5.5 CGPA/CPI on a 10-point scale)."
  },
  {
    id: "faq-5",
    category: "Eligibility and Admissions",
    question: "Are freshers eligible to apply for this program?",
    answer: "Yes, fresh graduates with qualifying degrees (B.E./B.Tech/MCA/M.Sc) who meet the minimum CGPA/percentage requirements are fully eligible to apply alongside working professionals."
  },
  {
    id: "faq-6",
    category: "Eligibility and Admissions",
    question: "What if I have a BCA or B.Sc degree?",
    answer: "BCA and B.Sc graduates are encouraged to explore our dedicated alternate M.Tech pathway designed specifically to bridge foundational computing coursework and prepare candidates for advanced master's studies."
  },
  {
    id: "faq-7",
    category: "Eligibility and Admissions",
    question: "Is a GATE score required for admission?",
    answer: "No, a GATE score is not mandatory. Admissions are evaluated holistically based on academic credentials, qualifying examination performance, and an online selection interview / technical assessment."
  },
  {
    id: "faq-8",
    category: "Eligibility and Admissions",
    question: "What is the four-step admission process?",
    answer: "The admission process consists of 4 streamlined steps: (1) Step 01: Complete the online application form and pay the non-refundable application fee of ₹2,000; (2) Step 02: Appear for an online technical evaluation and panel interview; (3) Step 03: Shortlisted candidates receive an official provisional admission offer letter; (4) Step 04: Confirm enrollment by paying the semester tuition fee or opting for 0% interest monthly EMI installments."
  },
  {
    id: "faq-9",
    category: "Eligibility and Admissions",
    question: "What are the tuition fees and payment options?",
    answer: "The tuition fee is ₹1,10,625 per semester across 4 semesters (Yearly: ₹2,21,250), amounting to a total program fee of ₹4,42,500 (₹4.425 Lakhs). Flexible 0% interest monthly installment plans (12, 18, 24, or 36 months) are available through our nationalized education finance partners, along with Section 80E tax deduction benefits."
  },

  // --- Attendance, Pedagogy & Format ---
  {
    id: "faq-10",
    category: "Attendance, Pedagogy & Format",
    question: "What is the mandatory attendance policy?",
    answer: "Participants are required to maintain a minimum of 75% attendance each semester to successfully complete the program. The attendance requirement is split into two components: (1) Synchronous Attendance (60%): Active participation in live weekend virtual lectures, interactive discussions, and faculty Q&A; (2) Asynchronous Engagement (15%): Systematic completion of recorded video archives, asynchronous lab assignments, and digital modules."
  },
  {
    id: "faq-11",
    category: "Attendance, Pedagogy & Format",
    question: "Is the program suitable for working professionals?",
    answer: "Yes, the program is purposely architected for software engineers and IT professionals. Interactive live lectures are held over weekends and select weekday evenings to prevent career disruption. High-definition recordings of every live session are archived on the LMS, supplemented by asynchronous programming labs, continuous mentor support, and flexible project scheduling."
  },
  {
    id: "faq-12",
    category: "Attendance, Pedagogy & Format",
    question: "Is the 7-day on-campus immersion mandatory?",
    answer: "The 7-day residential campus immersion on IIIT Dharwad's permanent 60-acre campus in Dharwad, Karnataka, is an invaluable hands-on component designed to provide face-to-face faculty mentorship, advanced lab workshops, hackathons, and cohort networking. Accommodation and campus facilities are provided. Detailed schedules are announced well in advance so learners can plan their leave."
  },
  {
    id: "faq-13",
    category: "Attendance, Pedagogy & Format",
    question: "How are students evaluated throughout the course?",
    answer: "IIIT Dharwad follows an Outcome-Based continuous assessment model. Students are evaluated through periodic quizzes, hands-on programming assignments, capstone project milestones, and proctored term-end examinations, ensuring continuous learning and mastery of practical engineering competencies."
  },

  // --- Degree, PhD & Career ---
  {
    id: "faq-14",
    category: "Degree, PhD & Career",
    question: "What is the program structure, credit count, and duration?",
    answer: "The program spans 2 academic years (4 semesters) and encompasses 60 credits. The curriculum includes core computer science foundations, discipline electives across chosen specialization tracks, and a 30-credit extensive project sequence (Project I through IV). Multi-exit and re-entry provisions allow students to pause and resume their studies within a maximum of a four-year window."
  },
  {
    id: "faq-15",
    category: "Degree, PhD & Career",
    question: "What multi-exit and certification pathways are available?",
    answer: "The program offers flexible recognition at each stage: (1) PG Diploma in CSE: Awarded upon completing 30 credits (Semester 1 and 2 coursework, if a candidate exits after the first year); (2) M.Tech in CSE: Conferred upon completing the full 60 credits, including all coursework and the 30-credit master's project dissertation."
  },
  {
    id: "faq-16",
    category: "Degree, PhD & Career",
    question: "Is this degree equivalent to a full-time on-campus M.Tech, and am I eligible for a Ph.D.?",
    answer: "Yes. The Master of Technology (M.Tech) in Computer Science & Engineering is conferred by IIIT Dharwad as an Institute of National Importance by an Act of Parliament. It carries statutory parity to full-time postgraduate degrees and fulfills all UGC/AICTE criteria for higher doctoral studies (Ph.D.) in India and abroad."
  },
  {
    id: "faq-17",
    category: "Degree, PhD & Career",
    question: "What alumni privileges do graduates receive?",
    answer: "All graduates are granted full IIIT Dharwad Alumni Status. Privileges include an official Institute Email ID, access to digital library repositories and research databases, inclusion in the global alumni directory, invitations to annual in-person convocations, and lifelong networking with executive computing leaders."
  },
  {
    id: "faq-18",
    category: "Degree, PhD & Career",
    question: "What career opportunities does this program prepare me for?",
    answer: "The M.Tech in CSE prepares graduates for Tier-1 engineering and technical leadership roles, including Principal Systems Architect, Machine Learning / AI Lead, Cloud Infrastructure Director, Cybersecurity Architect, and R&D Engineering Specialist in leading technology corporations, global research labs, and academic institutions."
  }
];

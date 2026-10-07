export interface FaqItem {
  id: string;
  category: "General" | "Admissions & Eligibility" | "Format & Delivery" | "Degree & Immersion";
  question: string;
  answer: string;
}

export const faqsData: FaqItem[] = [
  {
    id: "faq-1",
    category: "General",
    question: "What makes IIIT Dharwad's Hybrid mode M.Tech in CSE distinctive?",
    answer: "IIIT Dharwad is an Institute of National Importance established by the Ministry of Education, Government of India. The Hybrid mode M.Tech in CSE combines the rigorous academic standards of a premier national institution with applied, industry-relevant specializations (AI & ML, Cybersecurity, Cloud Computing). It offers live weekend classes led by doctoral faculty, hands-on enterprise labs, and an impactful 7-day on-campus immersion."
  },
  {
    id: "faq-2",
    category: "Format & Delivery",
    question: "Is this program specifically tailored for working software engineers and tech professionals?",
    answer: "Yes, the curriculum is intentionally structured around the schedules of working professionals. Live interactive classes are conducted over weekends, complemented by high-definition recorded archives, asynchronous assignments, and dedicated virtual mentor hours. This allows learners to earn a full-fledged postgraduate degree without career interruptions."
  },
  {
    id: "faq-3",
    category: "Format & Delivery",
    question: "How is the program delivered and what does the 7-day campus immersion entail?",
    answer: "The program follows an interactive hybrid model: synchronous weekend live virtual lectures, hands-on coding labs, and self-paced digital courseware. Towards the later part of the program, participants attend a 7-day residential immersion on the scenic 60-acre IIIT Dharwad campus in Sattur Colony, participating in advanced lab workshops, hackathons, face-to-face faculty mentorship, and networking banquets."
  },
  {
    id: "faq-4",
    category: "Admissions & Eligibility",
    question: "What are the eligibility criteria for applying to the Hybrid mode M.Tech in CSE program?",
    answer: "Candidates must possess a B.Tech / B.E. in any engineering discipline OR an MCA / M.Sc in Computer Science / IT / Mathematics / Statistics with a minimum of 60% marks (or 6.5 CGPA on a 10-point scale). A relaxation to 55% marks (or 6.0 CGPA) is provided for candidates belonging to SC / ST / PwD categories. Candidates must also have relevant professional industry experience."
  },
  {
    id: "faq-5",
    category: "Degree & Immersion",
    question: "What exact degree is awarded upon successful completion?",
    answer: "Learners receive the prestigious Master of Technology (M.Tech) in Computer Science & Engineering degree awarded directly by the Indian Institute of Information Technology Dharwad, complete with official transcripts indicating their chosen domain specialization. It holds the full status, rigor, and validity of an Institute of National Importance degree."
  },
  {
    id: "faq-6",
    category: "Degree & Immersion",
    question: "Do graduates gain official Alumni Status at IIIT Dharwad?",
    answer: "Yes. All successful graduates are inducted into the official IIIT Dharwad Executive Alumni Network, granting lifelong access to the institutional alumni directory, library digital repositories, annual convocations, technical conferences, and a high-impact network of tech leaders across Fortune 500 enterprises."
  },
  {
    id: "faq-7",
    category: "Admissions & Eligibility",
    question: "What is the typical duration and credit structure of the course?",
    answer: "The program spans 2 academic years divided into 4 semesters. Across the 4 semesters, learners complete core computing foundations, elective specialization modules, specialized laboratory assignments, and an extensive industry capstone dissertation project."
  },
  {
    id: "faq-8",
    category: "Admissions & Eligibility",
    question: "Is GATE required for admission into this program?",
    answer: "No, a GATE score is not mandatory for working professionals applying for the Hybrid mode M.Tech in CSE program. Admissions are evaluated based on academic credentials, professional work experience, and performance in an online technical assessment / panel interview."
  }
];

import type { Metadata } from "next";
import "./globals.css";
import AppShell from "@/components/AppShell";

const siteUrl = "https://onlinecse.iiitdwd.ac.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Hybrid mode M.Tech in CSE | IIIT Dharwad",
    template: "%s | IIIT Dharwad Hybrid mode M.Tech in CSE",
  },
  description:
    "Official Hybrid mode M.Tech in CSE from IIIT Dharwad (Institute of National Importance). World-class specializations in AI & Machine Learning, Cybersecurity, and Cloud Systems. Tailored for working tech professionals with weekend live classes and 7-day campus immersion.",
  keywords: [
    "IIIT Dharwad",
    "Hybrid mode M.Tech in CSE",
    "Hybrid M.Tech CSE",
    "M.Tech Computer Science",
    "IIIT Dharwad Hybrid CSE",
    "M.Tech in AI and ML",
    "M.Tech Cybersecurity India",
    "M.Tech Cloud Computing DevOps",
    "M.Tech for Working Professionals",
    "Institute of National Importance M.Tech",
    "AICTE UGC Degree Equivalent",
  ],
  authors: [{ name: "IIIT Dharwad Centre for Continuing Education" }],
  creator: "Indian Institute of Information Technology Dharwad",
  publisher: "IIIT Dharwad",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Hybrid mode M.Tech in CSE | IIIT Dharwad | For Working Professionals",
    description:
      "Transform your career with an Institute of National Importance degree. 60 Academic Credits, 3 In-Demand Tracks (AI/ML, Cyber, Cloud), Live Masterclasses & 7-Day Campus Residency.",
    url: siteUrl,
    siteName: "IIIT Dharwad Hybrid mode M.Tech in CSE",
    images: [
      {
        url: "/images/campus_building_hero.jpg",
        width: 1200,
        height: 630,
        alt: "IIIT Dharwad 60-Acre Campus & Research Building",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hybrid mode M.Tech in CSE | IIIT Dharwad",
    description:
      "2-Year Hybrid Mode Degree for Working Engineers. Specializations in AI/ML, Cybersecurity & Cloud Architecture.",
    images: ["/images/campus_building_hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/logo.webp",
    apple: "/images/logo.webp",
  },
};

const jsonLdOrg = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Indian Institute of Information Technology Dharwad",
  "alternateName": "IIIT Dharwad",
  "url": siteUrl,
  "logo": `${siteUrl}/images/logo.webp`,
  "sameAs": [
    "https://www.youtube.com/@IIIT_Dharwad_Online",
    "https://www.linkedin.com/school/iiitdharwad/",
    "https://iiitdwd.ac.in",
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Ittigatti Road, Near Sattur Colony",
    "addressLocality": "Dharwad",
    "addressRegion": "Karnataka",
    "postalCode": "580009",
    "addressCountry": "IN",
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91 92402 15087",
    "contactType": "admissions",
    "email": "admissions.cse@iiitdwd.ac.in",
    "areaServed": "IN",
    "availableLanguage": ["English", "Hindi"],
  },
};

const jsonLdProgram = {
  "@context": "https://schema.org",
  "@type": "EducationalOccupationalProgram",
  "name": "Executive Master of Technology in Computer Science and Engineering",
  "description":
    "A rigorous 2-year postgraduate degree program blending synchronous weekend masterclasses, practical hands-on labs, and an exclusive 7-day campus immersion at IIIT Dharwad.",
  "provider": {
    "@type": "CollegeOrUniversity",
    "name": "Indian Institute of Information Technology Dharwad",
    "url": siteUrl,
  },
  "timeToComplete": "P2Y",
  "numberOfCredits": 60,
  "educationalCredentialAwarded": "Master of Technology (M.Tech) in Computer Science and Engineering",
  "occupationalCategory": "15-1252.00",
  "hasCourse": [
    {
      "@type": "Course",
      "name": "Specialization in Artificial Intelligence and Machine Learning",
      "description": "Deep Learning, Large Language Models, NLP, Reinforcement Learning, and Computer Vision.",
    },
    {
      "@type": "Course",
      "name": "Specialization in Cybersecurity & Digital Forensics",
      "description": "SOC Operations, Cryptography, Cloud Infrastructure Defense, and Penetration Testing.",
    },
    {
      "@type": "Course",
      "name": "Specialization in Cloud Systems & DevOps Architecture",
      "description": "Microservices, Distributed Systems, Kubernetes Orchestration, and High-Performance Cloud.",
    },
  ],
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is the Hybrid mode M.Tech in CSE from IIIT Dharwad a recognized Master's degree?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. IIIT Dharwad is an Institute of National Importance established by an Act of Parliament (Ministry of Education, Govt. of India). The M.Tech awarded is a full, recognized Master of Technology postgraduate degree equivalent to on-campus degrees and eligible for higher studies (Ph.D.) and global enterprise roles.",
      },
    },
    {
      "@type": "Question",
      "name": "How is the program scheduled for working tech professionals?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The program is engineered specifically for working engineers. All live interactive classes are held on weekends. Lectures are recorded with 24/7 LMS access, accompanied by hands-on cloud labs and a mandatory 7-day residential campus immersion.",
      },
    },
    {
      "@type": "Question",
      "name": "What are the eligibility criteria for admissions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Candidates must possess a B.Tech/B.E. in any discipline, MCA, or M.Sc in Computer Science/IT/Mathematics/Physics/Statistics with at least 50% marks (or equivalent CGPA), along with relevant professional or technical experience.",
      },
    },
    {
      "@type": "Question",
      "name": "Are flexible EMI and corporate fee sponsorship options available?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. 0% interest monthly installment plans (EMIs starting at ₹11,000/month) and corporate sponsorship tax benefit invoices are available for enrolled candidates.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/logo.webp" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProgram) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
        />
      </head>
      <body className="antialiased font-roboto bg-slate-50 text-slate-900 selection:bg-[#193654] selection:text-[#CCE70B]" suppressHydrationWarning>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}

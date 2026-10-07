export interface NewsItem {
  id: string;
  title: string;
  source: string;
  date: string;
  excerpt: string;
  link: string;
  tag: string;
}

export const newsArticles: NewsItem[] = [
  {
    id: "news-1",
    title: "IIIT Dharwad Launches Hybrid mode M.Tech in CSE with Specialisations in AI & ML, Cybersecurity and Cloud Computing",
    source: "The Indian Express",
    date: "January 2026",
    excerpt: "IIIT Dharwad has introduced a new flexible postgraduate degree program tailored for working tech professionals seeking domain mastery in artificial intelligence, cloud infrastructure, and cybersecurity.",
    link: "https://indianexpress.com/article/education/online-mtech-course-aiml-cybersecurity-cloud-computing-jeemain-2026-advanced-10482423/",
    tag: "National Press"
  },
  {
    id: "news-2",
    title: "Executive Education Revolution: How IIIT Dharwad Blends Weekend Virtual Classes with Campus Immersion in Hybrid M.Tech",
    source: "EdTech Insights",
    date: "February 2026",
    excerpt: "Featuring in-depth mentorship by doctoral faculty and on-campus laboratories, the newly unveiled degree enables software engineers to upskill without pausing full-time employment.",
    link: "https://onlinecse.iiitdwd.ac.in",
    tag: "Curriculum Spotlight"
  },
  {
    id: "news-3",
    title: "Bridging India's Tech Talent Gap: Director Prof. Prasanna on the Vision Behind M.Tech CSE",
    source: "Institutional Communique",
    date: "March 2026",
    excerpt: "Prof. S. R. Mahadeva Prasanna emphasizes how applied research, state-of-the-art cloud testbeds, and direct industry collaboration define the program's outcomes.",
    link: "https://onlinecse.iiitdwd.ac.in",
    tag: "Leadership Vision"
  }
];

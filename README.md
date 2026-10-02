# IIIT Dharwad — Executive M.Tech (Online CSE) Portal

A dedicated, self-contained Next.js application replicating and modernizing the Online M.Tech in Computer Science and Engineering portal (`https://onlinecse.iiitdwd.ac.in`) with custom visual identity and enhanced features to prevent copyright conflicts.

## 🚀 Key Features

- **Modern Architecture**: Built with Next.js 15 (App Router), React 19, TypeScript, and Tailwind CSS.
- **Autonomous & Decoupled**: Kept completely isolated from the main institute website (`apps/web`), running on its own dedicated port (`3001`).
- **Comprehensive Academic Catalog**:
  - Detailed 4-semester curriculum for all three specializations:
    - Artificial Intelligence & Machine Learning (`/specializations/aiml`)
    - Cybersecurity & Information Defense (`/specializations/cybersecurity`)
    - Cloud Computing & Distributed Systems (`/specializations/cloud-computing`)
  - Full Master Curriculum table with credit breakdowns (`/curriculum`)
- **Interactive Tools**:
  - **Instant Eligibility Assessment Tool**: Candidate enters degree, graduation marks, and experience for live eligibility verification (`/eligibility`).
  - **Lead Inquiry Desk**: Interactive multi-parameter counseling request desk with automated callback feedback.
  - **Downloadable Syllabus Brochure**: Lead capture modal with instantaneous digital access.
  - **Director's Video & Insights**: Leadership address by Prof. S. R. Mahadeva Prasanna.
  - **Campus Immersion Spotlight**: 7-day residential campus life & lab framework at the 60-acre Dharwad campus.
  - **Categorized FAQs & Media Coverage**: Structured Q&A accordions and press coverage from Indian Express & national media.

## 🛠️ How to Run

### Development Mode:
From the workspace root:
```bash
pnpm run dev:online
```
Or directly from `apps/online-cse`:
```bash
pnpm dev
```
The application will launch at [http://localhost:3001](http://localhost:3001).

### Production Build:
```bash
pnpm run build:online
```
And start:
```bash
pnpm --filter online-cse start
```

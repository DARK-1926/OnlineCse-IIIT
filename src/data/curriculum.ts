export interface CourseItem {
  code?: string;
  type: "Discipline Core" | "Elective" | "Master's Core" | "Project" | "DisCore";
  name: string;
  credits: number | string;
  units: string[];
  note?: string;
  tentativeSem?: string;
}

export interface SemesterData {
  semester: string;
  title: string;
  credits?: number;
  courses: CourseItem[];
}

export interface IndicativeCourse {
  slNo: number;
  code: string;
  title: string;
  credits: number;
  tentativeSem: string;
  syllabusHighlights?: string[];
}

export interface SpecializationCurriculum {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  semesters: SemesterData[];
  indicativeCourses: IndicativeCourse[];
  careerOutcomes: string[];
  skillsGained: string[];
}

export interface MasterCourseStructureRow {
  slNo: number;
  code: string;
  name: string;
  credits: number;
  type: "Discipline Core" | "Elective" | "Master's Core" | "Project";
  faculty?: string;
  note?: string;
}

export interface MasterSemesterStructure {
  semester: string;
  semesterNumber: number;
  totalCredits: number;
  courses: MasterCourseStructureRow[];
}

// =========================================================================
// OFFICIAL OVERALL M.TECH IN CSE COURSE STRUCTURE (PAGE 1 OF DOCUMENT)
// Total Credits: 60 Credits Across 4 Semesters
// =========================================================================
export const masterCourseStructure: MasterSemesterStructure[] = [
  {
    semester: "SEM 1",
    semesterNumber: 1,
    totalCredits: 15,
    courses: [
      {
        slNo: 1,
        code: "CS601",
        name: "Applied Mathematics for Computer Science",
        credits: 3,
        type: "Discipline Core",
      },
      {
        slNo: 2,
        code: "CS602",
        name: "Advanced Data Structures and Algorithms",
        credits: 3,
        type: "Discipline Core",
      },
      {
        slNo: 3,
        code: "CS603",
        name: "Programming Paradigms Lab",
        credits: 2,
        type: "Discipline Core",
      },
      {
        slNo: 4,
        code: "CS651",
        name: "Introduction to AI/ML",
        credits: 1,
        type: "Elective",
        note: "Any two courses (2 credits total)",
      },
      {
        slNo: 5,
        code: "CS652",
        name: "Introduction to Cybersecurity",
        credits: 1,
        type: "Elective",
        note: "Any two courses (2 credits total)",
      },
      {
        slNo: 6,
        code: "CS653",
        name: "Introduction to Cloud Computing",
        credits: 1,
        type: "Elective",
        note: "Any two courses (2 credits total)",
      },
      {
        slNo: 7,
        code: "IC678",
        name: "Introduction to Research",
        credits: 2,
        type: "Master's Core",
      },
      {
        slNo: 8,
        code: "CS696",
        name: "Project-I",
        credits: 3,
        type: "Project",
      },
    ],
  },
  {
    semester: "SEM 2",
    semesterNumber: 2,
    totalCredits: 15,
    courses: [
      {
        slNo: 7,
        code: "CS604",
        name: "Advanced Computing Lab",
        credits: 2,
        type: "Discipline Core",
      },
      {
        slNo: 8,
        code: "IC679",
        name: "Literature Review and Seminar",
        credits: 2,
        type: "Master's Core",
      },
      {
        slNo: 9,
        code: "CS6xx",
        name: "Electives (1/2/3/4 credits)",
        credits: 5,
        type: "Elective",
        note: "Selected from specialization elective basket",
      },
      {
        slNo: 10,
        code: "CS697",
        name: "Project-II",
        credits: 6,
        type: "Project",
      },
    ],
  },
  {
    semester: "SEM 3",
    semesterNumber: 3,
    totalCredits: 15,
    courses: [
      {
        slNo: 11,
        code: "CS6xx",
        name: "Electives (1/2/3/4 credits)",
        credits: 6,
        type: "Elective",
        note: "Selected from specialization elective basket",
      },
      {
        slNo: 12,
        code: "CS698",
        name: "Project-III",
        credits: 9,
        type: "Project",
      },
    ],
  },
  {
    semester: "SEM 4",
    semesterNumber: 4,
    totalCredits: 15,
    courses: [
      {
        slNo: 13,
        code: "CS6xx",
        name: "Electives (1/2/3 credits)",
        credits: 3,
        type: "Elective",
        note: "Selected from specialization elective basket",
      },
      {
        slNo: 14,
        code: "CS699",
        name: "Project-IV",
        credits: 12,
        type: "Project",
      },
    ],
  },
];

// =========================================================================
// SPECIALISATION-WISE INDICATIVE LIST OF COURSES (PAGE 2 OF DOCUMENT)
// =========================================================================

export const aimlIndicativeCourses: IndicativeCourse[] = [
  {
    slNo: 1,
    code: "CS651",
    title: "Introduction to AI/ML",
    credits: 1,
    tentativeSem: "1",
    syllabusHighlights: [
      "Foundations of Machine Intelligence & Search Strategies",
      "Overview of Supervised, Unsupervised & Reinforcement Learning",
      "Model Evaluation Metrics & Practical Python AI Workflows",
    ],
  },
  {
    slNo: 2,
    code: "CS6xx",
    title: "Generative AI",
    credits: 2,
    tentativeSem: "3",
    syllabusHighlights: [
      "Transformer Architectures & Self-Attention Mechanics",
      "Large Language Models (LLMs), Fine-Tuning & Prompt Engineering",
      "Diffusion Models, Variational Autoencoders & Multimodal Synthesis",
    ],
  },
  {
    slNo: 3,
    code: "CS6xx",
    title: "Speech and Natural Language Processing",
    credits: 2,
    tentativeSem: "2",
    syllabusHighlights: [
      "Tokenization, Word Embeddings & Vector Semantics",
      "Sequence-to-Sequence Modeling & Recurrent Neural Frameworks",
      "Speech Recognition, Acoustic Modeling & Text-to-Speech (TTS)",
    ],
  },
  {
    slNo: 4,
    code: "CS6xx",
    title: "Deep Learning",
    credits: 3,
    tentativeSem: "2",
    syllabusHighlights: [
      "Deep Feedforward Networks, Backpropagation & Optimization Dynamics",
      "Convolutional Neural Networks (CNNs) & Residual Architectures",
      "Regularization, Normalization & Distributed PyTorch Training",
    ],
  },
  {
    slNo: 5,
    code: "CS6xx",
    title: "Computer Vision",
    credits: 2,
    tentativeSem: "2/3",
    syllabusHighlights: [
      "Classical Feature Extraction (SIFT, SURF, HOG) & Filtering",
      "Object Detection (YOLO, Faster R-CNN) & Semantic Segmentation",
      "Vision Transformers (ViT) & Real-Time Video Analytics",
    ],
  },
  {
    slNo: 6,
    code: "CS6xx",
    title: "Graph Neural Networks",
    credits: 1,
    tentativeSem: "3/4",
    syllabusHighlights: [
      "Graph Representation & Message Passing Neural Networks (MPNN)",
      "Node Classification, Link Prediction & Graph Convolution (GCN)",
      "Knowledge Graph Embeddings & Graph Attention Networks (GAT)",
    ],
  },
  {
    slNo: 7,
    code: "CS6xx",
    title: "Agentic AI",
    credits: 2,
    tentativeSem: "3/4",
    syllabusHighlights: [
      "Autonomous Agent Architectures & ReAct Decision Frameworks",
      "Multi-Agent Collaboration, Planning & Tool Use Orchestration",
      "Memory Systems, Vector Retrieval (RAG) & Human-in-the-Loop Governance",
    ],
  },
  {
    slNo: 8,
    code: "CS6xx",
    title: "Reinforcement Learning",
    credits: 2,
    tentativeSem: "3",
    syllabusHighlights: [
      "Markov Decision Processes (MDP), Dynamic Programming & Bellman Equations",
      "Model-Free Control: Q-Learning, SARSA & Function Approximation",
      "Deep Reinforcement Learning (DQN, Policy Gradients, PPO, Actor-Critic)",
    ],
  },
  {
    slNo: 9,
    code: "CS6xx",
    title: "Explainable AI (XAI)",
    credits: 1,
    tentativeSem: "3",
    syllabusHighlights: [
      "Post-Hoc Interpretability: SHAP (Shapley Additive exPlanations) & LIME",
      "Attention Visualizations, Integrated Gradients & Saliency Maps",
      "Algorithmic Fairness, Bias Mitigation & Ethical AI Compliance",
    ],
  },
  {
    slNo: 10,
    code: "CS6xx",
    title: "Robotics and AI",
    credits: 2,
    tentativeSem: "4",
    syllabusHighlights: [
      "Robot Kinematics, Dynamics & Sensor Integration (LiDAR, Cameras)",
      "Simultaneous Localization and Mapping (SLAM) & Motion Planning",
      "Deep Reinforcement Learning for Autonomous Robotic Manipulation",
    ],
  },
  {
    slNo: 11,
    code: "CS6xx",
    title: "AI for Financial Analytics",
    credits: 2,
    tentativeSem: "3/4",
    syllabusHighlights: [
      "Algorithmic Trading & High-Frequency Financial Time-Series Forecasting",
      "Credit Risk Assessment, Fraud Detection & Anomaly Recognition",
      "Portfolio Optimization & Financial Sentiment Analysis via LLMs",
    ],
  },
  {
    slNo: 12,
    code: "CS6xx",
    title: "Deep Speech Processing",
    credits: 2,
    tentativeSem: "3/4",
    syllabusHighlights: [
      "End-to-End Speech Recognition (Whisper, Conformer Models)",
      "Audio Signal Processing, Spectrogram Analysis & Voice Synthesis",
      "Speaker Diarization, Keyword Spotting & Multilingual Speech Systems",
    ],
  },
  {
    slNo: 13,
    code: "CS6xx",
    title: "AI for Healthcare Data Analytics",
    credits: 2,
    tentativeSem: "3/4",
    syllabusHighlights: [
      "Medical Image Analysis (MRI, CT, Histopathology) with Vision Models",
      "Clinical NLP on Electronic Health Records (EHR)",
      "Predictive Analytics for Patient Trajectories, Genomics & HIPAA Compliance",
    ],
  },
];

export const cyberIndicativeCourses: IndicativeCourse[] = [
  {
    slNo: 1,
    code: "CS652",
    title: "Introduction to Cybersecurity",
    credits: 1,
    tentativeSem: "1",
    syllabusHighlights: [
      "Threat Landscapes, Attack Vectors & Defense in Depth",
      "Cryptographic Foundations: Symmetric, Asymmetric & Hashes",
      "Identity and Access Management (IAM) & Security Baselines",
    ],
  },
  {
    slNo: 2,
    code: "CS6xx",
    title: "Computer System Security",
    credits: 2,
    tentativeSem: "2",
    syllabusHighlights: [
      "Operating System Hardening, Memory Protection & Buffer Overflow Exploits",
      "Access Control Models (RBAC, ABAC, MAC) & Privilege Separation",
      "Kernel Security, Secure Boot & Hardware Security Modules (TPM/HSM)",
    ],
  },
  {
    slNo: 3,
    code: "CS6xx",
    title: "Security in Cloud Computing",
    credits: 2,
    tentativeSem: "3",
    syllabusHighlights: [
      "Cloud Shared Responsibility & Multi-Tenant Isolation Architectures",
      "Container & Kubernetes Hardening (Cilium, Falco, OPA Gatekeeper)",
      "Cloud Security Posture Management (CSPM) & Cloud Infrastructure Entitlement",
    ],
  },
  {
    slNo: 4,
    code: "CS6xx",
    title: "AI for Cybersecurity",
    credits: 3,
    tentativeSem: "3",
    syllabusHighlights: [
      "Machine Learning for Intrusion Detection Systems (IDS/IPS)",
      "Automated Malware Classification & Behavioral Sandboxing",
      "Adversarial Machine Learning: Evasion, Poisoning & Model Hardening",
    ],
  },
  {
    slNo: 5,
    code: "CS6xx",
    title: "Biometric Security and Forensics",
    credits: 3,
    tentativeSem: "4",
    syllabusHighlights: [
      "Biometric Modalities (Fingerprint, Facial, Iris, Behavioral Biometrics)",
      "Anti-Spoofing & Liveness Detection Mechanisms",
      "Biometric Template Protection & Cancelable Biometric Cryptosystems",
    ],
  },
  {
    slNo: 6,
    code: "CS6xx",
    title: "Forensic Data Recovery",
    credits: 2,
    tentativeSem: "4",
    syllabusHighlights: [
      "File System Structures (NTFS, EXT4, APFS) & Deleted File Carving",
      "Volatile Memory Forensics & RAM Extraction Techniques",
      "Chain of Custody, Digital Evidence Preservation & Expert Testimony",
    ],
  },
  {
    slNo: 7,
    code: "CS6xx",
    title: "Deep Learning",
    credits: 3,
    tentativeSem: "2",
    syllabusHighlights: [
      "Deep Neural Networks, Optimization & Loss Landscapes",
      "Sequence Modeling & Graph Neural Models for Cyber Telemetry",
      "Generative Models for Synthetic Threat Generation & Defense Testing",
    ],
  },
  {
    slNo: 8,
    code: "CS6xx",
    title: "DevSecOps",
    credits: 3,
    tentativeSem: "3/4",
    syllabusHighlights: [
      "Shift-Left Security: SAST, DAST, SCA & Secret Scanning in CI/CD",
      "Infrastructure as Code (IaC) Security Auditing with Checkov & Trivy",
      "Automated Compliance as Code & Policy Enforcement (Open Policy Agent)",
    ],
  },
];

export const cloudIndicativeCourses: IndicativeCourse[] = [
  {
    slNo: 1,
    code: "CS653",
    title: "Introduction to Cloud Computing",
    credits: 1,
    tentativeSem: "1",
    syllabusHighlights: [
      "Cloud Computing Paradigms, Virtualization & Elasticity",
      "Service Models (IaaS, PaaS, SaaS) & Cloud Economic Models",
      "Multi-Region Architecture & Global Infrastructure Overview",
    ],
  },
  {
    slNo: 2,
    code: "CS6xx",
    title: "Distributed and Parallel Systems",
    credits: 3,
    tentativeSem: "2",
    syllabusHighlights: [
      "Distributed Clocks, Mutual Exclusion & Consistency Models",
      "Consensus Protocols: Paxos, Raft & Byzantine Fault Tolerance",
      "Parallel Programming Paradigms (MPI, OpenMP, CUDA) & Scalability",
    ],
  },
  {
    slNo: 3,
    code: "CS6xx",
    title: "Security in Cloud Computing",
    credits: 2,
    tentativeSem: "3",
    syllabusHighlights: [
      "Zero Trust Architecture in Public/Private Clouds",
      "Identity Federation, OAuth2/OIDC & KMS Envelope Encryption",
      "Network Microsegmentation, Service Meshes & Cloud Incident Response",
    ],
  },
  {
    slNo: 4,
    code: "CS6xx",
    title: "High Performance Computer Architecture",
    credits: 2,
    tentativeSem: "3",
    syllabusHighlights: [
      "Instruction-Level Parallelism, Superscalar Execution & Branch Prediction",
      "Memory Hierarchy Design, Cache Coherence & NUMA Systems",
      "Accelerators (GPUs, TPUs, FPGAs) for High-Throughput Cloud Computing",
    ],
  },
  {
    slNo: 5,
    code: "CS6xx",
    title: "Site Reliability Engineering in Cloud Computing",
    credits: 2,
    tentativeSem: "3",
    syllabusHighlights: [
      "Service Level Objectives (SLOs), SLIs & Error Budget Management",
      "Automated Incident Response, Postmortems & Chaos Engineering",
      "Distributed Telemetry, Distributed Tracing (OpenTelemetry) & Alerting",
    ],
  },
  {
    slNo: 6,
    code: "CS6xx",
    title: "Big Data Systems",
    credits: 3,
    tentativeSem: "4",
    syllabusHighlights: [
      "Distributed Storage Systems (HDFS, Ceph, Amazon S3 Architecture)",
      "Batch & Stream Processing (Apache Spark, Apache Flink, Kafka)",
      "Distributed NoSQL & NewSQL Databases (Cassandra, Spanner, ClickHouse)",
    ],
  },
  {
    slNo: 7,
    code: "CS6xx",
    title: "Edge AI",
    credits: 2,
    tentativeSem: "4",
    syllabusHighlights: [
      "Edge Computing Topology, Fog Architectures & 5G Integration",
      "Model Quantization, Pruning & Knowledge Distillation (TensorRT, ONNX)",
      "Federated Learning, Privacy-Preserving ML & Embedded System Deployment",
    ],
  },
];

// =========================================================================
// SPECIALIZATION COMPLETE CURRICULUM OBJECTS (INTEGRATED 4 SEMESTERS)
// =========================================================================

export const aimlCurriculum: SpecializationCurriculum = {
  id: "aiml",
  name: "M.Tech in CSE (AI & ML)",
  shortName: "AI & ML",
  tagline: "Pioneer Intelligent Systems, Deep Learning & Autonomous Technologies",
  description: "Gain rigorous theoretical foundations and industrial-strength mastery of machine learning algorithms, probabilistic modeling, deep neural networks, computer vision, agentic systems, and generative AI.",
  careerOutcomes: [
    "Machine Learning Architect / Lead",
    "Generative AI & LLM Systems Engineer",
    "Applied Research Scientist (AI/ML)",
    "Computer Vision & NLP Specialist",
    "Senior Data & AI Platform Strategist",
  ],
  skillsGained: [
    "Deep Learning & Transformers",
    "Generative AI, LLMs & Agentic AI",
    "Computer Vision & Natural Language Processing",
    "Reinforcement Learning & Autonomous Agents",
    "Explainable AI (XAI) & Ethical Governance",
  ],
  indicativeCourses: aimlIndicativeCourses,
  semesters: [
    {
      semester: "Semester 1",
      title: "Core Foundations, Programming Paradigms & Research Kickoff",
      credits: 15,
      courses: [
        {
          code: "CS601",
          type: "Discipline Core",
          name: "Applied Mathematics for Computer Science",
          credits: 3,
          units: [
            "Unit 1: Linear Algebra, Vector Spaces & Matrix Factorizations",
            "Unit 2: Convex & Non-Convex Optimization, Gradient Descent Variants",
            "Unit 3: Probability Theory, Distributions & Stochastic Processes",
          ],
        },
        {
          code: "CS602",
          type: "Discipline Core",
          name: "Advanced Data Structures and Algorithms",
          credits: 3,
          units: [
            "Unit 1: Asymptotic Analysis & Growth Functions",
            "Unit 2: Balanced Search Trees, Multi-way Search Trees & Priority Queues",
            "Unit 3: Advanced Graph Algorithms & Network Flows",
            "Unit 4: Dynamic Programming & Randomized Algorithms",
            "Unit 5: Intractability, P vs NP & Approximation Algorithms",
          ],
        },
        {
          code: "CS603",
          type: "Discipline Core",
          name: "Programming Paradigms Lab",
          credits: 2,
          units: [
            "Unit 1: Modern Systems Programming & Memory Management",
            "Unit 2: Object-Oriented Software Design Patterns",
            "Unit 3: Functional & Reactive Programming Paradigms",
            "Unit 4: Multithreaded Concurrency & Asynchronous Pipelines",
          ],
        },
        {
          code: "CS651",
          type: "Elective",
          name: "Introduction to AI/ML",
          credits: 1,
          note: "Elective Basket (Any two courses: 2 credits total)",
          units: [
            "Unit 1: Heuristic Search & Constraint Satisfaction Problems",
            "Unit 2: Machine Learning Fundamentals & Supervised Learning",
            "Unit 3: Overview of Unsupervised Learning & Evaluation Metrics",
          ],
        },
        {
          code: "CS652",
          type: "Elective",
          name: "Introduction to Cybersecurity",
          credits: 1,
          note: "Elective Basket (Any two courses: 2 credits total)",
          units: [
            "Unit 1: Attack Vectors & Defense in Depth",
            "Unit 2: Cryptographic Foundations & Identity Access Management",
          ],
        },
        {
          code: "CS653",
          type: "Elective",
          name: "Introduction to Cloud Computing",
          credits: 1,
          note: "Elective Basket (Any two courses: 2 credits total)",
          units: [
            "Unit 1: Distributed Infrastructure & Virtualization Principles",
            "Unit 2: Cloud Computing Service Models (IaaS, PaaS, SaaS)",
          ],
        },
        {
          code: "IC678",
          type: "Master's Core",
          name: "Introduction to Research",
          credits: 2,
          units: [
            "Unit 1: Research Formulation & Systematic Literature Surveys",
            "Unit 2: Experimental Design, Hypothesis Testing & Quantitative Validation",
            "Unit 3: Scientific Writing, Ethics, Peer Review & Patenting",
          ],
        },
        {
          code: "CS696",
          type: "Project",
          name: "Project-I",
          credits: 3,
          units: [
            "Unit 1: Problem Definition & Domain Literature Survey with Faculty Advisor",
            "Unit 2: Feasibility Study, Technical Specifications & Architecture Design",
            "Unit 3: Phase-I Milestone Presentation & Progress Review",
          ],
        },
      ],
    },
    {
      semester: "Semester 2",
      title: "Advanced Computing, Specialization Electives & Research Seminar",
      credits: 15,
      courses: [
        {
          code: "CS604",
          type: "Discipline Core",
          name: "Advanced Computing Lab",
          credits: 2,
          units: [
            "Unit 1: High-Performance Parallel Computing & GPU Programming",
            "Unit 2: Containerized Workloads & Distributed Execution Environments",
            "Unit 3: Profiling, Benchmarking & Computing Optimization",
          ],
        },
        {
          code: "IC679",
          type: "Master's Core",
          name: "Literature Review and Seminar",
          credits: 2,
          units: [
            "Unit 1: In-depth Critical Survey of State-of-the-Art Research Papers",
            "Unit 2: Seminar Presentation, Technical Discourse & Peer Review",
            "Unit 3: Comprehensive Literature Review Synthesis Report",
          ],
        },
        {
          code: "CS6xx",
          type: "Elective",
          name: "Deep Learning (Specialization Elective)",
          credits: 3,
          tentativeSem: "2",
          units: [
            "Unit 1: Feedforward Networks, Backpropagation & Loss Optimization",
            "Unit 2: Convolutional Neural Networks (CNNs) & ResNets",
            "Unit 3: Recurrent & Attention Architectures for Sequences",
            "Unit 4: Distributed PyTorch / TensorFlow Model Training",
          ],
        },
        {
          code: "CS6xx",
          type: "Elective",
          name: "Speech and Natural Language Processing (Specialization Elective)",
          credits: 2,
          tentativeSem: "2",
          units: [
            "Unit 1: Tokenization, Word Embeddings & Vector Semantics",
            "Unit 2: Transformer Architectures & Self-Attention",
            "Unit 3: Speech Recognition & Acoustic Feature Modeling",
          ],
        },
        {
          code: "CS697",
          type: "Project",
          name: "Project-II",
          credits: 6,
          units: [
            "Unit 1: Core Algorithm Implementation & Prototype Development",
            "Unit 2: Baseline Model Formulation & Experimental Testbed Setup",
            "Unit 3: Mid-Project Progress Evaluation & Technical Demonstration",
          ],
        },
      ],
    },
    {
      semester: "Semester 3",
      title: "Advanced Specialization Electives & Substantial Project Execution",
      credits: 15,
      courses: [
        {
          code: "CS6xx",
          type: "Elective",
          name: "Generative AI (Specialization Elective)",
          credits: 2,
          tentativeSem: "3",
          units: [
            "Unit 1: Transformer Foundations & Attention Dynamics",
            "Unit 2: Large Language Models (LLMs), Instruction Tuning & LoRA",
            "Unit 3: Diffusion Models, Multimodal Generative Architectures",
          ],
        },
        {
          code: "CS6xx",
          type: "Elective",
          name: "Reinforcement Learning (Specialization Elective)",
          credits: 2,
          tentativeSem: "3",
          units: [
            "Unit 1: Markov Decision Processes (MDP) & Bellman Optimality",
            "Unit 2: Model-Free Control: Q-Learning & SARSA",
            "Unit 3: Deep RL: DQN, Policy Gradients (PPO) & Actor-Critic",
          ],
        },
        {
          code: "CS6xx",
          type: "Elective",
          name: "Computer Vision / Agentic AI / XAI (Elective Basket)",
          credits: 2,
          tentativeSem: "3",
          units: [
            "Option A: Computer Vision (Object Detection, Segmentation, ViTs)",
            "Option B: Agentic AI (Multi-Agent Workflows, Tool Use, RAG)",
            "Option C: Explainable AI & Graph Neural Networks",
          ],
        },
        {
          code: "CS698",
          type: "Project",
          name: "Project-III",
          credits: 9,
          units: [
            "Unit 1: Substantial Scale-Up & Model Architectural Refinements",
            "Unit 2: Rigorous Empirical Evaluation Against Benchmark Datasets",
            "Unit 3: Interim Defense, Peer Review & Pre-Publication Drafting",
          ],
        },
      ],
    },
    {
      semester: "Semester 4",
      title: "Cap-Elective Mastery & Major Project Dissertation",
      credits: 15,
      courses: [
        {
          code: "CS6xx",
          type: "Elective",
          name: "Robotics and AI / Domain AI Analytics (Elective)",
          credits: 3,
          tentativeSem: "4",
          units: [
            "Option A: Robotics and AI (SLAM, Kinematics, Autonomous Control - 2 Cr) + GNN (1 Cr)",
            "Option B: AI for Financial Analytics / Healthcare Analytics (2 Cr) + GNN (1 Cr)",
            "Option C: Deep Speech Processing (2 Cr) + Explainable AI (1 Cr)",
          ],
        },
        {
          code: "CS699",
          type: "Project",
          name: "Project-IV (Final Dissertation & Defense)",
          credits: 12,
          units: [
            "Unit 1: Full-Scale Production Implementation & Performance Benchmarking",
            "Unit 2: Comprehensive Experimental Validation & Ablation Studies",
            "Unit 3: M.Tech Research Dissertation Drafting & Publication Submission",
            "Unit 4: Final Formal Defense & Viva-Voce before Academic Examination Board",
          ],
        },
      ],
    },
  ],
};

export const cyberCurriculum: SpecializationCurriculum = {
  id: "cybersecurity",
  name: "M.Tech in CSE (CyberSecurity)",
  shortName: "CyberSecurity",
  tagline: "Safeguard Digital Frontiers, Cryptography & Resilient Architectures",
  description: "Master modern cryptographic foundations, enterprise threat modeling, system defense, reverse engineering, ethical penetration testing, biometric forensics, DevSecOps, and cloud security governance.",
  careerOutcomes: [
    "Chief Information Security Officer (CISO) Track",
    "Security Architect / Cloud Security Director",
    "Principal Penetration Tester & Red Teamer",
    "Threat Intelligence & Incident Response Lead",
    "DevSecOps & Cyber Defense Operations Manager",
  ],
  skillsGained: [
    "Applied Cryptography & Zero-Trust Architecture",
    "Computer System Security & Kernel Hardening",
    "AI for Cybersecurity & Behavioral Threat Analytics",
    "Biometric Security & Digital Forensics",
    "Cloud Security, Container Defense & DevSecOps",
  ],
  indicativeCourses: cyberIndicativeCourses,
  semesters: [
    {
      semester: "Semester 1",
      title: "Core Foundations, Programming Paradigms & Research Kickoff",
      credits: 15,
      courses: [
        {
          code: "CS601",
          type: "Discipline Core",
          name: "Applied Mathematics for Computer Science",
          credits: 3,
          units: [
            "Unit 1: Linear Algebra, Matrix Factorizations & Vector Spaces",
            "Unit 2: Discrete Mathematics, Number Theory & Group Theory",
            "Unit 3: Probability, Random Variables & Stochastic Processes",
          ],
        },
        {
          code: "CS602",
          type: "Discipline Core",
          name: "Advanced Data Structures and Algorithms",
          credits: 3,
          units: [
            "Unit 1: Asymptotic Complexity & Amortized Analysis",
            "Unit 2: Cryptographic Data Structures, Merkle Trees & Balanced Trees",
            "Unit 3: Advanced Graph Theory & Network Flow Algorithms",
            "Unit 4: Approximation & Randomized Algorithms",
          ],
        },
        {
          code: "CS603",
          type: "Discipline Core",
          name: "Programming Paradigms Lab",
          credits: 2,
          units: [
            "Unit 1: Low-Level C/C++ Systems Programming & Memory Security",
            "Unit 2: Object-Oriented Architecture & Secure Coding Patterns",
            "Unit 3: Concurrency, Thread Safety & Race Condition Mitigation",
          ],
        },
        {
          code: "CS652",
          type: "Elective",
          name: "Introduction to Cybersecurity",
          credits: 1,
          note: "Elective Basket (Any two courses: 2 credits total)",
          units: [
            "Unit 1: Threat Landscapes, Attack Vectors & Defense in Depth",
            "Unit 2: Symmetric & Asymmetric Cryptography Basics",
            "Unit 3: Security Policies, Baselines & Compliance Standards",
          ],
        },
        {
          code: "CS651",
          type: "Elective",
          name: "Introduction to AI/ML",
          credits: 1,
          note: "Elective Basket (Any two courses: 2 credits total)",
          units: [
            "Unit 1: Machine Learning Overview & Cognitive Systems",
            "Unit 2: Supervised Classification & Evaluation Metrics",
          ],
        },
        {
          code: "CS653",
          type: "Elective",
          name: "Introduction to Cloud Computing",
          credits: 1,
          note: "Elective Basket (Any two courses: 2 credits total)",
          units: [
            "Unit 1: Virtualization Technologies & Multi-Tenancy",
            "Unit 2: Cloud Infrastructure & Shared Responsibility Model",
          ],
        },
        {
          code: "IC678",
          type: "Master's Core",
          name: "Introduction to Research",
          credits: 2,
          units: [
            "Unit 1: Research Methodology & Systematic Vulnerability Studies",
            "Unit 2: Experimental Threat Modeling & Empirical Security Analysis",
            "Unit 3: Technical Writing, Ethics, CVE Disclosures & Peer Review",
          ],
        },
        {
          code: "CS696",
          type: "Project",
          name: "Project-I",
          credits: 3,
          units: [
            "Unit 1: Cybersecurity Problem Definition & Threat Landscape Survey",
            "Unit 2: Security Architecture Specification & Attack Surface Mapping",
            "Unit 3: Phase-I Progress Review & Security Model Presentation",
          ],
        },
      ],
    },
    {
      semester: "Semester 2",
      title: "Advanced Systems Lab, Deep Learning & System Security",
      credits: 15,
      courses: [
        {
          code: "CS604",
          type: "Discipline Core",
          name: "Advanced Computing Lab",
          credits: 2,
          units: [
            "Unit 1: Vulnerability Assessment Lab & Exploit Development",
            "Unit 2: Network Traffic Capture, Wireshark & Packet Dissection",
            "Unit 3: Container Security Sandboxing & Firewall Configuration",
          ],
        },
        {
          code: "IC679",
          type: "Master's Core",
          name: "Literature Review and Seminar",
          credits: 2,
          units: [
            "Unit 1: Review of Top Security Research Papers (IEEE S&P, ACM CCS, USENIX)",
            "Unit 2: Seminar Presentation on Contemporary Cyber Attack Vectors",
            "Unit 3: Comprehensive Analytical Survey Report",
          ],
        },
        {
          code: "CS6xx",
          type: "Elective",
          name: "Deep Learning (Specialization Elective)",
          credits: 3,
          tentativeSem: "2",
          units: [
            "Unit 1: Deep Neural Networks & Representation Learning",
            "Unit 2: CNNs, RNNs & Attention for Telemetry Anomaly Detection",
            "Unit 3: PyTorch Model Training & Adversarial Robustness",
          ],
        },
        {
          code: "CS6xx",
          type: "Elective",
          name: "Computer System Security (Specialization Elective)",
          credits: 2,
          tentativeSem: "2",
          units: [
            "Unit 1: OS Hardening, Memory Protection (ASLR, DEP) & ROP Exploits",
            "Unit 2: Kernel Security, Privilege Separation & Mandatory Access Control",
            "Unit 3: Secure Enclaves & Hardware Security Modules (TPM/HSM)",
          ],
        },
        {
          code: "CS697",
          type: "Project",
          name: "Project-II",
          credits: 6,
          units: [
            "Unit 1: Core Defense / Detection Framework Implementation",
            "Unit 2: Testbed Deployment in Isolated Lab Environment",
            "Unit 3: Mid-Project Security Evaluation & Demonstration",
          ],
        },
      ],
    },
    {
      semester: "Semester 3",
      title: "AI Security, Cloud Defense, DevSecOps & Advanced Project",
      credits: 15,
      courses: [
        {
          code: "CS6xx",
          type: "Elective",
          name: "AI for Cybersecurity (Specialization Elective)",
          credits: 3,
          tentativeSem: "3",
          units: [
            "Unit 1: ML-Powered Intrusion Detection Systems (IDS/IPS)",
            "Unit 2: Automated Malware Classification & Behavioral Analysis",
            "Unit 3: Adversarial Machine Learning & Defense Mechanisms",
          ],
        },
        {
          code: "CS6xx",
          type: "Elective",
          name: "Security in Cloud Computing (Specialization Elective)",
          credits: 2,
          tentativeSem: "3",
          units: [
            "Unit 1: Zero Trust Cloud Architectures & Identity Federation",
            "Unit 2: Container & Kubernetes Security (Cilium, Falco, OPA)",
            "Unit 3: Cloud Incident Response & KMS Cryptographic Envelope",
          ],
        },
        {
          code: "CS6xx",
          type: "Elective",
          name: "DevSecOps / Security Elective",
          credits: 1,
          tentativeSem: "3/4",
          units: [
            "Unit 1: CI/CD Security Pipeline Integration (SAST, DAST, SCA)",
            "Unit 2: Infrastructure as Code (IaC) Scanning & Policy as Code",
          ],
        },
        {
          code: "CS698",
          type: "Project",
          name: "Project-III",
          credits: 9,
          units: [
            "Unit 1: Comprehensive Security System Scale-Up & Stress Testing",
            "Unit 2: Rigorous Red-Team vs Blue-Team Experimental Evaluation",
            "Unit 3: Interim Dissertation Defense & Paper Drafting",
          ],
        },
      ],
    },
    {
      semester: "Semester 4",
      title: "Forensics, Biometrics & Major Project Defense",
      credits: 15,
      courses: [
        {
          code: "CS6xx",
          type: "Elective",
          name: "Biometric Security and Forensics (Elective)",
          credits: 3,
          tentativeSem: "4",
          units: [
            "Unit 1: Biometric Modalities & Anti-Spoofing Liveness Checks",
            "Unit 2: Digital Forensics & Forensic Data Recovery Techniques",
            "Unit 3: Evidence Chain of Custody & Legal Compliance Standards",
          ],
        },
        {
          code: "CS699",
          type: "Project",
          name: "Project-IV (Final Dissertation & Defense)",
          credits: 12,
          units: [
            "Unit 1: End-to-End Enterprise Cyber Defense Solution Deployment",
            "Unit 2: Rigorous Benchmark Verification & Vulnerability Proofing",
            "Unit 3: M.Tech Dissertation Preparation & Publication Submission",
            "Unit 4: Final Formal Defense & Examination Committee Review",
          ],
        },
      ],
    },
  ],
};

export const cloudCurriculum: SpecializationCurriculum = {
  id: "cloud-computing",
  name: "M.Tech in CSE (Cloud Computing & Distributed Systems)",
  shortName: "Cloud Computing",
  tagline: "Architect Resilient, Scalable & High-Concurrency Cloud Ecosystems",
  description: "Acquire enterprise mastery of distributed consensus, cloud-native virtualization, Kubernetes orchestration, serverless paradigms, high performance architectures, site reliability engineering, and big data systems.",
  careerOutcomes: [
    "Principal Cloud Architect",
    "Director of Site Reliability Engineering (SRE)",
    "Distributed Systems Engineering Specialist",
    "DevOps & Infrastructure Automation Lead",
    "Enterprise Solutions Consultant",
  ],
  skillsGained: [
    "Distributed Consensus (Raft, Paxos) & CAP Theorem",
    "High Performance Computer Architecture & Parallelism",
    "Site Reliability Engineering (SRE) & Chaos Testing",
    "Cloud Security & Zero-Trust Governance",
    "Big Data Systems (Spark, Kafka) & Edge AI",
  ],
  indicativeCourses: cloudIndicativeCourses,
  semesters: [
    {
      semester: "Semester 1",
      title: "Core Foundations, Systems Modeling & Research Kickoff",
      credits: 15,
      courses: [
        {
          code: "CS601",
          type: "Discipline Core",
          name: "Applied Mathematics for Computer Science",
          credits: 3,
          units: [
            "Unit 1: Linear Algebra, Vector Spaces & Matrix Decomposition",
            "Unit 2: Convex Optimization & Numerical Algorithms",
            "Unit 3: Probability, Queueing Theory & Performance Modeling",
          ],
        },
        {
          code: "CS602",
          type: "Discipline Core",
          name: "Advanced Data Structures and Algorithms",
          credits: 3,
          units: [
            "Unit 1: Asymptotic Analysis & Scalable Data Structures",
            "Unit 2: Consistent Hashing, Bloom Filters & LSM Trees",
            "Unit 3: Distributed Graph Algorithms & Shortest Path Topologies",
            "Unit 4: Approximation Algorithms & Intractability",
          ],
        },
        {
          code: "CS603",
          type: "Discipline Core",
          name: "Programming Paradigms Lab",
          credits: 2,
          units: [
            "Unit 1: Concurrent Go & C++ Systems Programming",
            "Unit 2: Asynchronous Event-Driven Architectures",
            "Unit 3: Linux Kernel Namespaces, cgroups & Container Internals",
          ],
        },
        {
          code: "CS653",
          type: "Elective",
          name: "Introduction to Cloud Computing",
          credits: 1,
          note: "Elective Basket (Any two courses: 2 credits total)",
          units: [
            "Unit 1: Virtualization Paradigms, Hypervisors & Containers",
            "Unit 2: Cloud Computing Service Models (IaaS, PaaS, SaaS)",
            "Unit 3: Multi-Region Architecture & Global Infrastructure Basics",
          ],
        },
        {
          code: "CS651",
          type: "Elective",
          name: "Introduction to AI/ML",
          credits: 1,
          note: "Elective Basket (Any two courses: 2 credits total)",
          units: [
            "Unit 1: Heuristic Search & Machine Learning Fundamentals",
            "Unit 2: Supervised Learning Models & Evaluation Metrics",
          ],
        },
        {
          code: "CS652",
          type: "Elective",
          name: "Introduction to Cybersecurity",
          credits: 1,
          note: "Elective Basket (Any two courses: 2 credits total)",
          units: [
            "Unit 1: Cloud Attack Surfaces & Defense in Depth",
            "Unit 2: Cryptographic Foundations & Identity Access",
          ],
        },
        {
          code: "IC678",
          type: "Master's Core",
          name: "Introduction to Research",
          credits: 2,
          units: [
            "Unit 1: Research Methodology in Distributed Infrastructure",
            "Unit 2: Empirical Performance Benchmarking & Load Profiling",
            "Unit 3: Scientific Documentation, Patenting & Publication Standards",
          ],
        },
        {
          code: "CS696",
          type: "Project",
          name: "Project-I",
          credits: 3,
          units: [
            "Unit 1: Cloud Architecture Problem Formulation & Literature Review",
            "Unit 2: High-Level Distributed System Design & Feasibility Analysis",
            "Unit 3: Phase-I Progress Review & Architectural Blueprint Presentation",
          ],
        },
      ],
    },
    {
      semester: "Semester 2",
      title: "Advanced Systems Lab, Distributed Systems & Research Seminar",
      credits: 15,
      courses: [
        {
          code: "CS604",
          type: "Discipline Core",
          name: "Advanced Computing Lab",
          credits: 2,
          units: [
            "Unit 1: Multi-Node Kubernetes Cluster Deployment & Helm Charts",
            "Unit 2: Distributed Message Brokers (Kafka, RabbitMQ) Configuration",
            "Unit 3: Infrastructure as Code (Terraform) & Continuous Delivery",
          ],
        },
        {
          code: "IC679",
          type: "Master's Core",
          name: "Literature Review and Seminar",
          credits: 2,
          units: [
            "Unit 1: Survey of Seminal Distributed Systems Papers (OSDI, SOSP, NSDI)",
            "Unit 2: Seminar Presentation on Modern Cloud-Native Frameworks",
            "Unit 3: Critical Synthesis & State-of-the-Art Evaluation",
          ],
        },
        {
          code: "CS6xx",
          type: "Elective",
          name: "Distributed and Parallel Systems (Specialization Elective)",
          credits: 3,
          tentativeSem: "2",
          units: [
            "Unit 1: Logical Clocks, Vector Timestamps & Ordering",
            "Unit 2: Distributed Consensus Protocols: Paxos, Raft & 2PC",
            "Unit 3: Parallel Programming Models (MPI, OpenMP, CUDA)",
          ],
        },
        {
          code: "CS6xx",
          type: "Elective",
          name: "Cloud-Native Infrastructure & Microservices (Elective)",
          credits: 2,
          tentativeSem: "2",
          units: [
            "Unit 1: Microservices Architecture, API Gateways & gRPC",
            "Unit 2: Service Meshes (Istio, Envoy) & Distributed Routing",
          ],
        },
        {
          code: "CS697",
          type: "Project",
          name: "Project-II",
          credits: 6,
          units: [
            "Unit 1: Distributed Prototype Implementation & Service Integration",
            "Unit 2: Multi-Container Testbed Setup & Failover Verification",
            "Unit 3: Mid-Project Review & Technical Demonstration",
          ],
        },
      ],
    },
    {
      semester: "Semester 3",
      title: "Cloud Security, HPCA, SRE & Scaled Project",
      credits: 15,
      courses: [
        {
          code: "CS6xx",
          type: "Elective",
          name: "Security in Cloud Computing (Specialization Elective)",
          credits: 2,
          tentativeSem: "3",
          units: [
            "Unit 1: Zero Trust Architecture in Public/Private Clouds",
            "Unit 2: Container & Kubernetes Isolation, Cilium & Falco",
            "Unit 3: Cloud Cryptography, KMS & Incident Response",
          ],
        },
        {
          code: "CS6xx",
          type: "Elective",
          name: "High Performance Computer Architecture (Elective)",
          credits: 2,
          tentativeSem: "3",
          units: [
            "Unit 1: Instruction-Level Parallelism, Superscalar Execution & Branch Prediction",
            "Unit 2: Memory Hierarchy, Cache Coherence & NUMA Systems",
            "Unit 3: Cloud Accelerators (GPUs, TPUs, SmartNICs)",
          ],
        },
        {
          code: "CS6xx",
          type: "Elective",
          name: "Site Reliability Engineering in Cloud Computing (Elective)",
          credits: 2,
          tentativeSem: "3",
          units: [
            "Unit 1: SLOs, SLIs & Error Budget Management",
            "Unit 2: Automated Incident Response & Chaos Engineering Experiments",
            "Unit 3: Distributed Observability (OpenTelemetry, Prometheus, Grafana)",
          ],
        },
        {
          code: "CS698",
          type: "Project",
          name: "Project-III",
          credits: 9,
          units: [
            "Unit 1: Production-Scale Distributed Architecture Deployment",
            "Unit 2: Chaos Injection, Scalability & Stress Benchmark Testing",
            "Unit 3: Interim Defense & Technical Paper Drafting",
          ],
        },
      ],
    },
    {
      semester: "Semester 4",
      title: "Big Data, Edge AI & Major Project Defense",
      credits: 15,
      courses: [
        {
          code: "CS6xx",
          type: "Elective",
          name: "Big Data Systems / Edge AI (Specialization Elective)",
          credits: 3,
          tentativeSem: "4",
          units: [
            "Option A: Big Data Systems (HDFS, Spark, Kafka, Distributed DBs - 3 Cr)",
            "Option B: Edge AI (Model Quantization, TensorRT, Embedded ML - 2 Cr) + Cloud Elective (1 Cr)",
          ],
        },
        {
          code: "CS699",
          type: "Project",
          name: "Project-IV (Final Dissertation & Defense)",
          credits: 12,
          units: [
            "Unit 1: Enterprise-Scale Distributed Solution Implementation",
            "Unit 2: Comprehensive Multi-Region Benchmark & Fault Recovery Testing",
            "Unit 3: Dissertation Finalization & Academic Conference Submission",
            "Unit 4: Final Formal Defense & Examination Board Evaluation",
          ],
        },
      ],
    },
  ],
};

export const specializationsList: SpecializationCurriculum[] = [
  aimlCurriculum,
  cyberCurriculum,
  cloudCurriculum,
];

export interface CourseItem {
  type: "DisCore" | "Elective" | "Master's Core" | "Project";
  name: string;
  credits: number | string;
  units: string[];
}

export interface SemesterData {
  semester: string;
  title: string;
  courses: CourseItem[];
}

export interface SpecializationCurriculum {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  semesters: SemesterData[];
  careerOutcomes: string[];
  skillsGained: string[];
}

export const aimlCurriculum: SpecializationCurriculum = {
  id: "aiml",
  name: "M.Tech in CSE (Artificial Intelligence & Machine Learning)",
  shortName: "AI & Machine Learning",
  tagline: "Pioneer Intelligent Systems, Deep Learning & Autonomous Technologies",
  description: "Gain rigorous theoretical foundations and industrial-strength mastery of machine learning algorithms, probabilistic modeling, deep neural networks, computer vision, and generative AI systems.",
  careerOutcomes: [
    "Machine Learning Architect / Lead",
    "Generative AI & LLM Systems Engineer",
    "Applied Research Scientist (AI/ML)",
    "Computer Vision & NLP Specialist",
    "Senior Data & AI Platform Strategist"
  ],
  skillsGained: [
    "Deep Learning & Transformers",
    "Probabilistic Models & Optimization",
    "Natural Language Processing (NLP)",
    "Distributed Neural Architecture",
    "Ethical AI & ML Governance"
  ],
  semesters: [
    {
      semester: "Semester 1",
      title: "Foundations of Advanced Computing & Applied Mathematics",
      courses: [
        {
          type: "DisCore",
          name: "Applied Mathematics for Computer Science",
          credits: 3,
          units: [
            "Unit 1: Linear Algebra, Vector Spaces, Matrix Factorizations",
            "Unit 2: Convex & Non-Convex Optimization, Gradient Descent",
            "Unit 3: Probability Theory, Distributions, Stochastic Processes"
          ]
        },
        {
          type: "DisCore",
          name: "Advanced Data Structures and Algorithms",
          credits: 3,
          units: [
            "Unit 1: Asymptotic Analysis & Growth Functions",
            "Unit 2: Balanced Trees, Multi-way Search Trees & Heaps",
            "Unit 3: Advanced Graph Theory & Network Flows",
            "Unit 4: Dynamic Programming & Randomized Algorithms",
            "Unit 5: Intractability, P vs NP, Approximation Algorithms"
          ]
        },
        {
          type: "DisCore",
          name: "Programming Paradigms Lab",
          credits: 2,
          units: [
            "Unit 1: Modern Procedural & Systems Programming",
            "Unit 2: Object-Oriented Architecture & Design Patterns",
            "Unit 3: Functional Reactive Systems",
            "Unit 4: Asynchronous & Multithreaded Concurrency",
            "Unit 5: Enterprise Scripting & Automated Pipelines"
          ]
        },
        {
          type: "Elective",
          name: "Foundations of AI & Cognitive Computing",
          credits: 1,
          units: [
            "Unit 1: Heuristic Search & Constraint Satisfaction",
            "Unit 2: Knowledge Graphs & Formal Reasoning",
            "Unit 3: Supervised & Unsupervised Machine Learning Overview"
          ]
        },
        {
          type: "Elective",
          name: "Principles of Cybersecurity & Defense",
          credits: 1,
          units: [
            "Unit 1: Threat Vectors & Defense in Depth",
            "Unit 2: Cryptographic Foundations & Identity Access Management",
            "Unit 3: Industry Security Frameworks & Compliance"
          ]
        },
        {
          type: "Elective",
          name: "Cloud Architecture Foundations",
          credits: 1,
          units: [
            "Unit 1: Distributed Infrastructure & Virtualization",
            "Unit 2: Cloud Computing Service Models (IaaS, PaaS, SaaS)"
          ]
        },
        {
          type: "Master's Core",
          name: "Research Methodology & Intellectual Property",
          credits: 2,
          units: [
            "Unit 1: Research Formulation & Systematic Literature Survey",
            "Unit 2: Experimental Design, Hypothesis Validation & Statistical Benchmarks",
            "Unit 3: Patent Law, Technical Publications, Ethics & Peer Review"
          ]
        }
      ]
    },
    {
      semester: "Semester 2",
      title: "Core Machine Learning & Deep Learning Architectures",
      courses: [
        {
          type: "DisCore",
          name: "Statistical Machine Learning & Pattern Recognition",
          credits: 3,
          units: [
            "Unit 1: Bayesian Inference & Maximum Likelihood Estimation",
            "Unit 2: Support Vector Machines & Kernel Methods",
            "Unit 3: Ensemble Learning (Random Forests, Gradient Boosting, XGBoost)",
            "Unit 4: Unsupervised Clustering & Dimensionality Reduction"
          ]
        },
        {
          type: "DisCore",
          name: "Deep Neural Networks & Representation Learning",
          credits: 3,
          units: [
            "Unit 1: Feedforward Networks & Backpropagation Dynamics",
            "Unit 2: Convolutional Neural Networks (CNNs) for Spatial Data",
            "Unit 3: Recurrent Networks & Sequence Models (LSTM, GRU)",
            "Unit 4: Regularization, Normalization & Optimization in Deep Networks"
          ]
        },
        {
          type: "DisCore",
          name: "Machine Learning Engineering Lab",
          credits: 2,
          units: [
            "Unit 1: PyTorch / TensorFlow Model Development",
            "Unit 2: GPU Acceleration, Mixed Precision & Distributed Training",
            "Unit 3: Model Evaluation, Explainability (SHAP/LIME) & Experiment Tracking"
          ]
        },
        {
          type: "Elective",
          name: "Natural Language Processing & LLMs",
          credits: 3,
          units: [
            "Unit 1: Word Embeddings & Vector Semantics",
            "Unit 2: Transformer Architectures & Self-Attention Mechanisms",
            "Unit 3: Large Language Models (LLMs), Prompt Engineering & Fine-Tuning"
          ]
        }
      ]
    },
    {
      semester: "Semester 3",
      title: "Advanced Specialization & Applied AI Systems",
      courses: [
        {
          type: "DisCore",
          name: "Computer Vision & Visual Intelligence",
          credits: 3,
          units: [
            "Unit 1: Feature Detection, Extraction & Classical Vision",
            "Unit 2: Object Detection (YOLO, Faster R-CNN) & Segmentation",
            "Unit 3: Generative Models (VAEs, GANs, Diffusion Models)",
            "Unit 4: Multi-Modal AI (Vision-Language Models)"
          ]
        },
        {
          type: "Elective",
          name: "Reinforcement Learning & Autonomous Agents",
          credits: 3,
          units: [
            "Unit 1: Markov Decision Processes (MDP) & Dynamic Programming",
            "Unit 2: Model-Free Control: Q-Learning & SARSA",
            "Unit 3: Deep Reinforcement Learning (DQN, Policy Gradients, PPO)"
          ]
        },
        {
          type: "DisCore",
          name: "AI Systems at Scale & MLOps",
          credits: 3,
          units: [
            "Unit 1: End-to-End MLOps Architecture & Data Drift Management",
            "Unit 2: Model Serving, Quantization & Edge Deployment",
            "Unit 3: Scalable Inference Pipelines & Monitoring"
          ]
        },
        {
          type: "Project",
          name: "M.Tech Capstone Project — Phase I (Research & Formulation)",
          credits: 4,
          units: [
            "Unit 1: Problem Definition with Industry / Research Guide",
            "Unit 2: Architecture Design & Feasibility Prototype",
            "Unit 3: Mid-Term Defense & Technical Report Submission"
          ]
        }
      ]
    },
    {
      semester: "Semester 4",
      title: "Dissertation & Production Deployment",
      courses: [
        {
          type: "Project",
          name: "M.Tech Capstone Project — Phase II (Implementation & Dissertation)",
          credits: 12,
          units: [
            "Unit 1: Production Implementation & Performance Benchmarking",
            "Unit 2: Comprehensive Experimental Validation",
            "Unit 3: Research Paper Drafting / Patent Application",
            "Unit 4: Final Viva-Voce Defense before Evaluation Committee"
          ]
        }
      ]
    }
  ]
};

export const cyberCurriculum: SpecializationCurriculum = {
  id: "cybersecurity",
  name: "M.Tech in CSE (Cybersecurity & Information Defense)",
  shortName: "Cybersecurity",
  tagline: "Safeguard Digital Frontiers, Cryptography & Resilient Architectures",
  description: "Master modern cryptographic foundations, enterprise threat modeling, network defense, reverse engineering, ethical penetration testing, and zero-trust cloud security governance.",
  careerOutcomes: [
    "Chief Information Security Officer (CISO) Track",
    "Security Architect / Cloud Security Director",
    "Principal Penetration Tester & Red Teamer",
    "Threat Intelligence & Incident Response Lead",
    "Cyber Defense Operations Manager"
  ],
  skillsGained: [
    "Applied Cryptography & Zero-Trust Architecture",
    "Vulnerability Assessment & Penetration Testing (VAPT)",
    "Cloud & Container Security Defense",
    "Digital Forensics & Incident Response",
    "Governance, Risk & Compliance (GRC)"
  ],
  semesters: [
    {
      semester: "Semester 1",
      title: "Foundations of Computing & Systems Security",
      courses: [
        {
          type: "DisCore",
          name: "Applied Mathematics & Discrete Structures",
          credits: 3,
          units: [
            "Unit 1: Number Theory, Modular Arithmetic & Finite Fields",
            "Unit 2: Probability, Combinatorics & Graph Models",
            "Unit 3: Information Theory & Entropy in Security"
          ]
        },
        {
          type: "DisCore",
          name: "Advanced Data Structures and Algorithms",
          credits: 3,
          units: [
            "Unit 1: Algorithmic Efficiency & Scalability",
            "Unit 2: Hash Tables, Merkle Trees & Cryptographic Data Structures",
            "Unit 3: Graph Search & Network Flow Algorithms"
          ]
        },
        {
          type: "DisCore",
          name: "Secure Systems & Low-Level Programming Lab",
          credits: 2,
          units: [
            "Unit 1: Memory Management, Buffer Overflows & Exploitation",
            "Unit 2: Reverse Engineering, Disassemblers & Debugging",
            "Unit 3: Automated Security Scripting in Python/Go"
          ]
        },
        {
          type: "Master's Core",
          name: "Research Methodology & Cyber Law Standards",
          credits: 2,
          units: [
            "Unit 1: Cyber Jurisprudence & Global Data Privacy Laws (GDPR, DPDP)",
            "Unit 2: Academic Integrity, Defense Publications & Ethical Guidelines"
          ]
        }
      ]
    },
    {
      semester: "Semester 2",
      title: "Cryptography, Network Defense & Protocol Security",
      courses: [
        {
          type: "DisCore",
          name: "Modern Cryptography & Cryptanalysis",
          credits: 3,
          units: [
            "Unit 1: Symmetric Ciphers (AES, ChaCha20) & Block Modes",
            "Unit 2: Asymmetric Cryptography (RSA, ECC, Diffie-Hellman)",
            "Unit 3: Hash Functions, Digital Signatures & PKI Infrastructures",
            "Unit 4: Post-Quantum Cryptography Overview"
          ]
        },
        {
          type: "DisCore",
          name: "Network Security & Threat Monitoring",
          credits: 3,
          units: [
            "Unit 1: IP Security, TLS/SSL & Protocol Vulnerabilities",
            "Unit 2: Firewalls, IDS/IPS & Next-Gen Network Defense",
            "Unit 3: SIEM Platforms & Security Operations Center (SOC) Workflows"
          ]
        },
        {
          type: "DisCore",
          name: "Penetration Testing & Red Teaming Lab",
          credits: 2,
          units: [
            "Unit 1: Reconnaissance & Attack Surface Mapping",
            "Unit 2: Web Application Security (OWASP Top 10)",
            "Unit 3: Privilege Escalation, Lateral Movement & Defense Evasion"
          ]
        }
      ]
    },
    {
      semester: "Semester 3",
      title: "Cloud Security, Forensics & Enterprise Risk",
      courses: [
        {
          type: "DisCore",
          name: "Cloud & Container Infrastructure Security",
          credits: 3,
          units: [
            "Unit 1: Cloud Shared Responsibility Models & IAM Hardening",
            "Unit 2: Kubernetes Security, Container Sandboxing & DevSecOps",
            "Unit 3: Zero Trust Architecture & Micro-segmentation"
          ]
        },
        {
          type: "DisCore",
          name: "Digital Forensics & Malware Analysis",
          credits: 3,
          units: [
            "Unit 1: Memory Forensics, Disk Imaging & Chain of Custody",
            "Unit 2: Static and Dynamic Malware Behavioral Analysis",
            "Unit 3: Ransomware TTPs & Incident Response Frameworks"
          ]
        },
        {
          type: "Project",
          name: "M.Tech Capstone Project — Phase I (Security Defense Prototype)",
          credits: 4,
          units: [
            "Unit 1: Problem Formulation & Threat Modeling",
            "Unit 2: Defense Architecture & Experimental Benchmarks",
            "Unit 3: Mid-Term Defense & Interim Report"
          ]
        }
      ]
    },
    {
      semester: "Semester 4",
      title: "Final Capstone Project & Defense",
      courses: [
        {
          type: "Project",
          name: "M.Tech Capstone Project — Phase II (Dissertation & Defense)",
          credits: 12,
          units: [
            "Unit 1: Advanced Implementation of Enterprise Cyber Solution",
            "Unit 2: Security Validation & Vulnerability Stress-Testing",
            "Unit 3: Comprehensive Dissertation & Viva-Voce"
          ]
        }
      ]
    }
  ]
};

export const cloudCurriculum: SpecializationCurriculum = {
  id: "cloud-computing",
  name: "M.Tech in CSE (Cloud Computing & Distributed Systems)",
  shortName: "Cloud Computing",
  tagline: "Architect Resilient, Scalable & High-Concurrency Cloud Ecosystems",
  description: "Acquire enterprise mastery of distributed consensus, cloud-native virtualization, Kubernetes orchestration, serverless paradigms, microservices, and multi-region resilience.",
  careerOutcomes: [
    "Principal Cloud Architect",
    "Director of Site Reliability Engineering (SRE)",
    "Distributed Systems Engineering Specialist",
    "DevOps & Infrastructure Automation Lead",
    "Enterprise Solutions Consultant"
  ],
  skillsGained: [
    "Distributed Consensus & CAP Theorem",
    "Kubernetes & Cloud-Native Ecosystem",
    "Microservices & Event-Driven Systems",
    "Infrastructure as Code (Terraform) & CI/CD",
    "High Availability & Disaster Recovery"
  ],
  semesters: [
    {
      semester: "Semester 1",
      title: "Foundations of Distributed Compute & Systems",
      courses: [
        {
          type: "DisCore",
          name: "Mathematical Foundations & Systems Modeling",
          credits: 3,
          units: [
            "Unit 1: Queueing Theory & Performance Modeling",
            "Unit 2: Graph Theory for Network Topologies",
            "Unit 3: Probability & Stochastic Analysis for Distributed Workloads"
          ]
        },
        {
          type: "DisCore",
          name: "Advanced Data Structures and Distributed Algorithms",
          credits: 3,
          units: [
            "Unit 1: Consistent Hashing, Bloom Filters & LSM Trees",
            "Unit 2: Graph Algorithms & Distributed State Processing",
            "Unit 3: Complexity Analysis in Distributed Environments"
          ]
        },
        {
          type: "DisCore",
          name: "Cloud Automation & Systems Programming Lab",
          credits: 2,
          units: [
            "Unit 1: Linux Kernel Fundamentals, cgroups & Namespaces",
            "Unit 2: Containerization with Docker & Podman",
            "Unit 3: Automation with Bash, Python, and Go"
          ]
        },
        {
          type: "Master's Core",
          name: "Research Methodology & System Benchmarking",
          credits: 2,
          units: [
            "Unit 1: Empirical Evaluation of Scalable Systems",
            "Unit 2: Load Testing, Profiling & Academic Documentation"
          ]
        }
      ]
    },
    {
      semester: "Semester 2",
      title: "Distributed Systems & Cloud-Native Architectures",
      courses: [
        {
          type: "DisCore",
          name: "Distributed Computing & Consensus Protocols",
          credits: 3,
          units: [
            "Unit 1: Clocks, Ordering & State Machine Replication",
            "Unit 2: Paxos, Raft & Byzantine Fault Tolerant Protocols",
            "Unit 3: Distributed Transactions, 2PC, Saga Patterns & Eventual Consistency"
          ]
        },
        {
          type: "DisCore",
          name: "Cloud-Native Infrastructure & Kubernetes Orchestration",
          credits: 3,
          units: [
            "Unit 1: Control Plane Architecture, Pod Scheduling & CRDs",
            "Unit 2: Ingress Controllers, Service Meshes (Istio) & Networking",
            "Unit 3: Storage Classes, StatefulSets & CSI Drivers"
          ]
        },
        {
          type: "DisCore",
          name: "Cloud Engineering & CI/CD Pipeline Lab",
          credits: 2,
          units: [
            "Unit 1: Infrastructure as Code with Terraform & Pulumi",
            "Unit 2: GitOps with ArgoCD & Flux",
            "Unit 3: Telemetry, Distributed Tracing (OpenTelemetry) & Prometheus"
          ]
        }
      ]
    },
    {
      semester: "Semester 3",
      title: "Microservices, Serverless & Multi-Cloud Resilience",
      courses: [
        {
          type: "DisCore",
          name: "Microservices & Asynchronous Messaging",
          credits: 3,
          units: [
            "Unit 1: Domain-Driven Design (DDD) & API Gateway Architectures",
            "Unit 2: Event-Driven Systems with Apache Kafka & RabbitMQ",
            "Unit 3: gRPC, GraphQL & High-Performance Inter-Process Communication"
          ]
        },
        {
          type: "DisCore",
          name: "Serverless Computing & Cloud Storage Systems",
          credits: 3,
          units: [
            "Unit 1: Function-as-a-Service (FaaS) Cold Start & Execution Models",
            "Unit 2: Distributed Databases (Spanner, Cassandra, CockroachDB)",
            "Unit 3: Multi-Region Disaster Recovery & FinOps Optimization"
          ]
        },
        {
          type: "Project",
          name: "M.Tech Capstone Project — Phase I (Cloud Architecture)",
          credits: 4,
          units: [
            "Unit 1: Scalable Cloud Architecture Formulation",
            "Unit 2: Prototype Implementation & Load Testing",
            "Unit 3: Interim Defense & Review"
          ]
        }
      ]
    },
    {
      semester: "Semester 4",
      title: "Production Scale Dissertation & Capstone",
      courses: [
        {
          type: "Project",
          name: "M.Tech Capstone Project — Phase II (Dissertation & Defense)",
          credits: 12,
          units: [
            "Unit 1: Scalable Production Implementation",
            "Unit 2: Chaos Engineering & Fault-Tolerance Verification",
            "Unit 3: Comprehensive Dissertation & Viva-Voce"
          ]
        }
      ]
    }
  ]
};

export const specializationsList = [aimlCurriculum, cyberCurriculum, cloudCurriculum];

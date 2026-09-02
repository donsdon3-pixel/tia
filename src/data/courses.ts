export interface CourseItem {
  id: string;
  title: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Professional';
  duration: string;
  mode: 'Live Interactive + Hands-on Lab';
  summary: string;
  highlights: string[];
  curriculum: { module: string; topics: string[] }[];
  badge: string;
  targetAudience: string;
}

export const coursesData: CourseItem[] = [
  {
    id: "ai-pro-masterclass",
    title: "Artificial Intelligence & Generative AI Masterclass",
    level: "Professional",
    duration: "12 Weeks",
    mode: "Live Interactive + Hands-on Lab",
    badge: "Flagship AI",
    summary: "Master modern Deep Learning, Autonomous Multi-Agent Workflows, Fine-Tuning LLMs, Computer Vision, and full-stack AI SaaS deployment.",
    highlights: [
      "Direct mentorship under Founder M Bhargav Rayudu",
      "Hands-on labs with OpenAI, Gemini, LangChain & PyTorch",
      "Vector databases (Supabase / Pinecone) & RAG systems",
      "Official TIA Professional AI Certification"
    ],
    targetAudience: "Software engineers, engineering students, data analysts & AI enthusiasts",
    curriculum: [
      { module: "Module 1: AI Foundations", topics: ["Modern Python for AI", "NumPy, Pandas & Tensor Math", "Linear Algebra & Statistics"] },
      { module: "Module 2: Neural Networks & Deep Learning", topics: ["Custom PyTorch Architectures", "CNNs & Computer Vision (YOLOv8)", "Transfer Learning"] },
      { module: "Module 3: LLMs & Multi-Agent Workflows", topics: ["Transformers from Scratch", "Prompt Engineering & RAG Architecture", "LangGraph & AutoGen Multi-Agents"] },
      { module: "Module 4: Enterprise Deployment", topics: ["AI SaaS API Architecture", "FastAPI & Vercel Edge Deployments", "Capstone Portfolio Project"] }
    ]
  },
  {
    id: "cybersecurity-threat-intelligence",
    title: "Cybersecurity & Threat Intelligence Course",
    level: "Advanced",
    duration: "10 Weeks",
    mode: "Live Interactive + Hands-on Lab",
    badge: "High Demand",
    summary: "Comprehensive enterprise defensive security, ethical hacking, SOC operations, vulnerability assessment, threat modeling, and Zero-Trust architecture.",
    highlights: [
      "Real-time Cyber Range & Penetration Testing labs",
      "SIEM & SOC analysis (Splunk, Wireshark, Sentinel)",
      "OWASP Top 10 web & API security remediation",
      "TIA Cybersecurity & Threat Defense Certificate"
    ],
    targetAudience: "IT professionals, system administrators, network engineers & computer science students",
    curriculum: [
      { module: "Module 1: Security Fundamentals", topics: ["Network Protocols & Packet Analysis", "Linux & Windows Server Hardening", "Cryptography & PKI"] },
      { module: "Module 2: Ethical Hacking & PenTesting", topics: ["Reconnaissance & Vulnerability Scanning", "Web Application PenTesting (OWASP)", "Metasploit & Exploit Analysis"] },
      { module: "Module 3: SOC & Threat Hunting", topics: ["SIEM Log Analysis & Threat Intelligence", "Incident Response Playbooks", "Malware Analysis Basics"] },
      { module: "Module 4: Cloud & Enterprise Defense", topics: ["Zero-Trust Network Architecture", "AWS / Azure Cloud Security Hardening", "Compliance (ISO 27001 / GDPR)"] }
    ]
  },
  {
    id: "cloud-devops-architecture",
    title: "Cloud Computing & DevOps Architecture Course",
    level: "Intermediate",
    duration: "10 Weeks",
    mode: "Live Interactive + Hands-on Lab",
    badge: "Industry Essential",
    summary: "Master multi-cloud engineering (AWS/Azure), Docker containerization, Kubernetes orchestration, CI/CD automation pipelines, and Terraform Infrastructure as Code.",
    highlights: [
      "Production cloud infrastructure architecture",
      "End-to-end GitHub Actions & GitLab CI/CD pipelines",
      "Kubernetes cluster setup & microservices management",
      "TIA Certified Cloud & DevOps Engineer Credential"
    ],
    targetAudience: "Developers, QA engineers, operations teams & aspiring cloud architects",
    curriculum: [
      { module: "Module 1: Cloud Foundations (AWS/Azure)", topics: ["VPC Networking, Subnets & Security Groups", "EC2, S3, IAM & Cloud Computing", "Serverless Lambda & Cloud Functions"] },
      { module: "Module 2: Containerization & Docker", topics: ["Dockerfiles & Multi-Stage Builds", "Docker Compose for Microservices", "Container Registries & Security"] },
      { module: "Module 3: Kubernetes Orchestration", topics: ["K8s Architecture, Pods & Deployments", "Services, Ingress & Helm Charts", "Cluster Monitoring with Prometheus & Grafana"] },
      { module: "Module 4: CI/CD & Terraform (IaC)", topics: ["Infrastructure as Code with Terraform", "Automated Testing & GitHub Actions Pipelines", "Blue/Green & Canary Zero-Downtime Deployments"] }
    ]
  },
  {
    id: "cad-masterclass",
    title: "Industrial CAD 3D Design & Modeling (Diploma Level)",
    level: "Intermediate",
    duration: "8 Weeks",
    mode: "Live Interactive + Hands-on Lab",
    badge: "Engineering Core",
    summary: "Master parametric 3D modeling, assembly design, industrial drafting with GD&T, and prototyping manufacturing files in SolidWorks and AutoCAD.",
    highlights: [
      "Industry-standard CAD software training (SolidWorks, AutoCAD)",
      "Real mechanical component blueprints & GD&T standards",
      "3D Printing & CNC preparation workflows",
      "TIA CAD Engineering Certificate"
    ],
    targetAudience: "Mechanical, Mechatronics, Civil engineers & industrial designers",
    curriculum: [
      { module: "Module 1: 2D & 3D Drafting", topics: ["Geometric Dimensioning & Tolerancing (GD&T)", "Parametric Sketching", "Part Modeling Fundamentals"] },
      { module: "Module 2: Advanced Assemblies", topics: ["Complex Mates & Mechanisms", "Interference Detection", "Exploded Views & BOMs"] },
      { module: "Module 3: Simulation & Sheet Metal", topics: ["Stress/Strain FEA Simulation", "Sheet Metal & Weldments", "Mold & Die Basics"] },
      { module: "Module 4: Prototyping Files", topics: ["STEP/IGES file standards", "3D Slicing & Rapid Prototyping", "Industry Portfolio"] }
    ]
  },
  {
    id: "mechatronics-robotics",
    title: "Mechatronics, Robotics & IoT Hardware Engineering",
    level: "Advanced",
    duration: "10 Weeks",
    mode: "Live Interactive + Hands-on Lab",
    badge: "Hardware Lab",
    summary: "Fuse mechanical systems, electronic controllers, sensor networks, and robotic actuators into unified smart autonomous machines.",
    highlights: [
      "Physical lab kits and circuit prototyping",
      "Microcontroller firmware (C++, Arduino, ESP32, Raspberry Pi)",
      "Motor driver circuits, sensor calibration & telemetry",
      "TIA Robotics & Mechatronics Credential"
    ],
    targetAudience: "Engineering students and IoT/Hardware enthusiasts",
    curriculum: [
      { module: "Module 1: Electro-Mechanics", topics: ["Sensors & Transducers", "Power Distribution & MOSFETs", "Motor Drivers & Servos"] },
      { module: "Module 2: Microcontroller Mastery", topics: ["ESP32 & STM32 Firmware", "Real-Time OS (RTOS) Basics", "I2C, SPI & UART Protocols"] },
      { module: "Module 3: IoT & Cloud Telemetry", topics: ["MQTT Brokers", "Cloud Dashboard Setup", "Remote Actuation & Alerts"] },
      { module: "Module 4: Autonomous Robotic Vehicle", topics: ["Kinematics & PID Controllers", "Obstacle Avoidance", "Autonomous Navigation"] }
    ]
  },
  {
    id: "ai-for-business",
    title: "AI & Automation for Business Owners & Executives",
    level: "Beginner",
    duration: "4 Weeks (Weekend Fast-Track)",
    mode: "Live Interactive + Hands-on Lab",
    badge: "Executive",
    summary: "Practical, no-code and low-code AI strategies to automate daily business operations, sales pipelines, customer support, and administrative workflows.",
    highlights: [
      "Zero prior coding required",
      "Immediate ROI on company operations",
      "Custom WhatsApp & CRM auto-responders",
      "Executive AI Readiness Certificate"
    ],
    targetAudience: "Business owners, managers, founders, and consultants",
    curriculum: [
      { module: "Module 1: AI Landscape", topics: ["What AI can and cannot do for your business", "Cost vs. Benefit analysis", "Security & data privacy"] },
      { module: "Module 2: Marketing & Sales AI", topics: ["Automated ad copy & creatives", "Lead scoring & automated email sequences", "WhatsApp bots"] },
      { module: "Module 3: Operational Automation", topics: ["Zapier & Make.com workflows", "Automated invoice parsing", "Smart document summarization"] },
      { module: "Module 4: Company AI Roadmap", topics: ["Building your company's AI strategy", "Vendor negotiation", "Implementation blueprint"] }
    ]
  }
];
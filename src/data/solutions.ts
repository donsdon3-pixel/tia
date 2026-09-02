export interface SolutionItem {
  id: string;
  title: string;
  category: "with_ai" | "without_ai";
  shortDesc: string;
  features: string[];
  technologies: string[];
  deliverables: string;
  idealFor: string;
  iconName: string;
}

export const solutionsData: SolutionItem[] = [
  // WITH AI
  {
    id: "ai-agents",
    title: "Autonomous AI Agents & Workflow Automation",
    category: "with_ai",
    shortDesc: "Custom multi-agent workflows that execute complex business tasks, document processing, and customer operations 24/7.",
    features: [
      "Multi-agent autonomous decision workflows",
      "LLM fine-tuning & domain-specific knowledge bases",
      "Intelligent CRM / ERP integrations",
      "Automated lead nurturing & smart auto-replies"
    ],
    technologies: ["OpenAI", "Gemini", "LangChain", "LlamaIndex", "Python", "Supabase Vector"],
    deliverables: "Turnkey AI agent fleet + Admin orchestration dashboard",
    idealFor: "Enterprises seeking 10x operational speed and labor reduction",
    iconName: "Bot"
  },
  {
    id: "ai-analytics",
    title: "Predictive Analytics & AI Decision Systems",
    category: "with_ai",
    shortDesc: "Transform raw historical data into accurate forecasting models for sales, inventory, churn, and financial risk.",
    features: [
      "Time-series predictive modeling",
      "Customer lifetime value & churn prediction",
      "Automated executive insight reports",
      "Anomaly detection in transactions"
    ],
    technologies: ["PyTorch", "Scikit-Learn", "FastAPI", "PowerBI", "PostgreSQL"],
    deliverables: "Predictive analytics engine + Real-time visual dashboard",
    idealFor: "Retailers, logistics, healthcare, and financial institutions",
    iconName: "TrendingUp"
  },
  {
    id: "ai-vision-voice",
    title: "Computer Vision & Conversational Voice AI",
    category: "with_ai",
    shortDesc: "Real-time visual quality inspection, OCR invoice extraction, and multilingual conversational voice assistants.",
    features: [
      "Industrial camera defect inspection",
      "Automated multilingual WhatsApp AI bots",
      "Facial & biometric access monitoring",
      "Document scanning & tabular data extraction"
    ],
    technologies: ["OpenCV", "YOLOv8", "Whisper", "Twilio", "WebRTC"],
    deliverables: "Hardware/Camera integrated vision pipeline + Voice Bot",
    idealFor: "Factories, hotels, schools, and customer service centers",
    iconName: "Eye"
  },

  // WITHOUT AI
  {
    id: "cad-engineering",
    title: "Industrial CAD 3D Design & Mechanical Modeling",
    category: "without_ai",
    shortDesc: "High-precision CAD blueprints, 3D parametric modeling, reverse engineering, and prototyping for manufacturing.",
    features: [
      "Parametric 3D solid & surface modeling",
      "Manufacturing drafting (GD&T standards)",
      "Finite Element Analysis (FEA) & stress simulation",
      "3D printing & CNC-ready prototyping files (STEP/IGES/STL)"
    ],
    technologies: ["SolidWorks", "AutoCAD", "CATIA", "Fusion 360", "ANSYS"],
    deliverables: "Complete CAD assembly packages, 2D production drawings, FEA reports",
    idealFor: "Manufacturing units, aerospace/auto suppliers, product inventors",
    iconName: "Layers"
  },
  {
    id: "mechatronics-iot",
    title: "Mechatronics & Embedded Automation Systems",
    category: "without_ai",
    shortDesc: "Custom micro-controller programming, sensor telemetry, conveyor automation, and industrial electro-mechanical hardware.",
    features: [
      "PLC & microcontroller hardware design",
      "Actuator & servo motor control systems",
      "IoT sensor dashboards & telemetry",
      "Custom testing rigs & automated jigs"
    ],
    technologies: ["Arduino", "Raspberry Pi", "STM32", "C++", "MQTT", "Modbus"],
    deliverables: "Schematics, PCB designs, firmware, and functional hardware prototypes",
    idealFor: "Agri-tech, smart manufacturing, robotics startups, hardware firms",
    iconName: "Cpu"
  },
  {
    id: "custom-software",
    title: "Enterprise Web, Cloud & Database Architectures",
    category: "without_ai",
    shortDesc: "Ultra-fast custom web applications, relational database architectures, and secure business management portals.",
    features: [
      "Custom business portals & ERP/inventory managers",
      "Secure role-based access control (RBAC)",
      "Relational database design (PostgreSQL/Supabase)",
      "Automated payment gateways & invoicing"
    ],
    technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "Supabase", "Vercel"],
    deliverables: "Fully deployed web applications with cloud database & SSL",
    idealFor: "Small to large businesses requiring bespoke software",
    iconName: "Globe"
  },
  {
    id: "business-consulting",
    title: "Process Optimization & Digital Transformation",
    category: "without_ai",
    shortDesc: "Holistic business workflow auditing, legacy digitization, standard operating procedure (SOP) design, and efficiency audits.",
    features: [
      "End-to-end workflow bottleneck analysis",
      "Legacy paperwork digitization",
      "Cost reduction & resource reallocation plans",
      "Executive tech advisory & vendor evaluation"
    ],
    technologies: ["Workflow Mapping", "Lean Six Sigma", "Notion", "Airtable", "Google Workspace"],
    deliverables: "Actionable transformation blueprint & staff training manuals",
    idealFor: "Traditional businesses transitioning to high-efficiency digital workflows",
    iconName: "Briefcase"
  }
];

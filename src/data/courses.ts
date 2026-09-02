export interface CourseItem {
  id: string;
  title: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Professional";
  duration: string;
  mode: "Live Interactive + Offline Hands-on";
  summary: string;
  highlights: string[];
  curriculum: { module: string; topics: string[] }[];
  badge: string;
  targetAudience: string;
}

export const coursesData: CourseItem[] = [
  {
    id: "ai-pro-masterclass",
    title: "Professional AI & Generative Intelligence Masterclass",
    level: "Professional",
    duration: "12 Weeks",
    mode: "Live Interactive + Offline Hands-on",
    badge: "Flagship Program",
    summary: "From Python & Neural Networks to building autonomous AI agents, fine-tuning LLMs, and deploying production-grade AI systems.",
    highlights: [
      "Direct mentorship under Founder M Bhargav Rayudu",
      "Hands-on projects with OpenAI, Gemini & LangChain",
      "Real-world enterprise API integration",
      "Official TIA Professional AI Certification"
    ],
    targetAudience: "B.Tech students, software engineers, and ambitious tech graduates",
    curriculum: [
      { module: "Module 1: Foundations", topics: ["Modern Python for AI", "NumPy, Pandas & Data Pipelines", "Linear Algebra & Probability Intuition"] },
      { module: "Module 2: Deep Learning", topics: ["Neural Networks from Scratch", "PyTorch Architecture", "Computer Vision (CNNs & YOLO)"] },
      { module: "Module 3: LLMs & Agents", topics: ["Transformer Architectures", "Prompt Engineering & RAG with Supabase Vector", "Multi-Agent Workflows"] },
      { module: "Module 4: Capstone & Production", topics: ["Model Deployment on Vercel/Cloud", "Building full-stack AI SaaS", "Live Portfolio Defense"] }
    ]
  },
  {
    id: "cad-masterclass",
    title: "Industrial CAD 3D Design & Modeling (Diploma Level)",
    level: "Intermediate",
    duration: "8 Weeks",
    mode: "Live Interactive + Offline Hands-on",
    badge: "High Demand",
    summary: "Master parametric 3D modeling, assembly design, industrial drafting with GD&T, and prototyping files for manufacturing.",
    highlights: [
      "Industry-standard CAD software training (SolidWorks, AutoCAD)",
      "Real mechanical component blueprints",
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
    mode: "Live Interactive + Offline Hands-on",
    badge: "Practical Lab",
    summary: "Fuse mechanical systems, electronic controllers, sensor networks, and robotic actuators into unified smart machines.",
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
    mode: "Live Interactive + Offline Hands-on",
    badge: "Executive",
    summary: "Practical, no-code and low-code AI strategies to automate daily business operations, sales pipelines, customer support, and bookkeeping.",
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

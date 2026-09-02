export interface Credential {
  title: string;
  category: string;
  description: string;
  iconName: string;
}

export const founderData = {
  name: "M Bhargav Rayudu",
  title: "Founder & Chief Executive Officer",
  organization: "TIA (Tirupati Intellect Authority)",
  tagline: "Empowering Tirupati with AI & Advanced Engineering",
  location: "Tirupati, Andhra Pradesh, India",
  contact: {
    whatsapp: "+91 7386157041",
    whatsappClean: "917386157041",
    handledBy: "Laila (Personal Assistant to M Bhargav Rayudu)",
    note: "WhatsApp Inquiries Only",
  },
  credentials: [
    {
      title: "Professional AI Certificate",
      category: "Artificial Intelligence & LLMs",
      description: "Specialized in Autonomous AI Agents, Large Language Models, Multi-Agent Systems, Neural Architectures, and Generative Intelligence workflows.",
      iconName: "Cpu",
      badge: "AI Specialist"
    },
    {
      title: "B.Tech Mechatronics Engineering",
      category: "Robotics & Hardware Integration",
      description: "Comprehensive mastery in mechanical-electrical synergy, robotics, IoT sensor networks, precision control systems, and automated machinery.",
      iconName: "Cog",
      badge: "Engineering Degree"
    },
    {
      title: "CAD Diploma Course",
      category: "Industrial 3D Design & Simulation",
      description: "Certified expertise in SolidWorks, AutoCAD, CATIA, high-precision parametric design, structural FEA analysis, and rapid prototyping.",
      iconName: "Layers",
      badge: "CAD Certified"
    }
  ],
  bio: "M Bhargav Rayudu is an engineering innovator and AI architect. With multidisciplinary mastery across Artificial Intelligence, Mechatronics Engineering, and Industrial CAD, he founded Tirupati Intellect Authority (TIA) to bridge state-of-the-art technological intellect with real-world industry execution.",
  mission: "To establish Tirupati as a premier intellectual tech authority by training top-tier AI and engineering talent while delivering high-impact business solutions for enterprises across India and worldwide.",
  stats: [
    { value: "100%", label: "Verified Expertise" },
    { value: "AI + CAD", label: "Dual-Engine Mastery" },
    { value: "24/7", label: "P.A. Laila WhatsApp Desk" },
    { value: "Tirupati", label: "Headquarters Hub" },
  ]
};

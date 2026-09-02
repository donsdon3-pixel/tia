export interface FAQItem {
  question: string;
  answer: string;
  category: "general" | "solutions" | "courses" | "jobs";
}

export const faqData: FAQItem[] = [
  {
    category: "general",
    question: "What is TIA (Tirupati Intellect Authority)?",
    answer: "TIA is Tirupati's premier technology and engineering authority founded by M Bhargav Rayudu (Professional AI Certified, B.Tech Mechatronics, CAD Diploma). TIA operates across two core wings: comprehensive Tech Teaching/Training and All Types of Business Solutions (both With AI and Without AI)."
  },
  {
    category: "jobs",
    question: "How do I apply for a job or internship at TIA?",
    answer: "You can use our interactive 'Apply for Job' portal on this website. Simply fill in your details, select your domain (AI, Mechatronics, CAD, Business Development, Teaching), attach your resume/portfolio, and submit. The system saves your application to our database and instantly connects with P.A. Laila on WhatsApp (+91 7386157041) for expedited review."
  },
  {
    category: "solutions",
    question: "What is the difference between 'With AI' and 'Without AI' business solutions?",
    answer: "'With AI' solutions harness advanced Machine Learning, LLMs, autonomous multi-agents, computer vision, and predictive models to automate high-level decision making. 'Without AI' solutions focus on classic, robust engineering: CAD 3D modeling, mechanical prototyping, PLC/Mechatronics hardware, custom web/database architectures, and business process re-engineering."
  },
  {
    category: "courses",
    question: "Are TIA courses suitable for beginners?",
    answer: "Yes! We offer tailored programs ranging from beginner-friendly executive bootcamps to intensive professional masterclasses in AI, Mechatronics, and Industrial CAD. Every course combines conceptual clarity with hands-on, lab-tested industrial projects."
  },
  {
    category: "general",
    question: "How can I contact Founder M Bhargav Rayudu?",
    answer: "All official communications, appointments, and inquiries are managed directly by Founder M Bhargav Rayudu's Personal Assistant, Laila, via official WhatsApp (+91 7386157041)."
  }
];

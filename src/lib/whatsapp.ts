export const WHATSAPP_NUMBER = "917386157041";
export const FOUNDER_NAME = "M Bhargav Rayudu";
export const PA_NAME = "Laila";
export const LOCATION = "Tirupati, Andhra Pradesh";

export function formatWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

export function openWhatsApp(message: string): void {
  const url = formatWhatsAppUrl(message);
  if (typeof window !== "undefined") {
    window.open(url, "_blank", "noopener,noreferrer");
  }
}

export function generateJobApplicationWhatsAppMessage(data: {
  fullName: string;
  email: string;
  phone: string;
  position: string;
  experienceLevel: string;
  portfolioUrl?: string;
  resumeFileName?: string;
  resumeUrl?: string | null;
  coverNote?: string;
}): string {
  return `🏛️ *TIA (Tirupati Intellect Authority) — Job Application*
────────────────────────
👤 *Applicant Name:* ${data.fullName}
📱 *Phone / WhatsApp:* ${data.phone}
📧 *Email:* ${data.email}
💼 *Position Applied:* ${data.position}
⭐ *Experience Level:* ${data.experienceLevel}
${data.portfolioUrl ? `🌐 *Portfolio / GitHub:* ${data.portfolioUrl}
` : ""}
📄 *Attached Resume:* ${data.resumeFileName || "Document attached"}
${data.resumeUrl ? `🔗 *Cloud File Link:* ${data.resumeUrl}
` : ""}
${data.coverNote ? `📝 *Cover Note / Skills:*
${data.coverNote}
` : ""}
────────────────────────
📍 *Location:* Tirupati, A.P.
🤖 *TIA Portal Submission*
_Attn: P.A. Laila / Founder M Bhargav Rayudu_`;
}

export function generateBusinessInquiryWhatsAppMessage(data: {
  clientName: string;
  companyName?: string;
  phone: string;
  email?: string;
  solutionCategory: "with_ai" | "without_ai";
  serviceType: string;
  projectScope: string;
  budgetOrTimeline?: string;
}): string {
  const categoryLabel =
    data.solutionCategory === "with_ai"
      ? "🤖 AI-Powered Solution (Next-Gen AI / LLM / Agents)"
      : "⚙️ Non-AI Classic Engineering & Business Architecture";

  return `⚡ *TIA (Tirupati Intellect Authority) — Business Solution Inquiry*
────────────────────────
🏢 *Client / Organization:* ${data.clientName} ${data.companyName ? `(${data.companyName})` : ""}
📱 *Contact Number:* ${data.phone}
${data.email ? `📧 *Email:* ${data.email}
` : ""}
🏷️ *Category:* ${categoryLabel}
🛠️ *Service Required:* ${data.serviceType}
📋 *Project Requirements:*
${data.projectScope}
${data.budgetOrTimeline ? `⏱️ *Expected Timeline / Budget:* ${data.budgetOrTimeline}
` : ""}
────────────────────────
📍 *TIA Tirupati Desk (P.A. Laila)*
_Founder & CEO: M Bhargav Rayudu_`;
}

export function generateCourseInquiryWhatsAppMessage(data: {
  studentName: string;
  phone: string;
  courseName: string;
  educationalBackground?: string;
  message?: string;
}): string {
  return `🎓 *TIA Academy — Course Admission / Curriculum Inquiry*
────────────────────────
👤 *Student / Professional:* ${data.studentName}
📱 *Contact Number:* ${data.phone}
📚 *Interested Course:* ${data.courseName}
${data.educationalBackground ? `🎓 *Background:* ${data.educationalBackground}
` : ""}
${data.message ? `💬 *Query:* ${data.message}
` : ""}
────────────────────────
📍 *Tirupati Intellect Authority (Teaching Wing)*
_Attn: P.A. Laila (+91 7386157041)_`;
}

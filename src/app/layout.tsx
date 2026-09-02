import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#030712",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://tia-tirupati.vercel.app"),
  title: "TIA | Tirupati Intellect Authority - Empowering Tirupati with AI & Engineering Solutions",
  description: "Official platform of Tirupati Intellect Authority (TIA). Founded by M Bhargav Rayudu (Professional AI Certificate, B.Tech Mechatronics, CAD Diploma). Specialized in AI & Engineering Teaching, Enterprise Business Solutions (With AI / Without AI), and Careers.",
  keywords: [
    "TIA",
    "Tirupati Intellect Authority",
    "M Bhargav Rayudu",
    "AI in Tirupati",
    "AI Courses Tirupati",
    "Cybersecurity Course Tirupati",
    "Cloud Computing DevOps Course",
    "CAD Diploma Course",
    "Mechatronics Engineering",
    "Business Solutions With AI",
    "Business Solutions Without AI",
    "P.A. Laila",
    "Jobs in Tirupati",
  ],
  authors: [{ name: "M Bhargav Rayudu" }],
  openGraph: {
    title: "TIA | Tirupati Intellect Authority",
    description: "Empowering Tirupati with AI & Advanced Business Solutions. Teaching & All Types of Business Solutions with AI / Without AI.",
    images: [{ url: "/images/tia-circle-logo.png", width: 600, height: 600, alt: "TIA Circular Crest Logo" }],
  },
  icons: {
    icon: "/images/tia-circle-logo.png",
    apple: "/images/tia-circle-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        <link rel="icon" href="/images/tia-circle-logo.png" type="image/png" />
      </head>
      <body className="bg-[#030712] text-slate-100 min-h-screen font-sans selection:bg-amber-500/30 selection:text-amber-200 antialiased">
        {children}
      </body>
    </html>
  );
}

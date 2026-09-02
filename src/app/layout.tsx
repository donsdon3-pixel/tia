import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://tia-tirupati.vercel.app'),
  title: 'TIA | Tirupati Intellect Authority - Empowering Tirupati with AI & Engineering Solutions',
  description: 'Official platform of Tirupati Intellect Authority (TIA). Founded by M Bhargav Rayudu (Professional AI Certificate, B.Tech Mechatronics, CAD Diploma). Specialized in AI & Engineering Teaching, Enterprise Business Solutions (With AI / Without AI), and Careers.',
  keywords: [
    'TIA',
    'Tirupati Intellect Authority',
    'M Bhargav Rayudu',
    'AI in Tirupati',
    'AI Courses Tirupati',
    'CAD Diploma Course',
    'Mechatronics Engineering',
    'Business Solutions With AI',
    'Business Solutions Without AI',
    'P.A. Laila',
    'Jobs in Tirupati',
  ],
  authors: [{ name: 'M Bhargav Rayudu' }],
  openGraph: {
    title: 'TIA | Tirupati Intellect Authority',
    description: 'Empowering Tirupati with AI & Advanced Business Solutions. Teaching & All Types of Business Solutions with AI / Without AI.',
    images: [{ url: '/images/tia-logo.jpg', width: 800, height: 600, alt: 'TIA Official Logo' }],
  },
  icons: {
    icon: '/images/tia-logo.jpg',
    apple: '/images/tia-logo.jpg',
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#030712] text-slate-100 min-h-screen font-sans selection:bg-amber-500/30 selection:text-amber-200">
        {children}
      </body>
    </html>
  );
}
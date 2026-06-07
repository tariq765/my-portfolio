import './globals.css';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import ScrollProgress from '@/app/components/ScrollProgress';
import BackgroundGlow from '@/app/components/BackgroundGlow';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Tariq Asghar – Portfolio',
  description: 'Frontend & Fullstack Web Developer portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-dark-bg text-gray-100 min-h-screen flex flex-col relative overflow-x-hidden selection:bg-primary/20 selection:text-primary`}>
        <div className="noise-overlay" />
        <BackgroundGlow />
        <Navbar />
        <ScrollProgress />
        <main className="flex-1 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}


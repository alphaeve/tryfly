import type { Metadata } from 'next';
import { Manrope, Inter } from 'next/font/google'; // Import fonts
import './globals.css';
import SmoothScroll from './components/SmoothScroll';

// 1. Configure Fonts with "variable" property
const manrope = Manrope({ 
  subsets: ['latin'], 
  variable: '--font-manrope', // This matches globals.css
  display: 'swap',
});

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',   // This matches globals.css
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'TryFlySolutions | Digital Reality',
  description: 'Premium Web Development & Social Media Management',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* 2. Add variables to the body className */}
      <body className={`${manrope.variable} ${inter.variable} antialiased`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
} 
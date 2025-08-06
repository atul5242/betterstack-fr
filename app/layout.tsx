import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BetterStack - Better monitoring for modern infrastructure',
  description: 'Monitor your entire stack, get alerted when things break, and resolve incidents faster with our all-in-one monitoring platform trusted by 1000+ companies.',
  keywords: 'monitoring, uptime, infrastructure, incident management, status pages, alerts',
  authors: [{ name: 'BetterStack' }],
  creator: 'BetterStack',
  publisher: 'BetterStack',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://betterstack.com'),
  openGraph: {
    title: 'BetterStack - Better monitoring for modern infrastructure',
    description: 'Monitor your entire stack, get alerted when things break, and resolve incidents faster with our all-in-one monitoring platform.',
    url: 'https://betterstack.com',
    siteName: 'BetterStack',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BetterStack - Monitoring Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BetterStack - Better monitoring for modern infrastructure',
    description: 'Monitor your entire stack, get alerted when things break, and resolve incidents faster.',
    creator: '@betterstack',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
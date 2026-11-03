import type { Metadata, Viewport } from 'next';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://exam-questions.netlify.app';

export const viewport: Viewport = {
  themeColor: '#fafaf9',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Semester VII Exam Questions | Mumbai University (AIDS, AIML, DS)',
    template: '%s | MU Sem 7 Exam Questions',
  },
  description:
    'Comprehensive curated question bank from Mumbai University past examinations for Semester VII Engineering (AI & Data Science, AIML, DS). Featuring chapter-wise unit breakdowns and mark weightage.',
  keywords: [
    'Mumbai University',
    'MU Question Bank',
    'MU Exam Questions',
    'Semester 7',
    'Engineering PYQs',
    'AIDS',
    'AIML',
    'Data Science',
    'Deep Learning',
    'Big Data Analytics',
    'Natural Language Processing',
    'Game Theory',
    'Management Information System',
    'MU Semester 7 PYQs',
  ],
  authors: [{ name: 'Aditya Kate', url: 'https://github.com/adityajkate' }],
  creator: 'Aditya Kate',
  publisher: 'Aditya Kate',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Semester VII Exam Questions | Mumbai University',
    description:
      'Curated Mumbai University Semester VII question bank with chapter-wise unit breakdowns and mark distributions for DL, BDA, NLP, GT, and MIS.',
    url: siteUrl,
    siteName: 'MU Semester VII Exam Questions',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Semester VII Exam Questions | Mumbai University',
    description:
      'Curated Mumbai University Semester VII question bank with chapter-wise unit breakdowns and mark weightage.',
    creator: '@adityajkate',
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
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Semester VII Exam Questions | Mumbai University',
  url: siteUrl,
  description:
    'Curated question bank from Mumbai University past examinations for Semester VII Engineering (AIDS, AIML, DS).',
  author: {
    '@type': 'Person',
    name: 'Aditya Kate',
    url: 'https://github.com/adityajkate',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: `${siteUrl}/{subject}`,
    'query-input': 'required name=subject',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased selection:bg-[#ff4d00]/20 selection:text-[#ff4d00]">
        {children}
      </body>
    </html>
  );
}

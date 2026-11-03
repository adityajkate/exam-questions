import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'MU Sem 7 Exam Questions - PYQs',
    short_name: 'MU Sem 7',
    description: 'Curated Mumbai University Semester VII Exam Questions and Past Papers',
    start_url: '/',
    display: 'standalone',
    background_color: '#fafaf9',
    theme_color: '#0a0a0a',
    icons: [
      {
        src: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}


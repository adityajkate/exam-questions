import { MetadataRoute } from 'next';
import { getAllSubjects } from '../data/subjects';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://exam-questions.netlify.app';
  const subjects = getAllSubjects();

  const subjectRoutes: MetadataRoute.Sitemap = subjects.map((subj) => ({
    url: `${siteUrl}/${subj.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    ...subjectRoutes,
  ];
}


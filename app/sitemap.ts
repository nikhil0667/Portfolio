import type { MetadataRoute } from 'next';
import { projects } from '../data/portfolio';
import { SITE_URL } from '../lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-11-25');

  const projectRoutes: MetadataRoute.Sitemap = projects
    .filter((project) => Boolean(project.slug))
    .map((project) => ({
      url: `${SITE_URL}/projects/${project.slug}`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    }));

  return [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    ...projectRoutes,
  ];
}

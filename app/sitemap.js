const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://tofsports.com';

export default function sitemap() {
  const lastModified = new Date('2026-11-02');
  return [
    { url: BASE_URL, lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE_URL}/methodology`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/platform`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/licenses`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/about`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/contact`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/privacy`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/terms`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
  ];
}

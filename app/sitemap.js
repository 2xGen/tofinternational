const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://tofsports.com';

export default function sitemap() {
  const lastModified = new Date('2026-11-02');
  return [
    { url: BASE_URL, lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE_URL}/privacy`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
  ];
}

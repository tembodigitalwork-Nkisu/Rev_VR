// Update SITE_URL once the production domain is wired up.
const SITE_URL = "https://rev-vr-xperience.example";

export default function sitemap() {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}

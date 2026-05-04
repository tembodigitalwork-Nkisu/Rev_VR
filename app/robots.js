// Update SITE_URL once the production domain is wired up.
const SITE_URL = "https://rev-vr-xperience.example";

export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}

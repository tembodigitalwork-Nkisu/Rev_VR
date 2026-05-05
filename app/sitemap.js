// Update SITE_URL once the production domain is wired up.
const SITE_URL = "https://rev-vr-xperience.example";

const routes = [
  { path: "", priority: 1.0, freq: "monthly" },
  { path: "/rides", priority: 0.9, freq: "monthly" },
  { path: "/parties", priority: 0.8, freq: "monthly" },
  { path: "/visit", priority: 0.8, freq: "monthly" },
  { path: "/faq", priority: 0.7, freq: "yearly" },
  { path: "/book", priority: 0.9, freq: "monthly" },
];

export default function sitemap() {
  const now = new Date();
  return routes.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.freq,
    priority: r.priority,
  }));
}

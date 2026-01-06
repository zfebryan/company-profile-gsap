export const siteConfig = {
  name: "NexaFlow",
  description: "Transformasi digital untuk bisnis modern. Kami membantu perusahaan mencapai potensi maksimal melalui solusi teknologi inovatif.",
  url: "https://nexaflow.id",
  ogImage: "/og-image.jpg",
  links: {
    twitter: "https://twitter.com/nexaflow",
    instagram: "https://instagram.com/nexaflow",
    linkedin: "https://linkedin.com/company/nexaflow",
    github: "https://github.com/nexaflow",
  },
  contact: {
    email: "hello@nexaflow.id",
    phone: "+62 812 3456 7890",
    address: "Jl. Sudirman No. 123, Jakarta Selatan 12190",
  },
};

export const seoConfig = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "digital transformation",
    "web development",
    "mobile app",
    "software house",
    "Indonesia",
    "Jakarta",
  ],
  authors: [{ name: "NexaFlow Team" }],
  creator: "NexaFlow",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@nexaflow",
  },
};

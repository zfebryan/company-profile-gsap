export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: string;
  priceValue: number;
  currency: string;
  period: string;
  features: string[];
  highlighted: boolean;
  paymentLink: string;
  cta: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    description: "Cocok untuk bisnis kecil yang baru memulai",
    price: "Rp 2.999.000",
    priceValue: 2999000,
    currency: "IDR",
    period: "per proyek",
    features: [
      "Landing page 1 halaman",
      "Desain responsif",
      "SEO dasar",
      "Hosting 1 tahun",
      "Domain gratis (.com)",
      "Support email 30 hari",
    ],
    highlighted: false,
    paymentLink: "https://app.midtrans.com/payment-links/example-starter",
    cta: "Mulai Sekarang",
  },
  {
    id: "professional",
    name: "Professional",
    description: "Pilihan populer untuk bisnis yang berkembang",
    price: "Rp 7.499.000",
    priceValue: 7499000,
    currency: "IDR",
    period: "per proyek",
    features: [
      "Website hingga 10 halaman",
      "Desain custom premium",
      "SEO optimized",
      "Hosting 2 tahun",
      "Domain gratis (.com/.id)",
      "CMS dashboard",
      "Integrasi WhatsApp",
      "Support prioritas 90 hari",
    ],
    highlighted: true,
    paymentLink: "https://app.midtrans.com/payment-links/example-professional",
    cta: "Pilihan Terbaik",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Solusi lengkap untuk perusahaan besar",
    price: "Rp 19.999.000",
    priceValue: 19999000,
    currency: "IDR",
    period: "per proyek",
    features: [
      "Website unlimited halaman",
      "Desain eksklusif",
      "SEO & Analytics advanced",
      "Hosting 3 tahun",
      "Domain premium",
      "Custom CMS/Dashboard",
      "Integrasi payment gateway",
      "Mobile app companion",
      "Support dedicated 1 tahun",
      "Training tim",
    ],
    highlighted: false,
    paymentLink: "https://app.midtrans.com/payment-links/example-enterprise",
    cta: "Hubungi Kami",
  },
];

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);
};

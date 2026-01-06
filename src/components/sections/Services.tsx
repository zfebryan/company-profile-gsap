"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Palette,
  TrendingUp,
  ShieldCheck,
  Headphones,
} from "lucide-react";
import { Container, Badge, Card, CardContent } from "@/components/ui";
import { staggerContainer, fadeInUp } from "@/animations/motion-variants";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Website modern dan responsif dengan performa tinggi. Dari landing page hingga web app kompleks.",
    features: ["Next.js", "React", "WordPress", "E-commerce"],
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: Smartphone,
    title: "Mobile App",
    description:
      "Aplikasi mobile native dan cross-platform yang cepat, intuitif, dan user-friendly.",
    features: ["React Native", "Flutter", "iOS", "Android"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Desain antarmuka yang indah dan pengalaman pengguna yang memikat untuk produk digital Anda.",
    features: ["Figma", "Prototyping", "User Research", "Design System"],
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description:
      "Strategi pemasaran digital yang efektif untuk meningkatkan visibilitas dan konversi bisnis.",
    features: ["SEO", "Social Media", "Ads", "Analytics"],
    color: "from-emerald-500 to-green-500",
  },
  {
    icon: ShieldCheck,
    title: "Cyber Security",
    description:
      "Perlindungan website dan aplikasi Anda dari ancaman keamanan dengan standar terbaik.",
    features: ["Penetration Test", "SSL", "Firewall", "Monitoring"],
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Headphones,
    title: "IT Consulting",
    description:
      "Konsultasi teknologi untuk membantu bisnis Anda membuat keputusan IT yang tepat.",
    features: ["Strategy", "Architecture", "Migration", "Training"],
    color: "from-indigo-500 to-violet-500",
  },
];

const Services = () => {
  return (
    <section id="services" className="relative py-24 lg:py-32 bg-gray-950">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <Container className="relative">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div variants={fadeInUp}>
            <Badge variant="primary" className="mb-4">
              Layanan Kami
            </Badge>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Solusi Digital{" "}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Lengkap
            </span>{" "}
            untuk Bisnis Anda
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-400 text-lg">
            Kami menyediakan berbagai layanan digital premium untuk membantu
            bisnis Anda berkembang dan sukses di era digital
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div key={index} variants={fadeInUp}>
                <Card
                  variant="glass"
                  className="h-full p-6 group cursor-pointer"
                  whileHover={{ y: -8 }}
                >
                  <CardContent className="p-0">
                    {/* Icon */}
                    <div
                      className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.color} mb-4`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-400 transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 text-xs rounded-md bg-white/5 text-gray-400 border border-white/5"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
};

export { Services };

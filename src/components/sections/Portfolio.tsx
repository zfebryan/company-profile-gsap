"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { Container, Badge, Button } from "@/components/ui";
import { staggerContainer, fadeInUp } from "@/animations/motion-variants";

const categories = ["Semua", "Website", "Mobile App", "UI/UX"];

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    category: "Website",
    description: "Platform e-commerce dengan fitur lengkap untuk brand fashion premium.",
    image: "🛒",
    gradient: "from-violet-600 to-purple-600",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    link: "#",
  },
  {
    id: 2,
    title: "FinTech Mobile App",
    category: "Mobile App",
    description: "Aplikasi keuangan digital dengan fitur investasi dan pembayaran.",
    image: "📱",
    gradient: "from-blue-600 to-cyan-600",
    tags: ["React Native", "Node.js", "MongoDB"],
    link: "#",
  },
  {
    id: 3,
    title: "Healthcare Dashboard",
    category: "UI/UX",
    description: "Desain dashboard untuk sistem manajemen rumah sakit modern.",
    image: "🏥",
    gradient: "from-emerald-600 to-green-600",
    tags: ["Figma", "Design System", "Prototyping"],
    link: "#",
  },
  {
    id: 4,
    title: "Travel Booking Platform",
    category: "Website",
    description: "Website pemesanan perjalanan dengan UI yang intuitif dan seamless.",
    image: "✈️",
    gradient: "from-amber-600 to-orange-600",
    tags: ["Vue.js", "Laravel", "MySQL"],
    link: "#",
  },
  {
    id: 5,
    title: "Food Delivery App",
    category: "Mobile App",
    description: "Aplikasi pesan antar makanan dengan tracking real-time.",
    image: "🍕",
    gradient: "from-rose-600 to-pink-600",
    tags: ["Flutter", "Firebase", "Google Maps"],
    link: "#",
  },
  {
    id: 6,
    title: "SaaS Dashboard",
    category: "UI/UX",
    description: "Redesign dashboard analitik untuk platform SaaS B2B.",
    image: "📊",
    gradient: "from-indigo-600 to-violet-600",
    tags: ["Figma", "User Research", "A/B Testing"],
    link: "#",
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredProjects =
    activeCategory === "Semua"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="relative py-24 lg:py-32 bg-gray-900">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-[80px]" />
      </div>

      <Container className="relative">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <motion.div variants={fadeInUp}>
            <Badge variant="primary" className="mb-4">
              Portfolio
            </Badge>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Proyek{" "}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Terbaru
            </span>{" "}
            Kami
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-400 text-lg">
            Lihat beberapa proyek terbaik yang telah kami kerjakan untuk klien
            dari berbagai industri
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-violet-600 text-white"
                  : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/10"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-2xl overflow-hidden bg-gray-950 border border-white/10 hover:border-violet-500/50 transition-all duration-500"
                whileHover={{ y: -8 }}
              >
                {/* Project Image/Preview */}
                <div
                  className={`aspect-video bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}
                >
                  <span className="text-6xl group-hover:scale-110 transition-transform duration-500">
                    {project.image}
                  </span>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Button variant="secondary" size="sm" href={project.link}>
                        Lihat Detail
                        <ArrowUpRight className="w-4 h-4" />
                      </Button>
                    </motion.div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-violet-400 font-medium">
                      {project.category}
                    </span>
                    <a
                      href={project.link}
                      className="text-gray-500 hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-violet-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs rounded-md bg-white/5 text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Button */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="outline">
            Lihat Semua Proyek
            <ArrowUpRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </Container>
    </section>
  );
};

export { Portfolio };

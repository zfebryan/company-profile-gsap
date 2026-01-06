"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ArrowRight, ChevronDown, Play } from "lucide-react";
import { Container, Button } from "@/components/ui";
import { staggerContainer, fadeInUp } from "@/animations/motion-variants";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const shapesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Floating shapes animation
    if (shapesRef.current) {
      const shapes = shapesRef.current.querySelectorAll(".floating-shape");
      shapes.forEach((shape, index) => {
        gsap.to(shape, {
          y: -30 + Math.random() * 60,
          x: -20 + Math.random() * 40,
          rotation: Math.random() * 360,
          duration: 3 + Math.random() * 2,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: index * 0.2,
        });
      });
    }
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-950/50 via-gray-950 to-indigo-950/50" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-violet-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[100px]" />
      </div>

      {/* Floating Shapes */}
      <div ref={shapesRef} className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="floating-shape absolute top-[20%] left-[10%] w-20 h-20 rounded-full border border-violet-500/30 bg-violet-500/5" />
        <div className="floating-shape absolute top-[30%] right-[15%] w-16 h-16 rounded-lg border border-indigo-500/30 bg-indigo-500/5 rotate-45" />
        <div className="floating-shape absolute bottom-[25%] left-[20%] w-12 h-12 rounded-full border border-pink-500/30 bg-pink-500/5" />
        <div className="floating-shape absolute top-[50%] right-[25%] w-8 h-8 rounded-lg border border-cyan-500/30 bg-cyan-500/5" />
        <div className="floating-shape absolute bottom-[35%] right-[10%] w-14 h-14 rounded-full border border-violet-500/30 bg-violet-500/5" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div variants={fadeInUp} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500" />
              </span>
              Digital Agency Terpercaya di Indonesia
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight"
          >
            Wujudkan{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Transformasi
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
              >
                <path
                  d="M2 10C50 4 100 4 150 7C200 10 250 6 298 3"
                  stroke="url(#gradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#6366F1" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <br />
            Digital Bisnis Anda
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Kami membantu perusahaan mencapai potensi maksimal melalui solusi
            teknologi inovatif, desain premium, dan pengalaman digital yang
            tak terlupakan.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" onClick={() => scrollToSection("contact")}>
              Konsultasi Gratis
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => scrollToSection("portfolio")}
            >
              <Play className="w-5 h-5" />
              Lihat Portfolio
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeInUp}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: "150+", label: "Proyek Selesai" },
              { value: "50+", label: "Klien Puas" },
              { value: "5+", label: "Tahun Pengalaman" },
              { value: "24/7", label: "Support" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll Indicator */}
      <motion.button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 hover:text-white transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        onClick={() => scrollToSection("about")}
        aria-label="Scroll to next section"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.button>
    </section>
  );
};

export { Hero };

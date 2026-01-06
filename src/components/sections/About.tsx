"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Target, Lightbulb, Users, Award } from "lucide-react";
import { Container, Badge } from "@/components/ui";
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight } from "@/animations/motion-variants";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const stats = [
  { value: 150, suffix: "+", label: "Proyek Selesai", icon: Target },
  { value: 50, suffix: "+", label: "Klien Puas", icon: Users },
  { value: 5, suffix: " Tahun", label: "Pengalaman", icon: Award },
  { value: 98, suffix: "%", label: "Kepuasan Klien", icon: Lightbulb },
];

const CountUp = ({ end, suffix }: { end: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && ref.current && !hasAnimated.current) {
      hasAnimated.current = true;
      gsap.fromTo(
        ref.current,
        { innerText: 0 },
        {
          innerText: end,
          duration: 2,
          snap: { innerText: 1 },
          ease: "power2.out",
        }
      );
    }
  }, [isInView, end]);

  return (
    <>
      <span ref={ref}>0</span>
      {suffix}
    </>
  );
};

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-gray-950 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-violet-600/10 rounded-full blur-[100px] -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-[80px]" />
      </div>

      <Container className="relative">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Content */}
          <motion.div variants={fadeInLeft}>
            <Badge variant="primary" className="mb-4">
              Tentang Kami
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Partner Digital Terbaik untuk{" "}
              <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                Pertumbuhan Bisnis
              </span>
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                NexaFlow adalah agensi digital terkemuka yang berdedikasi
                membantu bisnis berkembang di era digital. Dengan tim ahli yang
                berpengalaman, kami menghadirkan solusi inovatif yang disesuaikan
                dengan kebutuhan unik setiap klien.
              </p>
              <p>
                Kami percaya bahwa setiap bisnis memiliki potensi untuk
                berkembang. Misi kami adalah memberdayakan perusahaan dengan
                teknologi modern, desain yang memikat, dan strategi digital yang
                efektif.
              </p>
            </div>

            {/* Values */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { title: "Inovasi", desc: "Solusi terdepan" },
                { title: "Kualitas", desc: "Standar premium" },
                { title: "Kolaborasi", desc: "Partner Anda" },
                { title: "Hasil", desc: "ROI nyata" },
              ].map((value, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-white/5 border border-white/10"
                >
                  <h4 className="text-white font-semibold mb-1">{value.title}</h4>
                  <p className="text-gray-500 text-sm">{value.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div variants={fadeInRight}>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    className="relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-violet-500/50 transition-all duration-300 group"
                    variants={fadeInUp}
                    whileHover={{ y: -5 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-600/0 to-violet-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Icon className="w-8 h-8 text-violet-500 mb-4" />
                    <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                      <CountUp end={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-gray-500 text-sm">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>

            {/* Image/Decoration */}
            <div className="mt-6 relative">
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-violet-600/20 to-indigo-600/20 border border-white/10 flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🚀</div>
                  <p className="text-white font-semibold">
                    Siap Bertransformasi Digital?
                  </p>
                  <p className="text-gray-400 text-sm mt-2">
                    Mari wujudkan bersama
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export { About };

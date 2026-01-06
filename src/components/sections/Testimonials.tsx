"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Container, Badge } from "@/components/ui";
import { staggerContainer, fadeInUp } from "@/animations/motion-variants";

const testimonials = [
  {
    id: 1,
    name: "Ahmad Rizky",
    role: "CEO, TechStartup Indonesia",
    avatar: "👨‍💼",
    rating: 5,
    content:
      "NexaFlow benar-benar memahami kebutuhan bisnis kami. Website yang mereka buat tidak hanya indah tapi juga meningkatkan konversi kami hingga 150%. Sangat profesional!",
  },
  {
    id: 2,
    name: "Sarah Putri",
    role: "Marketing Director, Fashion Brand",
    avatar: "👩‍💻",
    rating: 5,
    content:
      "Kolaborasi yang luar biasa! Tim NexaFlow sangat responsif dan kreatif. E-commerce platform yang mereka kembangkan membantu kami ekspansi ke seluruh Indonesia.",
  },
  {
    id: 3,
    name: "Budi Santoso",
    role: "Founder, FinTech Startup",
    avatar: "👨‍🔬",
    rating: 5,
    content:
      "Aplikasi mobile yang dikembangkan NexaFlow memiliki performa yang sangat baik. User experience yang mereka desain benar-benar intuitif dan mudah digunakan.",
  },
  {
    id: 4,
    name: "Maya Anggraini",
    role: "Owner, Restaurant Chain",
    avatar: "👩‍🍳",
    rating: 5,
    content:
      "Sistem pemesanan online yang dibuat NexaFlow sangat membantu bisnis restoran kami, terutama saat pandemi. Pelayanan after-sales juga sangat memuaskan.",
  },
  {
    id: 5,
    name: "Denny Wirawan",
    role: "CTO, Healthcare Platform",
    avatar: "👨‍⚕️",
    rating: 5,
    content:
      "Dashboard yang dikembangkan sangat membantu tim medis kami dalam mengelola data pasien. Keamanan dan privasi data juga sangat terjaga dengan baik.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, [isPaused, nextTestimonial]);

  return (
    <section
      id="testimonials"
      className="relative py-24 lg:py-32 bg-gray-950 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-600/5 rounded-full blur-[100px]" />
      </div>

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
              Testimoni
            </Badge>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Apa Kata{" "}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Klien Kami
            </span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-400 text-lg">
            Dengarkan pengalaman mereka bekerja sama dengan NexaFlow
          </motion.p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Card */}
          <div className="relative min-h-[320px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10"
              >
                {/* Quote Icon */}
                <Quote className="absolute top-6 left-6 w-12 h-12 text-violet-500/20" />

                {/* Content */}
                <div className="relative">
                  {/* Rating */}
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: testimonials[currentIndex].rating }).map(
                      (_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-amber-400 text-amber-400"
                        />
                      )
                    )}
                  </div>

                  {/* Quote */}
                  <p className="text-xl md:text-2xl text-white leading-relaxed mb-8">
                    &ldquo;{testimonials[currentIndex].content}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-2xl">
                      {testimonials[currentIndex].avatar}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-gray-500 text-sm">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-violet-500"
                      : "bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export { Testimonials };

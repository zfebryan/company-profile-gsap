"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import { Container, Badge, Button, Card } from "@/components/ui";
import { staggerContainer, fadeInUp } from "@/animations/motion-variants";
import { pricingPlans } from "@/config/pricing";

const Pricing = () => {
  const handlePayment = (paymentLink: string) => {
    window.open(paymentLink, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="pricing" className="relative py-24 lg:py-32 bg-gray-900">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-600/10 rounded-full blur-[80px]" />
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
              Harga
            </Badge>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Paket{" "}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Terjangkau
            </span>{" "}
            untuk Semua
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-400 text-lg">
            Pilih paket yang sesuai dengan kebutuhan dan budget bisnis Anda.
            Semua paket sudah termasuk support dan revisi.
          </motion.p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {pricingPlans.map((plan, index) => (
            <motion.div key={plan.id} variants={fadeInUp}>
              <Card
                variant={plan.highlighted ? "gradient" : "glass"}
                className={`relative h-full p-8 ${
                  plan.highlighted
                    ? "border-violet-500/50 scale-105 lg:scale-110"
                    : ""
                }`}
                glow={plan.highlighted}
                whileHover={{ y: -8 }}
              >
                {/* Popular Badge */}
                {plan.highlighted && (
                  <div className="absolute left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-medium shadow-lg shadow-violet-500/30">
                      <Sparkles className="w-4 h-4" />
                      Paling Populer
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  {/* Plan Name */}
                  <h3 className="text-xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4">{plan.description}</p>

                  {/* Price */}
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-white">
                      {plan.price}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm">{plan.period}</p>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-violet-500/20 flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-violet-400" />
                      </div>
                      <span className="text-gray-400 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  className="w-full"
                  variant={plan.highlighted ? "primary" : "outline"}
                  onClick={() => handlePayment(plan.paymentLink)}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Note */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center text-gray-500 text-sm max-w-2xl mx-auto mt-12"
        >
          💡 Butuh paket custom? Hubungi kami untuk mendapatkan penawaran khusus
          sesuai kebutuhan proyek Anda. Kami siap membantu!
        </motion.p>
      </Container>
    </section>
  );
};

export { Pricing };

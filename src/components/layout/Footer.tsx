"use client";

import { motion } from "framer-motion";
import { Sparkles, Mail, Phone, MapPin, Twitter, Instagram, Linkedin, Github } from "lucide-react";
import { Container } from "@/components/ui";
import { footerNavigation, socialLinks } from "@/config/navigation";
import { siteConfig } from "@/config/site";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Twitter,
  Instagram,
  Linkedin,
  Github,
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-950 border-t border-white/10 pt-16 pb-8">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-violet-950/20 to-transparent pointer-events-none" />

      <Container className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <motion.a
              href="#hero"
              className="flex items-center gap-2 text-xl font-bold text-white mb-4"
              whileHover={{ scale: 1.02 }}
            >
              <Sparkles className="w-7 h-7 text-violet-500" />
              <span>{siteConfig.name}</span>
            </motion.a>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              {siteConfig.description}
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((link) => {
                const IconComponent = iconMap[link.icon];
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-violet-500/20 hover:border-violet-500/50 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={link.name}
                  >
                    {IconComponent && <IconComponent className="w-5 h-5" />}
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Perusahaan</h3>
            <ul className="space-y-3">
              {footerNavigation.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Layanan</h3>
            <ul className="space-y-3">
              {footerNavigation.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Kontak</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-violet-500 mt-0.5 flex-shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-violet-500 mt-0.5 flex-shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-violet-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  {siteConfig.contact.address}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerNavigation.legal.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-500 hover:text-white transition-colors text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
};

export { Footer };

import { Header, Footer } from "@/components/layout";
import {
  Hero,
  About,
  Services,
  Portfolio,
  Testimonials,
  Pricing,
  Contact,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

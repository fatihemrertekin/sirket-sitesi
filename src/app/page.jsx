import Hero from "@/components/sections/Hero";
import Ticker from "@/components/sections/Ticker";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";
import ContactForm from "@/components/sections/ContactForm";

export const metadata = {
  title: "Ana Sayfa | Pikus Ahşap - Kayseri Ahşap Yapı Çözümleri",
  description: "Minimal, doğaya duyarlı ve sürdürülebilir ahşap yaşam alanları sunan Pikus Ahşap ile hayallerinizdeki bahçeyi inşa ediyoruz.",
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Ticker />
      <Services />
      <About />
      <Projects />
      <Testimonials />
      <ContactForm />
    </main>
  );
}

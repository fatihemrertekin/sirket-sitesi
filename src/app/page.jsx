import Hero from "@/components/sections/Hero";
import Ticker from "@/components/sections/Ticker";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";
import ContactForm from "@/components/sections/ContactForm";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Ticker />
      <Services />
      <About />
      <Projects />
      <Testimonials />
      <ContactForm />
    </>
  );
}

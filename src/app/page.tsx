import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Sales from "@/components/Sales";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Sales />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
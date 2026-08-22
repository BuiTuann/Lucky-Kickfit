import About from "@/components/About";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <div>
      <Hero />
      <Feature />
      <About />
      <Pricing />
      <Footer />
      <Gallery />
    </div>
  );
}

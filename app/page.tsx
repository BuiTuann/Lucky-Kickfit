import About from "@/components/About";
import Feature from "@/components/Feature";
import Footer from "@/components/Not";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Foot from "@/components/Footer";
export default function Home() {
  return (
    <div>
      <Hero />
      <Feature />
      <About />
      <Pricing />
      <Footer />
      <Gallery />
      <Foot />
    </div>
  );
}

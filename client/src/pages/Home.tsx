import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import ServicesGrid from "@/components/ServicesGrid";
import WinterCollection from "@/components/WinterCollection";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <div className="flex-1">
        <Hero />
        <Mission />
        <ServicesGrid />
        <WinterCollection />
        <Testimonials />
        <Newsletter />
      </div>
      
      <Footer />
    </div>
  );
}

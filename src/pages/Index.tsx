import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServiceAreaMap from "@/components/ServiceAreaMap";
import CTABanner from "@/components/CTABanner";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
 
const Index = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <WhyChooseUs />
      <ServiceAreaMap />
      <CTABanner />
      <ContactSection />
    </main>
    <Footer />
   </>
);

export default Index;

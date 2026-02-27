import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServiceAreaMap from "@/components/ServiceAreaMap";
import CTABanner from "@/components/CTABanner";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

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
    <FloatingButtons />
  </>
);

export default Index;

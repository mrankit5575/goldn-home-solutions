import { Phone, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section
    className="relative min-h-[85vh] flex items-center justify-center bg-cover bg-center"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1400&q=80&fit=crop')",
    }}
  >
    <div className="absolute inset-0 bg-foreground/60" />
    <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight max-w-3xl mx-auto">
        Fast & Reliable AC & Home Appliance Repair Services
      </h1>
      <p className="mt-4 text-lg sm:text-xl text-white/90 max-w-xl mx-auto">
        Expert technicians at your doorstep
      </p>
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button asChild size="lg" className="gap-2 text-base px-8">
          <a href="tel:9310912781">
            <Phone className="h-5 w-5" /> Call Now
          </a>
        </Button>
        <Button asChild variant="outline" size="lg" className="gap-2 text-base px-8 border-white text-white hover:bg-white/20 hover:text-white">
          <a href="#contact">
            <CalendarCheck className="h-5 w-5" /> Book Service
          </a>
        </Button>
      </div>
    </div>
  </section>
);

export default HeroSection;

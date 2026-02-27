import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTABanner = () => (
  <section className="py-14 bg-primary">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
        Need urgent repair? Call now!
      </h2>
      <p className="text-primary-foreground/80 mb-6 max-w-md mx-auto">
        Our technicians are standing by to help you. Fast, reliable, affordable.
      </p>
      <Button
        asChild
        size="lg"
        variant="secondary"
        className="gap-2 text-base px-10 font-bold"
      >
        <a href="tel:9310912781">
          <Phone className="h-5 w-5" /> Call 9310912781
        </a>
      </Button>
    </div>
  </section>
);

export default CTABanner;

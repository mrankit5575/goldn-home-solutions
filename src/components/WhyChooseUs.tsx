import { Clock, IndianRupee, Wrench, ShieldCheck, Zap, MapPin } from "lucide-react";

const features = [
  { icon: Clock, title: "Same Day Service", desc: "We arrive the same day you call — no long waits." },
  { icon: IndianRupee, title: "Affordable Pricing", desc: "Transparent pricing with no hidden charges." },
  { icon: Wrench, title: "Expert Technicians", desc: "Skilled professionals with years of experience." },
  { icon: ShieldCheck, title: "Trusted Service", desc: "Background-verified and certified technicians." },
  { icon: Zap, title: "Quick Response", desc: "Fast booking and rapid response times." },
  { icon: MapPin, title: "Doorstep Service", desc: "We come to your home — fully equipped." },
];

const WhyChooseUs = () => (
  <section id="why-us" className="py-16 md:py-24 bg-muted/50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">Why Choose Us</h2>
      <p className="text-center text-muted-foreground mb-12 max-w-lg mx-auto">
        Trusted by thousands of families across Delhi NCR
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f) => (
          <div
            key={f.title}
            className="bg-background rounded-xl p-6 border border-border shadow-sm hover-scale text-center"
          >
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <f.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-1">{f.title}</h3>
            <p className="text-sm text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;

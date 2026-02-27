import { ShieldCheck, Clock, ThumbsUp } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="py-16 md:py-24">
    <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About Goldn Enterprises</h2>
        <p className="text-muted-foreground mb-4">
          Founded by <span className="font-semibold text-foreground">Sachin Kumar Sahu</span>, Goldn Enterprises has been delivering trusted home appliance repair services across Delhi NCR for over a decade.
        </p>
        <p className="text-muted-foreground mb-6">
          We believe in honest pricing, same-day service, and long-lasting repairs. Our certified technicians arrive at your doorstep fully equipped — so your appliances are back up and running in no time.
        </p>
        <div className="flex flex-col gap-3">
          {[
            { icon: Clock, text: "10+ years of trusted service" },
            { icon: ShieldCheck, text: "Certified & background-verified technicians" },
            { icon: ThumbsUp, text: "Doorstep service with genuine parts" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-3 text-sm">
              <item.icon className="h-5 w-5 text-primary shrink-0" />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
      <img
        src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=700&q=80&fit=crop"
        alt="Goldn Enterprises technician at work"
        className="rounded-xl shadow-lg w-full h-80 object-cover"
        loading="lazy"
      />
    </div>
  </section>
);

export default AboutSection;

import { MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const areas = [
  "Delhi", "Noida", "Greater Noida", "Gurgaon", "Faridabad",
  "Ghaziabad", "Dwarka", "Rohini", "Laxmi Nagar", "Saket",
  "Janakpuri", "Pitampura",
];

const ServiceAreaMap = () => (
  <section id="service-areas" className="py-16 md:py-24">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">Our Service Areas</h2>
      <p className="text-center text-muted-foreground mb-12 max-w-lg mx-auto">
        We proudly serve homes and offices across the entire Delhi NCR region
      </p>
      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Map */}
        <div className="rounded-xl overflow-hidden shadow-lg border border-border">
          <iframe
            title="Goldn Enterprises Service Area — Delhi NCR"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d77.06889754725782!3d28.52758200617607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            className="w-full h-72 md:h-96"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Areas list */}
        <div>
          <h3 className="font-semibold text-xl mb-4 flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            Areas We Serve
          </h3>
          <div className="flex flex-wrap gap-3">
            {areas.map((a) => (
              <Badge
                key={a}
                variant="secondary"
                className="px-4 py-2 text-sm font-medium"
              >
                {a}
              </Badge>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Don't see your area? Call us at{" "}
            <a href="tel:9310912781" className="text-primary font-semibold hover:underline">
              9310912781
            </a>{" "}
            — we likely cover it!
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default ServiceAreaMap;

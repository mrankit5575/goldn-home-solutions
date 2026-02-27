import { Phone } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-background py-10">
    <div className="container mx-auto px-4 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
      <div>
        <h3 className="text-lg font-bold mb-2">Goldn Enterprises</h3>
        <p className="text-sm text-background/70">
          Trusted home appliance repair services across Delhi NCR since 2014.
        </p>
      </div>
      <div>
        <h4 className="font-semibold mb-2">Quick Links</h4>
        <ul className="space-y-1 text-sm text-background/70">
          {["Services", "About", "Why Us", "Service Areas", "Contact"].map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase().replace(/ /g, "-")}`} className="hover:text-primary transition-colors">
                {l}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-2">Contact</h4>
        <a href="tel:9310912781" className="flex items-center gap-2 text-sm text-primary hover:underline">
          <Phone className="h-4 w-4" /> 9310912781
        </a>
        <p className="text-sm text-background/70 mt-2">Delhi NCR, India</p>
      </div>
    </div>
    <div className="container mx-auto px-4 mt-8 pt-6 border-t border-background/20 text-center text-xs text-background/50">
      © {new Date().getFullYear()} Goldn Enterprises. All rights reserved.
    </div>
  </footer>
);

export default Footer;

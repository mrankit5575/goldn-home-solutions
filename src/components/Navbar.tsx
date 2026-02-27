import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Why Us", href: "#why-us" },
  { label: "Service Areas", href: "#service-areas" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3">
        <a href="#" className="text-xl font-extrabold text-primary tracking-tight">
          Goldn Enterprises
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <Button asChild className="hidden md:inline-flex gap-2" size="sm">
          <a href="tel:9310912781">
            <Phone className="h-4 w-4" /> Call Now
          </a>
        </Button>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background px-4 pb-4 animate-fade-in">
          <ul className="flex flex-col gap-3 py-3">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="block text-sm font-medium text-muted-foreground hover:text-primary"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <Button asChild className="w-full gap-2" size="sm">
            <a href="tel:9310912781">
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </Button>
        </div>
      )}
    </header>
  );
};

export default Navbar;

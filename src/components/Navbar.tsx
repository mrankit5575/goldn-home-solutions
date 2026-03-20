 import { useState, useEffect } from "react";
import { Phone, Menu, X, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Services", href: "#services", ariaLabel: "View our AC, fridge, and appliance repair services" },
  { label: "About", href: "#about", ariaLabel: "Learn about Goldn Enterprises and our expert technicians" },
  { label: "Why Us", href: "#why-us", ariaLabel: "Reasons to choose Goldn Enterprises for appliance repair" },
  { label: "Service Areas", href: "#service-areas", ariaLabel: "Service areas in Delhi NCR including Noida, Gurgaon, Ghaziabad" },
  { label: "Contact", href: "#contact", ariaLabel: "Contact Goldn Enterprises for AC repair and appliance service" },
];

// Business phone numbers for structured data
const BUSINESS_PHONES = {
  primary: "+919310912781",
  secondary: "+919205307098",
  formatted: "9310912781"
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll for visual feedback and UX
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setOpen(false);
  };

  // Handle smooth scrolling for anchor links
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      
      // Update URL without causing page jump
      history.pushState(null, '', href);
    }
    
    handleLinkClick();
  };

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-sm' 
          : 'bg-background/90 backdrop-blur-sm'
      } border-b border-border`}
      role="banner"
      aria-label="Main navigation"
    >
      <nav 
        className="container mx-auto flex items-center justify-between px-4 py-3 md:py-4"
        aria-label="Primary navigation"
      >
        {/* Logo with structured data and improved accessibility */}
        <a 
          href="#" 
          className="group flex items-center gap-2 text-xl md:text-2xl font-extrabold text-primary tracking-tight hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg"
          aria-label="Goldn Enterprises - Home"
          itemProp="url"
        >
          <Wrench className="h-5 w-5 md:h-6 md:w-6 text-primary group-hover:rotate-12 transition-transform" aria-hidden="true" />
          <span itemProp="name">Goldn Enterprises</span>
        </a>

        {/* Desktop Navigation - Improved accessibility */}
        <ul 
          className="hidden md:flex items-center gap-6 lg:gap-8"
          role="list"
          aria-label="Navigation links"
        >
          {navLinks.map((link) => (
            <li key={link.href} role="listitem">
              <a
                href={link.href}
                className="text-sm lg:text-base font-medium text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1"
                aria-label={link.ariaLabel}
                onClick={(e) => handleSmoothScroll(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA Button - Enhanced with multiple contact options */}
        <div className="hidden md:flex items-center gap-3">
          {/* Secondary contact option (optional - can be hidden on mobile) */}
          <a 
            href={`tel:${BUSINESS_PHONES.secondary}`}
            className="text-xs text-muted-foreground hover:text-primary transition-colors hidden lg:inline-flex items-center gap-1"
            aria-label="Call Sachin at 9205307098"
          >
            <Phone className="h-3 w-3" aria-hidden="true" />
            <span>Sachin: 92053 07098</span>
          </a>
          
          <Button 
            asChild 
            className="gap-2 shadow-sm hover:shadow-md transition-all duration-200" 
            size="sm"
            aria-label="Call now for immediate appliance repair service"
          >
            <a href={`tel:${BUSINESS_PHONES.primary}`}>
              <Phone className="h-4 w-4" aria-hidden="true" />
              <span>Call Now: {BUSINESS_PHONES.formatted}</span>
            </a>
          </Button>
        </div>

        {/* Mobile menu toggle button - Improved accessibility */}
        <button 
          className="md:hidden text-foreground p-2 rounded-lg hover:bg-accent transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          onClick={() => setOpen(!open)} 
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </nav>

      {/* Mobile menu with improved accessibility and animation */}
      {open && (
        <div 
          id="mobile-menu"
          className="md:hidden border-t border-border bg-background px-4 pb-6 animate-in slide-in-from-top duration-200"
          role="dialog"
          aria-label="Mobile navigation menu"
          aria-modal="true"
        >
          <ul 
            className="flex flex-col gap-2 py-4"
            role="list"
            aria-label="Mobile navigation links"
          >
            {navLinks.map((link) => (
              <li key={link.href} role="listitem">
                <a
                  href={link.href}
                  className="block py-3 px-2 text-base font-medium text-muted-foreground hover:text-primary hover:bg-accent rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  aria-label={link.ariaLabel}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          
          {/* Mobile CTA with both contact numbers */}
          <div className="space-y-3 mt-2">
            <Button 
              asChild 
              className="w-full gap-2 shadow-sm" 
              size="default"
              aria-label="Call primary number for service"
            >
              <a href={`tel:${BUSINESS_PHONES.primary}`}>
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span>Call {BUSINESS_PHONES.formatted}</span>
              </a>
            </Button>
            
            <Button 
              asChild 
              variant="outline"
              className="w-full gap-2"
              size="default"
              aria-label="Call secondary number for service"
            >
              <a href={`tel:${BUSINESS_PHONES.secondary}`}>
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span>Call Sachin: 92053 07098</span>
              </a>
            </Button>
          </div>
          
          {/* Business hours indicator for mobile */}
          <div className="mt-4 pt-3 border-t border-border text-center">
            <p className="text-xs text-muted-foreground">
              📞 24/7 Emergency Service Available
            </p>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
 import { AirVent, Refrigerator, WashingMachine, Wind, GlassWater, Cpu } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

// Service data with enhanced SEO metadata
const services = [
  {
    icon: AirVent,
    title: "AC Repair & Installation",
    shortTitle: "AC Repair",
    desc: "Expert split & window AC repair, gas refilling, installation and annual maintenance services in Delhi NCR.",
    longDesc: "Professional air conditioning repair services including gas refilling, compressor replacement, condenser cleaning, and complete AC installation. We service all major brands including Daikin, Voltas, LG, Samsung, Blue Star, Hitachi, and Carrier.",
    img: "/ac.jpeg",
    alt: "Technician repairing an air conditioner unit in Delhi",
    keywords: ["AC repair", "AC installation", "gas filling", "AC service"],
    brandSupport: ["Daikin", "Voltas", "LG", "Samsung", "Blue Star", "Hitachi", "Carrier"],
    priceRange: "₹299 - ₹1500",
    offerSchema: {
      serviceType: "ACRepair",
      estimatedCost: "299-1500 INR"
    }
  },
  {
    icon: Refrigerator,
    title: "Refrigerator Repair",
    shortTitle: "Fridge Repair",
    desc: "Quick diagnosis and repair of all refrigerator brands — cooling issues, compressor, thermostat and more in Delhi NCR.",
    longDesc: "Expert refrigerator repair services for single door, double door, side-by-side, and French door refrigerators. We fix cooling problems, water leakage, ice maker issues, thermostat failures, and compressor problems.",
    img: "/fridge.jpeg",
    alt: "Technician repairing a refrigerator in Delhi NCR",
    keywords: ["fridge repair", "refrigerator service", "cooling problem", "compressor repair"],
    brandSupport: ["LG", "Samsung", "Whirlpool", "Godrej", "Haier", "Bosch"],
    priceRange: "₹399 - ₹2000",
    offerSchema: {
      serviceType: "RefrigeratorRepair",
      estimatedCost: "399-2000 INR"
    }
  },
  {
    icon: WashingMachine,
    title: "Washing Machine Repair",
    shortTitle: "Washing Machine Service",
    desc: "Front-load & top-load washing machine repair — drum, motor, drainage and electronic issues in Delhi NCR.",
    longDesc: "Professional washing machine repair services for both front-load and top-load machines. We fix drum issues, motor problems, drainage errors, electronic board failures, and water leakage. Service all major brands with genuine spare parts.",
    img: "/wash.jpeg",
    alt: "Expert repairing washing machine in Delhi",
    keywords: ["washing machine repair", "washing machine service", "front load repair", "top load repair"],
    brandSupport: ["LG", "Samsung", "Whirlpool", "Bosch", "IFB", "Godrej"],
    priceRange: "₹349 - ₹1800",
    offerSchema: {
      serviceType: "WashingMachineRepair",
      estimatedCost: "349-1800 INR"
    }
  },
  {
    icon: Wind,
    title: "Air Cooler Repair",
    shortTitle: "Cooler Service",
    desc: "Desert and personal cooler servicing — motor replacement, pump repair and full maintenance in Delhi NCR.",
    longDesc: "Complete air cooler repair and maintenance services for desert coolers, personal coolers, and industrial coolers. We handle motor replacement, pump repair, pad replacement, and annual maintenance contracts.",
    img: "https://5.imimg.com/data5/SELLER/Default/2021/3/NJ/DU/HF/47491114/duct-air-cooler-repairing-service.jpg",
    alt: "Air cooler repair service in Delhi NCR",
    keywords: ["air cooler repair", "cooler service", "cooler motor replacement", "cooler pump repair"],
    brandSupport: ["Symphony", "Kenstar", "Bajaj", "Orient", "Crompton", "Havells"],
    priceRange: "₹249 - ₹1200",
    offerSchema: {
      serviceType: "AirCoolerRepair",
      estimatedCost: "249-1200 INR"
    }
  },
  {
    icon: GlassWater,
    title: "Water Dispenser Repair",
    shortTitle: "Water Dispenser Service",
    desc: "Hot & cold water dispenser repair and servicing for homes and offices across Delhi NCR.",
    longDesc: "Expert water dispenser repair services for both hot and cold water dispensers. We fix heating element issues, cooling problems, water leakage, and thermostat failures. Service available for homes, offices, and commercial establishments.",
    img: "/water.jpeg",
    alt: "Water dispenser repair technician in Delhi",
    keywords: ["water dispenser repair", "water cooler service", "water dispenser not cooling", "RO repair"],
    brandSupport: ["Kent", "Aquaguard", "Pureit", "Livpure", "Eureka Forbes"],
    priceRange: "₹299 - ₹1500",
    offerSchema: {
      serviceType: "WaterDispenserRepair",
      estimatedCost: "299-1500 INR"
    }
  },
  {
    icon: Cpu,
    title: "All Home Electronics",
    shortTitle: "Electronics Repair",
    desc: "Complete repair solutions for microwaves, geysers, inverters and other home electronics in Delhi NCR.",
    longDesc: "Comprehensive repair services for all home electronics including microwave ovens, water geysers, inverters, chimney, induction cooktops, and more. We provide doorstep service with genuine spare parts and warranty on repairs.",
    img: "https://t4.ftcdn.net/jpg/02/12/12/11/360_F_212121143_ucenfKpectJYMmXt9fw860yWIq79019k.jpg",
    alt: "Home electronics repair services in Delhi NCR",
    keywords: ["microwave repair", "geyser repair", "inverter repair", "chimney repair", "electronics repair"],
    brandSupport: ["LG", "Samsung", "Bajaj", "V-Guard", "Havells", "Butterfly"],
    priceRange: "₹299 - ₹2000",
    offerSchema: {
      serviceType: "ElectronicsRepair",
      estimatedCost: "299-2000 INR"
    }
  },
];

// Service card component with lazy loading and image optimization
const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <Card 
      className="overflow-hidden hover-scale cursor-default group flex flex-col h-full transition-all duration-300 hover:shadow-xl border-border/50"
      itemScope
      itemType="https://schema.org/Service"
    >
      {/* Image container with loading optimization */}
      <div className="relative w-full h-48 bg-muted overflow-hidden">
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-gradient-to-r from-muted to-muted/50 animate-pulse" />
        )}
        <img
          src={imageError ? "/fallback-service-image.jpg" : service.img}
          alt={service.alt || `${service.title} service in Delhi NCR`}
          className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
          width="600"
          height="400"
          itemProp="image"
        />
        
        {/* Price indicator badge */}
        <div className="absolute top-3 right-3 bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-semibold px-2 py-1 rounded-full shadow-sm">
          {service.priceRange}
        </div>
      </div>
      
      <CardContent className="p-5 flex-grow">
        <div className="flex items-center gap-2 mb-3 text-primary">
          <service.icon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
          <h3 
            className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors"
            itemProp="name"
          >
            {service.title}
          </h3>
        </div>
        
        <p 
          className="text-sm text-muted-foreground mb-3"
          itemProp="description"
        >
          {service.desc}
        </p>
        
        {/* Brand support badges */}
        <div className="flex flex-wrap gap-1 mt-3 pt-3 border-t border-border/50">
          {service.brandSupport.slice(0, 4).map((brand) => (
            <span 
              key={brand} 
              className="text-[10px] bg-muted text-muted-foreground px-2 py-0.5 rounded-full"
            >
              {brand}
            </span>
          ))}
          {service.brandSupport.length > 4 && (
            <span className="text-[10px] bg-muted text-muted-foreground px-2 py-0.5 rounded-full">
              +{service.brandSupport.length - 4} more
            </span>
          )}
        </div>
        
        {/* Hidden structured data for rich snippets */}
        <div className="hidden" itemProp="offers" itemScope itemType="https://schema.org/Offer">
          <span itemProp="priceCurrency" content="INR" />
          <span itemProp="price" content={service.priceRange.split('-')[0].replace('₹', '')} />
          <span itemProp="availability" content="https://schema.org/InStock" />
          <span itemProp="eligibleRegion" content="Delhi NCR" />
        </div>
        
        {/* Call to action button */}
        <Button 
          asChild 
          variant="ghost" 
          size="sm" 
          className="mt-4 w-full group/btn hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          aria-label={`Book ${service.title} service`}
        >
          <a href="tel:9310912781" className="flex items-center justify-center gap-2">
            <Phone className="h-4 w-4" />
            <span>Book Service Now</span>
            <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};

// Main Services Section Component
const ServicesSection = () => {
  // Structured data for the entire services section
  const serviceCatalogSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Appliance Repair Services in Delhi NCR",
    "description": "Professional repair and maintenance services for all major home appliances in Delhi NCR",
    "numberOfItems": services.length,
    "itemListElement": services.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": service.title,
        "description": service.desc,
        "provider": {
          "@type": "LocalBusiness",
          "name": "Goldn Enterprises",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Delhi NCR",
            "addressRegion": "Delhi",
            "addressCountry": "IN"
          }
        },
        "areaServed": ["Delhi", "Noida", "Gurgaon", "Ghaziabad", "Faridabad"],
        "availableChannel": {
          "@type": "ServiceChannel",
          "servicePhone": {
            "@type": "ContactPoint",
            "telephone": "+919310912781",
            "contactType": "customer service"
          }
        }
      }
    }))
  };

  return (
    <section 
      id="services" 
      className="py-16 md:py-24 bg-muted/50 scroll-mt-20"
      aria-label="Our appliance repair services"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <div className="container mx-auto px-4">
        {/* Section header with enhanced SEO */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider bg-primary/10 px-3 py-1 rounded-full">
              Our Expertise
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-foreground">
            Professional Appliance Repair Services
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            Expert repair and maintenance for all major home appliances in Delhi NCR
          </p>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span>24/7 Service Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span>Same-Day Service</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span>Genuine Spare Parts</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span>Warranty on Repairs</span>
            </div>
          </div>
        </div>
        
        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-12 pt-4">
          <div className="bg-primary/5 rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="text-foreground font-semibold mb-3">
              Need immediate assistance?
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="gap-2">
                <a href="tel:9310912781">
                  <Phone className="h-5 w-5" />
                  Call Sachin: 93109 12781
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <a href="tel:9205307098">
                  <Phone className="h-5 w-5" />
                  Call Nitish: 92053 07098
                </a>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              *Free consultation | Quick response | Doorstep service
            </p>
          </div>
        </div>
      </div>
      
      {/* Hidden structured data for rich results */}
      <script type="application/ld+json">
        {JSON.stringify(serviceCatalogSchema)}
      </script>
    </section>
  );
};

// Import missing dependencies
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";

export default ServicesSection;
 import { 
  Clock, IndianRupee, Wrench, ShieldCheck, Zap, MapPin, 
  Award, Users, ThumbsUp, Star, CheckCircle, Home,
  Phone, BadgeCheck, Truck, CalendarCheck, Sparkles
} from "lucide-react";
import { useState, useEffect } from "react";

// Enhanced feature data with SEO-optimized content
const features = [
  { 
    icon: Clock, 
    title: "Same Day Service", 
    desc: "We arrive the same day you call — no long waits. 24/7 emergency service available across Delhi NCR.",
    shortDesc: "Rapid response within 2-4 hours",
    metric: "2-4 Hours",
    metricLabel: "Response Time",
    color: "from-blue-500 to-cyan-500",
    benefits: ["Emergency repairs", "Weekend service", "Holiday support"]
  },
  { 
    icon: IndianRupee, 
    title: "Affordable Pricing", 
    desc: "Transparent pricing with no hidden charges. Free inspection and upfront cost estimation before any repair work.",
    shortDesc: "Starting from ₹299 only",
    metric: "₹299",
    metricLabel: "Starting Price",
    color: "from-green-500 to-emerald-500",
    benefits: ["Free estimate", "No hidden costs", "Best price guarantee"]
  },
  { 
    icon: Wrench, 
    title: "Expert Technicians", 
    desc: "Skilled professionals with years of experience. Certified and trained for all major appliance brands.",
    shortDesc: "10+ years experience",
    metric: "10+ Years",
    metricLabel: "Avg Experience",
    color: "from-purple-500 to-pink-500",
    benefits: ["Brand certified", "Continuous training", "Latest tools"]
  },
  { 
    icon: ShieldCheck, 
    title: "Trusted Service", 
    desc: "Background-verified and certified technicians. 100% safe and reliable service for your home.",
    shortDesc: "2500+ Happy Customers",
    metric: "2500+",
    metricLabel: "Happy Customers",
    color: "from-orange-500 to-red-500",
    benefits: ["Verified technicians", "Insured service", "Quality guaranteed"]
  },
  { 
    icon: Zap, 
    title: "Quick Response", 
    desc: "Fast booking and rapid response times. Get connected with a technician within minutes of your call.",
    shortDesc: "30-Min Response",
    metric: "< 30 Mins",
    metricLabel: "Response Time",
    color: "from-yellow-500 to-amber-500",
    benefits: ["Instant booking", "Real-time tracking", "Quick diagnosis"]
  },
  { 
    icon: MapPin, 
    title: "Doorstep Service", 
    desc: "We come to your home — fully equipped with all tools and genuine spare parts for immediate repairs.",
    shortDesc: "Covering All Delhi NCR",
    metric: "6+ Cities",
    metricLabel: "Cities Covered",
    color: "from-indigo-500 to-blue-500",
    benefits: ["Free travel", "On-site repairs", "No transportation cost"]
  },
];

// Additional trust indicators
const trustIndicators = [
  { icon: Award, label: "Certified Experts", count: "15+", bg: "bg-amber-50 dark:bg-amber-950/20" },
  { icon: Users, label: "Customers Served", count: "2500+", bg: "bg-blue-50 dark:bg-blue-950/20" },
  { icon: Star, label: "Customer Rating", count: "4.8/5", bg: "bg-purple-50 dark:bg-purple-950/20" },
  { icon: CheckCircle, label: "Repairs Completed", count: "5000+", bg: "bg-green-50 dark:bg-green-950/20" },
];

// Testimonials data for social proof
const testimonials = [
  {
    name: "Rahul Sharma",
    location: "Noida Sector 62",
    text: "Excellent AC repair service! The technician arrived within 2 hours and fixed my split AC perfectly. Very professional and reasonably priced.",
    rating: 5,
    service: "AC Repair"
  },
  {
    name: "Priya Mehta",
    location: "Gurgaon, DLF Phase 3",
    text: "My refrigerator was not cooling. Goldn Enterprises sent an expert who diagnosed and fixed the issue in no time. Highly recommended!",
    rating: 5,
    service: "Fridge Repair"
  },
  {
    name: "Amit Kumar",
    location: "Delhi, Dwarka",
    text: "Best washing machine repair service I've ever used. Transparent pricing and genuine spare parts. Will definitely use again.",
    rating: 5,
    service: "Washing Machine"
  }
];

const WhyChooseUs = () => {
  const [animated, setAnimated] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    setAnimated(true);
  }, []);

  return (
    <section 
      id="why-us" 
      className="py-16 md:py-24 bg-gradient-to-b from-muted/30 to-muted/50 relative overflow-hidden scroll-mt-20"
      aria-label="Why choose Goldn Enterprises for appliance repair"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header with enhanced styling */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4 animate-fade-in">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider bg-primary/10 px-4 py-1.5 rounded-full">
              Why Customers Love Us
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Why Choose Goldn Enterprises
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto text-lg">
            Trusted by thousands of families across Delhi NCR for reliable and professional appliance repair services
          </p>
        </div>

        {/* Trust indicators/stats section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {trustIndicators.map((indicator, idx) => (
            <div
              key={indicator.label}
              className={`${indicator.bg} rounded-2xl p-4 text-center backdrop-blur-sm border border-border/50 hover-scale`}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <indicator.icon className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl md:text-3xl font-bold text-foreground">{indicator.count}</div>
              <div className="text-xs md:text-sm text-muted-foreground">{indicator.label}</div>
            </div>
          ))}
        </div>

        {/* Features grid with enhanced design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {features.map((feature, idx) => (
            <div
              key={feature.title}
              className="group relative bg-background rounded-2xl p-6 border border-border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-default"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              itemScope
              itemType="https://schema.org/Service"
            >
              {/* Gradient border effect on hover */}
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-r ${feature.color}`} style={{ padding: '1px' }} />
              
              <div className="relative">
                {/* Icon with animated background */}
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur-md group-hover:blur-xl transition-all duration-300" />
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/5 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-7 w-7 text-primary" />
                  </div>
                </div>

                {/* Title with SEO microdata */}
                <h3 
                  className="font-bold text-xl mb-2 text-foreground group-hover:text-primary transition-colors"
                  itemProp="name"
                >
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p 
                  className="text-sm text-muted-foreground mb-3 leading-relaxed"
                  itemProp="description"
                >
                  {feature.desc}
                </p>
                
                {/* Metric badge */}
                <div className="inline-flex items-center gap-1 bg-primary/5 rounded-full px-3 py-1 mb-3">
                  <Zap className="h-3 w-3 text-primary" />
                  <span className="text-xs font-medium text-primary">
                    {feature.metric} • {feature.metricLabel}
                  </span>
                </div>
                
                {/* Benefits list - expands on hover */}
                <div className={`overflow-hidden transition-all duration-300 ${hoveredIndex === idx ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <ul className="mt-3 space-y-1 text-xs text-muted-foreground">
                    {feature.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-1">
                        <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hidden structured data */}
                <div className="hidden" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                  <span itemProp="availability" content="https://schema.org/InStock" />
                  <span itemProp="eligibleRegion" content="Delhi NCR" />
                  <span itemProp="priceSpecification" itemScope itemType="https://schema.org/PriceSpecification">
                    <span itemProp="price" content={feature.metric === "₹299" ? "299" : "0"} />
                    <span itemProp="priceCurrency" content="INR" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials section - social proof */}
        <div className="mt-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">What Our Customers Say</h3>
            <p className="text-muted-foreground">Real experiences from satisfied customers across Delhi NCR</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <div
                key={testimonial.name}
                className="bg-background rounded-xl p-6 border border-border shadow-sm hover-scale"
                itemScope
                itemType="https://schema.org/Review"
              >
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-4 italic" itemProp="reviewBody">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-border pt-3">
                  <p className="font-semibold text-foreground" itemProp="author">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                  <span className="text-xs text-primary mt-1 inline-block">{testimonial.service}</span>
                </div>
                <meta itemProp="reviewRating" content={testimonial.rating.toString()} />
              </div>
            ))}
          </div>
        </div>

        {/* Call to action banner */}
        <div className="mt-12 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 text-center border border-primary/20">
          <h3 className="text-2xl font-bold mb-2">Ready for Professional Service?</h3>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Join thousands of satisfied customers who trust Goldn Enterprises for their appliance repair needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:9310912781"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105 shadow-md"
            >
              <Phone className="h-5 w-5" />
              Call Sachin: 93109 12781
            </a>
            <a
              href="tel:9205307098"
              className="inline-flex items-center justify-center gap-2 border border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <Phone className="h-5 w-5" />
              Call Nitish: 92053 07098
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-6 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">✓ Free Consultation</span>
            <span className="flex items-center gap-1">✓ No Hidden Charges</span>
            <span className="flex items-center gap-1">✓ 30-Day Warranty</span>
            <span className="flex items-center gap-1">✓ 24/7 Support</span>
          </div>
        </div>
      </div>
    </section>
  );
};

// Add missing imports
 
export default WhyChooseUs;
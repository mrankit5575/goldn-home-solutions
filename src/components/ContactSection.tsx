 import { useState, useEffect } from "react";
import { 
  Phone, MapPin, Mail, MessageCircle, Clock, CheckCircle, 
  Send, Calendar, Users, Award, Star, Shield, Truck, 
  Zap, ThumbsUp, AlertCircle, Navigation
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Service options with SEO-optimized data
const serviceOptions = [
  { value: "ac", label: "❄️ AC Repair & Installation", keywords: "air conditioner repair, AC gas filling, AC installation", price: "₹299-₹1500" },
  { value: "fridge", label: "🧊 Refrigerator Repair", keywords: "fridge repair, refrigerator service, cooling problem", price: "₹399-₹2000" },
  { value: "washing", label: "🧼 Washing Machine Repair", keywords: "washing machine repair, front load repair, top load service", price: "₹349-₹1800" },
  { value: "cooler", label: "💨 Air Cooler Repair", keywords: "air cooler repair, cooler service, cooler motor replacement", price: "₹249-₹1200" },
  { value: "dispenser", label: "💧 Water Dispenser Repair", keywords: "water dispenser repair, water cooler service", price: "₹299-₹1500" },
  { value: "other", label: "🔧 Other Home Electronics", keywords: "microwave repair, geyser repair, inverter service", price: "₹299-₹2000" },
];

// Business contact information with structured data
const businessContacts = {
  phones: [
    { number: "+919205307098", formatted: "92053 07098", name: "Nitish", priority: "primary" },
    { number: "+919310912781", formatted: "93109 12781", name: "Sachin", priority: "secondary" }
  ],
  email: "goldnenterprises4@gmail.com",
  address: {
    street: "Darbhanga Vihar",
    locality: "Delhi NCR",
    region: "Delhi",
    postalCode: "110092",
    country: "India",
    fullAddress: "Darbhanga Vihar, Delhi NCR, India 110092"
  },
  hours: {
    weekdays: "8:00 AM - 8:00 PM",
    weekend: "9:00 AM - 6:00 PM",
    emergency: "24/7 Emergency Service"
  }
};

// Service areas with geo-coordinates
const serviceAreas = [
  { city: "Delhi", areas: ["Central Delhi", "South Delhi", "East Delhi", "West Delhi", "North Delhi"] },
  { city: "Noida", areas: ["Sector 62", "Sector 18", "Sector 50", "Sector 15", "Sector 137"] },
  { city: "Gurgaon", areas: ["DLF Phase 1-5", "Sohna Road", "Golf Course Road", "Sector 56", "Sector 57"] },
  { city: "Ghaziabad", areas: ["Indirapuram", "Vaishali", "Raj Nagar", "Crossings Republik"] },
  { city: "Faridabad", areas: ["Sector 15", "Sector 37", "Neelam Bata Road", "NIT"] }
];

const ContactSection = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedServiceData, setSelectedServiceData] = useState<any>(null);

  useEffect(() => {
    // Track contact section view for analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'view_contact_section', {
        event_category: 'engagement',
        event_label: 'contact_section_visible'
      });
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Track form submission
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'contact_form_submit', {
        event_category: 'conversion',
        event_label: service,
        service_name: serviceOptions.find(s => s.value === service)?.label
      });
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({ 
      title: "✅ Service Request Sent!", 
      description: `Thank you ${name}! We'll call you within 15 minutes for ${serviceOptions.find(s => s.value === service)?.label}.`,
      duration: 5000,
    });
    
    setName("");
    setPhone("");
    setService("");
    setSelectedServiceData(null);
    setIsSubmitting(false);
  };

  const handleWhatsApp = (phoneNumber: string, name?: string) => {
    const formattedNumber = phoneNumber.replace(/\s+/g, '');
    const message = encodeURIComponent(
      `Hello! I'm interested in your repair services at Goldn Enterprises. Could you please help me with my appliance repair?`
    );
    window.open(`https://wa.me/${formattedNumber}?text=${message}`, '_blank');
    
    // Track WhatsApp click
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'whatsapp_click', {
        event_category: 'contact',
        phone_number: phoneNumber,
        contact_name: name
      });
    }
  };

  const handlePhoneClick = (phoneNumber: string, name: string) => {
    // Track phone click
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'phone_click', {
        event_category: 'contact',
        phone_number: phoneNumber,
        contact_name: name
      });
    }
  };

  // Structured data for contact page
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Goldn Enterprises",
    "description": "Professional AC, refrigerator, washing machine, and home appliance repair services in Delhi NCR",
    "url": "https://goldnenterprises.shop",
    "telephone": businessContacts.phones.map(p => p.number),
    "email": businessContacts.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": businessContacts.address.street,
      "addressLocality": businessContacts.address.locality,
      "addressRegion": businessContacts.address.region,
      "postalCode": businessContacts.address.postalCode,
      "addressCountry": businessContacts.address.country
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday", "Sunday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "contactPoint": businessContacts.phones.map(phone => ({
      "@type": "ContactPoint",
      "telephone": phone.number,
      "contactType": "customer service",
      "contactOption": "TollFree",
      "areaServed": "IN",
      "availableLanguage": "English",
      "name": phone.name
    }))
  };

  return (
    <section 
      id="contact" 
      className="py-16 md:py-24 bg-gradient-to-b from-muted/30 to-muted/60 scroll-mt-20"
      aria-label="Contact Goldn Enterprises for appliance repair services"
      itemScope
      itemType="https://schema.org/ContactPoint"
    >
      <div className="container mx-auto px-4">
        {/* Section Header with Enhanced SEO */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 px-4 py-1 text-sm border-primary/20 text-primary animate-pulse">
            📞 24/7 Emergency Support Available
          </Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Book Your Service Today
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Get expert AC, refrigerator, washing machine, and home appliance repair services in Delhi NCR
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            ⚡ Same-day service • 💯 Genuine parts • 🔧 Expert technicians
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Form Card with Enhanced UX */}
          <Card className="border-2 shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-2 mb-6">
                <div className="h-8 w-1 bg-gradient-to-b from-primary to-primary/60 rounded-full"></div>
                <h2 className="text-xl md:text-2xl font-semibold">Quick Service Request</h2>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-5" itemScope itemType="https://schema.org/ContactForm">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium flex items-center gap-1">
                    <Users className="h-4 w-4 text-primary" />
                    Your Full Name
                  </Label>
                  <Input 
                    id="name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    placeholder="e.g., Rajesh Kumar" 
                    required 
                    className="h-11 focus:ring-2 focus:ring-primary/20 transition-all"
                    itemProp="name"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium flex items-center gap-1">
                    <Phone className="h-4 w-4 text-primary" />
                    Phone Number
                  </Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    value={phone} 
                    onChange={(e) => setPhone(e.target.value)} 
                    placeholder="Enter your 10-digit mobile number" 
                    required 
                    pattern="[0-9]{10}"
                    className="h-11 focus:ring-2 focus:ring-primary/20"
                    itemProp="telephone"
                  />
                  <p className="text-xs text-muted-foreground">We'll call you within 15 minutes</p>
                </div>
                
                <div className="space-y-2">
                  <Label className="text-sm font-medium flex items-center gap-1">
                     Service Required
                  </Label>
                  <Select 
                    value={service} 
                    onValueChange={(value) => {
                      setService(value);
                      setSelectedServiceData(serviceOptions.find(s => s.value === value));
                    }} 
                    required
                  >
                    <SelectTrigger className="h-11">
                      <SelectValue placeholder="Select your appliance" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {selectedServiceData && (
                    <div className="mt-2 p-2 bg-primary/5 rounded-lg text-xs">
                      <p className="text-primary">💰 Price range: {selectedServiceData.price}</p>
                      <p className="text-muted-foreground">🔧 Same-day service available</p>
                    </div>
                  )}
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-11 text-base font-medium bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary transition-all duration-300 shadow-lg hover:shadow-xl"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending Request...
                    </>
                  ) : (
                    <>
                      Book Now
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>

                <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground pt-2">
                  <Clock className="h-3 w-3" />
                  <span>Average response time: <strong className="text-primary">5-10 minutes</strong></span>
                  <CheckCircle className="h-3 w-3 ml-2" />
                  <span>Free consultation</span>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info Card with Enhanced Design */}
          <Card className="border-2 shadow-xl bg-gradient-to-br from-primary/5 to-transparent">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-2 mb-6">
                <div className="h-8 w-1 bg-gradient-to-b from-primary to-primary/60 rounded-full"></div>
                <h2 className="text-xl md:text-2xl font-semibold">Get in Touch</h2>
              </div>

              <div className="space-y-6">
                {/* Phone Section with Enhanced Design */}
                <div className="flex items-start gap-4 group">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-sm text-muted-foreground mb-2 flex items-center gap-1">
                      <Zap className="h-3 w-3 text-primary" />
                      Call Us Anytime - 24/7
                    </p>
                    <div className="space-y-2">
                      {businessContacts.phones.map((phone) => (
                        <div key={phone.number} className="flex items-center justify-between bg-background rounded-lg p-3 border hover:border-primary/30 transition-all">
                          <div>
                            <a 
                              href={`tel:${phone.number}`}
                              onClick={() => handlePhoneClick(phone.number, phone.name)}
                              className="text-primary hover:underline font-medium text-lg"
                              itemProp="telephone"
                            >
                              +{phone.formatted}
                            </a>
                            <p className="text-xs text-muted-foreground">{phone.name}</p>
                          </div>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-8 px-3 text-green-600 hover:text-green-700 hover:bg-green-50 rounded-full"
                            onClick={() => handleWhatsApp(phone.number, phone.name)}
                          >
                            <MessageCircle className="h-4 w-4 mr-1" />
                            WhatsApp
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Email Section */}
                <div className="flex items-start gap-4 group">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-sm text-muted-foreground mb-2">Email Support</p>
                    <div className="bg-background rounded-lg p-3 border hover:border-primary/30 transition-all">
                      <a 
                        href={`mailto:${businessContacts.email}`}
                        className="text-primary hover:underline font-medium block break-all"
                        itemProp="email"
                      >
                        {businessContacts.email}
                      </a>
                      <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        Reply within 2-4 hours
                      </p>
                    </div>
                  </div>
                </div>

                {/* Address Section with Map Link */}
                <div className="flex items-start gap-4 group">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-sm text-muted-foreground mb-2">Service Location</p>
                    <div className="bg-background rounded-lg p-3 border hover:border-primary/30 transition-all">
                      <p className="font-medium" itemProp="address">{businessContacts.address.fullAddress}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <a 
                          href="https://maps.google.com/?q=Darbhanga+Vihar+Delhi+NCR+India"
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-xs text-primary hover:underline inline-flex items-center gap-1"
                        >
                          <Navigation className="h-3 w-3" />
                          Get Directions on Google Maps
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Service Hours */}
                <div className="mt-6 pt-4 border-t border-border">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="h-4 w-4 text-primary" />
                    <p className="font-semibold text-sm">Service Hours</p>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="bg-background rounded-lg p-2 text-center border">
                      <p className="font-medium">Mon-Fri</p>
                      <p className="text-xs text-muted-foreground">{businessContacts.hours.weekdays}</p>
                    </div>
                    <div className="bg-background rounded-lg p-2 text-center border">
                      <p className="font-medium">Sat-Sun</p>
                      <p className="text-xs text-muted-foreground">{businessContacts.hours.weekend}</p>
                    </div>
                  </div>
                  <div className="mt-2 text-center">
                    <Badge variant="default" className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                      🚨 {businessContacts.hours.emergency}
                    </Badge>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap gap-2 justify-center pt-4">
                  <Badge variant="outline" className="gap-1">
                    <Shield className="h-3 w-3" /> Verified Technicians
                  </Badge>
                  <Badge variant="outline" className="gap-1">
                    <Star className="h-3 w-3" /> 4.8★ Rating
                  </Badge>
                  <Badge variant="outline" className="gap-1">
                    <Truck className="h-3 w-3" /> Doorstep Service
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Service Areas Section - Enhanced Local SEO */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">📍 Service Areas in Delhi NCR</h3>
            <p className="text-muted-foreground">We provide doorstep service across all major locations</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {serviceAreas.map((area) => (
              <div key={area.city} className="bg-background rounded-lg p-3 border text-center hover:shadow-md transition-all">
                <p className="font-semibold text-primary">{area.city}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {area.areas.slice(0, 2).join(", ")}
                  {area.areas.length > 2 && "..."}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Floating WhatsApp Button with Enhanced Design */}
        <div className="fixed bottom-6 right-6 z-50">
          <Button
            size="lg"
            className="rounded-full h-14 w-14 shadow-2xl bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white group"
            onClick={() => handleWhatsApp(businessContacts.phones[0].number, businessContacts.phones[0].name)}
          >
            <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
          </Button>
          <div className="absolute -top-8 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
            Chat Now
          </div>
        </div>

        {/* Hidden Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(contactSchema)}
        </script>
      </div>
    </section>
  );
};

export default ContactSection;
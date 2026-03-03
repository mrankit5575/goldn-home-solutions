 import { useState } from "react";
import { Phone, MapPin, Mail, MessageCircle, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ContactSection = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ 
      title: "✅ Request Sent!", 
      description: "We'll call you back within 15 minutes.",
      duration: 5000,
    });
    setName("");
    setPhone("");
    setService("");
  };

  const handleWhatsApp = (phoneNumber: string) => {
    // Remove spaces and ensure proper format for WhatsApp
    const formattedNumber = phoneNumber.replace(/\s+/g, '');
    const message = encodeURIComponent("Hello! I'm interested in your repair services.");
    window.open(`https://wa.me/${formattedNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-muted/30 to-muted/60">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 px-4 py-1 text-sm border-primary/20 text-primary">
            📞 24/7 Support Available
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Book a Service
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Fill the form below and we'll get back to you within minutes
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Form Card */}
          <Card className="border-2 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-6">
                <div className="h-8 w-1 bg-primary rounded-full"></div>
                <h3 className="text-xl font-semibold">Send Service Request</h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium">Your Name</Label>
                  <Input 
                    id="name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    placeholder="Enter your full name" 
                    required 
                    className="h-11 focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium">Phone Number</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    value={phone} 
                    onChange={(e) => setPhone(e.target.value)} 
                    placeholder="Enter your 10-digit number" 
                    required 
                    className="h-11 focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Service Required</Label>
                  <Select value={service} onValueChange={setService} required>
                    <SelectTrigger className="h-11">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ac">❄️ AC Repair & Installation</SelectItem>
                      <SelectItem value="fridge">🧊 Refrigerator Repair</SelectItem>
                      <SelectItem value="washing">🧼 Washing Machine Repair</SelectItem>
                      <SelectItem value="cooler">💨 Air Cooler Repair</SelectItem>
                      <SelectItem value="dispenser">💧 Water Dispenser Repair</SelectItem>
                      <SelectItem value="other">🔧 Other Home Electronics</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-11 text-base font-medium bg-primary hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Book Now
                  <CheckCircle className="ml-2 h-4 w-4" />
                </Button>

                <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground pt-2">
                  <Clock className="h-3 w-3" />
                  <span>Average response time: 5 minutes</span>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info Card */}
          <Card className="border-2 shadow-lg bg-gradient-to-br from-primary/5 to-transparent">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-6">
                <div className="h-8 w-1 bg-primary rounded-full"></div>
                <h3 className="text-xl font-semibold">Contact Information</h3>
              </div>

              <div className="space-y-6">
                {/* Phone Section */}
                <div className="flex items-start gap-4 group">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-sm text-muted-foreground mb-2">Call Us Anytime</p>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between bg-background rounded-lg p-2 border">
                        <a 
                          href="tel:+919205307098" 
                          className="text-primary hover:underline font-medium"
                        >
                          +91 92053 07098
                        </a>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-8 px-3 text-green-600 hover:text-green-700 hover:bg-green-50"
                          onClick={() => handleWhatsApp("919205307098")}
                        >
                          <MessageCircle className="h-4 w-4 mr-1" />
                          Chat
                        </Button>
                      </div>
                      <div className="flex items-center justify-between bg-background rounded-lg p-2 border">
                        <a 
                          href="tel:+919310912781" 
                          className="text-primary hover:underline font-medium"
                        >
                          +91 93109 12781
                        </a>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-8 px-3 text-green-600 hover:text-green-700 hover:bg-green-50"
                          onClick={() => handleWhatsApp("919310912781")}
                        >
                          <MessageCircle className="h-4 w-4 mr-1" />
                          Chat
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Email Section */}
                <div className="flex items-start gap-4 group">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-sm text-muted-foreground mb-2">Email Us</p>
                    <div className="bg-background rounded-lg p-3 border">
                      <a 
                        href="mailto:goldnenterprises4@gmail.com" 
                        className="text-primary hover:underline font-medium block"
                      >
                        goldnenterprises4@gmail.com
                      </a>
                      <p className="text-xs text-muted-foreground mt-1">Reply within 2-4 hours</p>
                    </div>
                  </div>
                </div>

                {/* Address Section */}
                <div className="flex items-start gap-4 group">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-sm text-muted-foreground mb-2">Visit Us</p>
                    <div className="bg-background rounded-lg p-3 border">
                      <p className="font-medium">Darbhanga Vihar</p>
                      <p className="text-muted-foreground">Delhi NCR, India</p>
                      <a 
                        href="https://maps.google.com/?q=Darbhanga+Vihar+Delhi+NCR+India" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xs text-primary hover:underline mt-2 inline-block"
                      >
                        View on Google Maps →
                      </a>
                    </div>
                  </div>
                </div>

                {/* Service Hours */}
                <div className="mt-6 pt-4 border-t">
                   
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Floating WhatsApp Button (Optional) */}
        <div className="fixed bottom-6 right-6 z-50">
          <Button
            size="lg"
            className="rounded-full h-14 w-14 shadow-lg bg-green-500 hover:bg-green-600 text-white"
            onClick={() => handleWhatsApp("919205307098")}
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
import { useState } from "react";
import { Phone, MapPin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Request Sent!", description: "We'll call you back shortly." });
    setName("");
    setPhone("");
    setService("");
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">Book a Service</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-lg mx-auto">
          Fill the form below and we'll get back to you within minutes
        </p>
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5 bg-background rounded-xl p-6 border border-border shadow-sm">
            <div>
              <Label htmlFor="name">Your Name</Label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" required />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter your phone number" required />
            </div>
            <div>
              <Label>Service Required</Label>
              <Select value={service} onValueChange={setService} required>
                <SelectTrigger><SelectValue placeholder="Select a service" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="ac">AC Repair & Installation</SelectItem>
                  <SelectItem value="fridge">Refrigerator Repair</SelectItem>
                  <SelectItem value="washing">Washing Machine Repair</SelectItem>
                  <SelectItem value="cooler">Air Cooler Repair</SelectItem>
                  <SelectItem value="dispenser">Water Dispenser Repair</SelectItem>
                  <SelectItem value="other">Other Home Electronics</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" className="w-full text-base">Book Now</Button>
          </form>

          {/* Info */}
          <div className="flex flex-col justify-center gap-6">
            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-primary mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold">Phone</p>
                <a href="tel:9310912781" className="text-primary hover:underline">+91 92053 07098 </a>
                <br />
                <a href="tel:9310912781" className="text-primary hover:underline">+91 93109 12781</a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-primary mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-muted-foreground">info@goldnenterprises.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold">Address</p>
                <p className="text-muted-foreground">Delhi NCR, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

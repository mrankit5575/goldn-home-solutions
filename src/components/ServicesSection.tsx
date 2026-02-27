import { AirVent, Refrigerator, WashingMachine, Wind, GlassWater, Cpu } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: AirVent,
    title: "AC Repair & Installation",
    desc: "Expert split & window AC repair, gas refilling, installation and annual maintenance services.",
    // img: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80&fit=crop",
    img:"/ac.jpeg"
  },
  {
    icon: Refrigerator,
    title: "Refrigerator Repair",
    desc: "Quick diagnosis and repair of all refrigerator brands — cooling issues, compressor, thermostat and more.",
    // img: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=600&q=80&fit=crop",
    img:"/fridge.jpeg"

  },
  {
    icon: WashingMachine,
    title: "Washing Machine Repair",
    desc: "Front-load & top-load washing machine repair — drum, motor, drainage and electronic issues.",
    // img: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=600&q=80&fit=crop",
    img:"/wash.jpeg"

  },
  {
    icon: Wind,
    title: "Air Cooler Repair",
    desc: "Desert and personal cooler servicing — motor replacement, pump repair and full maintenance.",
    // img: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80&fit=crop",
    img:"https://5.imimg.com/data5/SELLER/Default/2021/3/NJ/DU/HF/47491114/duct-air-cooler-repairing-service.jpg"

  },
  {
    icon: GlassWater,
    title: "Water Dispenser Repair",
    desc: "Hot & cold water dispenser repair and servicing for homes and offices across Delhi NCR.",
    // img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80&fit=crop",
    img:"/water.jpeg"

  },
  {
    icon: Cpu,
    title: "All Home Electronics",
    desc: "Complete repair solutions for microwaves, geysers, inverters and other home electronics.",
    // img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80&fit=crop",
    img:"https://t4.ftcdn.net/jpg/02/12/12/11/360_F_212121143_ucenfKpectJYMmXt9fw860yWIq79019k.jpg"

  },
];

const ServicesSection = () => (
  <section id="services" className="py-16 md:py-24 bg-muted/50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">Our Services</h2>
      <p className="text-center text-muted-foreground mb-12 max-w-lg mx-auto">
        Professional repair and maintenance for all major home appliances
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <Card key={s.title} className="overflow-hidden hover-scale cursor-default">
            <img
              src={s.img}
              alt={s.title}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <CardContent className="p-5">
              <div className="flex items-center gap-2 mb-2 text-primary">
                <s.icon className="h-5 w-5" />
                <h3 className="font-semibold text-lg text-foreground">{s.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;

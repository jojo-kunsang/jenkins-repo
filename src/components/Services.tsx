import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Users, Mountain, Coffee, Camera } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: MapPin,
      title: "Local Sightseeing",
      description: "Explore Darjeeling's famous tea gardens, Tiger Hill sunrise, and scenic viewpoints with our knowledgeable drivers."
    },
    {
      icon: Mountain,
      title: "Hill Station Tours",
      description: "Comfortable rides to nearby hill stations including Kalimpong, Mirik, and Kurseong."
    },
    {
      icon: Clock,
      title: "Airport Transfers",
      description: "Reliable transfers to/from Bagdogra Airport and New Jalpaiguri Railway Station."
    },
    {
      icon: Users,
      title: "Group Travel",
      description: "Spacious vehicles for family trips and group tours with experienced local guides."
    },
    {
      icon: Coffee,
      title: "Tea Garden Visits",
      description: "Special tours to famous tea estates with tasting sessions and garden walks."
    },
    {
      icon: Camera,
      title: "Photography Tours",
      description: "Customized routes for capturing the best landscapes and cultural sites of Darjeeling."
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From local sightseeing to airport transfers, we provide comprehensive taxi services 
            tailored to your needs in the beautiful hills of Darjeeling.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-mountain transition-all duration-300 transform hover:-translate-y-2 border-2 hover:border-primary/20"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-hero rounded-full flex items-center justify-center group-hover:animate-float">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
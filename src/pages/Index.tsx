import { Phone, Mail, MapPin, Clock, Car } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
      
      <div className="relative z-10 min-h-screen flex items-center justify-center p-8">
        <div className="max-w-lg mx-auto text-center space-y-12">
          {/* Logo & Brand */}
          <div className="space-y-4 animate-fade-in">
            <div className="inline-flex items-center space-x-3 text-primary">
              <Car className="w-8 h-8" />
              <span className="text-3xl font-bold">Darjeeling Cab</span>
            </div>
            <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full"></div>
          </div>
          
          {/* Coming Soon Section */}
          <div className="space-y-6 animate-slide-up">
            <div className="space-y-3">
              <h1 className="text-5xl font-light text-foreground tracking-wide">
                Coming Soon
              </h1>
              <p className="text-lg text-muted-foreground">
                Website under development
              </p>
            </div>
            
            <div className="max-w-md mx-auto">
              <p className="text-muted-foreground leading-relaxed">
                We're crafting a beautiful experience for your taxi booking needs in Darjeeling. 
                Meanwhile, reach out to us directly.
              </p>
            </div>
          </div>
          
          {/* Contact Cards */}
          <div className="space-y-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Card className="hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-muted-foreground">Call us</p>
                    <p className="text-lg font-semibold text-foreground">8967386612</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-muted-foreground">Email us</p>
                    <p className="text-lg font-semibold text-foreground">info@darjeelingcab.in</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Address & Hours */}
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="border-dashed border-2 border-muted">
                <CardContent className="p-4 text-center">
                  <MapPin className="w-5 h-5 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium text-foreground mb-1">Our Location</p>
                  <div className="text-xs text-muted-foreground leading-relaxed">
                    <p>Peshok Tea Garden</p>
                    <p>Rangli Rangliot</p>
                    <p>Darjeeling, WB - 734312</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-dashed border-2 border-muted">
                <CardContent className="p-4 text-center">
                  <Clock className="w-5 h-5 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium text-foreground mb-1">Service Hours</p>
                  <div className="text-xs text-muted-foreground">
                    <p>24/7 Available</p>
                    <p>All Days</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Button variant="hero" size="lg" className="w-full md:w-auto px-8 py-4">
              <Phone className="w-4 h-4" />
              Book Your Ride Now
            </Button>
            <p className="text-xs text-muted-foreground mt-3">
              Professional • Reliable • Local Expertise
            </p>
          </div>
          
          {/* Progress indicator */}
          <div className="space-y-2 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <p className="text-xs text-muted-foreground">Website Progress</p>
            <div className="w-48 h-2 bg-muted rounded-full mx-auto overflow-hidden">
              <div className="h-full bg-gradient-hero rounded-full w-3/4 animate-pulse"></div>
            </div>
            <p className="text-xs text-muted-foreground">75% Complete</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
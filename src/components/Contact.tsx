import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-mountain text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Book Your Ride
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Ready to explore Darjeeling? Contact us for immediate booking or any inquiries. 
            We're available 24/7 for your convenience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Cards */}
          <div className="space-y-6">
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Call Us</h3>
                  <p className="text-white/80">+91 98765 43210</p>
                  <p className="text-white/80">+91 87654 32109</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Email Us</h3>
                  <p className="text-white/80">booking@darjeelingcab.com</p>
                  <p className="text-white/80">info@darjeelingcab.com</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Location</h3>
                  <p className="text-white/80">Darjeeling Mall Road</p>
                  <p className="text-white/80">West Bengal, India</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Working Hours</h3>
                  <p className="text-white/80">24/7 Available</p>
                  <p className="text-white/80">All Days of the Week</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* CTA Section */}
          <div className="flex items-center justify-center">
            <div className="text-center space-y-8">
              <div className="text-6xl animate-float">🚖</div>
              <h3 className="text-3xl font-bold">Ready to Book?</h3>
              <p className="text-lg text-white/90 mb-8">
                Call us now for immediate booking or use WhatsApp for quick responses. 
                Our experienced drivers are ready to serve you.
              </p>
              <div className="space-y-4">
                <Button variant="cta" size="lg" className="w-full text-lg py-6">
                  <Phone className="w-5 h-5" />
                  Call Now: +91 98765 43210
                </Button>
                <Button variant="outline" size="lg" className="w-full text-lg py-6 bg-white/10 border-white/30 text-white hover:bg-white/20">
                  WhatsApp Booking
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
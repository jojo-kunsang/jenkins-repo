import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-hero py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold text-hero-foreground mb-4">
              🚖 Darjeeling Cab
            </div>
            <p className="text-hero-foreground/80 mb-4">
              Your trusted partner for comfortable and safe travels through the beautiful hills of Darjeeling.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-hero-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-hero-foreground/80 hover:text-accent transition-colors">Services</a></li>
              <li><a href="#about" className="text-hero-foreground/80 hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-hero-foreground/80 hover:text-accent transition-colors">Contact</a></li>
              <li><a href="#" className="text-hero-foreground/80 hover:text-accent transition-colors">Booking</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-hero-foreground mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-accent" />
                <span className="text-hero-foreground/80">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-accent" />
                <span className="text-hero-foreground/80">booking@darjeelingcab.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="text-hero-foreground/80">Darjeeling, West Bengal</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-hero-foreground/20 mt-8 pt-8 text-center">
          <p className="text-hero-foreground/60">
            © 2024 Darjeeling Cab. All rights reserved. | Professional taxi service in Darjeeling Hills
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
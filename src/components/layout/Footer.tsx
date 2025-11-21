import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/products", label: "Products" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact" },
  ];

  const services = [
    "Exploration & Production",
    "Engineering Solutions",
    "Maintenance Services",
    "Transportation",
    "Environmental Compliance",
    "Safety Training",
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-secondary rounded flex items-center justify-center">
                <span className="text-secondary-foreground font-bold text-xl">N</span>
              </div>
              <span className="text-2xl font-bold">NAFTA</span>
            </div>
            <p className="text-primary-foreground/80 mb-6">
              Leading provider of comprehensive oil and gas industry solutions with over 25 years of excellence.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-secondary rounded flex items-center justify-center hover:bg-secondary/90 transition-smooth">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary rounded flex items-center justify-center hover:bg-secondary/90 transition-smooth">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary rounded flex items-center justify-center hover:bg-secondary/90 transition-smooth">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary rounded flex items-center justify-center hover:bg-secondary/90 transition-smooth">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-secondary">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-secondary transition-smooth"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-secondary">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to="/services"
                    className="text-primary-foreground/80 hover:text-secondary transition-smooth"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-secondary">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-secondary mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  123 Industrial Ave, Houston, TX 77002, USA
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-secondary flex-shrink-0" />
                <a href="tel:+1234567890" className="text-primary-foreground/80 hover:text-secondary transition-smooth">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-secondary flex-shrink-0" />
                <a href="mailto:info@nafta.com" className="text-primary-foreground/80 hover:text-secondary transition-smooth">
                  info@nafta.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
            <p>&copy; {new Date().getFullYear()} NAFTA Oil & Gas. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="#" className="hover:text-secondary transition-smooth">
                Privacy Policy
              </Link>
              <Link to="#" className="hover:text-secondary transition-smooth">
                Terms of Service
              </Link>
              <Link to="#" className="hover:text-secondary transition-smooth">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

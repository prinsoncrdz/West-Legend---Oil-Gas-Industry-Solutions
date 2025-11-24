import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/products", label: "Products" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex gap-6">
            <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-secondary transition-smooth">
              <Phone size={14} />
              <span className="hidden md:inline">+1 (234) 567-890</span>
            </a>
            <a href="mailto:info@nafta.com" className="flex items-center gap-2 hover:text-secondary transition-smooth">
              <Mail size={14} />
              <span className="hidden md:inline">info@nafta.com</span>
            </a>
          </div>
          <div className="text-xs">
            Leading Oil & Gas Solutions Provider
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-smooth ${
          isScrolled
            ? "bg-background shadow-industrial"
            : "bg-background/95 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-secondary rounded flex items-center justify-center">
                <span className="text-secondary-foreground font-bold text-xl">N</span>
              </div>
              <span className="text-2xl font-bold text-primary">NAFTA</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-semibold transition-smooth relative ${
                    isActive(link.path)
                      ? "text-secondary"
                      : "text-foreground hover:text-secondary"
                  }`}
                >
                  {link.label}
                  {isActive(link.path) && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-secondary"></span>
                  )}
                </Link>
              ))}
            </nav>

            {/* CTA + Cart Icon */}
<div className="hidden lg:flex items-center gap-6">

  <Button asChild className="bg-secondary hover:bg-secondary/90">
    <Link to="/contact">Get A Quote</Link>
  </Button>

  {/* Cart Icon */}
  <Link to="/cart" className="relative group">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-7 h-7 text-primary group-hover:text-secondary transition"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m0 0h12m-12 0a2 2 0 104 0m8 0a2 2 0 104 0"
      />
    </svg>

    {/* Cart count bubble */}
    <span className="absolute -top-2 -right-2 bg-secondary text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
      0
    </span>
  </Link>
</div>


            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border animate-fade-in">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-semibold py-2 transition-smooth ${
                    isActive(link.path)
                      ? "text-secondary"
                      : "text-foreground hover:text-secondary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* Cart - Mobile */}
<Link
  to="/cart"
  onClick={() => setIsMobileMenuOpen(false)}
  className="font-semibold py-2 flex items-center gap-3 text-foreground hover:text-secondary transition-smooth"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m0 0h12m-12 0a2 2 0 104 0m8 0a2 2 0 104 0"
    />
  </svg>
  Cart
</Link>


              <Button asChild className="bg-secondary hover:bg-secondary/90 w-full">
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Get A Quote
                </Link>
              </Button>
              
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;

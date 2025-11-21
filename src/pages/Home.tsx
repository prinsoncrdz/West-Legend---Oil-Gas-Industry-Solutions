import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Users, TrendingUp } from "lucide-react";
import productsData from "@/data/products.json";
import servicesData from "@/data/services.json";

const Home = () => {
  const featuredProducts = productsData.slice(0, 3);
  const featuredServices = servicesData.slice(0, 3);

  return (
    <div>
      <Hero />

      {/* Why Choose Us */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4">Why Choose NAFTA</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Industry-leading expertise and innovative solutions for all your oil and gas needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-background rounded-lg shadow-industrial">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-secondary" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">25+ Years Excellence</h3>
              <p className="text-muted-foreground">
                Over two decades of proven expertise in the oil and gas industry
              </p>
            </div>

            <div className="text-center p-8 bg-background rounded-lg shadow-industrial">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-secondary" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Expert Team</h3>
              <p className="text-muted-foreground">
                Highly skilled professionals dedicated to your success
              </p>
            </div>

            <div className="text-center p-8 bg-background rounded-lg shadow-industrial">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="text-secondary" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Innovation First</h3>
              <p className="text-muted-foreground">
                Cutting-edge technology and sustainable solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Products</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              High-quality equipment and solutions for the oil and gas industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
              <Link to="/products">
                View All Products
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive solutions tailored to meet your specific requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-primary-foreground mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Get in touch with our team to discuss your oil and gas industry needs
            </p>
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-12">
              <Link to="/contact">
                Contact Us Today
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

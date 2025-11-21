import ServiceCard from "@/components/ServiceCard";
import servicesData from "@/data/services.json";

const Services = () => {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <h1 className="mb-4 text-primary-foreground">Our Services</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl">
            Comprehensive solutions backed by expertise, innovation, and a commitment to excellence
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A systematic approach to delivering exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Consultation</h3>
              <p className="text-muted-foreground">
                Understanding your needs and project requirements
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Planning</h3>
              <p className="text-muted-foreground">
                Developing comprehensive solutions and strategies
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Execution</h3>
              <p className="text-muted-foreground">
                Implementing solutions with precision and expertise
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold mb-3">Support</h3>
              <p className="text-muted-foreground">
                Ongoing maintenance and optimization services
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

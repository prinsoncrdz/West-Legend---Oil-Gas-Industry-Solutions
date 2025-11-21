import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Industrial Ave", "Houston, TX 77002", "United States"],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+1 (234) 567-890", "+1 (234) 567-891"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@nafta.com", "support@nafta.com"],
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 2:00 PM", "Sun: Closed"],
    },
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <h1 className="mb-4 text-primary-foreground">Contact Us</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl">
            Get in touch with our team. We're here to answer your questions and discuss your project needs.
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className="bg-background p-6 rounded-lg shadow-industrial text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-secondary" size={28} />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-muted-foreground text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4">Send Us a Message</h2>
              <p className="text-xl text-muted-foreground">
                Fill out the form below and we'll get back to you within 24 hours
              </p>
            </div>
            
            <div className="bg-muted p-8 md:p-12 rounded-lg shadow-industrial">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="h-96 bg-grey-light">
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center">
            <MapPin className="text-secondary mx-auto mb-4" size={48} />
            <p className="text-xl text-muted-foreground">Map Integration</p>
            <p className="text-muted-foreground">123 Industrial Ave, Houston, TX 77002</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

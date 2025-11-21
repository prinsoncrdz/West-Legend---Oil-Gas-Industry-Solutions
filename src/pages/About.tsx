import { CheckCircle, Target, Eye, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "Committed to delivering the highest quality in every project",
    },
    {
      icon: Eye,
      title: "Innovation",
      description: "Pioneering new technologies and sustainable solutions",
    },
    {
      icon: Heart,
      title: "Safety",
      description: "Prioritizing the well-being of our team and environment",
    },
    {
      icon: CheckCircle,
      title: "Integrity",
      description: "Operating with transparency and ethical standards",
    },
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <h1 className="mb-4 text-primary-foreground">About NAFTA</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl">
            Leading the oil and gas industry with innovation, expertise, and commitment to excellence since 1998
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Founded in 1998, NAFTA has grown from a small regional provider to a global leader in 
                oil and gas solutions. Our journey has been marked by continuous innovation, unwavering 
                commitment to safety, and dedication to our clients' success.
              </p>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                With over 25 years of experience, we've successfully completed more than 500 projects 
                across 50 countries, establishing ourselves as a trusted partner in the energy sector.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, NAFTA continues to push boundaries, investing in cutting-edge technology and 
                sustainable practices to shape the future of the oil and gas industry.
              </p>
            </div>
            
            <div className="bg-muted rounded-lg p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-5xl font-bold text-secondary mb-2">25+</div>
                  <div className="text-muted-foreground">Years in Business</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-secondary mb-2">500+</div>
                  <div className="text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-secondary mb-2">50+</div>
                  <div className="text-muted-foreground">Countries Served</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-secondary mb-2">300+</div>
                  <div className="text-muted-foreground">Expert Team Members</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-background p-8 rounded-lg shadow-industrial">
              <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
                <Target className="text-secondary" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide innovative, safe, and sustainable oil and gas solutions that drive industry 
                progress while maintaining the highest standards of quality and environmental responsibility. 
                We are committed to delivering value to our clients and contributing to global energy security.
              </p>
            </div>

            <div className="bg-background p-8 rounded-lg shadow-industrial">
              <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
                <Eye className="text-secondary" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the world's most trusted and innovative partner in the oil and gas industry, 
                setting new standards for excellence, safety, and sustainability. We envision a future 
                where our solutions power progress while protecting our planet for generations to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="text-secondary" size={40} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-primary-foreground">Join Our Team</h2>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
            We're always looking for talented individuals passionate about the energy industry. 
            Explore career opportunities and become part of our growing team.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;

import { Scissors, Sparkles, GraduationCap, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Hair & Skin Care",
    description: "Advanced treatments for glowing skin and healthy, lustrous hair. We use only premium-grade dermatological products.",
    features: ["Luxury Hair Spa & Styling", "Advanced Skin Rejuvenation", "Organic Facials & Detox"],
  },
  {
    icon: Sparkles,
    title: "Bridal Makeup",
    description: "Turn your special day into a fairy tale with our expert bridal makeup artists. We craft looks that are timeless.",
    features: ["HD & Airbrush Makeup", "Traditional Bridal Looks", "Pre-Bridal Packages"],
  },
  {
    icon: GraduationCap,
    title: "Beauty Training",
    description: "Master the art of beauty with our professional training programs led by industry experts in Rajahmundry.",
    features: ["Professional Certification", "Hands-on Makeup Workshops", "Hair Styling Mastery"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 sm:py-28 bg-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            Our Signature Services
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            From precision cuts to luxury spa treatments, discover our range of premium services tailored for your unique needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-rose-light flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-foreground/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="inline-flex items-center text-sm font-semibold text-primary hover:underline"
              >
                Learn More <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

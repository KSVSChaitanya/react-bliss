import heroImage from "@/assets/hero-salon.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="PALS Hair & Beauty Zone salon interior" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/70" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto animate-fade-in-up">
        <p className="text-primary text-xs uppercase tracking-[0.3em] font-semibold mb-4">
          Established Expertise in Rajahmundry
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-card leading-tight mb-6">
          Where Beauty{" "}
          <em className="text-primary not-italic font-display">Meets Perfection</em>
        </h1>
        <p className="text-card/80 text-base sm:text-lg max-w-xl mx-auto mb-10 font-sans">
          Rajahmundry's premier destination for exquisite hair styling,
          rejuvenating skin care, and professional bridal transformations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <a href="#services">
              Explore Services <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
          <Button variant="outline" size="lg" className="border-card/30 text-card hover:bg-card/10 hover:text-card" asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import bridalImage from "@/assets/bridal-artistry.jpg";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const features = [
  "Pre-bridal skin care & glow regimes",
  "Advanced HD & Airbrush Makeup",
  "Saree draping & intricate hair styling",
];

const BridalSection = () => {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0">
        <img src={bridalImage} alt="Bridal makeup artistry" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-charcoal/70" />
      </div>

      <div className="relative z-10 container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-card mb-2">
          Bridal <em className="text-primary">Artistry</em>
        </h2>
        <p className="text-card/80 mb-8 leading-relaxed">
          Your wedding day is the most important day of your life. Our senior makeup artists specialize in HD and Airbrush techniques to ensure you look breathtaking in every frame.
        </p>
        <ul className="space-y-3 mb-10">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-3 text-card/90">
              <span className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <Check className="w-3 h-3 text-primary-foreground" />
              </span>
              {f}
            </li>
          ))}
        </ul>
        <Button size="lg" asChild>
          <a href="#contact">Inquire for Wedding Package</a>
        </Button>
      </div>
    </section>
  );
};

export default BridalSection;

import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "The best bridal makeup I could have asked for. The team is professional and truly understood my vision.",
    name: "Priya S.",
    location: "Rajahmundry",
  },
  {
    quote: "PALS is my go-to for hair coloring. Their products are top-notch and results are always stunning.",
    name: "Ravi K.",
    location: "Rajahmundry",
  },
  {
    quote: "Excellent beauty training academy. The hands-on sessions really helped me build my confidence.",
    name: "Anjali M.",
    location: "Rajahmundry",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 sm:py-28 bg-warm">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground text-center mb-16">
          What Our Clients Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-card rounded-2xl p-8 shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed mb-6 italic">"{t.quote}"</p>
              <div>
                <p className="font-semibold text-foreground text-sm">— {t.name}</p>
                <p className="text-xs text-muted-foreground">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

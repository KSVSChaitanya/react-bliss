import academyImage from "@/assets/academy.jpg";
import { Button } from "@/components/ui/button";

const AcademySection = () => {
  return (
    <section id="academy" className="py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src={academyImage} alt="Beauty training academy" className="w-full h-[420px] object-cover" />
            </div>
            <div className="absolute -bottom-5 left-6 bg-primary text-primary-foreground rounded-xl px-5 py-3 shadow-lg">
              <span className="font-display text-2xl font-bold">15+</span>
              <p className="text-[10px] uppercase tracking-wider">Industry Courses</p>
            </div>
          </div>

          <div>
            <p className="text-primary text-xs uppercase tracking-[0.2em] font-semibold mb-3">PALS Academy</p>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-6 leading-tight">
              Beauty Training Academy
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Start your career in the beauty industry with expert-led training. From fundamental hair styling to advanced makeup artistry, we provide hands-on experience and certification.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="border border-border rounded-xl p-4">
                <h4 className="font-display font-semibold text-foreground mb-1">Hair Styling</h4>
                <p className="text-xs text-muted-foreground">Basic to advanced cutting</p>
              </div>
              <div className="border border-border rounded-xl p-4">
                <h4 className="font-display font-semibold text-foreground mb-1">Skin Aesthetics</h4>
                <p className="text-xs text-muted-foreground">Treatments & training</p>
              </div>
            </div>
            <Button variant="outline" asChild>
              <a href="#contact">Download Prospectus</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademySection;

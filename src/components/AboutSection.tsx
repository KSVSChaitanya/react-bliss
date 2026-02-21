import aboutImage from "@/assets/about-beauty.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img src={aboutImage} alt="Beauty portrait" className="w-full h-[500px] object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-4 bg-primary text-primary-foreground rounded-xl px-6 py-4 shadow-lg">
              <span className="font-display text-3xl font-bold">10+</span>
              <p className="text-xs uppercase tracking-wider">Years Experience</p>
            </div>
          </div>

          <div>
            <p className="text-primary text-xs uppercase tracking-[0.2em] font-semibold mb-3">About PALS</p>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-6 leading-tight">
              Your One-Stop Beauty Destination in Rajahmundry
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              At PALS Hair & Beauty Zone, we believe that beauty is an art and you are the canvas. Our team of expert stylists and dermatologists in Rajahmundry are dedicated to bringing out your inner glow.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Whether it's a routine haircut or a complete bridal makeover, we combine state-of-the-art technology with premium products to ensure a world-class experience.
            </p>

            <div className="flex gap-12">
              <div>
                <span className="font-display text-4xl font-bold text-primary">10+</span>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Years Experience</p>
              </div>
              <div>
                <span className="font-display text-4xl font-bold text-primary">5k+</span>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

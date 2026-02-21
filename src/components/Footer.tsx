const Footer = () => {
  return (
    <footer className="bg-charcoal text-card/80 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-xs">P</span>
            </div>
            <span className="font-display font-bold text-card">PALS</span>
            <span className="text-card/60 text-sm">Hair & Beauty Zone</span>
          </div>

          <div className="flex gap-8 text-sm">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>

          <p className="text-xs text-card/50">
            © 2024 PALS Hair & Beauty Zone. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

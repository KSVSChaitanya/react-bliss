import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", service: "Hair & Skin Care", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Request Sent!", description: "We'll get back to you shortly." });
    setForm({ name: "", phone: "", service: "Hair & Skin Care", message: "" });
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">Let's Connect</h2>
            <p className="text-muted-foreground mb-10">
              Visit us for a consultation or book your appointment via phone. Experience the best hair and skin care in town.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-rose-light flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Phone</p>
                  <a href="tel:+917013623230" className="font-semibold text-foreground hover:text-primary transition-colors">+91 7013623230</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-rose-light flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Email</p>
                  <a href="mailto:Pals.Rjy@Gmail.Com" className="font-semibold text-foreground hover:text-primary transition-colors">Pals.Rjy@Gmail.Com</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-rose-light flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Location</p>
                  <p className="font-semibold text-foreground">Rajahmundry, Andhra Pradesh</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-sm border border-border space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5 block">Name</label>
                <Input
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5 block">Phone</label>
                <Input
                  placeholder="+91 00000 00000"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  required
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5 block">Select Service</label>
              <select
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
              >
                <option>Hair & Skin Care</option>
                <option>Bridal Makeup</option>
                <option>Beauty Training</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5 block">Message</label>
              <Textarea
                placeholder="Tell us about your requirements..."
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>
            <Button type="submit" className="w-full" size="lg">
              Send Request
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

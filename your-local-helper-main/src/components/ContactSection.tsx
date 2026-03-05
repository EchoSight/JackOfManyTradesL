import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-secondary text-secondary-foreground">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-primary font-display font-semibold text-sm tracking-wide uppercase">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold font-display mt-3">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-secondary-foreground/70 font-body text-lg max-w-md mx-auto">
            Drop us a message or give us a call. We're always happy to help.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {[
            { icon: Phone, label: "Call Us", value: "07767 436026" },
            { icon: Mail, label: "Email", value: "jackofmanytrades@gmail.com" },
            { icon: MapPin, label: "Area", value: "Local & Surrounding Areas" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="w-14 h-14 rounded-full bg-primary/15 flex items-center justify-center mx-auto mb-4">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <p className="font-display font-semibold text-secondary-foreground mb-1">{item.label}</p>
              <p className="text-secondary-foreground/70 font-body text-sm">{item.value}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" className="text-lg px-10 py-6 font-display shadow-hero">
            Get a Free Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#pricing", label: "Pricing" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-sm border-b border-secondary-foreground/10">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="font-display font-bold text-xl text-secondary-foreground">
          Jack of Many <span className="text-primary">Trades</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-secondary-foreground/70 hover:text-primary transition-colors font-body text-sm font-medium">
              {l.label}
            </a>
          ))}
        </div>
        <button className="md:hidden text-secondary-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-secondary border-t border-secondary-foreground/10 py-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block px-6 py-3 text-secondary-foreground/70 hover:text-primary font-body">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

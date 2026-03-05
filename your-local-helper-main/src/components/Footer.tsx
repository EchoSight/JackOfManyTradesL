const Footer = () => {
  return (
    <footer className="py-8 bg-secondary border-t border-secondary-foreground/10">
      <div className="container text-center">
        <p className="font-display font-bold text-secondary-foreground mb-1">
          Jack of Many <span className="text-primary">Trades</span>
        </p>
        <p className="text-secondary-foreground/50 font-body text-sm">
          © {new Date().getFullYear()} Jack of Many Trades. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

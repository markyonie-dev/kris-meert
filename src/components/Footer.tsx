import { Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50 bg-navy-medium">
      <div className="container px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-serif text-xl font-bold">
              <span className="text-foreground">Kris</span>
              <span className="text-gradient-gold ml-1">Meert</span>
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a 
              href="mailto:kris.meert@hotmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/kris-meert-4101b62/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Kris Meert. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

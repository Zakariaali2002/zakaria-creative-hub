import { Code2, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
              <Code2 className="w-4 h-4 text-primary" />
            </div>
            <span className="font-bold">Zakaria Desai</span>
          </a>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            © {currentYear} Made with <Heart className="w-4 h-4 text-red-400 fill-red-400" /> by Zakaria
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

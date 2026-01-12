import { ArrowDown, Code2 } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(220_18%_15%_/_0.3)_1px,transparent_1px),linear-gradient(90deg,hsl(220_18%_15%_/_0.3)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-fade-in">
          <Code2 className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground">Software Engineer</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
          Hi, I'm{" "}
          <span className="gradient-text text-glow">Zakaria Desai</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Student Relationship Officer at Aptech
        </p>

        <p className="text-muted-foreground max-w-2xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          Passionate about creating web experiences with HTML, CSS & JavaScript. 
          Building bridges between technology and education.
        </p>

        <div className="flex flex-wrap justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <a
            href="#contact"
            className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all glow-effect hover:scale-105"
          >
            Get in Touch
          </a>
          <a
            href="#about"
            className="px-8 py-3 rounded-lg border border-border hover:border-primary/50 font-semibold transition-all hover:bg-secondary"
          >
            Learn More
          </a>
        </div>

        <a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default Hero;

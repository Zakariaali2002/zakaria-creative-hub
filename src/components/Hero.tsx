import { ArrowDown, Code2, Sparkles, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Enhanced Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-primary/20 to-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-tr from-accent/15 to-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern with gradient overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(220_18%_15%_/_0.3)_1px,transparent_1px),linear-gradient(90deg,hsl(220_18%_15%_/_0.3)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-card mb-8 animate-fade-in border border-primary/20">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="text-sm text-muted-foreground">Available for opportunities</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up">
          Hi, I'm{" "}
          <span className="gradient-text text-glow relative">
            Muhammad Zakaria
            <Sparkles className="absolute -top-2 -right-6 w-6 h-6 text-primary animate-pulse" />
          </span>
        </h1>

        <div className="flex flex-wrap justify-center items-center gap-3 mb-6 animate-slide-up" style={{ animationDelay: '0.15s' }}>
          <span className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium text-sm">
            Software Engineer
          </span>
          <span className="px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-medium text-sm">
            UI/UX Designer
          </span>
          <span className="px-4 py-1.5 rounded-full bg-secondary border border-border text-muted-foreground font-medium text-sm flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" />
            Karachi, Pakistan
          </span>
        </div>

        <p className="text-xl md:text-2xl text-foreground/80 mb-4 animate-slide-up font-medium" style={{ animationDelay: '0.2s' }}>
          Student Relationship Officer at <span className="text-primary">Aptech</span>
        </p>

        <p className="text-muted-foreground max-w-2xl mx-auto mb-12 animate-slide-up leading-relaxed" style={{ animationDelay: '0.3s' }}>
          Motivated software engineering graduate with a solid foundation in web development and design. 
          Passionate about creating exceptional web experiences and building bridges between technology and education.
        </p>

        <div className="flex flex-wrap justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <a
            href="#contact"
            className="group px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover:opacity-90 transition-all shadow-xl shadow-primary/25 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 flex items-center gap-2"
          >
            <Code2 className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            Get in Touch
          </a>
          <a
            href="#about"
            className="px-8 py-4 rounded-xl border-2 border-border hover:border-primary/50 font-semibold transition-all hover:bg-secondary/50 backdrop-blur-sm"
          >
            Learn More
          </a>
        </div>

        <a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground hover:text-primary transition-colors p-2 rounded-full glass-card"
        >
          <ArrowDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default Hero;

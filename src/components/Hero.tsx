import { ArrowDown, Code2, Sparkles, MapPin, Linkedin } from "lucide-react";

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

        {/* Social Links */}
        <div className="flex justify-center gap-4 mt-8 animate-slide-up" style={{ animationDelay: '0.5s' }}>
          <a
            href="https://www.linkedin.com/in/zakaria-ali-54642b254"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl glass-card hover:bg-blue-500/20 hover:border-blue-500/50 transition-all hover:scale-110 group"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6 text-blue-400 group-hover:text-blue-300" />
          </a>
          <a
            href="https://www.behance.net/zakariaali2002"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl glass-card hover:bg-blue-600/20 hover:border-blue-600/50 transition-all hover:scale-110 group"
            aria-label="Behance"
          >
            <svg className="w-6 h-6 text-blue-500 group-hover:text-blue-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
            </svg>
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

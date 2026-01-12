import { User, MapPin, Briefcase } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A dedicated professional with a passion for technology and education
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="glass-card rounded-2xl p-8 gradient-border">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                <User className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Zakaria Desai</h3>
                <p className="text-muted-foreground">Software Engineer</p>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm a Software Engineering graduate from Iqra University with a strong foundation 
              in web development. Currently working as a Student Relationship Officer at Aptech, 
              I combine my technical skills with my experience in education to help students 
              achieve their goals in the tech industry.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Karachi, Pakistan</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Briefcase className="w-5 h-5 text-primary" />
                <span>Student Relationship Officer @ Aptech</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass-card rounded-xl p-6 hover:border-primary/30 transition-all">
              <h4 className="text-lg font-semibold mb-2 text-primary">My Mission</h4>
              <p className="text-muted-foreground">
                To leverage technology and education to create meaningful impact, 
                helping students and professionals navigate the ever-evolving tech landscape.
              </p>
            </div>

            <div className="glass-card rounded-xl p-6 hover:border-primary/30 transition-all">
              <h4 className="text-lg font-semibold mb-2 text-primary">My Approach</h4>
              <p className="text-muted-foreground">
                I believe in continuous learning and practical application. 
                Every project is an opportunity to grow and contribute to the community.
              </p>
            </div>

            <div className="glass-card rounded-xl p-6 hover:border-primary/30 transition-all">
              <h4 className="text-lg font-semibold mb-2 text-primary">My Values</h4>
              <p className="text-muted-foreground">
                Dedication, integrity, and a student-first mindset guide everything I do, 
                whether in coding or mentoring.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

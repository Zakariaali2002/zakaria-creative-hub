import { User, MapPin, Briefcase, GraduationCap, Award, Languages, Target, Heart, Lightbulb, Trophy } from "lucide-react";

const About = () => {
  const languages = [
    { name: "English", level: "Fluent" },
    { name: "Urdu", level: "Native" },
    { name: "Gujarati", level: "Native" },
  ];

  const achievements = [
    "Completed BS in Software Engineering with a strong foundation in software development principles and methodologies",
    "Achieved ACCP Prime certification, demonstrating advanced competency in software engineering and practical application",
    "Successfully completed UI/UX internship at Hyperlink with hands-on design experience",
  ];

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get to Know <span className="gradient-text">Me Better</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A dedicated professional with a passion for technology, design, and education
          </p>
        </div>

        {/* Profile Card */}
        <div className="glass-card rounded-2xl p-8 gradient-border mb-8">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="flex-shrink-0">
              <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-xl shadow-primary/25">
                <User className="w-16 h-16 text-primary-foreground" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-2">Muhammad Zakaria Desai</h3>
              <p className="text-primary font-medium text-lg mb-4">Software Engineer & UI/UX Designer</p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Motivated software engineering graduate from Karachi with a solid foundation in 
                intermediate-level academics and technical knowledge. Currently working as a Student 
                Relationship Officer at Aptech, I combine my technical skills with my experience in 
                education to help students achieve their goals in the tech industry. My aim is to apply 
                and enhance my coding and design proficiency in a dynamic development team.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground/70">Location</p>
                    <p className="text-foreground">Marina Garden Society, Malir 15, Karachi</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground/70">Current Role</p>
                    <p className="text-foreground">Student Relationship Officer @ Aptech</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground/70">Education</p>
                    <p className="text-foreground">BS Software Engineering - Iqra University</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground/70">Certification</p>
                    <p className="text-foreground">ACCP Prime - Aptech</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="glass-card rounded-xl p-6 hover:border-primary/30 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <h4 className="text-lg font-semibold mb-2">My Mission</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              To leverage technology and education to create meaningful impact, 
              helping students and professionals navigate the ever-evolving tech landscape.
            </p>
          </div>

          <div className="glass-card rounded-xl p-6 hover:border-primary/30 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Lightbulb className="w-6 h-6 text-accent" />
            </div>
            <h4 className="text-lg font-semibold mb-2">My Approach</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              I believe in continuous learning and practical application. 
              Every project is an opportunity to grow and contribute to the community.
            </p>
          </div>

          <div className="glass-card rounded-xl p-6 hover:border-primary/30 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-green-500/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Heart className="w-6 h-6 text-green-500" />
            </div>
            <h4 className="text-lg font-semibold mb-2">My Values</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Dedication, integrity, and a student-first mindset guide everything I do, 
              whether in coding or mentoring.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Languages */}
          <div className="glass-card rounded-xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Languages className="w-5 h-5 text-primary" />
              </div>
              <h4 className="text-lg font-semibold">Languages</h4>
            </div>
            <div className="flex flex-wrap gap-3">
              {languages.map((lang) => (
                <div
                  key={lang.name}
                  className="px-4 py-2 rounded-lg bg-secondary/50 border border-border hover:border-primary/30 transition-colors"
                >
                  <span className="font-medium">{lang.name}</span>
                  <span className="text-muted-foreground text-sm ml-2">({lang.level})</span>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="glass-card rounded-xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Trophy className="w-5 h-5 text-primary" />
              </div>
              <h4 className="text-lg font-semibold">Achievements</h4>
            </div>
            <ul className="space-y-3">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-muted-foreground text-sm leading-relaxed">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

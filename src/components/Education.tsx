import { GraduationCap, School, BookOpen, Award, Palette } from "lucide-react";

const educationData = [
  {
    icon: GraduationCap,
    level: "University",
    institution: "Iqra University",
    degree: "Software Engineering",
    description: "Graduated with a focus on software development, programming fundamentals, and modern web technologies.",
  },
  {
    icon: Award,
    level: "Diploma",
    institution: "Aptech",
    degree: "ACCP Prime (3 Years)",
    description: "Completed comprehensive 3-year ACCP Prime diploma program covering advanced programming, software development, and IT skills.",
  },
  {
    icon: Palette,
    level: "Course",
    institution: "Hyperlink",
    degree: "UI/UX Design (3 Months)",
    description: "Completed professional UI/UX design course focusing on user interface design, user experience principles, and design tools.",
  },
  {
    icon: School,
    level: "College",
    institution: "Gov. Degree Science & Commerce College",
    location: "Gulshan Iqbal, Block 7",
    degree: "Pre-Engineering",
    description: "Completed intermediate education with focus on Mathematics, Physics, and Computer Science.",
  },
  {
    icon: BookOpen,
    level: "School",
    institution: "IJK Schooling System",
    degree: "Matriculation",
    description: "Built strong academic foundation with excellence in science and mathematics.",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 px-4 relative bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic journey that shaped my skills and passion for technology
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 animate-pulse-glow z-10" />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="glass-card rounded-2xl p-6 hover:border-primary/30 transition-all group">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                        <edu.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <span className="text-sm text-primary font-medium">{edu.level}</span>
                        <h3 className="text-xl font-bold">{edu.institution}</h3>
                      </div>
                    </div>

                    {edu.location && (
                      <p className="text-sm text-muted-foreground mb-2">{edu.location}</p>
                    )}

                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                      {edu.degree}
                    </div>

                    <p className="text-muted-foreground">{edu.description}</p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

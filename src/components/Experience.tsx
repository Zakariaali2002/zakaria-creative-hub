import { Briefcase, Users, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Student Relationship Officer",
    company: "Aptech",
    period: "Present",
    type: "Current",
    description:
      "Managing student relationships and ensuring a positive learning experience. Bridging the gap between students and the institution to help them achieve their educational goals in technology.",
    responsibilities: [
      "Student counseling and guidance",
      "Relationship management",
      "Academic support coordination",
      "Career guidance assistance",
    ],
  },
  {
    title: "UI/UX Design Intern",
    company: "Hyperlink",
    period: "3 Months",
    type: "Past",
    description:
      "Completed a 3-month internship focusing on user interface and user experience design. Worked on real-world design projects and learned industry-standard design tools and methodologies.",
    responsibilities: [
      "UI/UX design projects",
      "Wireframing & prototyping",
      "User research & testing",
      "Design tool proficiency (Figma)",
    ],
  },
  {
    title: "Teaching Assistant",
    company: "Educational Institution",
    period: "1 Year",
    type: "Past",
    description:
      "Supported instructors in delivering educational content and mentored students in their learning journey. Gained valuable experience in education and communication.",
    responsibilities: [
      "Assisted in course delivery",
      "Student mentoring",
      "Assignment evaluation",
      "Technical support for students",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey in education and technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-8 hover:border-primary/30 transition-all group relative overflow-hidden"
            >
              {/* Badge */}
              <div
                className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
                  exp.type === "Current"
                    ? "bg-primary/20 text-primary"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {exp.type}
              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <Briefcase className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <p className="text-primary">{exp.company}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{exp.period}</span>
                </div>

                <p className="text-muted-foreground mb-6">{exp.description}</p>

                <div>
                  <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

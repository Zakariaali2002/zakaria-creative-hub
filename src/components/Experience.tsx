import { Briefcase, Users, Calendar, MapPin, ShoppingCart } from "lucide-react";

const experiences = [
  {
    title: "E-Commerce Manager",
    company: "Freelance / Self-Employed",
    location: "Karachi",
    period: "2019 - Present",
    type: "Current",
    icon: ShoppingCart,
    description:
      "Managing complete end-to-end e-commerce operations across multiple platforms including Facebook, Instagram, WhatsApp, and websites. Handling everything from order management to delivery coordination.",
    responsibilities: [
      "Multi-platform store management (FB, IG, WhatsApp, Website)",
      "Order processing & customer communication",
      "Inventory & stock management",
      "Delivery coordination & tracking",
      "Customer support & relationship management",
    ],
  },
  {
    title: "Student Relationship Officer",
    company: "Aptech",
    location: "Karachi",
    period: "Present",
    type: "Current",
    icon: Briefcase,
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
    location: "Karachi",
    period: "Apr 2023 - Jun 2023",
    type: "Internship",
    icon: Briefcase,
    description:
      "Collaborated with the design team to develop user-centered design solutions tailored to client requirements. Worked on real-world design projects and learned industry-standard design tools.",
    responsibilities: [
      "UI/UX design projects",
      "Wireframing & prototyping",
      "User research & testing",
      "Design tool proficiency (Figma)",
    ],
  },
  {
    title: "Teaching Assistant",
    company: "IJK Schooling System",
    location: "Karachi",
    period: "Feb 2021 - Jun 2022",
    type: "Past",
    icon: Briefcase,
    description:
      "Prepared teaching materials, organized classroom resources, and maintained accurate student records ensuring smooth administrative operations in the educational setting.",
    responsibilities: [
      "Prepared teaching materials",
      "Organized classroom resources",
      "Maintained student records",
      "Student mentoring & support",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            Professional Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey in education and technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 hover:border-primary/30 transition-all group relative overflow-hidden"
            >
              {/* Badge */}
              <div
                className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
                  exp.type === "Current"
                    ? "bg-green-500/20 text-green-400"
                    : exp.type === "Internship"
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
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <exp.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold leading-tight">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-muted-foreground mb-4 text-sm">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{exp.description}</p>

                <div>
                  <h4 className="text-xs font-semibold mb-2 flex items-center gap-2 text-foreground/80">
                    <Users className="w-3.5 h-3.5 text-primary" />
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-1.5">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
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

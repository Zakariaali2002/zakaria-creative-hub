import { Code, Palette, Globe, ShoppingCart, Layers, Monitor, Sparkles, Zap, Target, Users, MessageSquare, Lightbulb } from "lucide-react";

const skills = [
  {
    name: "HTML5",
    level: 90,
    icon: Code,
    category: "Frontend",
    description: "Semantic markup & accessibility",
  },
  {
    name: "CSS3",
    level: 85,
    icon: Palette,
    category: "Frontend",
    description: "Responsive design & animations",
  },
  {
    name: "JavaScript",
    level: 75,
    icon: Zap,
    category: "Frontend",
    description: "DOM manipulation & ES6+",
  },
  {
    name: "UI/UX Design",
    level: 80,
    icon: Sparkles,
    category: "Design",
    description: "User interface & experience",
  },
  {
    name: "Bootstrap",
    level: 80,
    icon: Layers,
    category: "Frontend",
    description: "Responsive framework",
  },
  {
    name: "WordPress",
    level: 70,
    icon: Globe,
    category: "CMS",
    description: "CMS & theme development",
  },
  {
    name: "Shopify",
    level: 75,
    icon: ShoppingCart,
    category: "E-Commerce",
    description: "Store setup & management",
  },
  {
    name: "Figma",
    level: 85,
    icon: Monitor,
    category: "Design",
    description: "UI design & prototyping",
  },
];

const softSkills = [
  { name: "Problem Solving", icon: Target, description: "Analytical thinking" },
  { name: "Communication", icon: MessageSquare, description: "Clear & effective" },
  { name: "Team Work", icon: Users, description: "Collaborative spirit" },
  { name: "Creativity", icon: Lightbulb, description: "Innovative solutions" },
];

const tools = [
  "Git", "GitHub", "VS Code", "Photoshop", "Illustrator", "Canva", 
  "Microsoft Office", "Slack", "Trello", "Google Analytics"
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            Skills & Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical abilities and professional skills
          </p>
        </div>

        {/* Technical Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="group relative bg-card rounded-2xl p-6 border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
              >
                {/* Category badge */}
                <span className="absolute top-3 right-3 text-[10px] font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                  {skill.category}
                </span>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                {/* Skill info */}
                <h3 className="text-lg font-bold mb-1 text-foreground">{skill.name}</h3>
                <p className="text-muted-foreground text-xs mb-4">{skill.description}</p>

                {/* Progress bar */}
                <div className="relative">
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <span className="absolute -top-5 right-0 text-xs font-semibold text-primary">
                    {skill.level}%
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Soft Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            Soft <span className="gradient-text">Skills</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {softSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="group flex flex-col items-center p-6 bg-card rounded-2xl border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h4 className="font-bold text-foreground mb-1">{skill.name}</h4>
                  <p className="text-muted-foreground text-xs text-center">{skill.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tools & Technologies */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">
            Tools & <span className="gradient-text">Technologies</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {tools.map((tool, index) => (
              <span
                key={index}
                className="px-5 py-2.5 rounded-full bg-card border border-border text-sm font-medium text-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

const skills = [
  {
    name: "HTML",
    level: 90,
    color: "from-orange-400 to-orange-600",
    description: "Semantic markup & accessibility",
  },
  {
    name: "CSS",
    level: 85,
    color: "from-blue-400 to-blue-600",
    description: "Responsive design & animations",
  },
  {
    name: "JavaScript",
    level: 75,
    color: "from-yellow-400 to-yellow-600",
    description: "DOM manipulation & ES6+",
  },
  {
    name: "UI/UX",
    level: 80,
    color: "from-purple-400 to-pink-600",
    description: "User interface & experience design",
  },
  {
    name: "Bootstrap",
    level: 80,
    color: "from-violet-400 to-purple-600",
    description: "Responsive framework & components",
  },
  {
    name: "WordPress",
    level: 70,
    color: "from-sky-400 to-blue-600",
    description: "CMS & theme development",
  },
];

const additionalSkills = [
  "Shopify",
  "E-Commerce",
  "Microsoft Office",
  "Git",
  "Responsive Design",
  "Web Designing",
  "Problem Solving",
  "Communication",
  "Team Collaboration",
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            Skills & Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technical skills I've developed through education and practice
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 text-center hover:border-primary/30 transition-all group"
            >
              {/* Skill icon representation */}
              <div className="relative w-28 h-28 mx-auto mb-4">
                {/* Outer ring */}
                <svg className="w-full h-full -rotate-90">
                  <circle
                    cx="56"
                    cy="56"
                    r="48"
                    stroke="currentColor"
                    strokeWidth="6"
                    fill="none"
                    className="text-secondary"
                  />
                  <circle
                    cx="56"
                    cy="56"
                    r="48"
                    stroke="url(#gradient)"
                    strokeWidth="6"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={`${skill.level * 3.02} 302`}
                    className="transition-all duration-1000"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="hsl(174 72% 56%)" />
                      <stop offset="100%" stopColor="hsl(199 89% 48%)" />
                    </linearGradient>
                  </defs>
                </svg>
                
                {/* Percentage in center */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl font-bold gradient-text">{skill.level}%</span>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-1">{skill.name}</h3>
              <p className="text-muted-foreground text-xs">{skill.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-6">Additional Skills & Tools</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {additionalSkills.map((tag, index) => (
              <span
                key={index}
                className="px-5 py-2.5 rounded-full glass-card text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/30 transition-all cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

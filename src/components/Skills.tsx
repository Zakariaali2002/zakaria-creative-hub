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
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technical skills I've developed through education and practice
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-8 text-center hover:border-primary/30 transition-all group"
            >
              {/* Skill icon representation */}
              <div className="relative w-32 h-32 mx-auto mb-6">
                {/* Outer ring */}
                <svg className="w-full h-full -rotate-90">
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    className="text-secondary"
                  />
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="url(#gradient)"
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={`${skill.level * 3.52} 352`}
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
                  <span className="text-2xl font-bold gradient-text">{skill.level}%</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-2">{skill.name}</h3>
              <p className="text-muted-foreground text-sm">{skill.description}</p>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            Always learning and expanding my skill set
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Git", "Responsive Design", "Problem Solving", "Communication", "Team Collaboration"].map(
              (tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-full bg-secondary text-sm text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors cursor-default"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

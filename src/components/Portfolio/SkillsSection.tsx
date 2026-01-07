import { Palette, Code, Database, Brain } from "lucide-react";

const skillsData = [
  { 
    title: "Frontend", 
    items: ["HTML5", "CSS3", "React.js"], 
    icon: Palette, 
    colorClass: "skill-cyan",
    iconClass: "skill-icon-cyan"
  },
  { 
    title: "Backend", 
    items: ["Java"], 
    icon: Code, 
    colorClass: "skill-purple",
    iconClass: "skill-icon-purple"
  },
  { 
    title: "Database", 
    items: ["MySQL", "MongoDB"], 
    icon: Database, 
    colorClass: "skill-green",
    iconClass: "skill-icon-green"
  },
  { 
    title: "AI Tools", 
    items: ["GitHub Copilot", "ChatGPT"], 
    icon: Brain, 
    colorClass: "skill-pink",
    iconClass: "skill-icon-pink"
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-32 max-w-7xl mx-auto px-6">
      <h2 className="section-title">Technical Skills</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillsData.map((skill, idx) => {
          const Icon = skill.icon;
          return (
            <div key={idx} className={`skill-card ${skill.colorClass}`}>
              <div className="flex items-center gap-3 mb-4">
                <div className={`skill-icon ${skill.iconClass}`}>
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground">{skill.title}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-blue"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}

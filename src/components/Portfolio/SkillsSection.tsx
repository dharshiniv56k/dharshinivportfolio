import { useState } from "react";
import { Palette, Code, Database, Brain, ChevronDown } from "lucide-react";

const skillsData = [
  { 
    title: "Frontend", 
    items: ["HTML5", "CSS3", "React.js"], 
    icon: Palette, 
    gradient: "from-cyan-500 to-blue-600"
  },
  { 
    title: "Backend", 
    items: ["Java"], 
    icon: Code, 
    gradient: "from-purple-500 to-violet-600"
  },
  { 
    title: "Database", 
    items: ["MySQL", "MongoDB"], 
    icon: Database, 
    gradient: "from-green-500 to-teal-600"
  },
  { 
    title: "AI Tools", 
    items: ["GitHub Copilot", "ChatGPT"], 
    icon: Brain, 
    gradient: "from-pink-500 to-rose-600"
  }
];

export default function SkillsSection() {
  const [expandedSkill, setExpandedSkill] = useState<number | null>(null);

  return (
    <section id="skills" className="py-32 max-w-7xl mx-auto px-6">
      <h2 className="section-title">Technical Skills</h2>
      
      <div className="space-y-4 max-w-3xl mx-auto">
        {skillsData.map((skill, idx) => {
          const Icon = skill.icon;
          const isExpanded = expandedSkill === idx;
          
          return (
            <div 
              key={idx} 
              className="project-card cursor-pointer"
              onClick={() => setExpandedSkill(isExpanded ? null : idx)}
            >
              <div className={`project-header bg-gradient-to-r ${skill.gradient}`}>
                <div className="flex items-center gap-3">
                  <Icon size={24} className="text-white" />
                  <h3 className="text-xl font-bold text-white">{skill.title}</h3>
                </div>
                <ChevronDown 
                  className={`text-white transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                  size={24}
                />
              </div>
              
              {isExpanded && (
                <div className="p-6 expanded-content">
                  <ul className="space-y-3">
                    {skill.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-muted-foreground">
                        <span className="text-green-400">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

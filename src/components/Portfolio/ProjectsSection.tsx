import { useState } from "react";
import { ChevronDown } from "lucide-react";

const projects = [
  {
    title: "Smart Cupboard Locking System",
    category: "IoT & Mobile Development",
    description: "Developed an IoT-based security system using NodeMCU ESP8266 with IR sensors and buzzer alerts. Created companion Android application for remote monitoring and control.",
    tech: ["Arduino IDE", "C++", "Android", "IoT", "ESP8266"],
    features: ["Real-time monitoring", "Remote access control", "Alert notifications", "Energy efficient design"],
    gradient: "from-blue to-secondary"
  },
  {
    title: "Smart Car Parking Assistance Hub",
    category: "Full Stack Web Application",
    description: "Built a comprehensive parking management system with real-time space availability tracking. Implemented RESTful APIs for seamless communication between frontend and backend.",
    tech: ["React.js", "Python Flask", "MongoDB", "REST API", "HTML/CSS"],
    features: ["Real-time parking updates", "User authentication", "Booking system", "Interactive UI/UX"],
    gradient: "from-green to-primary"
  }
];

export default function ProjectsSection() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-32 max-w-7xl mx-auto px-6">
      <h2 className="section-title">Featured Projects</h2>
      
      <div className="space-y-6">
        {projects.map((project, idx) => (
          <div 
            key={idx}
            className="project-card"
            onClick={() => setExpandedProject(expandedProject === idx ? null : idx)}
          >
            <div className={`project-header bg-gradient-to-r ${project.gradient}`}>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-foreground/80">{project.category}</p>
              </div>
              <ChevronDown 
                className={`transform transition-transform text-foreground ${expandedProject === idx ? 'rotate-180' : ''}`}
                size={24}
              />
            </div>
            
            <div className="p-6">
              <p className="text-muted-foreground mb-4">{project.description}</p>
              
              {expandedProject === idx && (
                <div className="expanded-content">
                  <div className="mb-4">
                    <h4 className="text-primary font-semibold mb-2">Key Features:</h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="text-green">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-primary font-semibold mb-2">Technology Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

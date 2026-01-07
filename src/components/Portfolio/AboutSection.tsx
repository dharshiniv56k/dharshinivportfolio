import { GraduationCap, Briefcase, Zap } from "lucide-react";

const stats = [
  { icon: GraduationCap, value: "MCA", label: "Student at KEC", color: "text-primary" },
  { icon: Briefcase, value: "Intern", label: "TAP Academy", color: "text-secondary" },
  { icon: Zap, value: "8.56", label: "CGPA", color: "text-green" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-32 max-w-7xl mx-auto px-6">
      <h2 className="section-title">About Me</h2>
      
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className="stat-card">
              <Icon className={`${stat.color} mb-4`} size={40} />
              <h3 className="text-3xl font-bold text-foreground mb-2">{stat.value}</h3>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          );
        })}
      </div>
      
      <div className="glass-card-lg">
        <p className="text-lg leading-relaxed text-muted-foreground">
          I am a <span className="text-primary font-semibold">Master of Computer Applications (MCA)</span> student at Kongu Engineering College, Erode (2024–2026), with a strong foundation in Computer Science from my Bachelor's degree.
          <br /><br />
          Currently working as a <span className="text-secondary font-semibold">Full Stack Developer Intern</span> at TAP Academy (Dec 2025 – May 2026), I'm gaining hands-on experience with Java, Spring Boot, Hibernate, MySQL, React, and RESTful APIs.
          <br /><br />
          My passion lies in building <span className="text-green font-semibold">structured, efficient, and maintainable applications</span>. I aim to contribute to reliable software systems as a Java Developer or Full Stack Developer.
        </p>
      </div>
    </section>
  );
}

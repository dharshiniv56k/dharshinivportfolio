import { useState } from "react";
import { ChevronDown, Award } from "lucide-react";

const education = [
  {
    title: "Master of Computer Applications (MCA)",
    place: "Kongu Engineering College, Erode",
    year: "2024 - 2026",
    cgpa: "8.56",
    highlights: ["Advanced Java Programming", "Database Management Systems", "Web Technologies", "Data Structures & Algorithms"],
    icon: "🎓"
  },
  {
    title: "B.Sc Computer Science",
    place: "Kongu Arts and Science College, Erode",
    year: "2021 - 2024",
    cgpa: "8.55 - Rank Holder",
    highlights: ["Core Computer Science", "Programming in Java", "Software Engineering", "Academic Excellence Award"],
    icon: "🏆"
  },
  {
    title: "Higher Secondary Education (HSE)",
    place: "Govt HSS, Kumalankuttai",
    year: "2019 - 2021",
    cgpa: "90%",
    highlights: ["Mathematics", "Computer Science", "Physics"],
    icon: "📚"
  },
  {
    title: "Secondary School (SSLC)",
    place: "Govt Girls HSS, Perundurai",
    year: "2018 - 2019",
    cgpa: "86%",
    highlights: ["Academic Excellence", "Strong Foundation"],
    icon: "✨"
  }
];

export default function EducationSection() {
  const [expandedEdu, setExpandedEdu] = useState<number | null>(null);

  return (
    <section id="education" className="py-32 max-w-7xl mx-auto px-6">
      <h2 className="section-title">Educational Journey</h2>
      
      <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-transparent"></div>
        
        {education.map((edu, idx) => (
          <div 
            key={idx}
            className="relative pl-20 mb-12 cursor-pointer"
            onClick={() => setExpandedEdu(expandedEdu === idx ? null : idx)}
          >
            <div className="timeline-dot absolute left-0 top-0">
              <span className="text-2xl">{edu.icon}</span>
            </div>
            
            <div className="edu-content">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-1">{edu.title}</h3>
                  <p className="text-primary font-medium">{edu.place}</p>
                </div>
                <ChevronDown 
                  className={`transform transition-transform text-primary ${expandedEdu === idx ? 'rotate-180' : ''}`}
                  size={24}
                />
              </div>
              
              <div className="flex gap-4 mb-3 text-sm">
                <span className="badge-year">{edu.year}</span>
                <span className="badge-cgpa">{edu.cgpa}</span>
              </div>
              
              {expandedEdu === idx && edu.highlights && (
                <div className="expanded-content">
                  <h4 className="text-secondary font-semibold mb-2">Highlights:</h4>
                  <ul className="space-y-2">
                    {edu.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <Award className="text-yellow-400 flex-shrink-0 mt-1" size={16} />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpeg";

const roles = ["JAVA DEVELOPER", "MYSQL", "DSA ENTHUSIAST", "FULL STACK DEV"];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-32 pb-20">
      <div className="text-center max-w-4xl px-6 relative z-10">
        {/* Profile with animated border */}
        <div className="relative w-48 h-48 mx-auto mb-8">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-blue to-secondary animate-spin-slow"></div>
          <div className="absolute inset-1 rounded-full overflow-hidden bg-background">
            <img 
              src={profilePhoto} 
              alt="Dharshini V" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black mb-4 tracking-tight">
          <span className="gradient-text">DHARSHINI V</span>
        </h1>
        
        <div className="h-16 flex items-center justify-center mb-6">
          <span className="text-2xl md:text-3xl font-bold text-primary">
            {roles[roleIndex]}
          </span>
        </div>
        
        <p className="text-xl text-muted-foreground italic mb-8">
          Designing logic, developing solutions
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <a href="#projects" className="btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn-secondary">
            Get In Touch
          </a>
        </div>

        <div className="mt-12 animate-bounce">
          <ChevronDown className="mx-auto text-primary" size={32} />
        </div>
      </div>
    </section>
  );
}

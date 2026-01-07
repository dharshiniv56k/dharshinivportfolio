import Navbar from "@/components/Portfolio/Navbar";
import HeroSection from "@/components/Portfolio/HeroSection";
import AboutSection from "@/components/Portfolio/AboutSection";
import SkillsSection from "@/components/Portfolio/SkillsSection";
import ProjectsSection from "@/components/Portfolio/ProjectsSection";
import EducationSection from "@/components/Portfolio/EducationSection";
import CTASection from "@/components/Portfolio/CTASection";
import ContactSection from "@/components/Portfolio/ContactSection";
import Footer from "@/components/Portfolio/Footer";
import AnimatedBackground from "@/components/Portfolio/AnimatedBackground";

export default function Index() {
  return (
    <div className="relative overflow-hidden">
      <AnimatedBackground />
      
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <CTASection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}

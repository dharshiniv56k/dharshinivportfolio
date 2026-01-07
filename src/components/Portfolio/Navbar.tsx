import { Download } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpeg";

const navItems = ["About", "Skills", "Projects", "Education", "Contact"];

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-11/12 max-w-6xl">
      <div className="glass-nav px-6 py-4 rounded-2xl flex justify-between items-center shadow-2xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary shadow-lg">
            <img 
              src={profilePhoto} 
              alt="Dharshini V" 
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-lg font-bold gradient-text">
            DHARSHINI V
          </span>
        </div>
        
        <div className="hidden md:flex gap-6 text-sm font-medium">
          {navItems.map(item => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="nav-link"
            >
              {item}
              <span className="nav-underline"></span>
            </a>
          ))}
        </div>
        
        <a
          href="https://drive.google.com/drive/folders/1_z1fpvlgmRpSsH4Ju8bv05oJvrgYK4Ps"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-glow flex items-center gap-2"
        >
          <Download size={16} />
          Resume
        </a>
      </div>
    </nav>
  );
}

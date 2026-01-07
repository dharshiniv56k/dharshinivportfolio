import { useEffect, useState } from "react";

export default function AnimatedBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background"></div>
      <div 
        className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl transition-all duration-1000 ease-out"
        style={{ 
          left: mousePos.x - 192, 
          top: mousePos.y - 192,
        }}
      ></div>
      <div className="absolute inset-0 bg-grid opacity-5"></div>
    </div>
  );
}

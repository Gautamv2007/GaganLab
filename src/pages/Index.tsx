
import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import VisionMission from "@/components/sections/VisionMission";
import About from "@/components/sections/About";
import Team from "@/components/sections/Team";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Career from "@/components/sections/Career";
import Footer from "@/components/layout/Footer";
import ParticlesBackground from "@/components/layout/ParticlesBackground";

const Index = () => {
  useEffect(() => {
    document.title = "Gagan Labs - India's Startup Accelerator";
    
    // Add Space Mono font
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white overflow-hidden">
      <Header />
      <main>
        <Hero />
        <VisionMission />
        <About />
        {/* <Projects /> */}
        <Team />
        <Career />
        <Contact />
      </main>
      <Footer />
      <ParticlesBackground />
    </div>
  );
};

export default Index;

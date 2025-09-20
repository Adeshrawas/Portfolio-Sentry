import { Navbar } from "../Components/Navbar";
import { HeroSection } from "../Components/HeroSection";
import { AboutSection } from "../Components/AboutSection";
import { StarBackground } from "../Components/StarBackground";
import { SkillSection } from "../Components/SkillsSection";
import { ProjectsSection } from "../Components/ProjectsSection";
import { ContactSection } from "../Components/ContactSection";

const Home = () => {
  return (
    <div className="relative">
      <StarBackground />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default Home;

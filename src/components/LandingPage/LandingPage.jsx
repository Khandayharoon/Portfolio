import Hero from "../Hero/Hero";
import Myservices from "../Myservices/Myservices";
import NavBar from "../NavBar/NavBar";
import ProjectsSection from "../ProjectsSection/ProjectsSection";

function LandingPage() {
  return (
    <div>
      <NavBar />
      <Hero />
      <ProjectsSection />
      <Myservices />
    </div>
  );
}

export default LandingPage;

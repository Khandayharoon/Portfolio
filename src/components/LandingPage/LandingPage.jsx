import Discover from "../Discover/Discover";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import Myservices from "../Myservices/Myservices";
import NavBar from "../NavBar/NavBar";
import ProjectsSection from "../ProjectsSection/ProjectsSection";
import ParticleAnimation from "../Try/ParticleAnimation";
import AnimatedSVG from "../Try/AnimatedSVG ";

import WorkWithUS from "../WorkWithUS/WorkWithUS";

function LandingPage() {
  return (
    <div>
      <NavBar />
      <div>
        <div>
          <ParticleAnimation />
        </div>
        <div className="absolute top-10 left-48 mt-16">
          <Hero />
        </div>
      </div>
      <ProjectsSection />
      <Myservices />
      <WorkWithUS />
      <Discover />
      <Footer />
    </div>
  );
}

export default LandingPage;

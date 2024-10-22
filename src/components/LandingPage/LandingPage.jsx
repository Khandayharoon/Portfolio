import Discover from "../Discover/Discover";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import Myservices from "../Myservices/Myservices";
import NavBar from "../NavBar/NavBar";
import ProjectsSection from "../ProjectsSection/ProjectsSection";
import ParticleAnimation from "../Try/ParticleAnimation";

import WorkWithUS from "../WorkWithUS/WorkWithUS";

function LandingPage() {
  return (
    <div>
      <NavBar />
      <div className="w-full flex items-center justify-center ">
        <div className="w-full">
          <ParticleAnimation />
        </div>
        <div className="w-full absolute top-10  mt-16 ">
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

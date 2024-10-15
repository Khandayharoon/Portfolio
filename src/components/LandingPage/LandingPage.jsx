import Discover from "../Discover/Discover";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import Myservices from "../Myservices/Myservices";
import NavBar from "../NavBar/NavBar";
import ProjectsSection from "../ProjectsSection/ProjectsSection";
import WorkWithUS from "../WorkWithUS/WorkWithUS";

function LandingPage() {
  return (
    <div>
      <NavBar />
      <Hero />
      <ProjectsSection />
      <Myservices />
      <WorkWithUS />
      <Discover />
      <Footer />
    </div>
  );
}

export default LandingPage;

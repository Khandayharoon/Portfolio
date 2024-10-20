import { useState } from "react"; // Import useState to manage hover state
import { GrServices } from "react-icons/gr";
// import Carousel from "../Carousel/Carousel";

function Myservices() {
  // State to track which card is hovered
  const [hoveredCard, setHoveredCard] = useState(null);
  return (
    <div className="flex flex-col items-center w-full px-40 gap-14 mt-20 py-10">
      <h3 className="font-reader font-thin text-5xl">My Services</h3>
      <div className="w-full text-center leading-4">
        <p className="text-3xl">
          Our primary focus regarding digital products is the user and their
          needs. To achieve great usability, we believe it is paramount to work
          very closely with your target group and learn from them. The following
          services address different phases of a digital product&apos;s life
          cycle and are designed to enable you and your organization to
          implement world-class User Experience. <br />
          <br />
          Whether it&apos;s crafting seamless apps and websites for Web2 or
          developing secure, decentralized experiences for Web3, we ensure that
          your digital products are intuitive, user-focused, and secure. With
          expertise in Web3 security, we also prioritize the protection and
          safety of your digital assets.
        </p>
      </div>
      <div className="relative w-full h-80 flex items-center justify-center">
        {/* UX Audit Card */}
        <div
          className={`w-1/4 h-full shadow-lg flex flex-col items-center justify-center relative rounded-2xl transition-transform duration-300 bg-[#EDEBE9] ${
            hoveredCard === "audit" ? "hover:scale-110 hover:z-50" : ""
          } ${hoveredCard && hoveredCard !== "audit" ? "blur-sm" : ""}`}
          onMouseEnter={() => setHoveredCard("audit")}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <img
            src="https://cdn.sanity.io/images/93ldctci/production/92e6112b7d8d60c9f09f98ad948cd603919c5fdc-242x126.svg"
            alt="UX Audit"
          />
          <h3>UX Audit</h3>
        </div>

        {/* Usability Testing Card */}
        <div
          className={`w-1/3 h-full shadow-lg flex flex-col items-center justify-center relative rounded-2xl transition-transform duration-300 bg-[#EDEBE9] ${
            hoveredCard === "testing" ? "hover:scale-110 hover:z-50" : ""
          } ${hoveredCard && hoveredCard !== "testing" ? "blur-sm" : ""}`}
          onMouseEnter={() => setHoveredCard("testing")}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <img
            src="https://cdn.sanity.io/images/93ldctci/production/de6ef4908e704ed1b13aaeed88c17e7055d6f1f4-243x126.svg"
            alt="Usability Testing"
          />
          <h3>Usability Testing</h3>
        </div>

        {/* Discovery Research Card */}
        <div
          className={`w-1/4 h-full shadow-lg flex flex-col items-center justify-center relative rounded-2xl transition-transform duration-300 bg-[#EDEBE9] ${
            hoveredCard === "research" ? "hover:scale-110 hover:z-50" : ""
          } ${hoveredCard && hoveredCard !== "research" ? "blur-sm" : ""}`}
          onMouseEnter={() => setHoveredCard("research")}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <img
            src="https://cdn.sanity.io/images/93ldctci/production/b8920cc0bdde51b59023f1df1114eb21a02ce846-244x126.svg"
            alt="Discovery Research"
          />
          <h3>Discovery Research</h3>
        </div>
      </div>
      <div>
        <button className="flex items-center gap-3 py-2 px-8 bg-black rounded-3xl text-white text-xl">
          Explore Services{" "}
          <GrServices style={{ transform: "scaleX(-1)", fontSize: "1.5em" }} />
        </button>
      </div>{" "}
      <div className="w-full h-screen bg-slate-500 rounded-2xl shadow-lg">
        {/* <Carousel /> */}
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover rounded-2xl shadow-lg"
        >
          <source
            src="https://cdn.dribbble.com/userupload/15831578/file/original-4359d83379d26791fc85dd8825455865.mp4"
            type="video/mp4"
          ></source>
        </video>
      </div>
    </div>
  );
}

export default Myservices;

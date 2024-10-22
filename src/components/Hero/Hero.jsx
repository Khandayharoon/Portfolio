import { useState } from "react";
import { PiTelegramLogoLight } from "react-icons/pi";
import app1 from "../../assets/videos/app1.mp4";
import website1 from "../../assets/videos/website1.mp4";
import digitalexperiences1 from "../../assets/videos/digitalexperiences1.mp4";
import hk from "../../assets/videos/hk.mp4";

function Hero() {
  const [hoverSpan, setHoverSpan] = useState(null);

  return (
    <div className="flex flex-col items-center justify-center mt-20 gap-20 relative">
      {/* Hero text */}
      <div className="font-reader-regular flex flex-col text-center text-black md:text-5xl gap-4 ">
        <h1>
          I design seamless, user-friendly{" "}
          <span
            className="pb-1 cursor-pointer relative"
            onMouseEnter={() => setHoverSpan("app")}
            onMouseLeave={() => setHoverSpan(null)}
          >
            apps,
            <span
              className={`absolute left-0 bottom-0 h-[2px] bg-black transition-all duration-300 ${
                hoverSpan === "app" ? "w-full" : "w-0"
              }`}
            ></span>
            {hoverSpan === "app" && (
              <div className="w-60 h-60 backdrop-blur-md z-40 mt-1 p-2 absolute top-full left-0 rounded-3xl">
                <video
                  className="w-full h-full object-cover rounded-3xl shadow-lg"
                  autoPlay
                  muted
                  loop
                >
                  <source src={app1} type="video/mp4" />
                </video>
              </div>
            )}
          </span>
        </h1>
        <h1>
          <span
            className="relative cursor-pointer"
            onMouseEnter={() => setHoverSpan("websites")}
            onMouseLeave={() => setHoverSpan(null)}
          >
            websites,
            <span
              className={`absolute left-0 bottom-0 h-[2px] bg-black transition-all duration-300 ${
                hoverSpan === "websites" ? "w-full" : "w-0"
              }`}
            ></span>
            {hoverSpan === "websites" && (
              <div className="w-80 h-60 backdrop-blur-md z-40 absolute p-2 top-full left-0 rounded-3xl ">
                <video
                  autoPlay
                  muted
                  loop
                  className="w-full h-full object-cover rounded-3xl shadow-lg"
                >
                  <source src={website1} type="video/mp4"></source>
                </video>
              </div>
            )}
          </span>
          and{" "}
          <span
            className=" pb-1 cursor-pointer relative"
            onMouseEnter={() => setHoverSpan("digital experiences")}
            onMouseLeave={() => setHoverSpan(null)}
          >
            digital experiences
            <span
              className={`absolute left-0 bottom-0 h-[2px] bg-black transition-all duration-300 ${
                hoverSpan === "digital experiences" ? "w-full" : "w-0"
              }`}
            ></span>
            {hoverSpan === "digital experiences" && (
              <div className="w-96 h-56 backdrop-blur-md z-40 p-2 absolute top-full left-0 rounded-3xl">
                <video
                  className="w-full h-full object-cover rounded-3xl shadow-lg"
                  autoPlay
                  muted
                  loop
                >
                  <source src={digitalexperiences1} type="video/mp4" />
                </video>
              </div>
            )}
          </span>{" "}
          for Web2 and Web3.
        </h1>
      </div>

      {/* Secondary content */}
      <div className="flex flex-col w-full items-center justify-center text-center md:text-2xl">
        <h2>Powered by integrated research, design, development, and</h2>
        <h2>architecture... Backed by years of experience.</h2>
      </div>

      {/* Introduction */}
      <div className="flex flex-col items-center justify-center text-center md:text-3xl">
        <h3>
          Hi! I&apos;m{" "}
          <span
            className="pb-1 px-2  cursor-pointer relative"
            onMouseEnter={() => setHoverSpan("Haroon-Nissar-Khanday")}
            onMouseLeave={() => setHoverSpan(null)}
          >
            Haroon-Nissar-Khanday
            <span
              className={`absolute left-0 bottom-0 h-[2px] bg-[#213547] transition-all duration-300 ${
                hoverSpan === "Haroon-Nissar-Khanday" ? "w-full" : "w-0"
              }`}
            ></span>
            {hoverSpan === "Haroon-Nissar-Khanday" && (
              // <div className="w-40 h-60 backdrop-blur-md z-40 absolute top-full left-0 rounded-3xl"></div>
              <div className="w-96 h-56 backdrop-blur-md z-40 p-2 absolute top-full left-0 rounded-3xl">
                <video
                  className="w-full h-full object-cover rounded-3xl shadow-lg"
                  autoPlay
                  muted
                  loop
                >
                  <source src={hk} type="video/mp4" />
                </video>
              </div>
            )}
          </span>
          , Web2, Web3 & Smart Contract Developer
        </h3>
        <h3>Also a Web3 Security Researcher from Kashmir.</h3>
      </div>

      {/* Button */}
      <div>
        <button className="flex items-center gap-5 py-2 px-8 bg-black rounded-3xl text-white text-xl">
          My Services <PiTelegramLogoLight style={{ fontSize: "1.5em" }} />
        </button>
      </div>
    </div>
  );
}

export default Hero;

// src="https://cdn.dribbble.com/userupload/17024534/file/original-7305870050e3811f75e2f786b1493d68.mp4"

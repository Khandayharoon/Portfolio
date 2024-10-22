import { FaFreeCodeCamp } from "react-icons/fa";
import { MdReplyAll } from "react-icons/md";
import section1 from "../../assets/videos/section1.mp4";
import exp1 from "../../assets/videos/exp1.mp4";
import walking from "../../assets/videos/walking.mp4";
import { useState } from "react";
import Slideshow from "../Slideshow/Slideshow";
function ProjectsSection() {
  const [hoverCard, setHoverCard] = useState(null);

  return (
    <div className="flex flex-col w-full h-auto sm:px-10 lg:px-20 py-5 items-center justify-center gap-10 cursor-pointer">
      {/* Projects Button */}
      <div>
        <button className="flex items-center gap-3 py-2 px-5 bg-white rounded-3xl navButton text-black text-xl">
          projects <FaFreeCodeCamp className="text-2xl" />
        </button>
      </div>

      {/* Section Title */}
      <div>
        <h3 className="font-reader font-thin text-2xl md:text-5xl text-center">
          Explore my work
        </h3>
      </div>

      {/* Project Cards Section */}
      <div className="flex flex-col gap-9">
        <div className="w-full flex flex-col md:flex-row gap-4 items-center justify-center">
          {/* Card One */}
          <div className="w-full md:w-[700px] lg:w-[900px] h-[300px] md:h-[500px] rounded-2xl relative shadow-lg">
            <div className="hover:backdrop-blur-3xl w-full h-full rounded-2xl">
              <video className="w-full h-full object-cover rounded-2xl" muted>
                <source src={exp1} type="video/mp4" />
              </video>
            </div>

            <div
              className="absolute top-0 w-full h-full rounded-2xl hover:backdrop-blur-md"
              onMouseEnter={() => setHoverCard("card1")}
              onMouseLeave={() => setHoverCard(null)}
            >
              {hoverCard === "card1" && (
                <div className="z-50 text-white absolute bottom-4 mb-5 ml-5 cursor-pointer">
                  <div className="h-20 w-20">
                    <img src="https://klindos.jzitnik.dev/favicon.png" alt="" />
                  </div>
                  <h2 className="font-reader-regular text-2xl md:text-4xl">
                    PermissionLess
                  </h2>
                  <div className="flex gap-3 mt-2 flex-wrap">
                    {/* Skill 1 */}
                    <div className="bg-zinc-100 w-auto px-4 h-14 rounded-xl flex items-center gap-2">
                      <img
                        src="/icons/reactjs.svg"
                        className="h-full"
                        alt="React"
                      />
                      <h1 className="text-black">React.js</h1>
                    </div>
                    {/* Skill 2 */}
                    <div className="bg-zinc-100 px-4 h-14 rounded-xl flex items-center gap-2">
                      <img
                        src="/icons/tailwindcss.svg"
                        className="h-full"
                        alt="Tailwind CSS"
                      />
                      <h1 className="text-black">Tailwind CSS</h1>
                    </div>
                    {/* Skill 3 */}
                    <div className="bg-zinc-100 px-4 h-14 rounded-xl flex items-center gap-2">
                      <img
                        src="/icons/framer-motion.svg"
                        className="h-full"
                        alt="Framer Motion"
                      />
                      <h1 className="text-black">Framer Motion</h1>
                    </div>
                  </div>
                  <p className="mt-2">
                    Designed and developed the frontend of a gadget e-commerce
                    website with responsive UI and smooth interactions...
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Slideshow Card */}
          <div className="w-full md:w-[500px] h-[300px] md:h-[500px] rounded-2xl shadow-lg">
            <Slideshow className="w-full h-full" />
          </div>
        </div>

        {/* Additional Cards Section */}
        <div className="flex flex-wrap gap-4 justify-center">
          <div className="w-full md:w-[500px] h-[300px] md:h-[500px] bg-red-300 rounded-2xl shadow-lg">
            <video
              className="w-full h-full object-cover rounded-2xl"
              autoPlay
              loop
              muted
            >
              <source src={walking} type="video/mp4" />
            </video>
          </div>

          <div className="w-full md:w-[700px] lg:w-[900px] h-[300px] md:h-[500px] rounded-2xl shadow-lg relative">
            <img
              src="https://cdn.dribbble.com/userupload/14406138/file/original-392809e3cdb8768201afcea348ac3260.png"
              className="w-full h-full object-cover rounded-2xl"
              alt=""
            />
            <div
              className="absolute top-0 w-full h-full rounded-2xl hover:backdrop-blur-md"
              onMouseEnter={() => setHoverCard("card4")}
              onMouseLeave={() => setHoverCard(null)}
            >
              {hoverCard === "card4" && (
                <div className="z-50 text-white absolute bottom-4 mb-5 ml-5 cursor-pointer">
                  <h2 className="font-reader-regular text-2xl md:text-4xl">
                    PermissionLess
                  </h2>
                  {/* Skills Section */}
                  <div className="flex gap-3 mt-2 flex-wrap">
                    {/* Skill 1 */}
                    <div className="bg-zinc-100 px-4 h-14 rounded-xl flex items-center gap-2">
                      <img
                        src="/icons/reactjs.svg"
                        className="h-full"
                        alt="React"
                      />
                      <h1 className="text-black">React.js</h1>
                    </div>
                    {/* Skill 2 */}
                    <div className="bg-zinc-100 px-4 h-14 rounded-xl flex items-center gap-2">
                      <img
                        src="/icons/tailwindcss.svg"
                        className="h-full"
                        alt="Tailwind CSS"
                      />
                      <h1 className="text-black">Tailwind CSS</h1>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Full-Width Video Section */}
      <div className="w-full h-[300px] md:h-[600px] bg-red-950 rounded-2xl shadow-lg">
        <video
          className="w-full h-full object-cover rounded-2xl"
          autoPlay
          loop
          muted
        >
          <source src={section1} type="video/mp4" />
        </video>
      </div>

      {/* View All Projects Button */}
      <div>
        <button className="flex items-center gap-3 py-2 px-8 bg-black rounded-3xl text-white text-xl">
          View all projects{" "}
          <MdReplyAll className="transform scale-x-[-1] text-2xl" />
        </button>
      </div>
    </div>
  );
}

export default ProjectsSection;

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
    <div className="flex flex-col w-full h-auto  px-20 py-5  items-center justify-center gap-10">
      <div className="">
        <button className="flex items-center gap-3 py-2 px-5 bg-white rounded-3xl navButton text-black text-xl">
          projects <FaFreeCodeCamp style={{ fontSize: "1.5em" }} />
        </button>
      </div>
      <div>
        <h3 className="font-reader font-thin text-5xl">Explore my work</h3>
      </div>
      <div className="flex flex-col gap-9">
        <div className=" w-full flex flex-wrap gap-4">
          {/* Card One */}
          <div className="w-[900px] h-[600px] rounded-2xl relative shadow-lg">
            <div className="hover:backdrop-blur-3xl w-[900px] h-[600px]  rounded-2xl">
              <video
                // autoPlay
                // loop
                // muted
                className=" w-full h-full object-cover rounded-2xl"
              >
                <source src={exp1} type="video/mp4"></source>
              </video>
            </div>
            <div
              className="w-[900px] h-[600px] rounded-2xl  absolute top-0 hover:backdrop-blur-md "
              onMouseEnter={() => setHoverCard("card1")}
              onMouseLeave={() => setHoverCard(null)}
            >
              {/* Details about Porject                */}
              {hoverCard === "card1" && (
                <div className="z-50 text-white absolute bottom-4 mb-5 ml-5 cursor-pointer">
                  <div>
                    <div className="h-20 w-20">
                      <img
                        src="https://klindos.jzitnik.dev/favicon.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <h2 className="font-reader-regular text-8xl">
                        PermissionLess
                      </h2>
                    </div>
                    <div className="flex  gap-3">
                      {/* skill 1 */}
                      <div className="bg-zinc-100 w-36 h-14 rounded-xl py-1 px-3 flex justify-between items-center">
                        <div className="h-full">
                          <img
                            className=" h-full"
                            src="/icons/reactjs.svg"
                            alt="React Icon"
                          />
                        </div>
                        <div>
                          <h1 className="text-black font-reader-regular">
                            React_Js
                          </h1>
                        </div>
                      </div>
                      {/* skill 1 */}

                      {/* skill 2 */}
                      <div className="bg-zinc-100  h-14 rounded-xl  px-3 flex gap-1 justify-between items-center">
                        <div className="h-full">
                          <img
                            className=" h-full"
                            src="/icons/tailwindcss.svg"
                            alt="Tailwindcss Icon"
                          />
                        </div>
                        <div>
                          <h1 className="text-black font-reader-regular">
                            Tailwind CSS
                          </h1>
                        </div>
                      </div>
                      {/* skill 2 */}
                      {/* skill 3 */}
                      <div className="bg-zinc-100  h-14 rounded-xl  px-3 flex justify-between items-center">
                        <div className="w-12 h-10">
                          <img
                            className=" w-12 h-10"
                            src="/icons/framer-motion.svg"
                            alt="Framer Motion Icon"
                          />
                        </div>
                        <div>
                          <h1 className="text-black font-reader-regular">
                            Framer Motion
                          </h1>
                        </div>
                      </div>
                      {/* skill 3 */}
                    </div>
                    <div>
                      <p>
                        Designed and developed the frontend of a gadget
                        e-commerce website <br /> with responsive UI and smooth
                        interactions . . .
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Card One */}
          <div className="w-[500px] h-[600px] bg-red-100 rounded-2xl hover:backdrop-blur-lg shadow-lg">
            <Slideshow />
          </div>
        </div>

        <div className="w-full flex flex-wrap gap-4">
          <div className="w-[500px] h-[600px] bg-red-300 rounded-2xl hover:backdrop-blur-lg shadow-lg">
            <div className="hover:backdrop-blur-3xlw-[500px] h-[600px]  rounded-2xl">
              <video
                autoPlay
                loop
                muted
                className=" w-full h-full object-cover rounded-2xl"
              >
                <source src={walking} type="video/mp4"></source>
              </video>
            </div>
          </div>
          <div className="w-[900px] h-[600px] bg-red-800 rounded-2xl hover:backdrop-blur-3xl shadow-lg">
            {/* ghxfhxfjhfjhjhxfjhh */}
            <div className="hover:backdrop-blur-3xl w-[900px] h-[600px]  rounded-2xl">
              {/* <video
                // autoPlay
                // loop
                // muted
                className=" w-full h-full object-cover rounded-2xl"
              >
                <source src={exp1} type="video/mp4"></source>
              </video> */}
              <img
                className="w-full h-full  rounded-2xl "
                src="https://cdn.dribbble.com/userupload/14406138/file/original-392809e3cdb8768201afcea348ac3260.png?resize=1504x1128"
                alt=""
              />
            </div>
            <div
              className="w-[900px] h-[600px] rounded-2xl  absolute top-0 hover:backdrop-blur-md "
              onMouseEnter={() => setHoverCard("card4")}
              onMouseLeave={() => setHoverCard(null)}
            >
              {/* Details about Porject                */}
              {hoverCard === "card4" && (
                <div className="z-50 text-white absolute bottom-4 mb-5 ml-5 cursor-pointer">
                  <div>
                    <div className="h-20 w-20">
                      <img
                        src="https://klindos.jzitnik.dev/favicon.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <h2 className="font-reader-regular text-8xl">
                        PermissionLess
                      </h2>
                    </div>
                    <div className="flex  gap-3">
                      {/* skill 1 */}
                      <div className="bg-zinc-100 w-36 h-14 rounded-xl py-1 px-3 flex justify-between items-center">
                        <div className="h-full">
                          <img
                            className=" h-full"
                            src="/icons/reactjs.svg"
                            alt="React Icon"
                          />
                        </div>
                        <div>
                          <h1 className="text-black font-reader-regular">
                            React_Js
                          </h1>
                        </div>
                      </div>
                      {/* skill 1 */}

                      {/* skill 2 */}
                      <div className="bg-zinc-100  h-14 rounded-xl  px-3 flex gap-1 justify-between items-center">
                        <div className="h-full">
                          <img
                            className=" h-full"
                            src="/icons/tailwindcss.svg"
                            alt="Tailwindcss Icon"
                          />
                        </div>
                        <div>
                          <h1 className="text-black font-reader-regular">
                            Tailwind CSS
                          </h1>
                        </div>
                      </div>
                      {/* skill 2 */}
                      {/* skill 3 */}
                      <div className="bg-zinc-100  h-14 rounded-xl  px-3 flex justify-between items-center">
                        <div className="w-12 h-10">
                          <img
                            className=" w-12 h-10"
                            src="/icons/framer-motion.svg"
                            alt="Framer Motion Icon"
                          />
                        </div>
                        <div>
                          <h1 className="text-black font-reader-regular">
                            Framer Motion
                          </h1>
                        </div>
                      </div>
                      {/* skill 3 */}
                    </div>
                    <div>
                      <p>
                        Designed and developed the frontend of a gadget
                        e-commerce website <br /> with responsive UI and smooth
                        interactions . . .
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* ghsfhjhhsjhdj */}
          </div>
        </div>
      </div>
      <div className="w-full h-[600px] bg-red-950 rounded-2xl hover:backdrop-blur-lg">
        <video
          className="w-full h-full object-cover rounded-2xl"
          autoPlay
          muted
          loop
        >
          <source src={section1} type="video/mp4" />
        </video>
      </div>
      <div>
        <button className="flex items-center gap-3 py-2 px-8 bg-black rounded-3xl text-white text-xl">
          View all projects{" "}
          <MdReplyAll style={{ transform: "scaleX(-1)", fontSize: "1.5em" }} />
        </button>
      </div>
    </div>
  );
}

export default ProjectsSection;

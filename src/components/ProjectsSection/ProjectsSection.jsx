import { FaFreeCodeCamp } from "react-icons/fa";
import { MdReplyAll } from "react-icons/md";
import section1 from "../../assets/videos/section1.mp4";
function ProjectsSection() {
  return (
    <div className="flex flex-col w-full h-auto  px-20 py-5 mt-40 items-center justify-center gap-10">
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
          <div className="w-[900px] h-[600px] bg-red-400 rounded-2xl hover:backdrop-blur-lg shadow-lg"></div>
          <div className="w-[500px] h-[600px] bg-red-100 rounded-2xl hover:backdrop-blur-lg shadow-lg"></div>
        </div>
        <div className="w-full flex flex-wrap gap-4">
          <div className="w-[500px] h-[600px] bg-red-300 rounded-2xl hover:backdrop-blur-lg shadow-lg"></div>
          <div className="w-[900px] h-[600px] bg-red-800 rounded-2xl hover:backdrop-blur-lg shadow-lg"></div>
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

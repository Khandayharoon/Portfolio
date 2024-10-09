import { GrServices } from "react-icons/gr";
// import { MdReplyAll } from "react-icons/md";

function Myservices() {
  return (
    <div className=" flex flex-col items-center w-full  px-40 gap-14 mt-20 py-10">
      <div className="font-reader font-thin text-5xl">
        {" "}
        <h3>My Services</h3>
      </div>
      <div className="w-full text-center px-80 leading-4">
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
      <div className="w-full bg-slate-950 h-96"></div>
      <div>
        <button className="flex items-center gap-3 py-2 px-8 bg-black rounded-3xl text-white text-xl">
          Explore Services{" "}
          {/* <MdReplyAll style={{ transform: "scaleX(-1)", fontSize: "1.5em" }} /> */}
          <GrServices style={{ transform: "scaleX(-1)", fontSize: "1.5em" }} />
        </button>
      </div>
    </div>
  );
}

export default Myservices;

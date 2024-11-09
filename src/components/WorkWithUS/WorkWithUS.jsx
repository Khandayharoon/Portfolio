import { GiRecycle } from "react-icons/gi";
import AnimatedSVG from "../Try/AnimatedSVG ";
import { HiOutlineSparkles } from "react-icons/hi2";
import { LuSquareStack } from "react-icons/lu";
import { PiArrowsSplit } from "react-icons/pi";
import { GiThink } from "react-icons/gi";
import { TbCubePlus } from "react-icons/tb";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { ImLoop2 } from "react-icons/im";
import { PiHandshakeFill } from "react-icons/pi";
import { SlRocket } from "react-icons/sl";
import { BsGraphUpArrow } from "react-icons/bs";
import ques from "../../assets/videos/ques.mp4";
function WorkWithUS() {
  return (
    <div className="w-full h-auto  sm:px-40 flex flex-col items-center justify-center">
      <div className="w-full h-full flex flex-col items-center justify-center gap-2">
        <div className="text-2xl sm:text-4xl">
          <h2>Let&apos;s Build Engaging Experiences</h2>
        </div>
        <div className="px-10 text-center">
          <p className="sm:text-xl">
            Prioritization is a crucial and often daunting task in product
            development. Especially when it&apos;s unclear how user&apos;s needs
            align with business goals. Dinghy is here to help!
          </p>
        </div>
        <div>
          <button className="flex items-center gap-3 py-1 px-4 sm:py-2 sm:px-8 bg-black rounded-3xl text-white sm:text-xl">
            see a typical project roadmap
            <GiRecycle style={{ transform: "scaleX(-1)", fontSize: "1.5em" }} />
          </button>
        </div>
        <div>
          <h2 className="font-reader-regular text-2xl">
            A Typical Project Roadmap
          </h2>
        </div>
        <div className="w-full relative mb-32">
          {/* <AnimatedSVG /> */}
          <div className="w-full">
            <div className="w-full h-auto flex flex-col sm:flex-row gap-3 px-4">
              {/* divOne */}
              <div className="w-full sm:w-1/3 h-60 bg-[#EDEBE9] shadow-lg rounded-3xl flex flex-col items-center justify-center px-3">
                <div>
                  <HiOutlineSparkles
                    style={{
                      color: "#000000", // Icon color
                      width: "50px", // Width of the icon
                      height: "50px", // Height of the icon
                    }}
                  />
                </div>
                <div>
                  <h2 className="font-reader-regular">Greenfield Idea</h2>
                </div>
                <div>
                  <p className="text-center">
                    You&apos;re at the very beginning of something new and need
                    to validate important assumptions towards target groups,
                    conversion funnels and business goals.
                  </p>
                </div>
              </div>
              {/* DivOne */}
              {/* dnfjsndfs */}
              <div className="w-full sm:w-1/3 h-60 bg-[#EDEBE9] shadow-lg rounded-3xl flex flex-col items-center justify-center px-3 sm:mt-20">
                <div>
                  <LuSquareStack
                    style={{
                      color: "#000000", // Icon color
                      width: "50px", // Width of the icon
                      height: "50px", // Height of the icon
                    }}
                  />
                </div>
                <div>
                  <h2 className="font-reader-regular">Existing Concept</h2>
                </div>
                <div>
                  <p className="text-center">
                    You&apos;re past the green field and have a wireframe or a
                    design of a new feature, landing page, etc and would like to
                    validate that you thought of everything and that users will
                    understand how to use it.
                  </p>
                </div>
              </div>
              {/* nlskclsc */}
              <div className="w-full sm:w-1/3 h-60 bg-[#EDEBE9] shadow-lg rounded-3xl flex flex-col items-center justify-center px-3  sm:mt-36">
                <div>
                  <PiArrowsSplit
                    style={{
                      color: "#000000", // Icon color
                      width: "50px", // Width of the icon
                      height: "50px", // Height of the icon
                    }}
                  />
                </div>
                <div>
                  <h2 className="font-reader-regular">
                    Revalidation of existing product
                  </h2>
                </div>
                <div>
                  <p className="text-center">
                    You&apos;re running an established app or website and know
                    that you&apos;d like to improve on that but don&apos;t know
                    exactly where to start or what to prioritize.
                  </p>
                </div>
              </div>
            </div>
            {/* <AnimatedSVG /> */}
            <div className="w-full h-auto flex flex-col items-center mt-12 gap-10">
              <div className="w-full sm:w-1/3 h-60 bg-[#EDEBE9] shadow-lg rounded-3xl flex items-center justify-center px-3 gap-3">
                <div>
                  <GiThink
                    style={{
                      color: "#000000", // Icon color
                      width: "60px", // Width of the icon
                      height: "60px", // Height of the icon
                    }}
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <h2>Tell us your idea</h2>
                  <p>
                    We start off with an inital consultation where we hear about
                    your idea, we gather your business goals and learn more
                    about your target audience.
                  </p>
                </div>
              </div>
              {/* <div className="w-1/3 h-60 bg-[#EDEBE9] shadow-lg rounded-3xl"></div>
              <div className="w-1/3 h-60 bg-[#EDEBE9] shadow-lg rounded-3xl"></div>
              <div className="w-1/3 h-60 bg-[#EDEBE9] shadow-lg rounded-3xl"></div>
              <div className="w-1/3 h-60 bg-[#EDEBE9] shadow-lg rounded-3xl"></div>
              <div className="w-1/3 h-60 bg-[#EDEBE9] shadow-lg rounded-3xl"></div>
              <div className="w-1/2 h-10 bg-[#EDEBE9] shadow-lg rounded-3xl"></div> */}
              <div className="w-full sm:w-1/3 h-60 bg-[#EDEBE9] shadow-lg rounded-3xl flex items-center justify-center px-3 gap-3">
                <div>
                  <TbCubePlus
                    style={{
                      color: "#000000", // Icon color
                      width: "60px", // Width of the icon
                      height: "60px", // Height of the icon
                    }}
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <h2>Planning the project</h2>
                  <p>
                    We prepare a project roadmap spanning over the course of
                    three weeks, we make sure to include sensible milestones,
                    possible difficulties and expected deliverables.
                  </p>
                </div>
              </div>
              {/* 2 */}
              <div className="w-full sm:w-1/3 h-60 bg-[#EDEBE9] shadow-lg rounded-3xl flex items-center justify-center px-3 gap-3">
                <div>
                  <TfiHeadphoneAlt
                    style={{
                      color: "#000000", // Icon color
                      width: "60px", // Width of the icon
                      height: "60px", // Height of the icon
                    }}
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <h2>Regular updates and Feedback</h2>
                  <p>
                    Weekly touchpoints for project updates and feedback,
                    ensuring alignment at each phase..
                  </p>
                </div>
              </div>
              {/* 3 */}
              <div className="w-full sm:w-1/3 h-60 bg-[#EDEBE9] shadow-lg rounded-3xl flex items-center justify-center px-3 gap-3">
                <div>
                  <ImLoop2
                    style={{
                      color: "#000000", // Icon color
                      width: "60px", // Width of the icon
                      height: "60px", // Height of the icon
                    }}
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <h2>Iterative Sprints</h2>
                  <p>
                    Structured review sessions with all stakeholders after each
                    milestone to incorporate feedback..
                  </p>
                </div>
              </div>
              {/* 4 */}
              <div className="w-full sm:w-1/3 h-60 bg-[#EDEBE9] shadow-lg rounded-3xl flex items-center justify-center px-3 gap-3">
                <div>
                  <PiHandshakeFill
                    style={{
                      color: "#000000", // Icon color
                      width: "60px", // Width of the icon
                      height: "60px", // Height of the icon
                    }}
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <h2>Final presentation & Handover</h2>
                  <p>
                    A conclusive presentation of all deliverables, followed by a
                    handover process..
                  </p>
                </div>
              </div>
              {/* 5 */}
              {/* <div className="w-1/3 h-60 bg-[#EDEBE9] shadow-lg rounded-3xl flex items-center justify-center px-3 gap-3">
                <div>
                  <GiThink
                    style={{
                      color: "#000000", // Icon color
                      width: "60px", // Width of the icon
                      height: "60px", // Height of the icon
                    }}
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <h2>Tell us your idea</h2>
                  <p>
                    We start off with an inital consultation where we hear about
                    your idea, we gather your business goals and learn more
                    about your target audience.
                  </p>
                </div>
              </div> */}
              {/* 6 */}
              {/* <div className="w-1/3 h-60 bg-[#EDEBE9] shadow-lg rounded-3xl flex items-center justify-center px-3 gap-3">
                <div>
                  <GiThink
                    style={{
                      color: "#000000", // Icon color
                      width: "60px", // Width of the icon
                      height: "60px", // Height of the icon
                    }}
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <h2>Tell us your idea</h2>
                  <p>
                    We start off with an inital consultation where we hear about
                    your idea, we gather your business goals and learn more
                    about your target audience.
                  </p>
                </div>
              </div> */}
              {/* ddd */}
            </div>
          </div>
          <AnimatedSVG />
        </div>
      </div>
      {/* Work with us  */}
      <div className="sm:bg-white text-black w-[50vw] mb-32 flex flex-col gap-y-3 sm:flex-row items-center justify-between sm:px-3 rounded-full">
        <div className="bg-black w-36 h-36 overflow-hidden rounded-lg  mb-2 sm:-mt-4 origin-top-left rotate-12 ">
          <video
            className="w-full h-full object-cover"
            muted
            loop
            autoPlay
            src={ques}
          ></video>
        </div>
        <div>
          <h1 className="font-reader-regular text-3xl">Questions?</h1>
        </div>
        <div>
          <h3>Let&apos;s talk about your project.</h3>
        </div>
        <div>
          <button className="py-2 px-8 bg-black rounded-3xl navButton text-white">
            {" "}
            <a href="mailto:khandayharoon@gmail.com">Get in touch </a>
          </button>
        </div>
      </div>

      <div className="my-10 flex flex-col gap-y-1 items-center">
        {" "}
        <div>
          <span className="bg-white px-3 py-1 rounded-full">
            Our ways of working
          </span>
        </div>
        <div>
          <h2 className="font-reader-regular text-2xl sm:text-5xl">
            Why work with us
          </h2>
        </div>
      </div>
      <div className="w-full  flex py-3 flex-col gap-20 md:flex-row items-center justify-between px-5 rounded-3xl mb-20">
        <div className="w-full sm:w-1/3 bg-slate-900 rounded-3xl flex flex-col items-center justify-center text-white gap-3 py-2 px-2">
          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-slate-600 flex items-center justify-center">
            <div>
              <SlRocket
                style={{
                  color: "white", // Icon color
                  width: "50px", // Width of the icon
                  height: "50px", // Height of the icon
                  transform: "rotate(-45deg)", //  rotate
                }}
              />
            </div>
          </div>
          <div>
            <h3 className="font-reader-extralight text-3xl">
              We are responsive
            </h3>
          </div>
          <div>
            <p className="text-center">
              Our team is at your disposal and with dedicated people of contact
              we are ready to respond promptly through your preferred
              communication channels. To keep you well-informed we offer
              insights into our workflows, capacities and deliverables.
            </p>
          </div>
          {/* </div> */}
        </div>
        <div className="w-full sm:w-1/3 bg-slate-900 rounded-3xl flex flex-col items-center justify-center text-white gap-3 py-2 px-2">
          {/* <div className="w-full sm:w-1/3 flex flex-col items-center justify-center text-white gap-3"> */}
          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-slate-600 flex items-center justify-center">
            <PiHandshakeFill
              style={{
                color: "white", // Icon color
                width: "60px", // Width of the icon
                height: "60px", // Height of the icon
                // transform: "rotate(-45deg)", //  rotate
              }}
            />
          </div>
          <div>
            <h3 className="font-reader-extralight text-3xl">
              We speak your language
            </h3>
          </div>
          <div>
            <p className="text-center px-3">
              Each area of expertise comes with its own jargon complicating
              interdisciplinary communication. We aim to discuss challenges,
              convey ideas and propose solutions in clear language, avoiding
              technical terms to ensure stakeholder alignment..
            </p>
          </div>
          {/* </div> */}
        </div>
        <div className="w-full sm:w-1/3 bg-slate-900 rounded-3xl flex flex-col items-center justify-center text-white gap-3 py-2 px-2">
          {/* <div className="w-full sm:w-1/3 flex flex-col items-center justify-center text-white gap-3"> */}
          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-slate-600 flex items-center justify-center">
            <BsGraphUpArrow
              style={{
                color: "white", // Icon color
                width: "60px", // Width of the icon
                height: "60px", // Height of the icon
                // transform: "rotate(-45deg)", //  rotate
              }}
            />
          </div>
          <div>
            <h3 className="font-reader-extralight text-3xl">We have a plan</h3>
          </div>
          <div>
            <p className="text-center  px-3">
              Designing great experiences hinges on comprehending audiences,
              business objectives and product managers. This understanding
              informs our roadmaps to deliver well-defined outcomes that cater
              to the needs of everyone involved.
            </p>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default WorkWithUS;

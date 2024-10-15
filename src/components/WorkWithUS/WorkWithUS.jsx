import React from "react";
import { GiRecycle } from "react-icons/gi";

function WorkWithUS() {
  return (
    <div className="w-full min-h-screen px-40  flex flex-col items-center justify-center">
      <div className="w-full h-full bg-slate-500 flex flex-col items-center justify-center gap-2">
        <div className="text-4xl">
          <h2>Let&apos;s Build Engaging Experiences</h2>
        </div>
        <div className="px-10 text-center">
          <p className="text-xl">
            Prioritization is a crucial and often daunting task in product
            development. Especially when it&apos;s unclear how user&apos;s needs
            align with business goals. Dinghy is here to help!
          </p>
        </div>
        <div>
          <button className="flex items-center gap-3 py-2 px-8 bg-black rounded-3xl text-white text-xl">
            see a typical project roadmap
            <GiRecycle style={{ transform: "scaleX(-1)", fontSize: "1.5em" }} />
          </button>
        </div>
        <div>
          <h2 className="text-2xl">A Typical Project Roadmap</h2>
        </div>
        <div className="w-full h-auto flex gap-3 px-4">
          <div className="w-1/3 h-60 bg-red-500 shadow-lg rounded-3xl"></div>
          <div className="w-1/3 h-60 bg-red-500 shadow-lg rounded-3xl"></div>
          <div className="w-1/3 h-60 bg-red-500 shadow-lg rounded-3xl"></div>
        </div>
        <div className="w-full h-auto flex flex-col items-center mt-12 gap-10">
          <div className="w-1/3 h-60 bg-red-200 shadow-lg rounded-3xl"></div>
          <div className="w-1/3 h-60 bg-red-300 shadow-lg rounded-3xl"></div>
          <div className="w-1/3 h-60 bg-red-400 shadow-lg rounded-3xl"></div>
          <div className="w-1/3 h-60 bg-red-500 shadow-lg rounded-3xl"></div>
          <div className="w-1/3 h-60 bg-red-600 shadow-lg rounded-3xl"></div>
          <div className="w-1/3 h-60 bg-red-700 shadow-lg rounded-3xl"></div>
          <div className="w-1/2 h-10 bg-red-900 shadow-lg rounded-3xl"></div>
        </div>
      </div>
      {/* Work with us  */}

      <div>
        {" "}
        <h2>Why work with us</h2>
      </div>
      <div className="w-full h-96 bg-slate-900 flex justify-between">
        <div className="w-1/4 flex flex-col items-center justify-center text-white">
          <div className="w-32 h-32 rounded-full bg-white"></div>
          <div>
            <h3>We are responsive</h3>
          </div>
          <div>
            <p className="text-center">
              Our team is at your disposal and with dedicated people of contact
              we are ready to respond promptly through your preferred
              communication channels. To keep you well-informed we offer
              insights into our workflows, capacities and deliverables.
            </p>
          </div>
        </div>

        <div className="w-1/4 flex flex-col items-center justify-center text-white">
          <div className="w-32 h-32 rounded-full bg-white"></div>
          <div>
            <h3>We are responsive</h3>
          </div>
          <div>
            <p className="text-center">
              Our team is at your disposal and with dedicated people of contact
              we are ready to respond promptly through your preferred
              communication channels. To keep you well-informed we offer
              insights into our workflows, capacities and deliverables.
            </p>
          </div>
        </div>

        <div className="w-1/4 flex flex-col items-center justify-center text-white">
          <div className="w-32 h-32 rounded-full bg-white"></div>
          <div>
            <h3>We are responsive</h3>
          </div>
          <div>
            <p className="text-center">
              Our team is at your disposal and with dedicated people of contact
              we are ready to respond promptly through your preferred
              communication channels. To keep you well-informed we offer
              insights into our workflows, capacities and deliverables.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkWithUS;

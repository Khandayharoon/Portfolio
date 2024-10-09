import { PiTelegramLogoLight } from "react-icons/pi";

function Hero() {
  return (
    <div className="flex flex-col items-center mt-20 gap-20 ">
      <div className=" flex flex-col items-center text-black  text-5xl gap-4">
        <h1>
          {" "}
          I design seamless, user-friendly{" "}
          <span className="underline">apps,</span>
        </h1>
        <h1>
          <span className="underline">websites,</span> and{" "}
          <span className="underline"> digital experiences</span> for Web2 and
          Web3.{" "}
        </h1>
      </div>

      <div className="flex flex-col  w-1/2 items-center text-2xl">
        <h2>Powered by an integrated research, design, development, and</h2>
        <h2>architecture.. Backed by years of experience.</h2>
      </div>

      <div className="flex flex-col items-center text-3xl">
        <h3>
          Hi! I&apos;m{" "}
          <span className="underline hover px-2">Haroon-Nissar-khanday</span>,
          Web2, Web3 & Smart Contract Developer
        </h3>
        <h3>also a Web3 Security Researcher from Kashmir.</h3>
      </div>
      <div>
        <button className="flex items-center gap-5 py-2 px-8 bg-black rounded-3xl text-white text-xl">
          My Services <PiTelegramLogoLight style={{ fontSize: "1.5em" }} />
        </button>
      </div>
    </div>
  );
}

export default Hero;

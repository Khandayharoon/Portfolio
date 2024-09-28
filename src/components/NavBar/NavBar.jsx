import "../NavBar/navBar.css";

export default function NavBar() {
  return (
    <div className="flex justify-between top-5 sticky backdrop-blur-lg navBar mb-4">
      <div>
        {/* Logo */}
        <div className="flex space-x-2 text-7xl items-center logoBar">
          <div className="logo">
            <i className="fa-brands fa-studiovinari"></i>
          </div>
          <div className="text-3xl space-x-1">
            <i className="fa-solid fa-h"></i>
            <i className="fa-solid fa-k"></i>
          </div>
        </div>
      </div>

      <div>
        {/* Nav Links */}
        <ul className="flex space-x-7 navLinks">
          <li>
            {" "}
            <a href=""> Projects </a>{" "}
          </li>
          <li>
            {" "}
            <a href=""> Services </a>{" "}
          </li>
          <li>
            {" "}
            <a href=""> About </a>{" "}
          </li>
          <li>
            {" "}
            <a href=""> Collaboration </a>{" "}
          </li>
          <li>
            {" "}
            <a href=""> Blog </a>{" "}
          </li>
        </ul>
      </div>

      <div>
        {/* Get In Touch Button */}
        <button className="py-2 px-8 bg-black rounded-3xl navButton text-white">
          {" "}
          Get in touch{" "}
        </button>
      </div>
    </div>
  );
}

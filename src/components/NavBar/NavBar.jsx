import { useState } from "react";
import { Link } from "react-scroll";
import "./navBar.css";
import { GiHamburger } from "react-icons/gi";
export default function NavBar() {
  const [openNavBar, setOpenNavBar] = useState(false);
  return (
    <div className="relative mt-10">
      <div className="flex justify-between items-center top-5 sticky backdrop-blur-lg  md:mx-20 py-1 rounded-3xl sm:px-5 z-50">
        <div>
          {/* Logo */}
          <div className="flex sm:space-x-2 text-7xl items-center logoBar">
            <div className="logo">
              <i className="fa-brands fa-studiovinari"></i>
            </div>
            <div className="text-3xl space-x-1">
              <i className="fa-solid fa-h "></i>
              <i className="fa-solid fa-k"></i>
            </div>
          </div>
        </div>

        <div className="hidden md:block">
          {/* Nav Links */}
          <ul className="flex space-x-2 sm:space-x-7 navLinks font-reader-light items-center justify-center">
            <li>
              {" "}
              <a className="text-xl" href="">
                {" "}
                <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  className="text-xl cursor-pointer"
                >
                  Projects
                </Link>
              </a>{" "}
            </li>
            <li>
              {" "}
              <a className="text-xl" href="">
                {" "}
                {/* Services{" "} */}
                <Link
                  to="services"
                  smooth={true}
                  duration={500}
                  className="text-xl cursor-pointer"
                >
                  Services
                </Link>
              </a>{" "}
            </li>
            <li>
              {" "}
              <a className="text-xl" href="">
                {" "}
                {/* About{" "} */}
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  className="text-xl cursor-pointer"
                >
                  About
                </Link>
              </a>{" "}
            </li>
            <li>
              {" "}
              <a className="text-xl" href="">
                {" "}
                {/* Collaboration{" "} */}
                <Link
                  to="collaboration"
                  smooth={true}
                  duration={500}
                  className="text-xl cursor-pointer"
                >
                  Collaboration
                </Link>
              </a>{" "}
            </li>
            <li>
              {" "}
              <a className="text-xl" href="">
                {" "}
                {/* Blog{" "} */}
                <Link
                  to="blog"
                  smooth={true}
                  duration={500}
                  className="text-xl cursor-pointer"
                >
                  Blog
                </Link>
              </a>{" "}
            </li>
          </ul>
        </div>

        <div>
          {/* Get In Touch Button */}
          <button className="sm:py-2 sm:px-8 bg-black rounded-3xl navButton text-white hidden md:block">
            {" "}
            <a href="mailto:khandayharoon@gmail.com">Get in touch </a>
          </button>
        </div>
        <div className="block md:hidden ">
          <button
            onClick={() => {
              setOpenNavBar(true);
            }}
          >
            <GiHamburger
              style={{ color: "#213547", width: "40px", height: "35px" }}
            />
          </button>
        </div>
      </div>
      {openNavBar && (
        <div className="flex backdrop-blur-lg w-48 h-72 absolute top-24 right-10 z-10 rounded-3xl md:hidden">
          <div className="absolute right-5 mt-2 cursor-pointer font-bold">
            <button
              onClick={() => {
                setOpenNavBar(false);
              }}
            >
              X
            </button>
          </div>
          <div className="flex flex-col gap-1 items-center justify-center">
            {/* Nav Links */}
            <ul className="flex flex-col navLinks font-reader-light  mt-5">
              <li>
                {" "}
                <a className="text-xl" href="">
                  {" "}
                  <Link
                    to="projects"
                    smooth={true}
                    duration={500}
                    className="text-xl cursor-pointer"
                  >
                    Projects
                  </Link>
                </a>{" "}
              </li>
              <li>
                {" "}
                <a className="text-xl" href="">
                  {" "}
                  {/* Services{" "} */}
                  <Link
                    to="services"
                    smooth={true}
                    duration={500}
                    className="text-xl cursor-pointer"
                  >
                    Services
                  </Link>
                </a>{" "}
              </li>
              <li>
                {" "}
                <a className="text-xl" href="">
                  {" "}
                  {/* About{" "} */}
                  <Link
                    to="about"
                    smooth={true}
                    duration={500}
                    className="text-xl cursor-pointer"
                  >
                    About
                  </Link>
                </a>{" "}
              </li>
              <li>
                {" "}
                <a className="text-xl" href="">
                  {" "}
                  {/* Collaboration{" "} */}
                  <Link
                    to="collaboration"
                    smooth={true}
                    duration={500}
                    className="text-xl cursor-pointer"
                  >
                    Collaboration
                  </Link>
                </a>{" "}
              </li>
              <li>
                {" "}
                <a className="text-xl" href="">
                  {" "}
                  {/* Blog{" "} */}
                  <Link
                    to="blog"
                    smooth={true}
                    duration={500}
                    className="text-xl cursor-pointer"
                  >
                    Blog
                  </Link>
                </a>{" "}
              </li>
            </ul>
            <div>
              {/* Get In Touch Button */}
              <button className="py-2 px-8 bg-black rounded-3xl navButton text-white ml-3">
                {" "}
                <a href="mailto:khandayharoon@gmail.com">Get in touch </a>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// import { Link } from "react-scroll";
// import { useState } from "react";
// import { GiHamburger } from "react-icons/gi";
// import "./navBar.css";

// export default function NavBar() {
//   const [openNavBar, setOpenNavBar] = useState(false);

//   return (
//     <div className="relative mt-10">
//       <div className="flex justify-between items-center top-5 sticky backdrop-blur-lg md:mx-20 py-1 rounded-3xl sm:px-5 z-50">
//         {/* Logo */}
//         <div className="flex sm:space-x-2 text-7xl items-center logoBar">
//           <div className="logo">
//             <i className="fa-brands fa-studiovinari"></i>
//           </div>
//         </div>

//         {/* Navbar Links */}
//         <ul className="hidden md:flex space-x-7 navLinks items-center">
//           <li>
//             <Link
//               to="projects"
//               smooth={true}
//               duration={500}
//               className="text-xl cursor-pointer"
//             >
//               Projects
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="services"
//               smooth={true}
//               duration={500}
//               className="text-xl cursor-pointer"
//             >
//               Services
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="about"
//               smooth={true}
//               duration={500}
//               className="text-xl cursor-pointer"
//             >
//               About
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="work"
//               smooth={true}
//               duration={500}
//               className="text-xl cursor-pointer"
//             >
//               Collaboration
//             </Link>
//           </li>
//         </ul>

//         {/* Hamburger Menu for Mobile */}
//         <button onClick={() => setOpenNavBar(!openNavBar)}>
//           <GiHamburger className="w-10 h-10 text-black" />
//         </button>
//       </div>
//     </div>
//   );
// }

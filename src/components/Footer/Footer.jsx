import "../../components/NavBar/./navBar.css";

function Footer() {
  return (
    <>
      <div className="flex flex-col sm:flex-row sm:px-40 sm:gap-x-14 mt-5">
        {/* Logo */}
        <div className="flex sm:space-x-2 text-[15rem] md:text-9xl justify-center items-center logoBar">
          <div>
            <i className="fa-brands fa-studiovinari hover:text-green-600"></i>
          </div>
          <div className=" text-5xl sm:text-7xl space-x-1  hover:text-green-600">
            <i className="fa-solid fa-h "></i>
            <i className="fa-solid fa-k"></i>
          </div>
        </div>
        <div className=" flex flex-col sm:flex-row text-center items-center justify-center gap-x-14 ">
          {/* div1 */}
          <div className="flex w-44 h-96 ">
            {/* bg-slate-400 */}
            <ul className="flex flex-col text-xl footerLinks items-center p-4">
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Collaboration</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Podcast</a>
              </li>
              <li>
                <a href="#">Glossary</a>
              </li>
              <li>
                <a href="#">Newsletter</a>
              </li>
              <li>
                <a href="#">Tech Stack</a>
              </li>
            </ul>
          </div>
          {/* div2 */}
          <div>
            <div className="flex p-4 h-96">
              <ul className="flex flex-col text-xl footerLinks p-4">
                <li>
                  <a href="#">Imprint</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Data Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
          {/* div3 */}

          <div className="flex p-4 w-44 h-96 -mt-60 sm:mt-0">
            <ul className="flex flex-col text-xl footerLinks p-4">
              <li>
                <a href="#">LinkedIn</a>
              </li>
              <li>
                <a href="#">X Twitter</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">Dribble</a>
              </li>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">WhatsApp</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <InnerFooter />
    </>
  );
}

export default Footer;

function InnerFooter() {
  return (
    <div className="mb-96 sm:mb-0 sm:px-40">
      <div className="flex flex-col gap-y-10 sm:gap-x-10">
        <div className="">
          <h1 className="text-green-800">Adresss</h1>
          <p>
            Srinagar Kashmir 🍁
          </p>
          <h4>Khandayharoon@gmail.com</h4>
        </div>
        <div className="">
          <p>
            We are enthusiastically committed to supporting GDPR and make it a
            top priority to rigorously adhere to data privacy regulations,
            ensuring the utmost protection of personal information.
          </p>
        </div>
      </div>
      <div className="w-full  flex flex-col items-center text-center justify-center my-10">
        <h1>
          Made with love and Passion By HK aka!{" "}
          <span className="text-green-900 text-3xl font-semibold block">Haroon Nissar Khanday</span>
        </h1>
        <h2>A Kashmiri 🍁 Full Stack Developer</h2>
      </div>
    </div>
  );
}

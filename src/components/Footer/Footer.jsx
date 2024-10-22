import React from "react";

function Footer() {
  return (
    <div className="w-full min-h-screen sm:px-40 flex flex-col items-center justify-center">
      <div className="w-full h-96 bg-slate-500 text-white flex justify-between sm:px-20">
        <div className="flex bg-slate-800 p-4">
          <h2>logo</h2>
        </div>

        {/* links */}
        <div className="flex bg-slate-800 p-4">
          <ul className="flex flex-col gap-1">
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

        {/* important links */}
        <div className="flex bg-slate-800 p-4">
          <ul className="flex flex-col gap-1">
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

        {/* social media links */}
        <div className="flex bg-slate-800 p-4">
          <ul className="flex flex-col gap-1">
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
      {/* last  part div */}
      <div className="flex gap-10">
        <div className="bg-slate-400 text-white">
          <h1>Adresss</h1>
          <p>
            Blumenstraße 77 63069 Offenbach am Main Sitz: Offenbach am Main
            Handelsregister Amtsgericht Offenbach am Main, HRB 55121
            Steuernummer: 035 231 32565
          </p>
        </div>
        <div className="bg-slate-400 text-white">
          <p>
            We are enthusiastically committed to supporting GDPR and make it a
            top priority to rigorously adhere to data privacy regulations,
            ensuring the utmost protection of personal information.
          </p>
        </div>
      </div>
      <div className="bg-slate-400 text-white mt-10 w-1/2  flex items-center justify-center ">
        <h1>Made with love and Passion By HK aka! Haroon Nissar Khanday</h1>
      </div>
    </div>
  );
}

export default Footer;

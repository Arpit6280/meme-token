import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" text-white mt-4 mb-4">
      <hr />
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 sm:px-8 px-5 py-8">
        <div>
          <p className="py-2">
            Uranus champions individuality, social justice, and authenticity.
            During its retrograde, focus on living by your values and perhaps
            engage more actively in humanitarian efforts.
          </p>
        </div>
        <div className="block sm:flex justify-center">
          <div>
            <h3 className="text-2xl font-bold">Navigation</h3>
            <div className="block sm:flex justify-center">
              <ul>
                <li className="hover:text-sky-300 hover:underline  py-[2px]">
                  <Link to="/">Home</Link>
                </li>
                <li className="hover:text-sky-300 hover:underline  py-[2px]">
                  <Link to="about">About US</Link>
                </li>
                <li className="hover:text-sky-300 hover:underline  py-[2px]">
                  <Link to="contact">Contact Us</Link>
                </li>
                <li className="hover:text-sky-300 hover:underline  py-[2px]">
                  <Link href="#">Term & Condition</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="block sm:flex justify-center">
          <div>
            <h3 className="text-2xl font-bold">Partners</h3>
            <div className="block sm:flex justify-center">
              <ul>
                <li className="hover:text-sky-300 hover:underline py-[2px]">
                  <a href="https://Dia.wiki">
                    Decentralized Intelligence Agency
                  </a>
                </li>
                <li className="hover:text-sky-300 hover:underline  py-[2px]">
                  <a href="https://WorldVibeWeb.org">World Vibe Web</a>
                </li>
                <li className="hover:text-sky-300 hover:underline  py-[2px]">
                  <a href="https://Purplerock.xyz">Purplerock</a>
                </li>
                <li className="hover:text-sky-300 hover:underline  py-[2px]">
                  <a href="https://GoldenMeme.org">Golden Meme</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex justify-center
      text-center pt-2 text-white text-sm pb-8"
      >
        <span>© 2024 Appy. All rights reserved. Made By Arpit</span>
      </div>
    </footer>
  );
};

export default Footer;

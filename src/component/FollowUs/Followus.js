/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import fb from "../../images/facebook-icon.png";
import insta from "../../images/instagram-icon.png";
import lnk from "../../images/linkedin-icon.png";
import twt from "../../images/twitter-icon.png";
import whtsp from "../../images/whatsapp-icon.png";
import Partner from "../Partner/Partner";

function Followus() {
  return (
    <>
      <hr />

      <div className="py-8 px-8   mt-2">
        <div className="text-center">
          <h1 className="text-white max-[323px]:text-[1.75rem] min-[375px]:text-5xl font-extrabold mb-2 pb-2">
            FOLLOW <span className=" text-sky-500 ">US !</span>
          </h1>
          <p className="text-white">
            Explore Meme Coin Manifesto Using Our UI Kit. Dive Into Best Crypto
            World.
          </p>
        </div>
        <div className="flex justify-center pt-4">
          <p>
            <img
              src={lnk}
              className="w-[70px]  ease-in-out duration-1000 hover:-translate-y-2"
            />
          </p>
          <p>
            <img
              src={insta}
              className="w-[70px]  ease-in-out duration-1000 hover:-translate-y-2"
            />
          </p>

          <p>
            <img
              src={fb}
              className="w-[70px] ease-in-out duration-1000 hover:-translate-y-2"
            />
          </p>
          <p>
            <img
              src={twt}
              className="w-[70px] ease-in-out duration-1000 hover:-translate-y-2"
            />
          </p>
          <p>
            <img
              src={whtsp}
              className="w-[70px] ease-in-out duration-1000 hover:-translate-y-2"
            />
          </p>
        </div>
      </div>
    </>
  );
}

export default Followus;

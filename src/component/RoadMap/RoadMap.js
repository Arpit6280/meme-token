"use client";
import React, { useRef } from "react";

import { useScroll, motion, useTransform } from "framer-motion";
import BuyToken from "./BuyToken";

function RoadMap() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1.2", "0 0.8"],
  });
  const scaleProress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      style={{
        scale: scaleProress,
        opacity: opacityProgress,
      }}
      ref={ref}
    >
      <hr />
      <motion.div className=" pt-10 pb-2 md:pb-8 text-center px-8">
        <h1 className="text-white max-[374px]:text-[2.2rem] min-[375px]:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-center  mb-8">
          ROAD <span className=" text-sky-500 ">MAP</span>
        </h1>
        <p>
          Launching website, community engagement, token utility integration,
          exchange listings, expanding partnerships, and global adoption.
        </p>
      </motion.div>
      <div className="flex relative w-full flex-col lg:flex-row px-8 pb-8">
        <div className="lg:w-6/12 xl:w-4/12 px-3 mb-5 xl:mb-0">
          <div className="flex flex-col text-center sm:text-start sm:flex-row h-full">
            <div className="phaseNumber">
              <span className="text-2xl md:text-4xl text-white">01</span>
            </div>
            <div>
              <p className="text-base  leading-relaxed">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Ratione, aspernatur, molestias maxime quae, a ad illo sit at
                libero tempora illum deleniti itaque! Laboriosam nobis dolor
                velit quaerat nihil excepturi.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-6/12 xl:w-4/12 px-3 mb-5 xl:mb-0">
          <div className="flex flex-col text-center sm:text-start sm:flex-row h-full">
            <div className="phaseNumber">
              <span className="text-2xl md:text-4xl text-white">02</span>
            </div>
            <div>
              <p className="text-base  leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque quisquam, numquam dignissimos nihil, ducimus
                consequatur facilis incidunt natus nostrum similique nam nisi
                dolorum est corrupti laboriosam placeat repellendus officia
                atque.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-6/12 xl:w-4/12 px-3 mb-5 xl:mb-0">
          <div className="flex flex-col text-center sm:text-start sm:flex-row h-full">
            <div className="phaseNumber">
              <span className="text-2xl md:text-4xl text-white">03</span>
            </div>
            <div>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque quisquam, numquam dignissimos nihil, ducimus
                consequatur facilis incidunt natus nostrum similique nam nisi
                dolorum est corrupti laboriosam placeat repellendus officia
                atque.
              </p>
            </div>
          </div>
        </div>
      </div>
      <BuyToken />
    </motion.div>
  );
}

export default RoadMap;

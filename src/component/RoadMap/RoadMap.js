"use client";
import React, { useRef } from "react";
import { fadeIn } from "../variants";

import { useScroll, motion, useTransform } from "framer-motion";
import BuyToken from "./BuyToken";

function RoadMap() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0 0.8"],
  });
  const scaleProress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div>
      <hr />
      <motion.div className=" pt-10  md:pb-8 text-center px-8">
        <h1 className="text-white max-[374px]:text-[2.2rem] min-[375px]:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-center  mb-8">
          ROAD <span className=" text-sky-500 ">MAP</span>
        </h1>
        <p className="text-white mb-4">
          Launching website, community engagement, token utility integration,
          exchange listings, expanding partnerships, and global adoption.
        </p>
      </motion.div>
      <div className="flex relative w-full flex-col lg:flex-row px-8 pb-8">
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -65 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          // animate="visible"
          transition={{ duration: 0.7, delay: 0.2 }}
          // viewport={{ once: false, amount: 0.7 }}
          className="lg:w-6/12  xl:w-4/12 px-3 mb-0 min-[576px]:mb-6 xl:mb-0  "
        >
          <div className="flex flex-col text-center sm:text-start min-[576px]:flex-row h-full">
            <div className="phaseNumber">
              <span className="text-2xl md:text-4xl text-white">01</span>
            </div>
            <div>
              <p className="text-base text-white leading-relaxed px-2">
                Community Growth: Launch marketing efforts to expand the URANUS
                community through partnerships and engagement initiatives.
                <br />
                Platform Development: Develop and launch new features and
                products to enhance the URANUS experience and increase token
                utility.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -65 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          // animate="visible"
          transition={{ duration: 0.6, delay: 0.5 }}
          // viewport={{ once: false, amount: 0.7 }}
          className="lg:w-6/12 xl:w-4/12 px-3 mb-0 min-[576px]:mb-6 xl:mb-0"
        >
          <div className="flex flex-col text-center sm:text-start min-[576px]:flex-row h-full">
            <div className="phaseNumber">
              <span className="text-2xl md:text-4xl text-white">02</span>
            </div>
            <div>
              <p className="text-base text-white  leading-relaxed px-2">
                Strategic Partnerships: Form partnerships with other projects,
                influencers, and organizations to boost visibility and adoption
                of URANUS Token.
                <br />
                Ecosystem Expansion: Explore opportunities to integrate URANUS
                with other platforms and protocols, expanding its ecosystem.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -65 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          // animate="visible"
          transition={{ duration: 0.6, delay: 0.9 }}
          // viewport={{ once: false, amount: 0.7 }}
          className="lg:w-6/12 xl:w-4/12 px-3 mb-0 min-[576px]:mb-6 xl:mb-0"
        >
          <div className="flex flex-col text-center sm:text-start min-[576px]:flex-row h-full">
            <div className="phaseNumber">
              <span className="text-2xl md:text-4xl text-white">03</span>
            </div>
            <div>
              <p className="text-base text-white  leading-relaxed px-2">
                The astrological themes of Uranus and the transition from Pisces
                to Aquarius, emphasizing innovation, technology, and community
                engagement.
                <br />
                Consolidation and Optimization: Use the retrograde period to
                consolidate gains, optimize strategies, and prepare for future
                growth phases.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      <BuyToken />
    </motion.div>
  );
}

export default RoadMap;

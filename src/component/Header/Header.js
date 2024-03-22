import React from "react";
import bg from "../../bg_img.png";
import uranus2 from "../../uranus2.png";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function Header({ setsizes }) {
  const sizeHandler = () => {
    setsizes(80, 80, "multiply");
  };
  const sizeHandler2 = () => {
    setsizes(50, 50);
  };
  return (
    <header>
      <img src={bg} alt="" className="img1" />
      <div class="overlay ">
        <div className=" flex justify-around px-8 gap-2">
          <section className="w-full lg:w-3/5  mt-[25%] sm:mt-[15%] lg:mt-[15%] xl:mt-[15%]">
            <motion.p
              variants={{
                hidden: { opacity: 0, x: -65 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              // animate="visible"
              transition={{ duration: 0.4, delay: 0.2 }}
              className="px-2 pt-16 pb-1 md:pt-1 font-semibold  w-full  min-[320px]:text-[1rem] min-[375px]:text-[1.25rem] min-[425px]:text-2xl xl:text-3xl"
            >
              <span className=" text-sky-500 wel font-bold "> WELCOME TO </span>
            </motion.p>

            <motion.p
              variants={{
                hidden: { opacity: 0, x: -75 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              // animate="visible"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-white px-2 sm:py-1 font-bold min-[320px]:text-[1.5rem]  min-[375px]:text-[2rem] sm:text-6xl lg:text-5xl xl:text-7xl "
            >
              THE WORLD OF{" "}
            </motion.p>

            <motion.p
              variants={{
                hidden: { opacity: 0, x: -75 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              // animate="visible"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 1.2 }}
              className="text-white px-2 sm:py-1 font-extrabold min-[320px]:text-[2rem] min-[375px]:text-[2.5rem]  min-[425px]:text-[2.75rem] sm:text-7xl md:text-8xl lg:text-7xl xl:text-8xl "
            >
              {" "}
              <span className=" text-sky-500">URANUS</span> WEB
            </motion.p>

            <motion.p
              variants={{
                hidden: { opacity: 0, x: -75 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              // animate="visible"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 1.8 }}
              className=" text-white text-[16px] lg:text-lg mt-4 lg:m-0"
              onMouseOver={sizeHandler}
              onMouseOut={sizeHandler2}
            >
              Aquarius is ruled by Uranus, the planet that governs innovation,
              technology, and surprising events. Uranus perfectly mirrors
              Aquarius' distinctive attitude, complementing the nontraditional
              nature of these visionary air signs.
            </motion.p>
          </section>
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 85 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            // animate="visible"
            whileInView="visible"
            transition={{ duration: 0.7, delay: 1.8 }}
            className="w-2/5 h-fit hidden lg:block  lg:mt-[3%]  xl:mt-4"
          >
            <img
              src={uranus2}
              alt=""
              className="w-full h-fit hidden lg:block  lg:mt-[10%]  lg:opacity-60 xl:opacity-50 xl:mt-4"
            />
          </motion.div>
        </div>
      </div>
    </header>
  );
}

export default Header;

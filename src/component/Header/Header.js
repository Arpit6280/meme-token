import React from "react";
import bg from "../../bg_img.png";
import uranus2 from "../../uranus2.png";
import { motion } from "framer-motion";

function Header() {
  return (
    <header>
      <img src={bg} alt="" className="img1" />
      <div class="overlay ">
        <div className=" flex justify-around px-8 gap-2">
          <section className="w-full lg:w-3/5  mt-[25%] sm:mt-[15%] lg:mt-[15%] xl:mt-[15%]">
            <motion.p
              variants={{
                hidden: { opacity: 0, y: -65 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.7, delay: 0.25 }}
              className="px-2 py-1 font-semibold  w-full font-cursive min-[320px]:text-[1rem] min-[375px]:text-[1.25rem] min-[425px]:text-2xl"
            >
              <span className=" text-sky-500 wel "> WELCOME TO </span>
            </motion.p>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: -75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.7, delay: 0.25 }}
              className="px-2 sm:py-1 font-bold min-[320px]:text-[1.5rem]  min-[375px]:text-[2rem] sm:text-6xl lg:text-5xl xl:text-6xl "
            >
              THE WORLD OF{" "}
            </motion.p>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.7, delay: 0.25 }}
              className="px-2 sm:py-1 font-extrabold min-[320px]:text-[2rem] min-[375px]:text-[2.5rem]  min-[425px]:text-[2.75rem] sm:text-7xl md:text-8xl lg:text-7xl xl:text-8xl "
            >
              {" "}
              <span className=" text-sky-500">URANUS</span> WEB
            </motion.p>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.7, delay: 0.25 }}
              className="font-cursive  text-[16px] lg:text-sm mt-4 lg:m-0"
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
            animate="visible"
            transition={{ duration: 0.7, delay: 0.25 }}
            className="w-2/5 h-fit hidden lg:block  lg:mt-[10%]  xl:mt-4"
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

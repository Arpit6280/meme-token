import React, { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import u3 from "../../images/uranus3.png";
import u4 from "../../images/uranus4.png";
import u5 from "../../images/uranus5.png";
import u6 from "../../images/uranus6.png";
import u7 from "../../images/uranus7.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function ChooseUs() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scaleProress = useTransform(
    scrollYProgress,
    [0, 0.4, 1],
    [0.92, 1, 0.9]
  );
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.8, 0.9]);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 800, min: 515 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 514, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <div className="  py-8 px-10 mt-16 ">
        <div>
          <h1 className="text-white  max-[374px]:text-[2.2rem] min-[375px]:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-center mb-8">
            <span className="text-sky-500"> MEMEIFESTO</span>{" "}
          </h1>
          <p className="text-white text-center mb-6">
            Welcome to the wild side of crypto - where memes aren't just dreams,
            and astrology isn't just your daily horoscope.
          </p>
        </div>
        <motion.div
          style={{
            scale: scaleProress,
            opacity: opacityProgress,
          }}
          ref={ref}
        >
          <Carousel
            showDots={true}
            responsive={responsive}

            // removeArrowOnDeviceType={[
            //   "superLargeDesktop",
            //   "desktop",
            //   "tablet",
            //   "mobile",
            // ]}
          >
            <div className="bg-white  mx-2 my-4 ease-in-out duration-1000 hover:scale-105 rounded-xl text-slate-700 hover:text-black  ">
              <div className="p-5">
                <div className="rounded-xl">
                  <img src={u4} alt="" />
                </div>
                <h5 className="text-2xl text-black md:text-3xl font-medium mt-3  text-center">
                  URANUS
                </h5>
                <p className=" text-lg mt-3">
                  The liquidity injections just keep coming into Uranus.
                </p>
              </div>
            </div>
            <div className="bg-white mx-2 my-4 ease-in-out duration-1000 hover:scale-105 rounded-xl text-slate-700  hover:text-black">
              <div className="p-5">
                <div className="rounded-xl">
                  <img src={u5} alt="" />
                </div>
                <h5 className="text-2xl text-black md:text-3xl font-medium mt-3  text-center">
                  GRAPH
                </h5>
                <p className=" text-lg mt-3">
                  We are slowly moving into a new age, from Pisces to Aquarius
                </p>
              </div>
            </div>
            <div className="bg-white  mx-2 my-4 ease-in-out duration-1000 hover:scale-105 rounded-xl text-slate-700 hover:text-black ">
              <div className="p-5">
                <div className="rounded-xl">
                  <img src={u6} alt="" />
                </div>
                <h5 className="text-2xl text-black md:text-3xl font-medium mt-3  text-center">
                  ASTROLOGY
                </h5>
                <p className=" text-lg mt-3">
                  This is all in good fun – a blend of memes, astrology, and
                  crypto
                </p>
              </div>
            </div>
            <div className="bg-white mx-2 my-4 ease-in-out duration-1000 hover:scale-105 rounded-xl text-slate-700  hover:text-black ">
              <div className="p-5">
                <div className="rounded-xl">
                  <img src={u7} alt="" />
                </div>
                <h5 className="text-2xl text-black md:text-3xl font-medium mt-3  text-center">
                  ROMAN KING
                </h5>
                <p className="text-lg mt-3">
                  Uranus champions individuality, social justice, and
                  authenticity.
                </p>
              </div>
            </div>
            <div className="bg-white mx-2 my-4 ease-in-out duration-1000 hover:scale-105 rounded-xl text-slate-700  hover:text-black">
              <div className="p-5 ">
                <div className="rounded-xl ">
                  <img src={u3} alt="" />
                </div>
                <h5 className="text-2xl text-black md:text-3xl font-medium mt-3 text-center">
                  MYTHOLOGY
                </h5>
                <p className=" text-lg mt-3">
                  Everyone Loves to Pump Uranus more then they like when Uranus
                  Dumps.
                </p>
              </div>
            </div>
          </Carousel>
        </motion.div>
      </div>
      ;
    </>
  );
}

export default ChooseUs;

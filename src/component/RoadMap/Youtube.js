import { motion } from "framer-motion";
import React from "react";

function Youtube() {
  return (
    <div className="px-8 mt-24 lg:px-24">
      <div className=" rounded-xl flex  flex-col min-[992px]:flex-row mx-4 px-4 py-4 gap-4 border-[0.5px] border-white/[0.2] bg-gradient-to-r from-[#2e2e5c] to-[#262654]">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 65 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          // animate="visible"
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-white w-full min-[992px]:w-1/2"
        >
          <p className="text-center  text-2xl font-bold">WEEKLY PODCAST</p>

          <p className="mt-[8%] text-sky-500 font-bold">Topics covered -</p>
          <motion.ul className="px-2 list-disc text-slate-200">
            <li className="list-disc">
              Elon sues OpenAi: Complex structure, tax issues and past
              comparables{" "}
            </li>
            <li className="list-disc">
              OpenAI's focus on AGI, different interpretations of AGI in tech
            </li>
            <li className="list-disc">
              TikTok ban: New proposed house bill would force ByteDance to
              divest TikTok, or ban the app outright
            </li>
            <li className="list-disc">
              Bitcoin hits new all-time high: impact of ETFs and an upcoming
              halving event
            </li>
          </motion.ul>
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 65 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          // animate="visible"
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full min-[992px]:w-1/2"
        >
          <iframe
            className="w-full rounded-md"
            // width="560"
            height="315"
            src="https://www.youtube.com/embed/snbTCWL6rxo?si=I4RjYRJe8DshV42x"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
}

export default Youtube;

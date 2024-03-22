import React, { useState } from "react";
import ub from "../../ub.jpg";
import { NavLink } from "react-router-dom";
import {
  easeInOut,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";

function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  let Links = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "/about" },

    { name: "CONTACT", link: "/contact" },
  ];
  let [open, setOpen] = useState(false);
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else setHidden(false);
  });
  return (
    <motion.div
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="shadow-md w-full fixed top-0 left-0 z-50"
    >
      <div className="shadow-md md:shadow-lg shadow-[#0e1022] md:flex items-center justify-between bg-[#0b0b4b] py-4 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
         hover:text-sky-500 duration-100"
        >
          <p className="text-white hover:text-sky-500 "> URANUS</p>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-4 cursor-pointer md:hidden "
        >
          <ion-icon
            name={open ? "close" : "menu"}
            style={{ color: "#fff" }}
          ></ion-icon>
        </div>

        <ul
          className={`bg-[#0b0b4b]  md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-1000 ease-in-out ${
            open ? "top-10 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl  md:my-0  my-7">
              <NavLink
                to={link.link}
                className="text-white hover:text-sky-500 duration-100"
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default Navbar;

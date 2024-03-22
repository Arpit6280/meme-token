import logo from "./logo.svg";
import "./App.css";
import "./style.css";
import Navbar from "./component/Navbar/Navbar";
import Header from "./component/Header/Header";
import RoadMap from "./component/RoadMap/RoadMap";
import Followus from "./component/FollowUs/Followus";
import ChooseUs from "./component/ChooseUs/ChooseUs";
import Footer from "./component/Footer/Footer";
import AboutUs from "./component/AboutUs/AboutUs";
import ContactUs from "./component/ContactUs/ContactUs";
import { Route, Routes } from "react-router-dom";
import Partner from "./component/Partner/Partner";

import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";

function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [size, setSize] = useState({
    w: "50",
    h: "50",
  });
  const [mixBlend, setmixBlend] = useState("normal");
  const [cursorVariant, setCursorVariant] = useState("default");
  const mouseMove = (e) => {
    setMousePosition({
      x: e.clientX - 16,
      y: e.clientY - 16,
    });
  };

  const setSizes = (w, h, mb) => {
    setSize({
      w: w,
      h: h,
    });
    setmixBlend(mb);
  };
  useEffect(() => {
    // setTimeout(() => {
    window.addEventListener("mousemove", mouseMove);
    // }, 1000);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: `${mousePosition.x}px`,
      y: `${mousePosition.y}px`,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "",
      // mixBlendMode: "difference",
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <div className="App bg-gray-500">
      <div
        className="cursor"
        style={{
          transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px,0)`,
          height: `${size.h}px`,
          width: `${size.w}px`,
          // mixBlendMode: `${mixBlend}`,
        }}
      ></div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              {" "}
              <Header setsizes={setSizes} /> <ChooseUs /> <RoadMap />
            </>
          }
        />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Followus />
      <Partner />
      <Footer />
    </div>
  );
}

export default App;

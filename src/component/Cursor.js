import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "../style.css";

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");
  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX - 16,
        y: e.clientY - 16,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
    },
  };
  return (
    <motion.div
      variants={variants}
      animate={cursorVariant}
      className="cursor"
    />
  );
};
export default Cursor;

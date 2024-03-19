import { motion } from "framer-motion";

export const Reveal = ({ children }) => {
  return (
    <>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: -75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.7, delay: 0.25 }}
      >
        {children}
      </motion.div>
      ;
    </>
  );
};

import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { slideVariants } from "utils";

const ImageSliderImage = ({ currentIndex, direction, images }) => (
  <AnimatePresence>
    <motion.img
      key={currentIndex}
      src={images[currentIndex]}
      initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
      animate="visible"
      exit="exit"
      variants={slideVariants}
    />
  </AnimatePresence>
);

export default ImageSliderImage;

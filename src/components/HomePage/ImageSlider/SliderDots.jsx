import React from "react";
import { motion } from "framer-motion";
import { dotsVariants } from "utils";

const SliderDots = ({
  images,
  currentIndex,
  setDirection,
  setCurrentIndex,
}) => {
  const handleDotClick = (index) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };
  return (
    <div className="carousel-indicator">
      {images.map((_, index) => (
        <motion.div
          key={index}
          className={`dot ${currentIndex === index ? "active" : ""}`}
          onClick={() => handleDotClick(index)}
          initial="initial"
          animate={currentIndex === index ? "animate" : ""}
          whileHover="hover"
          variants={dotsVariants}
        ></motion.div>
      ))}
    </div>
  );
};

export default SliderDots;

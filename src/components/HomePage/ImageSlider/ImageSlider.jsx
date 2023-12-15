import { useState } from "react";
import { sliderImages } from "utils";
import ImageSliderImage from "./ImageSliderImage";
import SliderArrows from "./SliderArrows";
import SliderDots from "./SliderDots";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const images = sliderImages;

  return (
    <div className="carousel">
      <div className="carousel-images">
        <ImageSliderImage
          images={images}
          currentIndex={currentIndex}
          direction={direction}
        />
        <SliderArrows
          images={images}
          setCurrentIndex={setCurrentIndex}
          setDirection={setDirection}
        />
      </div>
      <SliderDots
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        images={images}
        setDirection={setDirection}
      />
    </div>
  );
};
export default ImageSlider;

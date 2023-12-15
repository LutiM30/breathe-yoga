import React from "react";
import { whoWeAreHeader, whoWeAreText } from "utils";
import SubHeaderImage from "assets/images/subheader.jpg";
import ImageSlider from "components/HomePage/ImageSlider/ImageSlider";

const WhoWeAre = () => (
  <>
    <h2>{whoWeAreHeader}</h2>
    <div class="whoweare">
      <div class="text">
        <p>{whoWeAreText}</p>
      </div>

      <img src={SubHeaderImage} alt="" />
    </div>

    <ImageSlider />
  </>
);

export default WhoWeAre;

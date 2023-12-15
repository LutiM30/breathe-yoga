import WithHeaderFooter from "components/commons/WithHeaderFooter";
import React, { useState } from "react";
import firstImageLanding from "assets/images/landingImage.jpg";
import secondImageLanding from "assets/images/subheader.jpg";
import Card from "components/instructors/Card";
import "assets/css/instructor.css";
const Instructor = () => {
  const [bgImage, setBgImage] = useState(firstImageLanding);

  return (
    <WithHeaderFooter>
      <main>
        <section
          className="header"
          onMouseOver={() => setBgImage(secondImageLanding)}
          onMouseOut={() => setBgImage(firstImageLanding)}
        >
          <div
            className="header-container"
            id="sliderImage"
            style={{ backgroundImage: `url(${bgImage})` }}
          >
            <div class="header-text">
              <h3>Our Instructors</h3>
            </div>
          </div>
        </section>
        <section class="instructor">
          <h3>Meet Our Instructor</h3>
          <div class="grid-container">
            <Card />
          </div>
        </section>
      </main>
    </WithHeaderFooter>
  );
};

export default Instructor;

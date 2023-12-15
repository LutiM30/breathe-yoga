import React from "react";
import { offeringsHeader, offeringsText, packagesHeader } from "../utils";
import WhoWeAre from "./HomePage/WhoWeAre";

const MainContentHomePage = () => (
  <main>
    <WhoWeAre />

    <div class="offerings">
      <h2>{offeringsHeader}</h2>
      <div class="cards">
        <section class="card">
          <img src="imgs/meditation.jpg" alt="" />
          <p class="about">{offeringsText}</p>
        </section>

        <section class="card">
          <img src="imgs/Yoga.jpg" alt="" />
          <p class="about">
            The point of yoga, as Patanjali reminds us, is to anchor our
            thoughts in our bodies in this particular moment, in this particular
            space in time, at this particular latitude and longitude while the
            sun shines. Yoga stills you for a moment, or so we hope. Except it’s
            not that easy because in a flash, it can all shift.
          </p>
        </section>

        <section class="card">
          <img src="imgs/poses.jpg" alt="" />
          <p class="about">
            The point of yoga, as Patanjali reminds us, is to anchor our
            thoughts in our bodies in this particular moment, in this particular
            space in time, at this particular latitude and longitude while the
            sun shines. Yoga stills you for a moment, or so we hope. Except it’s
            not that easy because in a flash, it can all shift.
          </p>
        </section>
      </div>
    </div>

    <div class="packages">
      <h2>{packagesHeader}</h2>
      <div class="cards">
        <section class="card">
          <img src="imgs/silver.png" alt="" />
          <p class="about">Silver Package Offers Meditation</p>
        </section>

        <section class="card">
          <img src="imgs/gold.png" alt="" />
          <p class="about">Gold Package Offers Mediatation and Aasanas</p>
        </section>
      </div>
    </div>
  </main>
);

export default MainContentHomePage;

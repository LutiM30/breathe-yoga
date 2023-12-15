import React from "react";

import LandingImages from "components/HomePage/LandingImages";
import WhoWeAre from "components/HomePage/WhoWeAre";
import Offerings from "components/HomePage/Offerings/Offerings";
import Packages from "components/HomePage/Packages/Packages";

import WithHeaderFooter from "components/commons/WithHeaderFooter";

const Home = () => (
  <>
    <WithHeaderFooter>
      <LandingImages />
      <main>
        <WhoWeAre />
        <Offerings />
        <Packages />
      </main>
    </WithHeaderFooter>
  </>
);

export default Home;

import React from "react";
import { offeringsHeader } from "utils";
import OfferingsCards from "components/HomePage/Offerings/OfferingsCards";

const Offerings = () => (
  <div class="offerings">
    <h2>{offeringsHeader}</h2>
    <OfferingsCards />
  </div>
);

export default Offerings;

import React from "react";
import PackagesCard from "components/HomePage/Packages/PackagesCard";
import { packagesCardsTexts } from "utils";

const PackagesCards = () => (
  <div class="cards">
    {packagesCardsTexts?.map((card) => (
      <PackagesCard src={card?.src} about={card?.about} />
    ))}
  </div>
);

export default PackagesCards;

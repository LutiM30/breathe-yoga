import React from "react";
import OfferingsCard from "components/HomePage/Offerings/OfferingsCard";
import { offeringsCardsTexts } from "utils";

const OfferingsCards = () => (
  <div class="cards">
    {offeringsCardsTexts.map((card) => (
      <OfferingsCard src={card?.src} about={card?.about} />
    ))}
  </div>
);

export default OfferingsCards;

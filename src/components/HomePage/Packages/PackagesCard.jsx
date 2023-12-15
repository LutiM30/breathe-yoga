import React from "react";

const PackagesCard = (props) => (
  <section class="card">
    <img src={props?.src} alt="" />
    <p class="about">{props?.about}</p>
  </section>
);

export default PackagesCard;

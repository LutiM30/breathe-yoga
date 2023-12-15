import React, { useState } from "react";
import { instructors } from "utils";

const Card = () => {
  const [showMore, setShowMore] = useState(0);
  const showMoreToggle = (e) => setShowMore(e);

  const [width, setWidth] = useState({ width: 100 });

  const mouseOver = (index) =>
    setWidth((c) => {
      return {
        width: c.width + 5,
        [index]: true,
      };
    });
  const mouseOut = (index) =>
    setWidth((c) => {
      return {
        width: 100,
        [index]: false,
      };
    });

  return (
    <>
      {instructors.map((card, index) => (
        <div class="single-instructor" style={{ marginBottom: "15px" }}>
          <img
            src={card.img}
            alt={card.name}
            style={{ width: `${width[index] ? width?.width : 100}%` }}
            onMouseOver={(e) => mouseOver(index)}
            onMouseOut={(e) => mouseOut(index)}
          />
          <p class="name">Name: {card.name}</p>
          <h5
            class="show"
            onClick={() =>
              showMore !== index + 1
                ? showMoreToggle(index + 1)
                : showMoreToggle(0)
            }
            style={{ cursor: "pointer" }}
          >
            Show {showMore === index + 1 ? "less" : "more"}
          </h5>
          {showMore === index + 1 && (
            <span class="">
              <p>Email: {card.email}</p>
              <p>contact: {card.phone}</p>
            </span>
          )}
        </div>
      ))}
    </>
  );
};

export default Card;

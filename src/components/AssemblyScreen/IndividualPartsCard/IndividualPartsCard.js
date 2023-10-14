import React from "react";
import { useDrag } from "react-dnd";
import "./IndividualPartsCard.css";

const IndividualPartsCard = ({ part }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { id: part.id, variant: part.variant },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <article
      style={{ border: isDragging ? "1px solid red" : "" }}
      ref={drag}
      className="individual__selected__parts__card"
    >
      <div className="individual__selected-card-wrapper">
        <img
          className="individual__selected-card-img"
          src={part.imgURL}
          alt={part.title}
        />

        <div className="individual__selected-card-body">
          <h2 className="individual__selected-card-title">{part.title}</h2>
        </div>
      </div>
    </article>
  );
};

export default IndividualPartsCard;

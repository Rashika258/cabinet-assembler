import React from "react";
import { useDrag } from "react-dnd";
import "./IndividualPartsCard.css";

const IndividualPartsCard = ({ part }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { id: part.id , variant: part.variant},
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
      <div class="article-wrapper">
        <figure>
          <img src={part.imgURL} alt="" />
        </figure>
        <div class="article-body">
          <h2>{part.title}</h2>
        </div>
      </div>
    </article>

  );
};

export default IndividualPartsCard;

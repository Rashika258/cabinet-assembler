import React from "react";
import { useDrag } from "react-dnd";
import "./IndividualPartsCard.css";

const IndividualPartsCard = ({ part }) => {
  console.log(part);
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { id: part.id },
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
          <img src={part.url} alt="" />
        </figure>
        <div class="article-body">
          <h2>This is some title</h2>
          <p>
            Curabitur convallis ac quam vitae laoreet. Nulla mauris ante,
            euismod sed lacus sit amet, congue bibendum eros. Etiam mattis
            lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.
          </p>
        </div>
      </div>
    </article>

  );
};

export default IndividualPartsCard;

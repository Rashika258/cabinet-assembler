import React, { useCallback, useState } from "react";
import "./Cabinet.css";
import { Droppable } from "react-beautiful-dnd";
import { useDrop } from "react-dnd";
import dress1 from "../../../assets/girl-dress-1.png";
import IndividualPartsCard from "../IndividualPartsCard/IndividualPartsCard";
import { cabinetPartsData } from "../../../data";

const Cabinet = () => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBoard(item.id),

    collect: (montior) => ({
      isOver: !!montior.isOver(),
    }),
  }));

  const partsList = [
    {
      id: 1,
      url: dress1,
    },
    {
      id: 2,
      url: dress1,
    },
    {
      id: 3,
      url: dress1,
    },
  ];

  const [cabinetItems, setCabinetItems] = useState([]);
  console.log(cabinetItems, "cabinetItems");

  const addImageToBoard = useCallback((id) => {
    console.log("addImageToBoard", id);
    let selectedPart = cabinetPartsData.filter((part) => part.id === id);
    setCabinetItems((cabinetItems) => [...cabinetItems, selectedPart[0]]);
  }, []);

  return (
    <div class="cabinet" ref={drop}>
      {cabinetItems.map((part) => {
        return <IndividualPartsCard part={part} />;
      })}
      <div class="cabinet-top"></div>

      <div class="shelf">
        <div class="upper-left-triangle"></div>
        <div class="upper-right-triangle"></div>

        <div class="back"></div>
        <div class="base"></div>
        <div class="front"></div>
      </div>
      <div class="shelf">
        <div class="upper-left-triangle"></div>
        <div class="upper-right-triangle"></div>

        <div class="back"></div>
        <div class="base"></div>
        <div class="front"></div>
      </div>
      <div class="shelf">
        <div class="upper-left-triangle"></div>
        <div class="upper-right-triangle"></div>
        <div class="back"></div>
        <div class="base"></div>
        <div class="front"></div>
      </div>
      <div class="shelf">
        <div class="upper-left-triangle"></div>
        <div class="upper-right-triangle"></div>
        <div class="back"></div>
        <div class="base"></div>
        <div class="front"></div>
      </div>
      <div class="shelf">
        <div class="upper-left-triangle"></div>
        <div class="upper-right-triangle"></div>
        <div class="back"></div>
        <div class="base"></div>
        <div class="front"></div>
      </div>

      <div class="shelf">
        <div class="upper-left-triangle"></div>
        <div class="upper-right-triangle"></div>
        <div class="back"></div>
        <div class="base"></div>
        <div class="front"></div>
      </div>

      <div class="shelf">
        <div class="upper-left-triangle"></div>
        <div class="upper-right-triangle"></div>
        <div class="back"></div>
        <div class="base"></div>
        <div class="front"></div>
      </div>
    </div>
  );
};

export default Cabinet;

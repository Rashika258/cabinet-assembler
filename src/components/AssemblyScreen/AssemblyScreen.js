import React, { useCallback, useState } from "react";
import "./AssemblyScreen.css";
import { DragDropContext } from "react-beautiful-dnd";
import dress1 from "../../assets/girl-dress-1.png";

import { useDrop } from "react-dnd";

import Cabinet from "./Cabinet/Cabinet";
import IndividualPartsCard from "./IndividualPartsCard/IndividualPartsCard";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function AssemblyScreen() {

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



  return (
    <DndProvider backend={HTML5Backend}>
      <section className="assembly__screen-container">
        <section className="assembly__screen-container-left-wrap">
          {partsList.map((part, index) => {
            return <IndividualPartsCard part={part} />;
          })}
        </section>
        <section className="assembly__screen-container-right-wrap">
       
          <Cabinet />
        </section>
      </section>
    </DndProvider>

    // </DragDropContext>
  );
}

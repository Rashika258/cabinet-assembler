import React from "react";
import dress1 from "../../assets/girl-dress-1.png";
import "./AssemblyScreen.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Cabinet from "./Cabinet/Cabinet";
import IndividualPartsCard from "./IndividualPartsCard/IndividualPartsCard";
import { cabinetPartsData } from "../../data";

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
          {cabinetPartsData.map((part, index) => {
            return <IndividualPartsCard part={part} />;
          })}
        </section>
        <section className="assembly__screen-container-right-wrap">
          <Cabinet />
        </section>
      </section>
    </DndProvider>
  );
}

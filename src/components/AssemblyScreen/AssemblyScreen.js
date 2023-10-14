import React from "react";
import "./AssemblyScreen.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Cabinet from "./Cabinet/Cabinet";
import IndividualPartsCard from "./IndividualPartsCard/IndividualPartsCard";
import { cabinetPartsData } from "../../data";
import CabinetFooter from "../CabinetFooter/CabinetFooter";

export default function AssemblyScreen() {

  return (
    <DndProvider backend={HTML5Backend}>
      <section className="assembly__screen-container">
        <section className="assembly__screen-container-left-wrap">
          {cabinetPartsData.map((part, index) => {
            return <IndividualPartsCard id={index} part={part} />;
          })}
        </section>
        <section className="assembly__screen-container-right-wrap">
          <Cabinet />
          <CabinetFooter />
          </section>
      </section>
    </DndProvider>
  );
}

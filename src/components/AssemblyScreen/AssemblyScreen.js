import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useCabinetStateContext } from '../../context';
import CabinetFooter from '../CabinetFooter/CabinetFooter';
import { CabinetWithDropZone } from '../index';
import './AssemblyScreen.css';
import IndividualPartsCard from './IndividualPartsCard/IndividualPartsCard';

export default function AssemblyScreen() {
  const { cabinetSharedState } = useCabinetStateContext();
  const [cabinetItems, setCabinetItems] = useState([
    {
      variant: 'Books',
      objects: [],
    },
    {
      variant: 'Gifts',
      objects: [],
    },
    {
      variant: 'Female Dresses',
      objects: [],
    },
    {
      variant: 'Male Dresses',
      objects: [],
    },
    {
      variant: 'Perfumes',
      objects: [],
    },
    {
      variant: 'Vase',
      objects: [],
    },
    {
      variant: 'Toys',
      objects: [],
    },
  ]);

  const checkSelectedItems = () => {
    const idSet = new Set();
    cabinetItems.forEach((item) => {
      item.objects.forEach((obj) => {
        idSet.add(obj.id);
      });
    });
    return Array.from(idSet);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <section className='assembly__screen-container'>
        <section className='assembly__screen-container-left-wrap'>
          {cabinetSharedState.map((part, index) => {
            return <IndividualPartsCard id={index} part={part} />;
          })}
        </section>
        <section className='assembly__screen-container-right-wrap'>
          <CabinetWithDropZone
            cabinetItems={cabinetItems}
            setCabinetItems={setCabinetItems}
          />
          <CabinetFooter selectedItems={checkSelectedItems()} />
        </section>
      </section>
    </DndProvider>
  );
}

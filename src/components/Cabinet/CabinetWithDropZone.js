import React, { useCallback } from 'react';
import { useDrop } from 'react-dnd';
import { cabinetPartsData } from '../../data';
import './Cabinet.css';

const CabinetWithDropZone = ({ cabinetItems, setCabinetItems }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'image',
    drop: (item) => addImageToBoard(item.id, item.variant),

    collect: (montior) => ({
      isOver: !!montior.isOver(),
    }),
  }));


  const addImageToBoard = useCallback(
    (id, variant) => {
      if (id && variant) {
        const newObj = cabinetPartsData.find((part) => part.id === id);
        const updatedCabinetItems = [...cabinetItems];
        const selectedCabinet = updatedCabinetItems.find(
          (item) => item.variant === variant
        );

        if (selectedCabinet) {
          let isIdPresent = selectedCabinet.objects.some(function (item) {
            return item.id === id;
          });
          if (!isIdPresent) {
            selectedCabinet.objects.push(newObj);
            setCabinetItems(updatedCabinetItems);
          }
        }
      }
    },
    [cabinetItems]
  );

  return (
    <div className='cabinet__wrap' ref={drop}>
      <div className='cabinet' ref={drop}>
        {cabinetItems &&
          cabinetItems.length > 0 &&
          cabinetItems.map((cabinet, index) => (
            <div key={index} className='shelf'>
              <div class='upper-left-triangle'></div>
              <div class='upper-right-triangle'></div>

              <div class='back'>
                {cabinet.objects &&
                  cabinet.objects.length > 0 &&
                  cabinet.objects.map((object, objectIndex) => {
                    return (
                      <img
                        className='cabinet__image'
                        src={object.imgURL}
                        alt={object.title}
                      />
                    );
                  })}
              </div>
              <div class='base'></div>
              <div class='front'></div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CabinetWithDropZone;

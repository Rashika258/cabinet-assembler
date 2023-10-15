import React, { useEffect, useState } from 'react';
import { useCabinetStateContext } from '../../context';
import './Cabinet.css';

const CompleteCabinet = () => {
  const { cabinetSharedState } = useCabinetStateContext();
  console.log('cabinetData', cabinetSharedState);
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

  function organizeObjectsByVariant(objects) {
    const existingCabinetItems = [...cabinetItems];
    const organizedData = {};

    objects.forEach((obj) => {
      const { variant } = obj;
      if (!organizedData[variant]) {
        organizedData[variant] = {
          variant,
          objects: [obj],
        };
      } else {
        organizedData[variant].objects.push(obj);
      }
    });

    const result = Object.values(organizedData);
    existingCabinetItems.forEach((item, index) => {
      const matchingResultItem = result.find(
        (resultItem) => resultItem.variant === item.variant
      );
      if (matchingResultItem) {
        existingCabinetItems[index] = matchingResultItem;
      }
    });

    setCabinetItems(existingCabinetItems);
  }

  useEffect(() => {
    cabinetSharedState &&
      cabinetSharedState?.length > 0 &&
      cabinetSharedState.map((item, index) => {
        organizeObjectsByVariant(cabinetSharedState);
      });
  }, []);

  return (
    <div className='cabinet__wrap'>
      <div className='cabinet'>
        {cabinetItems &&
          cabinetItems.length > 0 &&
          cabinetItems.map((cabinet, index) => (
            <div key={index} className='shelf'>
              <div class='back'>
                {cabinet.objects &&
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

export default CompleteCabinet;

import React from 'react';
import './CabinetFooter.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCabinetStateContext } from '../../context';
import { cloneDeep } from 'lodash';

const CabinetFooter = ({ selectedItems }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cabinetSharedState, setCabinetSharedState } =
    useCabinetStateContext();

  const filterSelectedItems = () => {
    let parts = cloneDeep(selectedItems);
    const updatedCabinetSharedState = cabinetSharedState.filter((part) =>
      parts.includes(part.id)
    );
    setCabinetSharedState(updatedCabinetSharedState);
  };

  const handleNavigation = () => {
    if (location.pathname === '/') {
      navigate('/parts-selection');
    } else if (location.pathname === '/parts-selection') {
      filterSelectedItems();
      navigate('/assembly');
    } else if (location.pathname === '/assembly') {
      filterSelectedItems();
      navigate('/final-product');
    } else {
      return;
    }
    console.log('location', location);
  };
  return (
    <div className='cabinet__footer__wrap'>
      <button
        disabled={!selectedItems || selectedItems.length === 0}
        className='cabinet__footer-btn'
        onClick={(e) => handleNavigation()}
      >
        Next
      </button>
    </div>
  );
};

export default CabinetFooter;

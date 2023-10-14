import React from 'react';
import './CabinetFooter.css';

const CabinetFooter = () => {
    const handleNavigation = () =>{

    }
  return (
    <div className='cabinet__footer__wrap'>
    <button className='cabinet__footer-btn' onClick={(e) => handleNavigation()}> Change</button>
      
    </div>
  );
}

export default CabinetFooter;

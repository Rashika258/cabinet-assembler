import React from 'react';
import CabinetFooter from '../CabinetFooter/CabinetFooter';
import './CabinetHomePage.css';
import { CompleteCabinet } from '../index';

const CabinetHomePage = () => {
  return (
    <div className='cabinet__home__page'>
      <div className='cabinet__home__page-content'>
        <div className='home__page__description-wrap'>
          <h1 className='heading'>Cabinet Assembler</h1>
          <p className='sub-text'>
            Are you ready to unleash your creativity and design your dream
            cabinet? Our Cabinet Assembler website is your gateway to a world of
            endless possibilities. Whether you're an aspiring fashionista, a toy
            enthusiast, a perfume connoisseur, or someone who loves giving and
            receiving gifts, our platform is designed for you.
          </p>
        </div>
        <CompleteCabinet />
      </div>
      <CabinetFooter selectedItems={true} />
    </div>
  );
};

export default CabinetHomePage;

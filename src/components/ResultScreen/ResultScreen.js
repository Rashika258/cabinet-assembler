import React from 'react';
import { CompleteCabinet } from '../index';

const ResultScreen = () => {
  return (
    <div className='cabinet__home__page  result__screen'>
      <div className='cabinet__home__page-content'>
        <div className='home__page__description-wrap'>
          <h1 className='heading'>Cabinet Assembler</h1>
          <p className='sub-text'>Your Assembler is ready</p>
        </div>
        <CompleteCabinet />
      </div>
    </div>
  );
};

export default ResultScreen;

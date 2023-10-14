import React from 'react';
import './AssemblyScreen.css';
import girlD1 from '../../assets/girl-dress-1.png';

const AssemblyScreen = () => {
  return (
    <section className='assembly__screen-container'>
    <section className='assembly__screen-container-left-wrap'>

    <article className='individual__selected__parts__card'>
    <div class="article-wrapper">
      <figure>
        <img src={girlD1} alt="" />
      </figure>
      <div class="article-body">
        <h2>This is some title</h2>
        <p>
          Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.
        </p>
 
      </div>
    </div>
  </article>

      App
    </section>
    <section className='assembly__screen-container-right-wrap'>
      App
    </section>
      App
    </section>
  );
}

export default AssemblyScreen;

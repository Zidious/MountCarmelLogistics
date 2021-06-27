import React from 'react';
import '../styles/hero.css';
import Navbar from './navbar';
const Hero = () => {
  return (
    <React.Fragment>
      <section className='hero is-fullheight header-image'>
        <Navbar />
        <div className='hero-body'>
          <div className='section '>
            <p className='title is-1' style={{ color: 'white' }}>
              Mount Carmel
            </p>
            <p className='title is-1 is-pulled-right' style={{ color: 'white' }}>
              Logistics
            </p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Hero;

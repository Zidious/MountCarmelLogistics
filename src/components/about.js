import React from 'react';
import Section from '../components/section';
import AboutLayout from './aboutLayout';
import { Element } from 'react-scroll';

const About = () => {
  // rgba(211, 211, 211)
  return (
    <React.Fragment>
      <Element name='aboutSection'>
        <Section style={{ backgroundColor: '#4da8da' }} content={<AboutLayout />} />
      </Element>
    </React.Fragment>
  );
};

export default About;

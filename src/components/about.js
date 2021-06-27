import React from 'react';
import Section from '../components/section';
import AboutLayout from './aboutLayout';
const About = () => {
  // rgba(211, 211, 211)
  return (
    <React.Fragment>
      <Section style={{ backgroundColor: '#4da8da' }} content={<AboutLayout />} />
    </React.Fragment>
  );
};

export default About;

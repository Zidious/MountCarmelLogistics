import React from 'react';
import Section from '../components/section';
import AboutLayout from './aboutLayout';
const About = () => {
  // rgba(211, 211, 211)
  return (
    <React.Fragment>
      <Section style={{ backgroundColor: 'rgba(211, 211, 211)' }} content={<AboutLayout />} />
    </React.Fragment>
  );
};

export default About;

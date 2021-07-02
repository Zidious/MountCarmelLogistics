import React from 'react';
import ContactLayout from './contactLayout';
import { Element } from 'react-scroll';

const Contact = () => {
  return (
    <React.Fragment>
      <Element name='contactSection'>
        <h1 class='title has-text-centered mt-5 pt-5'>Contact</h1>
        <section class='section is-large p-0 '>
          <ContactLayout />
        </section>
      </Element>
    </React.Fragment>
  );
};

export default Contact;

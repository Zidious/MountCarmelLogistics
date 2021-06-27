import React from 'react';
import ContactLayout from './contactLayout';

const Contact = () => {
  return (
    <React.Fragment>
      <h1 class='title has-text-centered mt-5 pt-5'>Contact</h1>
      <section class='section is-large p-0 '>
        <ContactLayout />
      </section>
    </React.Fragment>
  );
};

export default Contact;

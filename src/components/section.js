import React from 'react';

const Section = (props) => {
  return (
    <section class='section' style={props.style}>
      {props.content}
    </section>
  );
};

export default Section;

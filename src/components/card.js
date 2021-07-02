import React from 'react';

const Card = (props) => {
  return (
    <div class='card mt-5 mb-5' style={{ height: '75%' }}>
      <div class='card-content'>
        <div class='content'>{props.content}</div>
      </div>
    </div>
  );
};

export default Card;

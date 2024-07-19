import React from 'react';

const Card = ({ card }) => {
  return (
    <div className="card">
      <p>{card.value} de {card.suit}</p>
    </div>
  );
};

export default Card;

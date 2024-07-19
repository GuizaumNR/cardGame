import React from 'react';
import Card from './card';

const Player = ({ player }) => {
  return (
    <div className="player">
      <h2>{player.name}</h2>
      <div className="hand">
        {player.hand.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Player;

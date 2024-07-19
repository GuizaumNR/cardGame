import React from 'react';
import { useSelector } from 'react-redux';
import Player from '../components/player';

const Game = () => {
  const players = useSelector(state => state.players);

  return (
    <div>
      <h1>Jogo</h1>
      {players.map((player, index) => (
        <Player key={index} player={player} />
      ))}
    </div>
  );
};

export default Game;
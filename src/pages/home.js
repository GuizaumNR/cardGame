import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Bem-vindo ao jogo Foi de Propósito</h1>
      <Link to="/login">Login</Link> | <Link to="/register">Registrar</Link>
    </div>
  );
};

export default Home;
import React, { useState, useEffect } from 'react';
import Card from '../components/card';

function Game() {
  const [question, setQuestion] = useState('');
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    // Fetch question and answers from backend
    setQuestion('Exemplo de pergunta');
    setAnswers(['Resposta 1', 'Resposta 2', 'Resposta 3', 'Resposta 4']);
  }, []);

  return (
    <div>
      <h1>Game Page</h1>
      <div className="question">
        <Card text={question} />
      </div>
      <div className="answers">
        {answers.map((answer, index) => (
          <Card key={index} text={answer} />
        ))}
      </div>
    </div>
  );
}

export default Game;

import React, { useState } from 'react';
import ConfettiGenerator from 'confetti-js';
import './App.css';

// EDIT THESE
const prompts = [
  'prompt 1',
  'prompt 2',
  'prompt 3',
  'prompt 4',
  'prompt 5'
];



// 0 inclusive to max not inclusive
const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}

function App() {
  const [current, setCurrent] = useState('');
  const [firstTime, setFirstTime] = useState(true);
  const title = 'Randomized Prompts!'

  const handleRandomPrompt = () => {
    if (prompts.length === 0) {
      setCurrent('No more prompts!');
      return;
    }
    if (firstTime) {
      const confettiSettings = { target: 'canvas' };
      const confetti = new ConfettiGenerator(confettiSettings);
      confetti.render();
      setFirstTime(false);

      setTimeout(() => {
        const rand = getRandomInt(prompts.length);
        setCurrent(prompts.splice(rand, 1));
      }, 2000);
    } else {
      const rand = getRandomInt(prompts.length);
      setCurrent(prompts.splice(rand, 1));
    }
  };

  return (
    <div className="App">
      <canvas id="canvas"></canvas>
      <div className="category-selector">
        <h1>{(!current) ? title : current}</h1>
        <button type="button" onClick={handleRandomPrompt}>New Prompt!</button>
      </div>
    </div>
  );
}

export default App;

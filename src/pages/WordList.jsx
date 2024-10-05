import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../components/WordCards/Card';
import { wordlist } from '../assets/data/wordlist.js';

const WordList = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false); // Flippelt állapot
  const { category } = useParams();
  // Word keys
  const wordKeys = Object.keys(wordlist[category]);

  const handleNextWord = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % wordKeys.length);
    }, 100);
  };

  return (
    <div className='page-container'>
      <h1>Szókártyák -  { category }</h1>
      <Card
        word={wordKeys[currentWordIndex]}
        translation={wordlist[category][wordKeys[currentWordIndex]]}
        onFlipped={isFlipped}
        setIsFlipped={setIsFlipped} // Átadjuk a flippelt állapotot
      />
      <button className="btn" onClick={handleNextWord}>
        Következő
      </button>
    </div>
  );
};

export default WordList;

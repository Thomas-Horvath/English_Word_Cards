import React, { useState } from 'react';


const wordlist = {
  cat: 'macska',
  dog: 'kutya',
  bird: 'madár',
  fish: 'hal',
  cow: 'tehén',
};

const Card = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  
  // Word keys
  const wordKeys = Object.keys(wordlist);
  const currentWord = wordKeys[currentWordIndex];
  const currentTranslation = wordlist[currentWord];

  const handleCardFlip = () => {
    // Elindítjuk a kártya forgását
    setIsFlipped(!isFlipped);
  };

  const handleNextWord = () => {
    setCurrentWordIndex((prevIndex) => (prevIndex + 1) % wordKeys.length);
  };

  return (
    <div className="card-container">
      <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleCardFlip}>
        <div className="card-front">
          <p>{currentWord}</p>
        </div>
        <div className="card-back">
          <p>{currentTranslation}</p>
        </div>
      </div>
      <button className="btn" onClick={handleNextWord}>
        Következő
      </button>
    </div>
  );
};

export default Card;

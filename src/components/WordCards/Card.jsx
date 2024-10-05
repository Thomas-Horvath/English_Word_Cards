import React, { useEffect } from 'react';


const Card = ({ word, translation, onFlipped, setIsFlipped }) => {
  const handleCardClick = () => {
    setIsFlipped((prev) => !prev); // Flip állapot váltása
  };

  useEffect(() => {
    setIsFlipped(false); // Visszaállítja a kártyát, amikor új szót választanak
  }, [word, setIsFlipped]); // figyelni kell a szóra is

  return (
    <div className="card-container" onClick={handleCardClick}>
      <div className={`card ${onFlipped ? 'flipped' : ''}`}>
        <div className="card-front">
          <p>{word}</p>
        </div>
        <div className="card-back">
          <p>{translation}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;

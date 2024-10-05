import React from 'react';
import { useNavigate } from 'react-router-dom';
import { wordlist } from '../../assets/data/wordlist.js';

const WordListGroup = () => {
    const wordKeys = Object.keys(wordlist);
    const navigate = useNavigate();


    const handleLearnClick = (category) => {
        navigate(`/card/${category}`);
    };

    return (
        <div className="word-list">
            <h2>Elérhető Szógyűjtemények</h2>
            <div className="collection-cards">
                {wordKeys.map((key) => (
                    <div className="collection-card" key={key}>
                        <h3>{key}</h3>
                        <p>Szavak száma: {Object.keys(wordlist[key]).length}</p>
                        <button className="btn" onClick={() => handleLearnClick(key)}>Tanulj!</button>
                    </div>
                ))}
            </div>
            <button className="btn add-collection">Új gyűjtemény létrehozása</button>
        </div>
    );
};

export default WordListGroup;

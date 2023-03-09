import React, { useState, useEffect } from 'react';

import {useNavigate} from 'react-router-dom'
function Flashcard({ languageApp, flashGet, selectedSet, setSelectedSet }) {
  const [flashCards, setFlashCards] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    fetch(`/flashcards/${flashGet.id}`)
      .then((response) => response.json())
      .then((data) => setFlashCards(data));
  }, [flashGet]);

  const sets = [];
  for (let i = 0; i < flashCards.length; i += 10) {
    sets.push(flashCards.slice(i, i + 10));
  }

  const handleSetClick = (index) => {
    setSelectedSet(sets[index]);
    console.log(selectedSet);
    navigate('/flashcardset')
  };

  return (
    <div>
      {sets.map((set, index) => (
        <button key={index} onClick={() => handleSetClick(index)}>
          {index * 10 + 1}-{(index + 1) * 10}
          {console.log(set)}
          {/* {selectedSet && <FlashcardSet flashcards={selectedSet} />} */}
        </button>
      ))}
    </div>
  );
}

export default Flashcard;

import React from 'react';

function FlashcardSet({ selectedSet }) {
  return (
    <div>
      {selectedSet.map((flashCard) => (
        <div key={flashCard.id}>
          <h2>{flashCard.title}</h2>
          <p>{flashCard.flashcard.front}</p>
          <p>{flashCard.flashcard.one_back}</p>
          {/* Add more elements to render additional data */}
        </div>
      ))}
    </div>
  );
}

export default FlashcardSet;

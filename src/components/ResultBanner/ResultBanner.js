import React from 'react';

function ResultBanner({ gameState, totalGuesses, answer }) {
  return gameState === 'won' ? (
    <div className='happy banner'>
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>{totalGuesses} guesses</strong>.
      </p>
    </div>
  ) : gameState === 'lost' ? (
    <div className='sad banner'>
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  ) : undefined;
}

export default ResultBanner;

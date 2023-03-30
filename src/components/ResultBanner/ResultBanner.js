import React from 'react';

function ResultBanner({ gameState, totalGuesses, answer }) {
  return (
    <>
      {/* Win Banner*/}
      {gameState === 'won' && (
        <div className='happy banner'>
          <p>
            <strong>Congratulations!</strong> Got it in{' '}
            <strong>
              {totalGuesses === 1
                ? '1 guess'
                : `${totalGuesses} guesses`}
            </strong>
            .
          </p>
        </div>
      )}

      {/* Loose Banner*/}
      {gameState === 'lost' && (
        <div className='sad banner'>
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
    </>
  );
}

export default ResultBanner;

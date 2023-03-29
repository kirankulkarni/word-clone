import React from 'react';
import Guess from '../Guess/Guess';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuesseResults({ accessGuesses }) {
  const guesses = accessGuesses();

  return (
    <div className='guess-results'>
      {range(1, NUM_OF_GUESSES_ALLOWED).map((guessNo) => {
        let guess = '';
        if (guessNo <= guesses.length) {
          guess = guesses[guessNo - 1];
        }
        return (
          <p className='guess' key={guessNo}>
            <Guess guessWord={guess} />
          </p>
        );
      })}
    </div>
  );
}

export default GuesseResults;

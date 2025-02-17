import React from 'react';
import Guess from '../Guess/Guess';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuesseResults({ accessGuesses }) {
  const guesses = accessGuesses();

  return (
    <div className='guess-results'>
      {range(NUM_OF_GUESSES_ALLOWED).map((guessNo) => {
        return (
          <Guess key={guessNo} guessWordDetails={guesses[guessNo]} />
        );
      })}
    </div>
  );
}

export default GuesseResults;

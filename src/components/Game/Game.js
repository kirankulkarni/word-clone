import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuesseResults/GuessResults';
import { checkGuess } from '../../game-helpers';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleAddGuess(newGuessWord) {
    const guessDetails = checkGuess(newGuessWord, answer);
    const nextGuesses = [...guesses, guessDetails];
    setGuesses(nextGuesses);
  }

  function accessGuesses() {
    return guesses;
  }
  return (
    <>
      {/*Put a game here!*/}
      <GuessResults accessGuesses={accessGuesses} />
      <GuessInput submitGuess={handleAddGuess} />
    </>
  );
}

export default Game;

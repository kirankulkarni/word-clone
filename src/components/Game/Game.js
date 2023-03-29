import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuesseResults/GuessResults';
import { checkGuess } from '../../game-helpers';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import ResultBanner from '../ResultBanner/ResultBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameState, setGameState] = React.useState('running');

  function handleAddGuess(newGuessWord) {
    const guessDetails = checkGuess(newGuessWord, answer);
    const nextGuesses = [...guesses, guessDetails];
    setGuesses(nextGuesses);
    if (newGuessWord === answer) {
      setGameState('won');
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameState('lost');
    }
  }

  function accessGuesses() {
    return guesses;
  }
  return (
    <>
      {/*Put a game here!*/}
      <GuessResults accessGuesses={accessGuesses} />

      <GuessInput
        submitGuess={handleAddGuess}
        gameState={gameState}
      />

      <ResultBanner
        gameState={gameState}
        totalGuesses={guesses.length}
        answer={answer}
      />
    </>
  );
}

export default Game;

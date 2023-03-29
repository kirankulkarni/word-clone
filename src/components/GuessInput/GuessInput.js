import React from 'react';

function GuessInput({ submitGuess, gameState }) {
  const [guessWord, setGuessWord] = React.useState('');

  return (
    <form
      className='guess-input-wrapper'
      onSubmit={(event) => {
        event.preventDefault();
        submitGuess(guessWord);
        setGuessWord('');
      }}
    >
      <label htmlFor='guess-input'>Enter text:</label>
      <input
        id='guess-input'
        type='text'
        disabled={gameState != 'running'}
        maxLength={5}
        minLength={5}
        pattern='[A-Za-z]{5}'
        title='Enter 5 letter word'
        value={guessWord}
        onChange={(event) =>
          setGuessWord(event.target.value.toUpperCase())
        }
      ></input>
    </form>
  );
}

export default GuessInput;

import React from 'react';

function GuessInput({ submitGuess }) {
  const [guessWord, setGuessWord] = React.useState('');

  return (
    <form
      className='guess-input-wrapper'
      onSubmit={(event) => {
        event.preventDefault();
        console.log(guessWord);
        submitGuess(guessWord);
        setGuessWord('');
      }}
    >
      <label htmlFor='guess-input'>Enter text:</label>
      <input
        id='guess-input'
        type='text'
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

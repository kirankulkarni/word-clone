import React from 'react';

function Guess({ guessWord }) {
  const word = guessWord || '';
  return (
    <>
      <span className='cell'>{word[0] || ''}</span>
      <span className='cell'>{word[1] || ''}</span>
      <span className='cell'>{word[2] || ''}</span>
      <span className='cell'>{word[3] || ''}</span>
      <span className='cell'>{word[4] || ''}</span>
    </>
  );
}

export default Guess;

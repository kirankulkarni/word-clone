import React from 'react';

function Guess({ guessWord }) {
  return (
    <>
      <span className='cell'>{guessWord[0] || ''}</span>
      <span className='cell'>{guessWord[1] || ''}</span>
      <span className='cell'>{guessWord[2] || ''}</span>
      <span className='cell'>{guessWord[3] || ''}</span>
      <span className='cell'>{guessWord[4] || ''}</span>
    </>
  );
}

export default Guess;

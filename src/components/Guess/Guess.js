import React from 'react';
import { range } from '../../utils';

function Guess({ guessWord }) {
  return (
    <p className='guess'>
      {range(5).map((num) => (
        <span className='cell' key={num}>
          {guessWord ? guessWord[num] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;

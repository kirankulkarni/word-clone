import React from 'react';
import { range } from '../../utils';

function Guess({ guessWordDetails }) {
  return (
    <p className='guess'>
      {range(5).map((num) => {
        const status = guessWordDetails
          ? guessWordDetails[num].status
          : undefined;
        return (
          <span
            className={status ? `cell ${status}` : 'cell'}
            key={num}
          >
            {guessWordDetails
              ? guessWordDetails[num].letter
              : undefined}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;

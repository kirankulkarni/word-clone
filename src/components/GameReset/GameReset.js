import React from 'react';

function GameReset({ resetFn }) {
  return (
    <button className='restart' onClick={resetFn}>
      Restart
    </button>
  );
}

export default GameReset;

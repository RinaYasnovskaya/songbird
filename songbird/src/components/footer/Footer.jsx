import React from 'react';

export const Footer = ({ doneRound, changeRound }) => {
  return (
    <button
      type="button"
      className={doneRound ? 'button next' : 'button'}
      onClick={() => changeRound()}
    >
      Следующий уровень
    </button>
  );
};

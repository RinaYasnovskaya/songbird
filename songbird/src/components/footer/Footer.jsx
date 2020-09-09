import React from 'react';
import './footer.scss';

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

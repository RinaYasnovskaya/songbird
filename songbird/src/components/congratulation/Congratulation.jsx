import React from 'react';

/* eslint-disable react/jsx-one-expression-per-line */

export const Congratulation = ({ score, doneGameFunc, resetScore }) => {
  const maxScore = 30;
  const buttonOrImg =
    score === maxScore ? (
      <img src="" alt="yey" />
    ) : (
      <button
        type="button"
        className="button next"
        onClick={() => {
          doneGameFunc(false);
          resetScore();
        }}
      >
        Попробовать снова.
      </button>
    );
  return (
    <div className="congratulation">
      <h2 className="congratulation__title">Поздравляю!</h2>
      <p className="congratulation__descr">
        Вы набрали {score} из {maxScore} баллов!
      </p>
      {buttonOrImg}
    </div>
  );
};

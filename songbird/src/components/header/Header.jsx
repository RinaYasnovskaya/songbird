import React from 'react';

export const Header = ({ names, num }) => {
  const state = {
    doneGame: false,
  };

  const newGroup = names.map((item, index) => {
    let { doneGame } = state;
    let nums = num;
    if (doneGame) {
      nums += 1;
      doneGame = false;
    }

    const style = nums === index ? 'link active' : 'link';
    const key = `${index}key`;
    return (
      <li id={index} key={key} className="header__menu-item">
        <a className={style} href="/#">
          {item}
        </a>
      </li>
    );
  });

  return (
    <header className="header">
      <div className="header__info">
        <div className="logo" />
        <div className="score-block">
          <h4>Score:</h4>
          <span className="score" />
        </div>
      </div>
      <div className="header__menu">
        <ul className="header__menu-block">{newGroup}</ul>
      </div>
    </header>
  );
};

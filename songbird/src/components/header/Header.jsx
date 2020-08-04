import React from 'react';

export const Header = ({ names }) => {
  const newGroup = names.map((item, index) => {
    const key = `${index}key`;
    return (
      <li id={index} key={key} className="header__menu-item">
        <a className="link" href="/#">
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

import React from 'react';
import { doActive } from './doActive';

export const TwoBlocks = ({ dataBird }) => {
  const birdsNames = dataBird.map((item, index) => {
    const key = `${index}key`;
    return (
      <li key={key} className="answers__item" onMouseUp={doActive} role="presentation">
        <span className="indicator" />
        {item.name}
      </li>
    );
  });

  return (
    <div className="game-section">
      <div className="game-section__row">
        <ul className="answers">{birdsNames}</ul>
      </div>
      <div className="game-section__row">
        <div className="game-section__inner">
          <div className="attention">
            <p>Пожалуйста, прослушайте плеер и выберите название птицы, чей голос прозвучал!</p>
          </div>
          <div className="info">
            <img src="assets/img/defaultImg.jpg" alt="bird" className="info__img" />
            <div>
              <h3 className="info__name">Bird Name</h3>
              <span className="info__species">Species</span>
              <div className="player">
                <audio className="player-audio info__audio" src="" hidden />
                <div className="player__control">audio</div>
              </div>
            </div>
          </div>
          <span className="info__description">Lorem ipsum dolor sit amet consectetur</span>
        </div>
      </div>
    </div>
  );
};

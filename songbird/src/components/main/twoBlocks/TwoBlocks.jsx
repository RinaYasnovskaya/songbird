import React from 'react';
import { BirdsNameItem } from './BirdsNameItem';
import { Audio } from '../../audioPlayer/Audio';

export const TwoBlocks = ({ dataBird, selectBirdFunc, selectedBirdId, thisGroup }) => {
  const birdsNames = dataBird.map((item, index) => {
    const key = `${index}key`;
    return (
      <li key={key} className="answers__item">
        <BirdsNameItem
          birdName={item.name}
          selectFunc={selectBirdFunc}
          id={index}
          thisGroup={thisGroup}
        />
      </li>
    );
  });

  const styleNone = {
    display: 'none',
  };
  const styleBlock = {
    display: 'block',
  };
  const styleFlex = {
    display: 'flex',
  };

  return (
    <div className="game-section">
      <div className="game-section__row">
        <ul className="answers">{birdsNames}</ul>
      </div>
      <div className="game-section__row">
        <div className="game-section__inner">
          <div className="attention" style={selectedBirdId === null ? styleBlock : styleNone}>
            <p>Пожалуйста, прослушайте плеер и выберите название птицы, чей голос прозвучал!</p>
          </div>
          <div className="info" style={selectedBirdId === null ? styleNone : styleFlex}>
            <img
              src={selectedBirdId === null ? '' : dataBird[selectedBirdId].image}
              alt="bird"
              className="info__img"
            />
            <div className="info__inner">
              <h3 className="info__name">
                {selectedBirdId === null ? '***' : dataBird[selectedBirdId].name}
              </h3>
              <span className="info__species">
                {selectedBirdId === null ? '***' : dataBird[selectedBirdId].species}
              </span>
              <div className="player">
                <Audio url={selectedBirdId === null ? '' : dataBird[selectedBirdId].audio} />
              </div>
            </div>
          </div>
          <span
            className="info__description"
            style={selectedBirdId === null ? styleNone : styleBlock}
          >
            {selectedBirdId === null ? '***' : dataBird[selectedBirdId].description}
          </span>
        </div>
      </div>
    </div>
  );
};

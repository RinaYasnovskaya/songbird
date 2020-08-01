import React from 'react';

export const TwoBlocks = () => {
  // const birdsNames = birdName.map((item, index) => {
  //   const key = index;
  //   return (
  //     <li key={key} className="answers__item">
  //       <span className="indicator" />
  //       {item.name}
  //     </li>
  //   );
  // });

  return (
    <div className="game-section">
      <div className="game-section__row">
        <ul className="answers">
          {birdsNames}
        </ul>
      </div>
      <div className="game-section__row">
        <div className="info">
          <img src="" alt="bird" className="info__img" />
          <h3>Bird Name</h3>
          <span className="info__species">Species</span>
          <div className="player">
            <audio className="player-audio" src="" hidden />
            <div className="player__control">audio</div>
          </div>
          <span className="info__description">Descript</span>
        </div>
      </div>
    </div>
  );
};

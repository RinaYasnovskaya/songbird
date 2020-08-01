import React from 'react';

export const GameBlock = () => {
  return (
    <div className="main">
      <img src="assets/img/default.jpg" alt="random-bird" className="main__img" />
      <div className="main__inner">
        <span className="main__inner-title">Name Bird</span>
        <div className="player">
          <audio className="player-audio" src="" hidden />
          <div className="player__control">audio</div>
        </div>
      </div>
    </div>
  );
};

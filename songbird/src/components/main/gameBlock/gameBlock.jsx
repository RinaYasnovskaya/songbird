import React from 'react';

export const GameBlock = (props) => {
  const {
    dataBird: { name, image, audio },
    done,
  } = props;
  const nameBird = done ? name : '*****';
  const imgBird = done ? image : 'assets/img/defaultImg.jpg';
  return (
    <div className="main">
      <img src={imgBird} alt="random-bird" className="main__img" />
      <div className="main__inner">
        <span className="main__inner-title">{nameBird}</span>
        <div className="player">
          <audio className="player-audio" src={audio} hidden />
          <div className="player__control">audio</div>
        </div>
      </div>
    </div>
  );
};

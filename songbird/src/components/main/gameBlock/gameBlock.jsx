import React from 'react';
import { Audio } from '../../audioPlayer/Audio';

export const GameBlock = (props) => {
  const {
    dataBird: { name, image, audio },
    done,
  } = props;
  const nameBird = done ? name : '*****';
  const imgBird = done ? image : 'assets/img/defaultImg.jpg';
  console.log(audio);
  return (
    <div className="main">
      <img src={imgBird} alt="random-bird" className="main__img" />
      <div className="main__inner">
        <span className="main__inner-title">{nameBird}</span>
        <div className="player">
          <Audio url={audio} />
        </div>
      </div>
    </div>
  );
};

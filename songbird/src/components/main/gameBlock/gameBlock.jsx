import React, { Component } from 'react';

export class GameBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false,
    };
  }

  render() {
    const { done } = this.state;
    const {
      dataBird: { name, image, audio },
    } = this.props;
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
  }
}

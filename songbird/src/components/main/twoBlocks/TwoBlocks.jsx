import React, { Component } from 'react';

export class TwoBlocks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      right: false,
      wrong: false,
      count: 0,
    };
  }

  doActive = () => {
    console.log(this.state);
    this.setState({
      wrong: true,
    });
  };

  render() {
    const { dataBird } = this.props;
    const { right, wrong } = this.state;

    const styleRight = right ? 'answers__item active' : 'answers__item';
    const styleWrong = wrong ? 'answers__item inactive' : 'answers__item';
    const style = right ? styleRight : styleWrong;

    const birdsNames = dataBird.map((item, index) => {
      const key = `${index}key`;
      return (
        <li key={key} className={style} onMouseUp={this.doActive} role="presentation">
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
  }
}

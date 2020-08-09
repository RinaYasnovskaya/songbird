import React, { Component } from 'react';

export class BirdsNameItem extends Component {
  constructor() {
    super();
    this.state = {
      right: false,
      wrong: false,
    };
  }

  changeColor = (id, birdId) => {
    const { doneRound, done, countFunc } = this.props;
    if (!done) {
      if (id === birdId) {
        this.setState({
          right: true,
        });
        doneRound(true);
      } else {
        this.setState({
          wrong: true,
        });
      }
      countFunc(1);
    }
  };

  render() {
    const { right, wrong } = this.state;
    const { birdName, selectFunc, id, birdNowId } = this.props;
    let style = '';

    if (right === true) {
      style = 'answers__item-span active';
    } else if (wrong === true) {
      style = 'answers__item-span inactive';
    } else {
      style = 'answers__item-span';
    }

    return (
      <span
        className={style}
        onClick={() => {
          selectFunc(id);
          this.changeColor(id, birdNowId);
        }}
        role="presentation"
      >
        <span className="indicator" />
        {birdName}
      </span>
    );
  }
}

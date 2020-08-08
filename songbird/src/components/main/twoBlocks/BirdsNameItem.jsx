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
    const { doneRound } = this.props;
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
  };

  render() {
    const { right, wrong } = this.state;
    let style = '';

    if (right === true) {
      style = 'answers__item-span active';
    } else if (wrong === true) {
      style = 'answers__item-span inactive';
    } else {
      style = 'answers__item-span';
    }

    const { birdName, selectFunc, id, birdNowId } = this.props;

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

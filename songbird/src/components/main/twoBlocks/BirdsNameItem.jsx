import React, { Component } from 'react';

export class BirdsNameItem extends Component {
  constructor() {
    super();
    this.state = {
      right: false,
    };
  }

  changeColor = () => {
    this.setState({
      right: true,
    });
  };

  render() {
    const { right } = this.state;
    const style = right ? 'answers__item-span active' : 'answers__item-span';
    const { birdName, selectFunc, id } = this.props;
    return (
      <span
        className={style}
        onClick={() => {
          selectFunc(id);
          this.changeColor();
        }}
        role="presentation"
      >
        <span className="indicator" />
        {birdName}
      </span>
    );
  }
}

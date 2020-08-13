import React, { Component } from 'react';

export class BirdsNameItem extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { birdName, selectFunc, id, thisGroup } = this.props;
    const className = thisGroup % 2 === 0 ? 'answers__item-span' : 'answers__item-span _m';

    return (
      <span
        className={className}
        onClick={(event) => {
          selectFunc(id, event);
        }}
        role="presentation"
      >
        <span className="indicator" />
        {birdName}
      </span>
    );
  }
}

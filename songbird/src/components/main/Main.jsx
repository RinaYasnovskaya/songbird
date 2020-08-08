import React, { Component } from 'react';

import { GameBlock } from './gameBlock/gameBlock';
import { TwoBlocks } from './twoBlocks/TwoBlocks';

export class Main extends Component {
  constructor() {
    super();
    this.state = {
      bird: 0,
    };
  }

  componentDidMount = () => {
    const item = Math.floor(Math.random() * 6);
    const { data, birdSetIndex } = this.props;
    this.setState({
      bird: data[item],
    });
    birdSetIndex(item);
  };

  render() {
    const { data, onBirdSelected, selectedBird, doneGame, birdIndexNow } = this.props;
    const { bird } = this.state;
    return (
      <div>
        <GameBlock dataBird={bird} done={doneGame} />
        <TwoBlocks
          dataBird={data}
          selectBirdFunc={onBirdSelected}
          selectedBirdId={selectedBird}
          birdIndex={birdIndexNow}
        />
      </div>
    );
  }
}

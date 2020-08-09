import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { nameGroup, dataBirds } from './js';
import { Header, Main, Footer } from './components';

class App extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      selectedItem: null,
      doneRound: false,
      birdIndex: null,
      countAnsw: 0,
      score: 0,
    };
  }

  birdSelected = (itemNum) => {
    this.setState({
      selectedItem: itemNum,
    });
  };

  birdSetFirst = (birdId) => {
    this.setState({
      birdIndex: birdId,
    });
  };

  doDoneRound = (done) => {
    this.setState({
      doneRound: done,
    });
  };

  changeId = () => {
    let { id } = this.state;
    this.setState({
      id: (id += 1),
      selectedItem: null,
      doneRound: false,
      birdIndex: null,
      countAnsw: 0,
    });
  };

  countAnswers = (count) => {
    let { countAnsw } = this.state;
    this.setState({
      countAnsw: (countAnsw += count),
    });
  };

  render() {
    const { id, selectedItem, doneRound, birdIndex, countAnsw, score } = this.state;
    return (
      <div>
        <Header names={nameGroup} num={id} score={score} />
        <Main
          data={dataBirds[id]}
          onBirdSelected={this.birdSelected}
          selectedBird={selectedItem}
          doneGameRound={doneRound}
          birdSetIndex={this.birdSetFirst}
          birdIndexNow={birdIndex}
          doneRound={this.doDoneRound}
          count={countAnsw}
          countFunc={this.countAnswers}
        />
        <Footer doneRound={doneRound} changeRound={this.changeId} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

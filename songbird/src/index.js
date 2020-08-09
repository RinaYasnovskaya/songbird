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
      birdIndex: 0,
      countAnsw: 0,
      score: 0,
    };
  }

  componentDidMount() {
    this.birdSetFirst();
  }

  birdRandomId = () => {
    return Math.floor(Math.random() * 6);
  };

  birdSelected = (itemNum) => {
    this.setState({
      selectedItem: itemNum,
    });
  };

  birdSetFirst = () => {
    console.log('set');
    this.setState({
      birdIndex: this.birdRandomId(),
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
          birdIndexNow={birdIndex}
          onBirdSelected={this.birdSelected}
          selectedBird={selectedItem}
          doneGameRound={doneRound}
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

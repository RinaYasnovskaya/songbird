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
      doneGame: false,
      countRound: 0,
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

  birdSelected = (itemNum, event) => {
    this.setState({
      selectedItem: itemNum,
    });
    this.changeColor(itemNum, event);
  };

  birdSetFirst = () => {
    this.setState({
      birdIndex: this.birdRandomId(),
    });
  };

  doDoneRound = () => {
    let { countRound } = this.state;
    this.setState({
      doneRound: true,
      countRound: (countRound += 1),
    });
  };

  doDoneGame = () => {
    this.setState({
      doneGame: true,
    });
  };

  changeId = () => {
    let { id } = this.state;
    const { doneGame, countRound } = this.state;
    this.setState({
      id: doneGame ? 0 : (id += 1),
      selectedItem: null,
      doneRound: false,
      birdIndex: this.birdRandomId(),
      countAnsw: 0,
      countRound: doneGame ? 0 : countRound,
    });
  };

  changeColor = (id, event) => {
    const { doneRound, birdIndex, countRound } = this.state;
    const allRounds = 5;
    const classes = event.target.classList;

    if (!doneRound && !classes.contains('active') && !classes.contains('inactive')) {
      if (id === birdIndex) {
        event.target.classList.add('active');
        if (countRound !== allRounds) {
          this.doDoneRound();
        } else {
          this.doDoneRound();
          this.doDoneGame();
        }
      } else {
        event.target.classList.add('inactive');
      }
      this.countAnswers();
    }
  };

  countAnswers = () => {
    let { countAnsw } = this.state;
    this.setState({
      countAnsw: (countAnsw += 1),
    });
    console.log('count', countAnsw);
  };

  render() {
    const { id, selectedItem, doneRound, birdIndex, score, doneGame } = this.state;
    console.log(doneGame, birdIndex);
    if (doneGame) {
      return <Header names={nameGroup} num={id} score={score} />;
    }
    return (
      <div>
        <Header names={nameGroup} num={id} score={score} />
        <Main
          data={dataBirds[id]}
          thisGroup={id}
          birdIndexNow={birdIndex}
          onBirdSelected={this.birdSelected}
          selectedBird={selectedItem}
          doneGameRound={doneRound}
        />
        <Footer doneRound={doneRound} changeRound={this.changeId} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

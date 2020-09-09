import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { nameGroup, dataBirds } from './js';
import { Header, Main, Footer, Congratulation } from './components';
import './assets/scss/main.scss';

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

  doDoneGame = (done) => {
    this.setState({
      doneGame: done,
    });
  };

  changeId = () => {
    let { id } = this.state;
    const { doneGame, countRound, score } = this.state;
    this.setState({
      id: doneGame ? 0 : (id += 1),
      selectedItem: null,
      doneRound: false,
      birdIndex: this.birdRandomId(),
      countAnsw: 0,
      score: doneGame ? 0 : score,
      countRound: doneGame ? 0 : countRound,
    });
  };

  countAnswers = () => {
    let { countAnsw } = this.state;
    this.setState({
      countAnsw: (countAnsw += 1),
    });
  };

  changeColor = (id, event) => {
    const { doneRound, birdIndex, countRound, countAnsw } = this.state;
    const allRounds = 5;
    const classes = event.target.classList;

    if (!doneRound && !classes.contains('active') && !classes.contains('inactive')) {
      if (id === birdIndex) {
        classes.add('active');
        if (countRound === allRounds) {
          this.doDoneGame(true);
        }
        this.doDoneRound();
        this.setState((state) => ({
          score: state.score + 5 - countAnsw,
        }));
      } else {
        classes.add('inactive');
      }
      this.countAnswers();
    }
  };

  render() {
    const { id, selectedItem, doneRound, birdIndex, score, doneGame } = this.state;

    // start block for students
    const forPeople = birdIndex + 1;
    console.log('выбери птичку под номером: ', forPeople);
    // end block for students

    if (doneGame) {
      return (
        <div>
          <Header names={nameGroup} num={id} score={score} />
          <Congratulation score={score} doneGameFunc={this.doDoneGame} resetScore={this.changeId} />
        </div>
      );
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

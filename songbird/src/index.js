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
    });
  };

  render() {
    const { id, selectedItem, doneRound, birdIndex } = this.state;
    return (
      <div>
        <Header names={nameGroup} num={id} />
        <Main
          data={dataBirds[id]}
          onBirdSelected={this.birdSelected}
          selectedBird={selectedItem}
          doneGameRound={doneRound}
          birdSetIndex={this.birdSetFirst}
          birdIndexNow={birdIndex}
          doneRound={this.doDoneRound}
        />
        <Footer doneRound={doneRound} changeRound={this.changeId} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

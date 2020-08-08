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
      done: false,
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
    console.log(birdId);
  };

  render() {
    const { id, selectedItem, done, birdIndex } = this.state;
    return (
      <div>
        <Header names={nameGroup} num={id} />
        <Main
          data={dataBirds[id]}
          onBirdSelected={this.birdSelected}
          selectedBird={selectedItem}
          doneGame={done}
          birdSetIndex={this.birdSetFirst}
          birdIndexNow={birdIndex}
        />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

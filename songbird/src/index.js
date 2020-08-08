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
    };
  }

  birdSelected = (itemNum) => {
    this.setState({
      selectedItem: itemNum,
    });
  };

  render() {
    const { id, selectedItem, done } = this.state;
    return (
      <div>
        <Header names={nameGroup} num={id} />
        <Main
          data={dataBirds[id]}
          onBirdSelected={this.birdSelected}
          selectedBird={selectedItem}
          doneGame={done}
        />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

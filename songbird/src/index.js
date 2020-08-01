import React from 'react';
import ReactDOM from 'react-dom';

import { nameGroup } from './js';
import { Header } from './components/header/Header';

const App = () => {
  return (
    <div>
      <Header names={nameGroup} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';

import { nameGroup } from './js';
import { Header, Main, Footer } from './components';

const App = () => {
  return (
    <div>
      <Header names={nameGroup} />
      <Main />
      <Footer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

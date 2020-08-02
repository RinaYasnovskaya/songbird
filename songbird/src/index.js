import React from 'react';
import ReactDOM from 'react-dom';

import { nameGroup, dataBirds } from './js';
import { Header, Main, Footer } from './components';

const App = ({ i }) => {
  return (
    <div>
      <Header names={nameGroup} />
      <Main data={dataBirds[i]} />
      <Footer />
    </div>
  );
};

ReactDOM.render(<App i={0} />, document.getElementById('root'));

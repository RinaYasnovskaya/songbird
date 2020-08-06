import React from 'react';

import { GameBlock } from './gameBlock/gameBlock';
import { TwoBlocks } from './twoBlocks/TwoBlocks';

export const Main = ({ data }) => {
  const item = Math.floor(Math.random() * 6) + 1;
  const randomBird = data[item];
  return (
    <div>
      <GameBlock dataBird={randomBird} />
      <TwoBlocks dataBird={data} />
    </div>
  );
};

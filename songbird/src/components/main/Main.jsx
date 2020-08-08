import React from 'react';

import { GameBlock } from './gameBlock/gameBlock';
import { TwoBlocks } from './twoBlocks/TwoBlocks';

export const Main = ({ data, onBirdSelected, selectedBird, doneGame }) => {
  const item = Math.floor(Math.random() * 6);
  const randomBird = data[item];
  return (
    <div>
      <GameBlock dataBird={randomBird} done={doneGame} />
      <TwoBlocks dataBird={data} selectBirdFunc={onBirdSelected} selectedBirdId={selectedBird} />
    </div>
  );
};

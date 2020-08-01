import React from 'react';

import { GameBlock } from './gameBlock/gameBlock';
import { TwoBlocks } from './twoBlocks/TwoBlocks';

export const Main = () => {
  return (
    <div>
      <GameBlock />
      <TwoBlocks />
    </div>
  );
};

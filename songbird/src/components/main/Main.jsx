import React from 'react';

import { GameBlock } from './gameBlock/gameBlock';
import { TwoBlocks } from './twoBlocks/TwoBlocks';

export const Main = ({ data }) => {
  return (
    <div>
      <GameBlock dataBird={data} />
      <TwoBlocks dataBird={data} />
    </div>
  );
};

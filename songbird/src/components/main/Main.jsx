import React from 'react';

import { GameBlock } from './gameBlock/gameBlock';
import { TwoBlocks } from './twoBlocks/TwoBlocks';

export const Main = ({
  data,
  onBirdSelected,
  selectedBird,
  doneGameRound,
  birdIndexNow,
  thisGroup,
}) => {
  return (
    <div>
      <GameBlock dataBird={data[birdIndexNow]} done={doneGameRound} />
      <TwoBlocks
        dataBird={data}
        selectBirdFunc={onBirdSelected}
        selectedBirdId={selectedBird}
        thisGroup={thisGroup}
      />
    </div>
  );
};

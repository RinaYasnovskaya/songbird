import React from 'react';

import { GameBlock } from './gameBlock/gameBlock';
import { TwoBlocks } from './twoBlocks/TwoBlocks';

export const Main = ({
  data,
  onBirdSelected,
  selectedBird,
  doneGameRound,
  birdIndexNow,
  doneRound,
  count,
  countFunc,
}) => {
  return (
    <div>
      <GameBlock dataBird={data[birdIndexNow]} done={doneGameRound} />
      <TwoBlocks
        dataBird={data}
        selectBirdFunc={onBirdSelected}
        selectedBirdId={selectedBird}
        birdIndex={birdIndexNow}
        doDoneRound={doneRound}
        done={doneGameRound}
        count={count}
        countFunc={countFunc}
      />
    </div>
  );
};

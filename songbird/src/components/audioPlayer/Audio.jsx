import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';

export const Audio = ({ url }) => (
  <AudioPlayer showJumpControls={false} autoPlayAfterSrcChange={false} src={url} />
);

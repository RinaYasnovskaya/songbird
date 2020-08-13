import React from 'react';
import AudioPlayer from 'react-h5-audio-player';

export const Audio = ({ url }) => <AudioPlayer autoPlay src={url} />;

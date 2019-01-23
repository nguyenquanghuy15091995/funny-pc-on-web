import React from 'react';

import PaperIcon from 'icons/Paper';
import GameJoy from 'icons/GameJoy';

export const SOFTWARE_LIST = {
  TEXT_EDITOR: { id: 1, name: 'Text Editor', icon: <PaperIcon color="#FFF" size={50} /> },
  GAME: { id: 2, name: 'Game', icon: <GameJoy color="#FFF" size={50} /> },
  ARRAY: [
    { id: 1, name: 'Text Editor', icon: <PaperIcon color="#FFF" size={50} /> },
    { id: 2, name: 'Game', icon: <GameJoy color="#FFF" size={50} /> },
  ],
}

const PREFIX = 'software';

export const OPEN_SOFTWARE = `${PREFIX}/OPEN_SOFTWARE`;
export const CLOSE_SOFTWARE = `${PREFIX}/CLOSE_SOFTWARE`;

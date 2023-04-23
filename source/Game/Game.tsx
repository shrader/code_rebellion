// load or create user
// load saved game or start new game
// game - load curent challenge

// import React from 'react';
import {useApp, useInput} from 'ink';

const { exit } = useApp();
  useInput((_input, key) => {
    if (key.escape) {
      exit();
    }
  });

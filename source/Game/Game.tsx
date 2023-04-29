import React, { useState, useEffect } from 'react';
import {Text, Box} from 'ink';
import BigText from 'ink-big-text';

import { getUserdata, saveUserData } from '../User/User.js';
import ObjectDisplay from '../ComponentLibrary/ObjectDisplay.js'; 
import { InputPrompt } from '../ComponentLibrary/InputPrompt.js';

interface GameProps {
  storyPlaythrough: boolean;
}

export interface UserData {
  username:string;
  newUser:boolean;
  challenges:{
    lastChallengeCompleted:string;
    challengesCompleted:[];
    challengesUnlocked:[];
    currentChallenge:string;
    currentChallengeSection:string;
  };
  achievements:{
    achievementsCompleted:{};
    achievementsUnlocked:{};
  };
  editorPreference:string;
}

export interface UpdateUserDataParams {
  key: keyof UserData;
  value: UserData[keyof UserData];
}

/**
 * Updates the user data object with the new data
 * @param newData - the new data to be updated on the user data object, contains the key to update on the user data object and the value to update it with
 * @param setUserData - the React setter function for the user data object
 * @returns void
 */
function updateUserData(newData: UpdateUserDataParams, setUserData: React.Dispatch<React.SetStateAction<UserData>>) {
  // We only change username if it's a new user, so also set newUser to false
  if (newData.key === 'username') {
    setUserData(prevData => ({
      ...prevData,
      'newUser': false,
      'username': newData.value as string
    }));
  } else {
    // Otherwise, just update this particular key/value pair
    setUserData(prevData => ({
      ...prevData,
      [newData.key]: newData.value
    }));
  }
}

export default function Game({storyPlaythrough}: GameProps) { 
  const [userData, setUserData] = useState<UserData>(getUserdata());
  // const [prompt, setPrompt] = useState<string>('');

  useEffect(() => {
    // This will be called whenever userData changes
    saveUserData(userData);
  }, [userData]);

  // If user chose to skip the story, go straight to the challenges
  if (!storyPlaythrough) {
    // TODO: add a way to skip the story and go straight to the challenges
    return(
    <Box borderStyle="round" flexDirection="column">
      <Text>You chose not to play through the story!</Text>
    </Box>
    );
  }
  
  // unlock first challenge ... now I think I want this to be unlocked by defualt
  // set userData.challenges.currentChallenge to first challenge
  // set userData.challenges.currentChallengeSection to first challenge section
  // load first challenge section
  if (userData.newUser) {
    return(
      <InputPrompt prompt="What is your name?" updateFunc={updateUserData} updateKey='username' setter={setUserData} /> 
    );
  } else {
    return (
      <>
        <BigText text='welcome to' font='simple3d' align='center' colors={['white', 'white']} backgroundColor='transparent'/>
		    <Box borderStyle="round" flexDirection="column">
			    <BigText text="Code" colors={['#ff2500', 'gray']} font='3d' align='center'/>
			    <BigText text="Rebellion" colors={['#ff2500', 'gray']} font='3d' align='center'/>
		    </Box>
        <ObjectDisplay data={userData} />
      </>
    );
  }
}

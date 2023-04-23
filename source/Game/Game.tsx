import React, { useState } from 'react';
import {Text, Box} from 'ink';
import BigText from 'ink-big-text';

import { getUserdata } from '../User/User.js';
// import ObjectDisplay from '../ComponentLibrary/ObjectDisplay.js'; 
import { InputPrompt } from '../ComponentLibrary/InputPrompt.js';

interface GameProps {
  storyPlaythrough: boolean;
}

interface UserData {
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

interface UpdateUserDataParams {
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
  setUserData(prevData => ({
    ...prevData,
    [newData.key]: newData.value
  }));
}

export default function Game({storyPlaythrough}: GameProps) { 
  const [userData, setUserData] = useState<UserData>(getUserdata());

  // If user chose to skip the story, go straight to the challenges
  if (!storyPlaythrough) {
    // TODO: add a way to skip the story and go straight to the challenges
    return(
    <Box borderStyle="round" flexDirection="column">
      <Text>You chose not to play through the story!</Text>
    </Box>
    );
  }
  
  // get name and save to userData
  // set userData.newUser to false
  // unlock first challenge
  // set userData.challenges.currentChallenge to first challenge
  // set userData.challenges.currentChallengeSection to first challenge section
  // load first challenge section
  // TODO: InputPrompt leaves the prompt open after submitting, need to figure out how to close it
  if (userData.newUser) {
   return(
    <>
     <BigText text={userData.username} colors={['#ff2500', 'gray']} font='3d' align='center'/>
     <InputPrompt prompt="What is your name?" updateFunc={updateUserData} updateKey='username' setter={setUserData} /> 
    </>
  );
  } else {
    return (
      <BigText text='Welcome back!' colors={['#ff2500', 'gray']} font='3d' align='center'/>
    );
  }
}

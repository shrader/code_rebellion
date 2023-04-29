import React, { useState } from 'react';
import { Text } from 'ink';
import TextInput from 'ink-text-input';

import { UpdateUserDataParams, UserData } from '../Game/Game.js';

export const InputPrompt = ({prompt, updateFunc, updateKey, setter}: {
  prompt: string,
  updateFunc: (newData: UpdateUserDataParams, setUserData:React.Dispatch<React.SetStateAction<UserData>>) => void,
  updateKey: keyof UserData,
  setter: React.Dispatch<React.SetStateAction<UserData>> 
}) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = () => {
    // save input value to state setter 
    updateFunc({key: updateKey, value: inputValue}, setter);
    // clear input value
    setInputValue('');
  };

  return (
    <>
      <Text>{prompt}</Text>
      <TextInput
        value={inputValue}
        onChange={setInputValue}
        onSubmit={handleSubmit}
      />
    </>
  );
};

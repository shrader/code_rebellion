import React, { useState } from 'react';
import { Text } from 'ink';
import TextInput from 'ink-text-input';

// interface InputPromptProps<T> {
//   prompt: string;
//   setter: React.Dispatch<React.SetStateAction<T>>;
// }

// interface Props<T> {
//   // Pass the generic type parameter to the InputPromptProps
//   inputPromptProps: InputPromptProps<T>;
// }

export const InputPrompt = ({prompt, updateFunc, updateKey, setter}: any) => { // TODO: fix type
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = () => {
    // save input value to state setter in component that called InputPrompt
    updateFunc({key: updateKey, value: inputValue}, setter);
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

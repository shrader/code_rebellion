import React from 'react';
import { Box, Text } from 'ink';

interface ObjectDisplayProps {
  data: { [key: string]: any };
  indentation?: number;
}

/**
 * Displays an objects even if it has nested objects, and tries to indent them for easier reading
 * Used for debugging
 */
const ObjectDisplay: React.FC<ObjectDisplayProps> = ({ data, indentation = 0 }) => {
  return (
    <Box flexDirection="column">
      {Object.entries(data).map(([key, value]) => (
        <Box key={key} paddingLeft={indentation}>
          {typeof value === 'object' && value !== null ? (
            <>
              <Text bold>{key}:</Text>
              <ObjectDisplay data={value} indentation={indentation + 2} />
            </>
          ) : (
            <Text>
              <Text bold>{key}:</Text> {value}
            </Text>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default ObjectDisplay;
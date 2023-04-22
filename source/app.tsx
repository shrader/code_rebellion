import React from 'react';
import {Text} from 'ink';
import BigText from 'ink-big-text';

type Props = {
	name: string | undefined;
};

export default function App({name = 'Stranger'}: Props) {
	return (
		<>
		<Text>
			Hello, <Text color="green">{name}</Text> welcome to:
		</Text>
		<BigText text="Code" colors={['#ff2500', 'gray']} font='3d'/>
		<BigText text="Rebellion" colors={['#ff2500', 'gray']} font='3d'/>
		</>
	);
}

import React from 'react';
import {Text, Box} from 'ink';
import BigText from 'ink-big-text';

import { getUserdata } from './User/User.js';
import ObjectDisplay from './ComponentLibrary/ObjectDisplay.js'; 

type Props = {
	name: string | undefined;
};

export default function App({name = 'Stranger'}: Props) {
	const welcomeText = `${name} welcome to`;
	return (
		<>
		<BigText text={welcomeText} font='simple3d' align='center' colors={['white', 'white']} backgroundColor='transparent'/>
		<Box borderStyle="round" flexDirection="column">
			<BigText text="Code" colors={['#ff2500', 'gray']} font='3d' align='center'/>
			<BigText text="Rebellion" colors={['#ff2500', 'gray']} font='3d' align='center'/>
		</Box>
		<ObjectDisplay data={getUserdata()}/>
		<Text>
			Need a line break here::::::
		</Text>
		</>
	);
}

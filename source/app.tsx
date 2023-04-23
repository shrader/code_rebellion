import React from 'react';

import Game from './Game/Game.js';

type Props = {
	flags: {
		story	: boolean;
	}
};

export default function App({flags}: Props) {
	return (
		<Game storyPlaythrough={flags.story}/>
	);
}

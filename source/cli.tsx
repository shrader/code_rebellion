#!/usr/bin/env node
import React from 'react';
import {render} from 'ink';
import meow from 'meow';
import App from './app.js';

/**
 * Future usage (outline how I want it to be)
 * 
 * 	Usage
	  $ code_rebellion

	Options
		--name  Your name // need to add check to avoid duplicates once used for save files
		-save (saves progress for current user)
		--load user name  

 */

const cli = meow(
	`
	Usage
	  $ code_rebellion

	Options
		--no-story	Skips the story and goes straight to the challenges

	Examples
	  $ code_rebellion --no-story
	  Select a challenge:
`,
	{
		importMeta: import.meta,
		flags: {
			story: {
				type: 'boolean',
				default: true,
			},
		},
	},
);

render(<App flags={cli.flags} />);

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

	Examples
	  $ code_rebellion --name=Jane
	  Hello, Jane
 */

const cli = meow(
	`
	Usage
	  $ code_rebellion

	Options
		--name  Your name

	Examples
	  $ code_rebellion --name=Jane
	  Hello, Jane
`,
	{
		importMeta: import.meta,
		flags: {
			name: {
				type: 'string',
			},
		},
	},
);

render(<App name={cli.flags.name} />);

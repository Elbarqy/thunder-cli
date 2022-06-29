#!/usr/bin/env node

/**
 * thunder-cli
 * Get available options in the cli
 *
 * @author Elbarqy <https://linkedin.com/in/elbarqy/>
 */
const cli = require('./utils/cli');
const init = require('./utils/init');
const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;
import { initProject } from './generator/initProject';
import { commandGenerator } from './generator/command.generate';
(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);
	if (input.length > 0) {
		console.log('EVENT DRIVEN ARCHTICTURE');
		switch (input[0]) {
			case 'init':
				initProject();
				break;
			case 'command':
				if(input.length < 2)
					throw new Error("Missing command name")
				commandGenerator(input[1],flags.withHandler)
				break;
			default:
				console.log('type help to display options');
				break;
		}
	}
	// debug && log(flags);
})();

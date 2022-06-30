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
import { entityGenerator } from './generator/command.generate';
import { CREATION_OPTIONS } from './utils/constants/enums';
(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);
	if (input.length > 0) {
		switch (input[0]) {
			case 'init':
				initProject();
				break;
			default:
				if (input.length < 2) throw new Error('Missing command name');
				console.log(input);
				if (CREATION_OPTIONS.includes(input[0])) {
					entityGenerator(input[1], input[0], flags.withHandler);
				} else {
					throw new Error(
						'No such command is found, type help for more info'
					);
				}
				break;
		}
	}
	// debug && log(flags);
})();

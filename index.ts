#!/usr/bin/env node

/**
 * thunder-cli
 * Get available options in the cli
 *
 * @author Elbarqy <https://linkedin.com/in/elbarqy/>
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');
const { initProject } = require('./generator/initProject');

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);
	if (input.length > 0) {
		console.log('EVENT DRIVEN ARCHTICTURE');
		switch (input[0]) {
			case 'init':
				initProject();
				break;
			case '':
				break;
			case '':
				break;
			case '':
				break;
			default:
				console.log('type help to display options');
				break;
		}
	}
	debug && log(flags);
})();

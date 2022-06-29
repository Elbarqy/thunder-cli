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

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);
	console.log(input)
	debug && log(flags);
})();

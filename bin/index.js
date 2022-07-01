#!/usr/bin/env node
const argv = require('yargs').argv;
const { initProject } = require('../lib/core/initProject');
const { entityGenerator } = require('../lib/core/entity.generator');
const { CREATION_OPTIONS } = require('../lib/global/enums');
if (argv._.length > 0) {
	switch (argv._[0]) {
		case 'init':
			initProject();
			break;
		default:
			if (argv._.length < 2) throw new Error('Missing command name');
			if (Array.from(CREATION_OPTIONS).includes(argv._[0])) {
				entityGenerator(
					argv._[1][0].toUpperCase() + argv._[1].slice(1),
					argv._[0],
					true
				);
				console.log('done');
			} else {
				throw new Error(
					'No such command is found, type help for more info'
				);
			}
			break;
	}
}

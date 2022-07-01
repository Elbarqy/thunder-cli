const { generator } = require('../generators/generator');
const { generateFileParams } = require('../generators/param.generator');

const { initProject } = require('./initProject');

const entityGenerator = (command, type, withHandler = true) => {
	initProject();
	let structure = {};
	structure['src'] = generateFileParams(command, type);
	generator('', structure);
};

module.exports = { entityGenerator };

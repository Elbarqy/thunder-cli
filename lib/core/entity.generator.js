const { generator } = require('../generators/generator');
const { generateFileParams } = require('../generators/param.generator');

const { initProject } = require('./initProject');

const entityGenerator = (name, type, withHandler = true) => {
	initProject();
	let structure = {};
	structure['src'] = generateFileParams(name, type);
	generator('', structure);
};

module.exports = { entityGenerator };

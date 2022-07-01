const { generator } = require('../generators/generator');
const fs = require('fs');
const { EntityType } = require('../global/enums');

const initStructure = {
	src: {
		query: {},
		saga: {},
		command: {},
		event: {},
		shared: {
			files: [{ entityType: EntityType.index, type: 'shared' }]
		}
	}
};

const initProject = () => {
	generator('', initStructure);
};

module.exports = { initProject };

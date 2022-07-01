const { EntityType } = require('../../global/enums');
const { CRUD } = require('./utils');
const { generateCommandHandler } = require('./commandHandler');
const { generateEventHandler } = require('./eventHandler');
const { generateSagaHandler } = require('./sagaHandler');
const { generateEntityClass } = require('./classGeneration');
const generateFileContent = file => {
	let result = '';
	if (file.type === EntityType.handler) {
		switch (file.entityType) {
			case EntityType.command:
				result = generateCommandHandler(file.name);
				break;
			case EntityType.event:
				result = generateEventHandler(file.name);
				break;
			case EntityType.saga:
				result = generateSagaHandler(file.name);
				break;
			case EntityType.query:
				break;
		}
	} else {
		let classes = [];
		CRUD.map(event => {
			classes.push(
				generateEntityClass(file.entityName, event, file.entityType)
			);
		});
		result = classes.join('\n');
	}
	return result;
};

module.exports = { generateFileContent };

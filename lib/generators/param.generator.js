const { EntityType } = require('../global/enums');
// entityName product
// enitity type event - command - saga - query
const generateFileParams = (entityName, entityType) => {
	if (entityType == EntityType.index) {
		throw new Error('invalid index argumen');
	}
	let params = {};
	params[entityType] = {
		handlers: {
			[entityName]: {
				files: [
					{
						type: EntityType.handler,
						entityName: entityName + 'Handler',
						name: entityName,
						entityType
					}
				]
			}
		},
		files: [
			{
				entityName: entityType,
				entityType: EntityType.index,
				type: entityType
			}
		]
	};
	params[entityType][entityType + 's'] = {
		[entityName]: {
			files: [
				{ type: entityType, entityName, entityType, name: entityName }
			]
		}
	};
	return params;
};

module.exports = { generateFileParams };

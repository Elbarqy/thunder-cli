import { EntityType } from './../constants/enums';
export const generateFileParams = (
	entityName: string,
	entityType: EntityType
) => {
	if (entityType == EntityType.index) {
		throw new Error('invalid index argumen');
	}
	let params = {};
	params[entityType] = {
		handlers: {
			files: [
				{ entityType: EntityType.index },
				{
					type: EntityType.handler,
					entityType: entityType,
					entityName
				}
			]
		}
	};
	params[entityType][entityType + 's'] = {
		files: [
			{ entityType: EntityType.index },
			{
				type: entityType,
				entityType: entityType,
				entityName
			}
		]
	};
	return params;
};

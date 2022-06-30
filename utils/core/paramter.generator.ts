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
			files: [{ entityType: EntityType.index, type: entityType }],
			[entityName]: {
				files: [
					{ entityType: EntityType.index },
					...generateCrud(entityName, entityType, EntityType.handler)
				]
			}
		}
	};
	params[entityType][entityType + 's'] = {
		files: [{ entityType: EntityType.index }],
		[entityName]: {
			files: [
				{ entityType: EntityType.index },
				...generateCrud(entityName, entityType, entityType)
			]
		}
	};
	return params;
};

const generateCrud = (entityName, entityType, type) => {
	const crud = ['create', 'read', 'remove', 'update'];
	let files = [];
	crud.map(event => {
		files.push({
			type: type,
			entityType: entityType,
			entityName: event + entityName
		});
	});
	return files;
};

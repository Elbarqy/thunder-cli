const CRUD = ['Create', 'Read', 'Remove', 'Update'];
const generateCrud = (entityName, entityType, type) => {
	let files = [];
	CRUD.map(event => {
		files.push({
			type: type,
			entityType: entityType,
			entityName: event + entityName,
			action: event,
			name: entityName
		});
	});
	return files;
};

const capitalizeFirst = myStr => myStr[0].toUpperCase() + myStr.slice(1);
module.exports = { generateCrud, CRUD, capitalizeFirst };

const { capitalizeFirst } = require('./utils');
const generateEntityClass = (name, type, entityType) => {
	return `
    export class ${capitalizeFirst(type)}${name}${capitalizeFirst(entityType)} {
        constructor() {}
    }
`;
};
module.exports = { generateEntityClass };

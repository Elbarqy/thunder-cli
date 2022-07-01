const { CRUD, capitalizeFirst } = require('./utils');
const generateEventHandler = name => {
	const imports = `
    import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
    import {Create${name}Event, Read${name}Event, Remove${name}Event,Update${name}Event} from '../../Events/${name}/${name}.event'
    `;
	let handlers = [];
	CRUD.map(event => {
		const handlerName = `${capitalizeFirst(name)}${capitalizeFirst(event)}`;

		handlers.push(`
@EventsHandler(${handlerName}Event)
export class ${handlerName}Handler
	implements IEventHandler<${handlerName}Event>
{
	constructor() {}
	handle(event: ${handlerName}Event) {
	console.log('${handlerName}Event');
	}
}
    `);
	});

	return imports + handlers.join('\n');
};

module.exports = { generateEventHandler };

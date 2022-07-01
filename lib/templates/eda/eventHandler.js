const { CRUD } = require('./utils');
const generateCommandHandler = name => {
	const imports = `
    import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
    import {Create${name}Command, Read${name}Command, Delete${name}Command,Update${name}Command} from '../../commands/${name}/${name}.command'
    `;
	let handlers = [];
	CRUD.map(event => {
		const handlerName = `${event}${
			name[0].toUpperCase() + name.slice(1)
		}Command`;
		handlers.push(`
@CommandHandler(${handlerName}Command)
export class ${handlerName}Handler implements ICommandHandler<${handlerName}Command> {
    constructor(private publisher: EventPublisher) {}
    async execute(command: ${handlerName}Command): Promise<any> {}
}  
    `);
	});

	return imports + handlers.join('\n');
};

module.exports = { generateCommandHandler };

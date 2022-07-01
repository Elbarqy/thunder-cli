const { CRUD, capitalizeFirst } = require('./utils');
const generateSagaHandler = name => {
	const imports = `
import { Injectable } from '@nestjs/common';
import { ICommand, ofType, Saga } from '@nestjs/cqrs';
import { map, Observable } from 'rxjs';
    `;
	let eventImports = [];
	let handlers = [];
	handlers.push(`
@Injectable()
export class ${name}Saga {
    `);
	CRUD.map(event => {
		const handlerName = `${capitalizeFirst(name)}${event}`;
		eventImports.push(`
import {${handlerName}Event} from "../../events/events/${handlerName}.event"
`);
		handlers.push(`
@Saga()
${handlerName} = (event$: Observable<any>): Observable<any> => {
return event$.pipe(
    ofType(${handlerName}Event),
    map((event) => {
    console.log('heared an event ', event);
    }),
);
};
        `);
	});
	handlers.push(' }');

	return imports + eventImports.join('\n') + handlers.join('\n');
};

module.exports = { generateSagaHandler };

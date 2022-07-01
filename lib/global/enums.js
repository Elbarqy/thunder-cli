const EntityType = {
	event: 'event',
	command: 'command',
	saga: 'saga',
	query: 'query',
	index: 'index',
	handler: 'handler'
};
const CREATION_OPTIONS = ['event', 'command', 'saga', 'query'];

module.exports = { EntityType, CREATION_OPTIONS };

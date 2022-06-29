import { generator } from "../utils/core/generator";

const fs = require('fs');

const initStructure = {
	test: {
		query: {},
		saga: {},
		command: {},
		event: {}
	}
};

export const initProject = () => {
	generator('', initStructure);
};

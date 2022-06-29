import { EntityType } from './../utils/constants/enums';
import { generator } from '../utils/core/generator';

const fs = require('fs');

const initStructure = {
	src: {
		query: {},
		saga: {},
		command: {},
		event: {}
	}
};

export const initProject = () => {
	generator('', initStructure);
};

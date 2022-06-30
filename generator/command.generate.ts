import { generator } from './../utils/core/generator';
import { EntityType } from '../utils/constants/enums';
import { generateFileParams } from './../utils/core/paramter.generator';
import { initProject } from './initProject';
export const entityGenerator = (
	command: string,
	type: string,
	withHandler: boolean = true
) => {
	console.log( type as EntityType)
	initProject();
	let structure = {};
	structure['src'] = generateFileParams(command, type as EntityType);
	generator('', structure);
};

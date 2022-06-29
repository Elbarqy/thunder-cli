import { generator } from './../utils/core/generator';
import { EntityType } from '../utils/constants/enums';
import { generateFileParams } from './../utils/core/paramter.generator';
import { initProject } from './initProject';
export const commandGenerator = (
	command: string,
	withHandler: boolean = true
) => {
	initProject();
	let structure = {};
	structure['src'] = generateFileParams(command, EntityType.command);
	generator('', structure);
};

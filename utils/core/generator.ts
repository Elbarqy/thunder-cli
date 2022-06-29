import { EntityType } from './../constants/enums';
import * as fs from 'fs';

export const generator = (
	parent: string,
	structure: { [key: string]: any }
) => {
	Object.keys(structure).map(item => {
		if (item != 'files') {
			const path: string = `./${parent != '' ? parent + '/' : ''}${item}`;
			if (!fs.existsSync(path)) {
				fs.mkdirSync(path);
			}
			generator(parent + '/' + item, structure[item]);
		} else {
			console.log(structure[item]);
		}
	});
};

export const fileGenerator = (fileType: EntityType) => {};

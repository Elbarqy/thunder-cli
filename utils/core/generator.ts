import * as fs from 'fs';

export const generator = (
	parent: string,
	structure: { [key: string]: any }
) => {
	Object.keys(structure).map(item => {
		if (item != 'file') {
			const path: string = `./${parent != '' ? parent + '/' : ''}${item}`;
			if (!fs.existsSync(path)) {
				fs.mkdirSync(path);
			}
			generator(parent + item, structure[item]);
		}
	});
};

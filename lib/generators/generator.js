const fs = require('fs');
const { EntityType } = require('../global/enums');
const generator = (parent, structure) => {
	Object.keys(structure).map(item => {
		if (item != 'files') {
			const path = `./${parent != '' ? parent + '/' : ''}${item}`;
			if (!fs.existsSync(path)) {
				fs.mkdirSync(path);
			}
			generator(parent + '/' + item, structure[item]);
		} else {
			const path = `./${parent != '' ? parent + '/' : ''}`;
			structure[item].map(file => {
				if (file.entityType === EntityType.index) {
					fs.appendFile(
						`${path}${file.type}.module.ts`,
						'',
						() => {}
					);
				} else {
					fs.appendFile(
						`${path}${file.entityName}.${file.type}.ts`,
						'',
						() => {}
					);
				}
			});
		}
	});
};

module.exports = { generator };

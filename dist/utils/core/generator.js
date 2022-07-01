"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileGenerator = exports.generator = void 0;
var enums_1 = require("./../constants/enums");
var fs = require("fs");
var generator = function (parent, structure) {
    Object.keys(structure).map(function (item) {
        if (item != 'files') {
            var path = "./".concat(parent != '' ? parent + '/' : '').concat(item);
            if (!fs.existsSync(path)) {
                fs.mkdirSync(path);
            }
            (0, exports.generator)(parent + '/' + item, structure[item]);
        }
        else {
            var path_1 = "./".concat(parent != '' ? parent + '/' : '');
            structure[item].map(function (file) {
                if (file.entityType === enums_1.EntityType.index) {
                    fs.appendFile("".concat(path_1).concat(file.type, ".module.ts"), '', function () { });
                }
                else {
                    fs.appendFile("".concat(path_1).concat(file.entityName, ".").concat(file.type, ".ts"), '', function () { });
                }
            });
        }
    });
};
exports.generator = generator;
var fileGenerator = function (fileType) { };
exports.fileGenerator = fileGenerator;

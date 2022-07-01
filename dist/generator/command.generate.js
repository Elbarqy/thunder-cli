"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.entityGenerator = void 0;
var generator_1 = require("./../utils/core/generator");
var paramter_generator_1 = require("./../utils/core/paramter.generator");
var initProject_1 = require("./initProject");
var entityGenerator = function (command, type, withHandler) {
    if (withHandler === void 0) { withHandler = true; }
    console.log(type);
    (0, initProject_1.initProject)();
    var structure = {};
    structure['src'] = (0, paramter_generator_1.generateFileParams)(command, type);
    (0, generator_1.generator)('', structure);
};
exports.entityGenerator = entityGenerator;

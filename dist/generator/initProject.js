"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initProject = void 0;
var enums_1 = require("./../utils/constants/enums");
var generator_1 = require("../utils/core/generator");
var fs = require('fs');
var initStructure = {
    src: {
        query: {},
        saga: {},
        command: {},
        event: {},
        shared: {
            files: [{ entityType: enums_1.EntityType.index, type: 'shared' }]
        }
    }
};
var initProject = function () {
    (0, generator_1.generator)('', initStructure);
};
exports.initProject = initProject;

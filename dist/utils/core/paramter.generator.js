"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateFileParams = void 0;
var enums_1 = require("./../constants/enums");
var generateFileParams = function (entityName, entityType) {
    var _a, _b;
    if (entityType == enums_1.EntityType.index) {
        throw new Error('invalid index argumen');
    }
    var params = {};
    params[entityType] = {
        handlers: (_a = {
                files: [{ entityType: enums_1.EntityType.index, type: entityType }]
            },
            _a[entityName] = {
                files: __spreadArray([
                    { entityType: enums_1.EntityType.index }
                ], generateCrud(entityName, entityType, enums_1.EntityType.handler), true)
            },
            _a)
    };
    params[entityType][entityType + 's'] = (_b = {
            files: [{ entityType: enums_1.EntityType.index }]
        },
        _b[entityName] = {
            files: __spreadArray([
                { entityType: enums_1.EntityType.index }
            ], generateCrud(entityName, entityType, entityType), true)
        },
        _b);
    return params;
};
exports.generateFileParams = generateFileParams;
var generateCrud = function (entityName, entityType, type) {
    var crud = ['create', 'read', 'remove', 'update'];
    var files = [];
    crud.map(function (event) {
        files.push({
            type: type,
            entityType: entityType,
            entityName: event + entityName
        });
    });
    return files;
};

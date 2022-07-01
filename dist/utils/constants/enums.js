"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CREATION_OPTIONS = exports.EntityType = void 0;
var EntityType;
(function (EntityType) {
    EntityType["event"] = "event";
    EntityType["command"] = "command";
    EntityType["saga"] = "saga";
    EntityType["query"] = "query";
    EntityType["index"] = "index";
    EntityType["handler"] = "handler";
})(EntityType = exports.EntityType || (exports.EntityType = {}));
exports.CREATION_OPTIONS = ['event', 'command', 'saga', 'query'];

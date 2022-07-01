var welcome = require('cli-welcome');
var pkg = require('./../package.json');
var unhandled = require('cli-handle-unhandled');
module.exports = function (_a) {
    var _b = _a.clear, clear = _b === void 0 ? true : _b;
    unhandled();
    welcome({
        title: "booter-cli",
        tagLine: "by Elbarqy",
        description: pkg.description,
        version: pkg.version,
        bgColor: '#36BB09',
        color: '#000000',
        bold: true,
        clear: clear
    });
};

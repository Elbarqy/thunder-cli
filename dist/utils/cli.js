var meow = require('meow');
var meowHelp = require('cli-meow-help');
var flags = {
    clear: {
        type: "boolean",
        default: false,
        alias: "c",
        desc: "Clear the console"
    },
    noClear: {
        type: "boolean",
        default: false,
        desc: "Don't clear the console"
    },
    debug: {
        type: "boolean",
        default: false,
        alias: "d",
        desc: "Print debug info"
    },
    version: {
        type: "boolean",
        alias: "v",
        desc: "Print CLI version"
    },
    withHandlers: {
        type: 'boolean',
        alias: 'h',
        desc: 'generate entity with no handlers',
        default: true
    }
};
var commands = {
    help: { desc: "Print help info" }
};
var helpText = meowHelp({
    name: "help",
    flags: flags,
    commands: commands
});
var options = {
    inferType: true,
    description: false,
    hardRejection: false,
    flags: flags
};
module.exports = meow(helpText, options);

const hook = require('vue-node');
const { join } = require('path');

// Setup a fake browser environment
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

// Set up JS DOM
const dom = new JSDOM('<html><head><style></style></head><body></body></html>');
global.window = dom.window

global.document = dom.window.document;

global.navigator = {
    userAgent: 'node.js'
};

documentRef = document;

// Pass an absolute path to your webpack configuration to the hook function.
hook(join(__dirname, './webpack.config.js'));

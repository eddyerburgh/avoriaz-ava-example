const browserEnv = require('browser-env');
const hooks = require('require-extension-hooks');

// Setup a fake browser environment
browserEnv();

// Transpile .vue files
hooks('vue').plugin('vue').push();

// Transpile import/export statements as node STILL can't parse these
hooks(['vue', 'js']).push(function ({content, cancel}) {
  if (content.indexOf('export ') < 0 && content.indexOf('import ') < 0){
    return cancel();
  }

  content = content.replace(/export default/g, 'module.exports = ');
  content = content.replace(/export ([a-zA-Z0-9_]+) ([a-zA-Z0-9_]+) =/g, function(full, varType, varName){
    return varType + ' ' + varName + ' = module.exports.' + varName + ' = ';
  });
  content = content.replace(/export function (.+)?\(/g, function(full, name){
    return 'module.exports.' + name + ' = function ' + name + '(';
  });
  content = content.replace(/import (.+)? from '(.+)?'/g, function(full, varName, reqPath){
    if (varName.indexOf('*') > -1){
      let start = varName.indexOf('* as ') + '* as '.length;
      varName = varName.substr(start);
    }
    return 'var ' + varName + ' = require("' + reqPath + '")';
  });
  return content;
});

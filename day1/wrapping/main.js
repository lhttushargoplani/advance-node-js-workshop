let Module = require("module");
 
(function (moduleWrapCopy) {
 Module.wrap = function (script) {
  script = "console.log('modified the module wrapper function');" + script;
 
   return moduleWrapCopy(script);
 };
})(Module.wrap);
 
require("./module.js");
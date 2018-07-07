/**
 * 
 * @param {string} str 
 * @param {string} (vscode|sublimetext) editorTarget 
 */
/**
 * generate snippets from data from components.isml
 *
 * @param  {String} html
 * @return {object} instance of GeneratorSnippets
 */
function GeneratorSnippets(str, editorTarget) {
  this.stringIn = str;
  this.editorTarget = editorTarget || 'sublimetext';
  this.modules = [];
  this.templatesSnippets = {};

  this.prepareTemplatesSnippets();
  this.prepareData();
};

GeneratorSnippets.prototype.prepareTemplatesSnippets = function () {
  this.templatesSnippets.vscode = function name() {
    return function name(module) {
      var nameModule = module.name;
      var paramsMod = module.params;
      var params = [];

      for (var y = 0; y < paramsMod.length; y++) {
        var count = y + 1;
        params.push(`"${paramsMod[y]}=` + `\\\"$${count}\\\""`)
      }

      var prefix = nameModule;

      var paramsToTpl = params.join(', ')
var tpl = `
  "is${nameModule}": {
    "prefix": "${prefix}",
    "body": ["<is${nameModule}", ${paramsToTpl}, "/>"],
    "description": "is${nameModule}" 
  }`;

      return tpl;
    }
  }();

  this.templatesSnippets.sublimetext = function name() {

    return function (module) {
      var nameModule = module.name;
      var paramsMod = module.params;
      var params = [];

      for (var y = 0; y < paramsMod.length; y++) {
        params.push(paramsMod[y] + '="\\$\\{$' + (y + 1) + '\\}"')
      }
      var snippet = '<is' + nameModule + ' ' + params.join(' ') + '/>';

      var tpl = `
    <snippet>
      <content><![CDATA[
        ${snippet}
      ]]></content>
      <tabTrigger>is${nameModule}</tabTrigger>
    </snippet>`;

      return tpl;
    }
  }();
};

GeneratorSnippets.prototype.prepareData = function () {
  var regexQutes = /"/g;
  var strNoWhiteSpace = this.stringIn.replace(/[\s\r\n]/gmi, '');
  var regex = /(name="[a-z]+"[attribute="a-z-_\d]+)/gmi;
  var modules = strNoWhiteSpace.match(regex);

  for (var i = 0; i < modules.length; i++) {
    var currentModule = {
      name: '',
      params: []
    };
    var infosModule = modules[i].split('attribute')
    var nameModule = infosModule[0].replace('name=', '').replace(regexQutes, '');
    currentModule.name = nameModule;

    for (var y = 1; y < infosModule.length; y++) {
      var nameArg = infosModule[y].replace('=', '').replace(regexQutes, '')
      currentModule.params.push(nameArg)
    }
    this.modules.push(currentModule)
  }

};

GeneratorSnippets.prototype.generateSnippet = function (module) {
  var templateType = this.templatesSnippets[this.editorTarget] ? this.templatesSnippets[this.editorTarget] : () => { };
  return templateType(module)
};

GeneratorSnippets.prototype.generateAllSnippets = function (module) {
  var output;

  output = this.modules.map((curr) => this.generateSnippet(curr))

  return output;
};

module.exports = GeneratorSnippets;

const fs = require('fs');

/**
 * Constructor
 * @param {object} params
 * @exemple params = {
 *  modulesFilePath: '/path_to_file_modules.isml',
 *  editorTarget: 'vscode'  // ['vscode'|'sublimetext'],
 *  paths: {
 *    vscode: {
 *      outputpath: 'PERSONALIZED_PATH'
 *    },
 *    sublimetext: {
 *      outputpath: 'PERSONALIZED_PATH'
 *    }
 *  }
 * }
 * 
 * @returns object
 */
function GeneratorSnippets(params) {
  let paths;

  if (!params || params && !params.modulesFilePath) {
    console.error('params & params.modulesFilePath is mandatory!');
    return false;
  }

  this.stringIn = this.getData(params.modulesFilePath);
  this.editorTarget = params.editorTarget || 'vscode';
  this.modules = [];
  this.templatesSnippets = {};
  this.writters = {
    vscode: () => { console.log('template writter empty'); }
  };

  if (!params.paths) {
    paths = {};
    paths.vscode = {
      outputpath: process.cwd() + '/snippets/vscode/isml.json'
    };
    paths.sublimetext = {
      outputpath: process.cwd() + '/snippets/sublimetext/'
    };
  } else {
    paths = params.paths;
  }

  this.outputpath = paths[this.editorTarget] && paths[this.editorTarget].outputpath ?
    paths[this.editorTarget].outputpath
    :
    paths.vscode.outputpath;

  this.prepareWritter();
  this.prepareTemplatesSnippets();
  this.prepareData();

  return this;
}

GeneratorSnippets.prototype.prepareTemplatesSnippets = function () {

  this.templatesSnippets.vscode = function name() {
    return function name(module) {
      let paramsToTpl;
      let tpl;
      let nameModule = module.name;
      let paramsMod = module.params;
      let params = [];
      let prefix = nameModule;

      params = paramsMod.map((mod, index) => {
        let count = index + 1;
        return `"${mod}=` + `\\\"$${count}\\\""`;
      });

      paramsToTpl = params.join(', ')
      tpl = `
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
      let tpl;
      let snippet;
      let nameModule = module.name;
      let paramsMod = module.params;
      let params = [];

      params = paramsMod.map((param, index) => {
        return param + '="\\$\\{$' + (index + 1) + '\\}"'
      });

      snippet = '<is' + nameModule + ' ' + params.join(' ') + '/>';

      tpl = `
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

GeneratorSnippets.prototype.prepareWritter = function () {
  function vsCodeWritter() {
    this.writeSnippetFile(this.outputpath, '{\n' + this.generateAllSnippets().join(',\n') + '\n}' + '\n');
  }

  function sublimeTextWritter() {
    let pathbase = this.outputpath;

    this.modules.forEach(module => {
      let pathOutputFile = pathbase + 'is' + module.name + '.sublime-snippet';
      this.writeSnippetFile(pathOutputFile, this.generateSnippet(module));
    });
  }

  this.writters = {
    vscode: vsCodeWritter,
    sublimetext: sublimeTextWritter
  };

  // if the writter exist if not vscode is defautl
  this.writter = this.writters[this.editorTarget] ? this.writters[this.editorTarget] : this.writters.vscode;
};

GeneratorSnippets.prototype.getData = function (modulesFilePath) {
  let data = fs.readFileSync(modulesFilePath, 'utf8');

  return data;
};

GeneratorSnippets.prototype.prepareData = function () {
  let regexQutes = /"/g;
  let strNoWhiteSpace = this.stringIn.replace(/[\s\r\n]/gmi, '');
  let regex = /(name="[a-z]+"[attribute="a-z-_\d]+)/gmi;
  let modules = strNoWhiteSpace.match(regex);

  this.modules = modules.map(module => {
    let infosModule = module.split('attribute')
    let nameModule = infosModule[0].replace('name=', '').replace(regexQutes, '');
    let currentModule = {
      name: '',
      params: []
    };

    currentModule.name = nameModule;
    currentModule.params = infosModule.map(infoMod => {
      let nameArg = infoMod.replace('=', '').replace(regexQutes, '')
      return nameArg;
    });

    return currentModule;
  });
};

GeneratorSnippets.prototype.generateSnippet = function (module) {
  let templateType = this.templatesSnippets[this.editorTarget]
    ? this.templatesSnippets[this.editorTarget]
    :
    module => {
      console.log('Template undefined for ' + this.editorTarget, 'module name ' + module.name)
    };
  return templateType(module)
};

GeneratorSnippets.prototype.generateAllSnippets = function () {
  let output = [];
  output = this.modules.map(curr => this.generateSnippet(curr))

  return output;
};

GeneratorSnippets.prototype.writeSnippets = function () {
  this.writter();
};

/**
 * write file snippets
 * @param {pathSystem} targetPath 
 * @param {string} snippetsString 
 */
GeneratorSnippets.prototype.writeSnippetFile = function (targetPath, snippetsString) {
  fs.writeFile(targetPath, snippetsString, function (err) {
    if (err) throw err;

    let msgSaved = ' saved in next path ';
    let targetPathLength = targetPath.length;
    // ceil to avoid as decimal number
    let nbNeeds = Math.ceil((targetPathLength - msgSaved.length) / 2);
    let strSide = generateSuiteChars(nbNeeds + 1, '=');

    console.log(strSide + msgSaved.toUpperCase() + strSide);
    console.log(targetPath);
    console.log(generateSuiteChars(targetPathLength + 1, '='));
  });
};

module.exports = GeneratorSnippets;

// ==============================================================
// ============ HELPERS TO DISPLAY MESSAGE SAVED IN CONSOLE =====
// ==============================================================

/**
 * helper to generate a string with repeted char
 * @param {number} nb 
 * @param {string} char 
 */
function generateSuiteChars(nb, char) {
  try {
    return (new Array(nb).join(char))
  } catch (error) {
    console.log(nb, char)
    console.log(error);
    return '================================================';
  }
}
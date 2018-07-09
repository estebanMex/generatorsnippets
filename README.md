generatorsnippets
=========

A minimal node module providing utility methods to get data modules from definitions in modules.isml

## Installation

```shell
  npm install generatorsnippets --save
```

## Usage

```js
const Generatorsnippets = require('generatorsnippets');
const modulesFilePath = 'PATH_TO/cartridge/templates/default/util/modules.isml';

// Example 1
new Generatorsnippets({
    'modulesFilePath': modulesFilePath,
    'editorTarget': 'sublimetext',
    'paths': {
        'vscode': {
            outputpath:  process.cwd() + '/snippets/vscode/isml2.json'
        },
        'sublimetext': {
            // Target Directory, one file by snippet to be created
            outputpath:  process.cwd() + '/snippets/vscode/sublimetext/'
        }
    }
}).writeSnippets();

```

## Tests

```shell
   npm test
```

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

**0.1.0 Initial release**
  create module with methods `generateSnippet` `generateAllSnippets`
  add dummy unitaires tests 
  
    

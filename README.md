Scapegoat
=========

A minimal node module providing utility methods to get data modules from definitions in modules.isml

## Installation

```shell
  npm install generatorsnippets --save
```

## Usage

```js
  var Generatorsnippets =  require('generatorsnippets')
  // create a instances
  var generatorsnippets = Generatorsnippets(stringDataFromFileComponents)

  // generate an array with all snippets 
  var allSnippetsInArray = generatorsnippets.generateAllSnippets();

// generate only one snippet
  var dataFirstComponents = generatorsnippets.modules[0];
  var dataComponentsArray = generatorsnippets.generateSnippet(dataFirstComponents);
  console.log('html', html, 'escaped', escaped, 'unescaped', unescaped);
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
  
    

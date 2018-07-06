var chai = require('chai');
var expect = chai.expect;

var GeneratorSnippets = require('../index');
var dataMock = require('./mock');

// instance genetorSnippets
var generateSnippets = new GeneratorSnippets(dataMock);

describe('#generate snippets', function () {

  describe('#can get composants', function () {
    it('return a array', function () {
      expect(generateSnippets.generateAllSnippets()).to.be.array();
    });
  });

  describe('#can get snippet for diferents formats (vscode, sublimetext)', function () {

    it('return a snippet for vscode', function () {
      generateSnippets.editorTarget = 'vscode';
      console.log('      set generateSnippets.editorTarget = vscode')
      console.log(generateSnippets.generateAllSnippets()[0])
      expect([]).to.be.array();
    });

    it('return a snippet for sublimetext', function () {
      generateSnippets.editorTarget = 'sublimetext';
      console.log('      set generateSnippets.editorTarget = sublimetext')
      console.log(generateSnippets.generateAllSnippets()[0])
      expect([]).to.be.array();
    });
  });

});

var nx = require('next-js-core2');
require('../src/next-class2type');

test('nx.class2type', function() {
  var v1 = null;
  var v2 = undefined;
  var v3 = 'str';
  var v4 = 1.4;
  var v5 = 5;
  var v6 = true;
  var v7 = false;
  var v8 = new Date();
  var v9 = /test/g;
  var v10 = function() {};
  var v11 = {};
  var v12 = ['arr1'];
  var v13 = NaN;

  expect(nx.class2type(v1)).toBe('Null');
  expect(nx.class2type(v2)).toBe('Undefined');
  expect(nx.class2type(v3)).toBe('String');
  expect(nx.class2type(v4)).toBe('Number');
  expect(nx.class2type(v5)).toBe('Number');
  expect(nx.class2type(v6)).toBe('Boolean');
  expect(nx.class2type(v7)).toBe('Boolean');
  expect(nx.class2type(v8)).toBe('Date');
  expect(nx.class2type(v9)).toBe('RegExp');
  expect(nx.class2type(v10)).toBe('Function');
  expect(nx.class2type(v11)).toBe('Object');
  expect(nx.class2type(v12)).toBe('Array');
  expect(nx.class2type(v13)).toBe('NaN');
});

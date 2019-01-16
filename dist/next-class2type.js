(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var toStirng = Object.prototype.toString;
  var types = 'Boolean Number String Function Array Date RegExp Object Error'.split(' ');
  var class2type = {};
  var NULL = 'Null';
  var Undf = 'Undefined';
  var NAN = 'NaN';

  //populate class2type map:
  types.forEach(function(type) {
    class2type['[object ' + type + ']'] = type;
  });

  nx.class2type = function(inTarget) {
    if (inTarget === null) return NULL;
    if (inTarget === void 0) return Undf;
    if (inTarget !== inTarget) return NAN;
    return class2type[toStirng.call(inTarget)];
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.class2type;
  }
})();

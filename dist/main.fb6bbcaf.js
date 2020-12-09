// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/border.json":[function(require,module,exports) {
module.exports = [[151, 8], [39, 6], [86, 85], [119, 32], [115, 80], [130, 78], [43, 74], [152, 22], [142, 44], [8, 1], [154, 27], [101, 16], [60, 9], [150, 14], [116, 25], [102, 15], [78, 10], [31, 4], [47, 7], [140, 19], [3, 48], [106, 18], [63, 9], [22, 67], [53, 83], [145, 17], [119, 28], [141, 49], [3, 20], [138, 20], [67, 88], [98, 85], [0, 36], [45, 7], [143, 48], [152, 24], [78, 92], [74, 10], [1, 37], [69, 9], [37, 75], [64, 84], [98, 18], [104, 32], [70, 10], [113, 80], [136, 65], [137, 94], [14, 0], [131, 71], [111, 80], [65, 9], [144, 46], [139, 61], [77, 98], [133, 27], [73, 97], [11, 60], [44, 7], [91, 84], [8, 8], [106, 23], [134, 86], [147, 17], [7, 12], [24, 69], [2, 26], [10, 59], [4, 19], [137, 25], [88, 11], [2, 44], [143, 52], [126, 83], [40, 6], [109, 26], [97, 19], [110, 17], [87, 11], [22, 68], [124, 35], [130, 74], [120, 81], [116, 80], [2, 28], [67, 9], [10, 2], [130, 73], [133, 95], [49, 76], [113, 21], [94, 16], [151, 10], [159, 13], [69, 92], [1, 32], [148, 31], [107, 81], [103, 17], [143, 47], [141, 18], [29, 72], [6, 56], [50, 77], [116, 23], [143, 18], [104, 82], [76, 99], [14, 65], [107, 20], [140, 45], [118, 82], [119, 82], [102, 16], [144, 18], [103, 82], [25, 3], [71, 96], [143, 45], [0, 31], [144, 44], [157, 10], [98, 13], [145, 36], [152, 7], [35, 5], [82, 88], [119, 29], [60, 83], [156, 9], [105, 18], [98, 86], [105, 33], [74, 98], [125, 82], [104, 31], [18, 66], [123, 36], [155, 17], [128, 88], [77, 97], [0, 30], [110, 19], [69, 91], [112, 19], [135, 87], [134, 85], [153, 28], [2, 23], [108, 19], [82, 10], [72, 10], [8, 57], [64, 9], [144, 40], [152, 25], [20, 66], [8, 4], [132, 83], [135, 88], [142, 41], [62, 9], [151, 13], [78, 94], [139, 62], [57, 86], [109, 30], [149, 33], [83, 87], [106, 37], [137, 95], [105, 22], [154, 28], [131, 27], [108, 80], [109, 25], [116, 28], [134, 27], [79, 10], [3, 21], [130, 76], [26, 3], [147, 34], [81, 10], [26, 70], [137, 63], [148, 33], [105, 21], [7, 13], [35, 74], [155, 18], [105, 27], [33, 74], [102, 83], [106, 24], [44, 74], [152, 23], [105, 29], [3, 45], [96, 14], [144, 43], [116, 22], [96, 85], [63, 83], [105, 86], [52, 79], [109, 35], [159, 15], [142, 18], [114, 80], [89, 11], [154, 19], [134, 96], [146, 34], [5, 16], [128, 87], [121, 36], [53, 8], [5, 17], [111, 17], [77, 95], [132, 82], [94, 18], [136, 64], [130, 77], [70, 94], [1, 38], [143, 46], [136, 97], [48, 75], [104, 86], [17, 1], [143, 58], [130, 79], [70, 93], [6, 14], [152, 6], [41, 6], [110, 34], [110, 33], [5, 54], [94, 15], [128, 86], [144, 55], [110, 80], [4, 46], [131, 80], [158, 11], [107, 37], [149, 15], [138, 62], [110, 24], [151, 11], [37, 5], [92, 84], [43, 7], [32, 74], [116, 24], [145, 38], [105, 26], [135, 67], [31, 73], [66, 86], [14, 63], [53, 81], [136, 90], [115, 26], [109, 19], [91, 12], [99, 86], [84, 9], [118, 36], [111, 22], [46, 7], [156, 16], [119, 36], [130, 75], [7, 11], [127, 33], [56, 8], [95, 12], [93, 84], [9, 58], [48, 7], [75, 99], [15, 66], [54, 8], [105, 35], [28, 4], [125, 34], [13, 62], [151, 9], [76, 10], [109, 29], [66, 87], [80, 90], [47, 74], [87, 85], [13, 4], [95, 85], [89, 84], [81, 89], [46, 74], [115, 19], [4, 18], [114, 21], [23, 3], [130, 30], [119, 27], [68, 9], [23, 68], [96, 18], [137, 96], [6, 15], [58, 9], [29, 4], [8, 5], [110, 32], [5, 55], [144, 53], [4, 49], [144, 45], [130, 93], [57, 9], [147, 32], [152, 21], [58, 85], [155, 28], [36, 74], [158, 12], [141, 50], [106, 81], [132, 27], [144, 47], [136, 26], [104, 28], [126, 34], [62, 83], [59, 9], [40, 75], [19, 2], [2, 41], [75, 10], [2, 39], [54, 84], [105, 36], [144, 54], [140, 46], [120, 36], [38, 75], [9, 9], [105, 34], [113, 18], [115, 27], [77, 96], [94, 84], [97, 84], [155, 6], [36, 5], [5, 53], [8, 10], [59, 84], [8, 2], [154, 5], [122, 36], [118, 26], [11, 3], [103, 84], [2, 22], [71, 95], [153, 19], [156, 8], [135, 27], [8, 3], [77, 10], [121, 80], [157, 16], [105, 30], [2, 40], [132, 95], [120, 31], [136, 89], [88, 84], [128, 89], [2, 25], [120, 30], [83, 10], [68, 90], [1, 33], [99, 17], [115, 21], [97, 13], [22, 2], [105, 81], [55, 85], [61, 83], [93, 17], [123, 80], [38, 6], [53, 82], [84, 87], [92, 12], [9, 6], [143, 56], [34, 5], [1, 29], [132, 70], [12, 61], [137, 91], [141, 43], [24, 3], [15, 0], [2, 24], [141, 59], [80, 10], [33, 5], [111, 19], [12, 1], [0, 35], [117, 81], [110, 31], [30, 4], [7, 56], [90, 11], [146, 17], [114, 19], [133, 84], [2, 42], [142, 59], [152, 20], [73, 10], [134, 68], [118, 33], [42, 74], [102, 85], [86, 11], [108, 17], [16, 66], [150, 30], [135, 97], [104, 17], [112, 80], [158, 15], [45, 74], [137, 93], [103, 86], [4, 51], [71, 97], [122, 80], [18, 1], [93, 13], [56, 85], [137, 92], [112, 18], [95, 14], [128, 85], [129, 31], [149, 16], [104, 85], [149, 31], [135, 66], [61, 9], [148, 17], [52, 8], [142, 51], [13, 2], [145, 34], [128, 32], [142, 57], [127, 84], [25, 70], [28, 71], [124, 81], [21, 66], [1, 34], [112, 21], [3, 47], [143, 42], [110, 23], [131, 29], [16, 0], [65, 85], [138, 21], [156, 10], [71, 10], [117, 35], [129, 91], [13, 1], [95, 18], [78, 93], [105, 25], [145, 37], [34, 74], [130, 92], [9, 2], [2, 27], [153, 6], [159, 14], [14, 3], [20, 2], [130, 28], [94, 13], [100, 86], [39, 75], [131, 93], [5, 52], [21, 2], [77, 99], [151, 30], [109, 36], [19, 66], [109, 80], [152, 29], [109, 28], [109, 27], [49, 8], [51, 8], [100, 17], [2, 43], [137, 24], [4, 50], [137, 23], [113, 19], [151, 12], [140, 60], [139, 19], [145, 39], [8, 7], [32, 4], [143, 40], [72, 97], [130, 72], [27, 71], [144, 34], [108, 37], [41, 75], [67, 89], [50, 8], [79, 91], [128, 90], [106, 20], [141, 47], [130, 27], [42, 7], [117, 27], [118, 34], [137, 22], [141, 48], [107, 18], [27, 4], [131, 81], [55, 8], [133, 69], [140, 44], [101, 85], [30, 73], [143, 51], [153, 26], [144, 35], [53, 80], [12, 4], [90, 84], [14, 64], [51, 78], [85, 86], [66, 9], [17, 66], [96, 13], [109, 17], [156, 7], [132, 94], [85, 10]];
;
},{}],"js/bitmap.json":[function(require,module,exports) {
module.exports = // prettier-ignore
[[null, null, null, null, null, null, null, null, null, null, null, null, null, null, "WA", "WA", "WA", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, "WA", null, null, null, "WA", "WA", "WA", "WA", "WA", "WA", "WA", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, "WA", "WA", "WA", null, null, "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, "WA", "WA", "WA", "WA", null, null, "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "ID", "ID", "ID", "MT", "MT", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "ID", "ID", "ID", "MT", "MT", "MT", "MT", "MT", "MT", "MT", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "ME", null, null, null, null, null], [null, null, null, null, null, null, null, null, null, "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "ID", "ID", "ID", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "ME", "ME", "ME", "ME", null, null, null, null], [null, null, null, null, null, null, null, null, "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "ID", "ID", "ID", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "ME", "ME", "ME", "ME", "ME", null, null, null], [null, null, null, null, null, null, null, null, "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "ID", "ID", "ID", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "ME", "ME", "ME", "ME", "ME", "ME", null, null, null], [null, null, null, null, null, null, null, null, null, "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "ID", "ID", "ID", "ID", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", null, null, null, null, null, null, null, null, null, null, null, null, null, null, "MN", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "ME", "ME", "ME", "ME", "ME", "ME", null, null, null], [null, null, null, null, null, null, null, null, "OR", "OR", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "ID", "ID", "ID", "ID", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "MN", "MN", "MN", "MN", "MN", "MN", "MN", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "ME", "ME", "ME", "ME", "ME", "ME", "ME", null, null], [null, null, null, null, null, null, null, "OR", "OR", "OR", "OR", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "ID", "ID", "ID", "ID", "ID", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "ME", "ME", "ME", "ME", "ME", "ME", "ME", "ME", null], [null, null, null, null, null, null, null, "OR", "OR", "OR", "OR", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "ID", "ID", "ID", "ID", "ID", "ID", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", null, null, "MN", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "ME", "ME", "ME", "ME", "ME", "ME", "ME", "ME", null], [null, null, null, null, null, null, null, "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "WA", "ID", "ID", "ID", "ID", "ID", "ID", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "ME", "ME", "ME", "ME", "ME", "ME", "ME", "ME", "ME"], [null, null, null, null, null, null, "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "WA", "WA", "ID", "ID", "ID", "ID", "ID", "ID", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "ME", "ME", "ME", "ME", "ME", "ME", "ME", "ME", "ME", "ME"], [null, null, null, null, null, null, "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "ID", "ID", "ID", "ID", "ID", "ID", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", null, null, null, null, null, null, null, "MI", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "VT", "ME", "ME", "ME", "ME", "ME", "ME", "ME", "ME", "ME", "ME"], [null, null, null, null, null, "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "ID", "ID", "ID", "ID", "ID", "ID", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", null, null, null, null, null, null, "MI", "MI", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "VT", "ME", "ME", "ME", "ME", "ME", "ME", "ME", "ME", null, null], [null, null, null, null, null, "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "ID", "ID", "ID", "ID", "ID", "ID", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", null, null, null, null, null, "MI", "MI", "MI", "MI", "MI", "MI", null, null, null, "MI", "MI", "MI", "MI", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "NH", "NH", "NH", "NH", "VT", "VT", "ME", "ME", "ME", "ME", "ME", null, null, null, null], [null, null, null, null, "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "WI", "WI", "WI", "WI", "WI", null, "MI", "MI", "MI", "MI", "MI", "MI", "MI", "MI", "MI", "MI", "MI", "MI", "MI", "MI", "MI", "MI", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "NY", "NY", "NY", "NH", "NH", "NH", "NH", "NH", "VT", "VT", "ME", "ME", "ME", "ME", "ME", null, null, null, null], [null, null, null, null, "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "WI", "WI", "WI", "WI", "WI", "WI", "MI", "MI", "MI", "MI", "MI", "MI", "MI", "MI", "MI", "MI", "MI", "MI", "MI", "MI", "MI", "MI", "MI", "MI", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "NY", "NY", "NY", "NY", "NY", "NH", "NH", "NH", "NH", "NH", "VT", "VT", "ME", "ME", "ME", "ME", null, null, null, null, null], [null, null, null, "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "WI", "WI", "WI", "WI", "WI", "WI", "WI", "WI", "WI", "WI", "MI", "MI", "MI", "MI", "MI", "MI", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "NY", "NY", "NY", "NY", "NY", "NY", "NY", "NH", "NH", "NH", "VT", "VT", "VT", "ME", "ME", null, null, null, null, null, null, null], [null, null, null, "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "ND", "ND", "ND", "ND", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "WI", "WI", "WI", "WI", "WI", "WI", "WI", "WI", "WI", "WI", "WI", "WI", "WI", "MI", "MI", null, null, null, null, null, null, "MI", "MI", "MI", "MI", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "NY", "NY", "NY", "NY", "NY", "NY", "NY", "NH", "NH", "NH", "VT", "VT", "VT", "VT", "ME", null, null, null, null, null, null, null], [null, null, "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "MT", "MT", "MT", "MT", "MT", "MT", "WY", "WY", "WY", "WY", "WY", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "MT", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "WI", "WI", "WI", "WI", "WI", "WI", "WI", "WI", "WI", "WI", "WI", "WI", "WI", "WI", "MI", null, null, null, null, null, "MI", "MI", "MI", "MI", "MI", "MI", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "NY", "NY", "NY", "NY", "NY", "NY", "NY", "NY", "NH", "NH", "NH", "VT", "VT", "VT", "VT", "VT", null, null, null, null, null, null, null], [null, null, "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "MT", "MT", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "MT", "MT", "MT", "MT", "MT", "MT", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "WI", "WI", "WI", "WI", "WI", "WI", "WI", "WI", "WI", "WI", "WI", "WI", "WI", "WI", "WI", "WI", null, null, null, "MI", "MI", "MI", "MI", "MI", "MI", "MI", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "NY", "NY", "NY", "NY", "NY", "NY", "NY", "NY", "NH", "NH", "NH", "VT", "VT", "VT", "VT", "VT", null, null, null, null, null, null, null], [null, null, "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "WI", "WI", "WI", "WI", "WI", "WI", "WI", "WI", "WI", "WI", "WI", "WI", "WI", "WI", "WI", "WI", null, null, null, "MI", "MI", "MI", "MI", "MI", "MI", "MI", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "NY", "NY", "NY", "NY", "NY", "NY", "NY", "NY", "NY", "NH", "NH", "VT", "VT", "VT", "VT", "MA", null, null, null, null, null, null, null], [null, null, "CA", "CA", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "WI", "WI", "WI", "WI", "WI", "WI", "WI", "WI", "WI", "WI", "WI", "WI", "WI", "WI", "WI", null, null, null, "MI", "MI", "MI", "MI", "MI", "MI", "MI", "MI", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "NY", "NY", "NY", "NY", "NY", "NY", "NY", "NY", "NY", "NH", "NH", "VT", "VT", "MA", "MA", "MA", null, null, null, null, null, null, null], [null, null, "CA", "CA", "CA", "CA", "CA", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "WI", "WI", "WI", "WI", "WI", "WI", "WI", "WI", "WI", "WI", "WI", "WI", "WI", "WI", null, null, null, "MI", "MI", "MI", "MI", "MI", "MI", "MI", null, null, "MI", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "NY", "NY", "NY", "NY", "NY", "NY", "NY", "NY", "NY", "NY", "MA", "MA", "MA", "MA", "MA", "MA", "MA", "MA", null, null, null, null, null, null], [null, null, "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "WI", "WI", "WI", "WI", "WI", "WI", "WI", "WI", "WI", "WI", "WI", "WI", "WI", null, null, null, "MI", "MI", "MI", "MI", "MI", "MI", "MI", null, "MI", "MI", "MI", null, null, null, null, null, null, null, null, null, null, "NY", "NY", "NY", "NY", "NY", "NY", "NY", "NY", "NY", "NY", "NY", "NY", "NY", "NY", "NY", "NY", "MA", "MA", "MA", "MA", "MA", "MA", "MA", "MA", "MA", null, null, null, null, null], [null, null, "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "OR", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "WI", "WI", "WI", "WI", "WI", "WI", "WI", "WI", "WI", "WI", "WI", null, null, null, null, "MI", "MI", "MI", "MI", "MI", "MI", "MI", "MI", "MI", "MI", "MI", null, null, null, null, null, null, null, null, null, null, "NY", "NY", "NY", "NY", "NY", "NY", "NY", "NY", "NY", "NY", "NY", "NY", "NY", "NY", "NY", "NY", "MA", "MA", "MA", "CT", "CT", "RI", "RI", "MA", "MA", "MA", null, null, null, null], [null, "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "NV", "NV", "NV", "NV", "NV", "OR", "OR", "OR", "OR", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "WI", "WI", "WI", "WI", "WI", "WI", "WI", "WI", "WI", "WI", null, null, null, "MI", "MI", "MI", "MI", "MI", "MI", "MI", "MI", "MI", "MI", "MI", null, null, null, null, null, null, null, null, null, null, null, "NY", "NY", "NY", "NY", "NY", "NY", "NY", "NY", "NY", "NY", "NY", "NY", "NY", "NY", "NY", "CT", "CT", "CT", "CT", "CT", "RI", "RI", null, null, null, null, null, null, null], ["CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "MN", "WI", "WI", "WI", "WI", "WI", "WI", "WI", "WI", "WI", "WI", null, null, null, "MI", "MI", "MI", "MI", "MI", "MI", "MI", "MI", "MI", "MI", "MI", "MI", null, null, null, null, null, null, null, null, null, "NY", "NY", "NY", "NY", "NY", "NY", "NY", "NY", "NY", "NY", "NY", "NY", "NY", "NY", "NY", "NY", "CT", "CT", "CT", "CT", "CT", "RI", null, null, null, null, null, null, null, null], ["CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "ID", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "WI", "WI", "WI", "WI", "WI", "WI", "WI", "WI", "WI", null, null, null, null, null, "MI", "MI", "MI", "MI", "MI", "MI", "MI", "MI", "MI", "MI", "MI", null, null, null, null, null, null, null, null, "NY", "NY", "NY", "NY", "NY", "NY", "NY", "PA", "PA", "PA", "PA", "PA", "PA", "NY", "NY", "NY", "NY", "CT", "CT", "CT", "CT", null, null, null, null, null, null, null, null, null, null], [null, "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "UT", "UT", "UT", "UT", "ID", "ID", "ID", "ID", "ID", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "SD", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "WI", "WI", "WI", "WI", "WI", "WI", "WI", "WI", "WI", null, null, null, null, null, "MI", "MI", "MI", "MI", "MI", "MI", "MI", "MI", "MI", "MI", null, null, null, null, null, null, null, null, "PA", "NY", "NY", "PA", "PA", "PA", "PA", "PA", "PA", "PA", "PA", "PA", "PA", "PA", "PA", "NJ", "NY", "NY", "CT", "CT", null, null, null, null, null, null, null, null, null, null, null, null], [null, "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "SD", "SD", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "WI", "WI", "WI", "WI", "WI", "WI", "WI", "WI", "WI", "WI", null, null, null, null, "MI", "MI", "MI", "MI", "MI", "MI", "MI", "MI", "MI", null, null, null, null, null, null, null, null, "PA", "PA", "PA", "PA", "PA", "PA", "PA", "PA", "PA", "PA", "PA", "PA", "PA", "PA", "PA", "PA", "NJ", "NJ", "NJ", "NY", "NY", "NY", "NY", null, null, null, null, null, null, null, null, null, null], [null, "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IL", "IL", "IL", "IL", "IL", "IL", "IL", "IL", null, null, null, null, "MI", "MI", "MI", "MI", "MI", "MI", "MI", "MI", "MI", null, null, null, null, null, null, "OH", "OH", "PA", "PA", "PA", "PA", "PA", "PA", "PA", "PA", "PA", "PA", "PA", "PA", "PA", "PA", "PA", "PA", "NJ", "NJ", "NJ", "NY", "NY", null, null, null, null, null, null, null, null, null, null, null, null], ["CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IL", "IL", "IL", "IL", "IL", "IL", "IL", "IL", null, null, null, "MI", "MI", "MI", "MI", "MI", "MI", "MI", "MI", "MI", null, null, null, null, null, null, "OH", "OH", "OH", "PA", "PA", "PA", "PA", "PA", "PA", "PA", "PA", "PA", "PA", "PA", "PA", "PA", "PA", "PA", "NJ", "NJ", "NJ", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], ["CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IL", "IL", "IL", "IL", "IL", "IL", "IL", "IL", null, null, null, "IN", "IN", "IN", "IN", "IN", "IN", "OH", "OH", "OH", "OH", "OH", "OH", "OH", "OH", "OH", "OH", "OH", "OH", "PA", "PA", "PA", "PA", "PA", "PA", "PA", "PA", "PA", "PA", "PA", "PA", "PA", "PA", "PA", "PA", "NJ", "NJ", "NJ", null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IL", "IL", "IL", "IL", "IL", "IL", "IL", "IL", "IL", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "OH", "OH", "OH", "OH", "OH", "OH", "OH", "OH", "OH", "OH", "OH", "OH", "PA", "PA", "PA", "PA", "PA", "PA", "PA", "PA", "PA", "PA", "PA", "PA", "PA", "PA", "PA", "PA", "PA", "NJ", "NJ", null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "CO", "CO", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "WY", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IL", "IL", "IL", "IL", "IL", "IL", "IL", "IL", "IL", "IL", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "OH", "OH", "OH", "OH", "OH", "OH", "OH", "OH", "OH", "OH", "OH", "OH", "PA", "PA", "PA", "PA", "PA", "PA", "PA", "PA", "PA", "PA", "PA", "PA", "PA", "PA", "PA", "PA", "NJ", "NJ", "NJ", null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "WY", "WY", "WY", "WY", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IL", "IL", "IL", "IL", "IL", "IL", "IL", "IL", "IL", "IL", "IL", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "OH", "OH", "OH", "OH", "OH", "OH", "OH", "OH", "OH", "OH", "OH", "OH", "PA", "PA", "PA", "PA", "PA", "PA", "PA", "PA", "PA", "PA", "PA", "PA", "PA", "PA", "PA", "PA", "NJ", "NJ", "NJ", null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IL", "IL", "IL", "IL", "IL", "IL", "IL", "IL", "IL", "IL", "IL", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "OH", "OH", "OH", "OH", "OH", "OH", "OH", "OH", "OH", "OH", "OH", "OH", "WV", "PA", "PA", "PA", "PA", "PA", "PA", "PA", "PA", "MD", "MD", "MD", "MD", "MD", "MD", "DE", "NJ", "NJ", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IA", "IL", "IL", "IL", "IL", "IL", "IL", "IL", "IL", "IL", "IL", "IL", "IL", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "OH", "OH", "OH", "OH", "OH", "OH", "OH", "OH", "OH", "OH", "OH", "OH", "WV", "PA", "PA", "PA", "MD", "MD", "MD", "MD", "MD", "MD", "MD", "MD", "MD", "MD", "MD", "DE", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "IL", "IL", "IL", "IL", "IL", "IL", "IL", "IL", "IL", "IL", "IL", "IL", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "OH", "OH", "OH", "OH", "OH", "OH", "OH", "OH", "OH", "OH", "OH", "OH", "WV", "WV", "WV", "WV", "MD", "MD", "WV", "MD", "MD", "VA", "MD", "MD", "MD", "MD", "MD", "DE", "DE", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "NE", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "IL", "IL", "IL", "IL", "IL", "IL", "IL", "IL", "IL", "IL", "IL", "IL", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "OH", "OH", "OH", "OH", "OH", "OH", "OH", "OH", "OH", "OH", "OH", "WV", "WV", "WV", "WV", "WV", "MD", "WV", "WV", "VA", "VA", "VA", "VA", "MD", "MD", "MD", "MD", "MD", "DE", "DE", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "NE", "NE", "NE", "NE", "NE", "NE", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "IL", "IL", "IL", "IL", "IL", "IL", "IL", "IL", "IL", "IL", "IL", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "OH", "OH", "OH", "OH", "OH", "OH", "OH", "OH", "OH", "OH", "WV", "WV", "WV", "WV", "WV", "WV", "WV", "WV", "WV", "VA", "VA", "VA", "VA", "VA", "MD", "MD", null, "MD", "MD", "MD", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "IL", "IL", "IL", "IL", "IL", "IL", "IL", "IL", "IL", "IL", "IL", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "OH", "OH", "OH", "OH", "OH", "OH", "OH", "OH", "OH", "OH", "WV", "WV", "WV", "WV", "WV", "WV", "WV", "WV", "VA", "VA", "VA", "VA", "VA", "VA", "MD", "MD", null, null, "MD", "MD", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "IL", "IL", "IL", "IL", "IL", "IL", "IL", "IL", "IL", "IL", "IL", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "KY", "KY", "OH", "OH", "OH", "OH", "OH", "OH", "OH", "WV", "WV", "WV", "WV", "WV", "WV", "WV", "WV", "VA", "VA", "VA", "VA", "VA", "VA", "VA", "VA", "VA", null, null, "VA", "VA", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "IL", "IL", "IL", "IL", "IL", "IL", "IL", "IL", "IL", "IL", "IN", "IN", "IN", "IN", "IN", "IN", "IN", "KY", "KY", "KY", "KY", "KY", "KY", "KY", "OH", "WV", "WV", "WV", "WV", "WV", "WV", "WV", "WV", "VA", "VA", "VA", "VA", "VA", "VA", "VA", "VA", "VA", "VA", "VA", null, "VA", "VA", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "IL", "IL", "IL", "IL", "IL", "IL", "IL", "IL", "IL", "IL", "IN", "IN", "IN", "IN", "IN", "IN", "KY", "KY", "KY", "KY", "KY", "KY", "KY", "KY", "KY", "WV", "WV", "WV", "WV", "WV", "WV", "WV", "WV", "VA", "VA", "VA", "VA", "VA", "VA", "VA", "VA", "VA", "VA", "VA", null, "VA", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "IL", "IL", "IL", "IL", "IL", "IL", "IL", "IN", "IN", "IN", "IN", "IN", "IN", "KY", "KY", "KY", "KY", "KY", "KY", "KY", "KY", "KY", "KY", "WV", "WV", "WV", "WV", "WV", "WV", "WV", "VA", "VA", "VA", "VA", "VA", "VA", "VA", "VA", "VA", "VA", "VA", "VA", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "IL", "IL", "IL", "IL", "IL", "IL", "IL", "IL", "IN", "IN", "IN", "IN", "IN", "IN", "KY", "KY", "KY", "KY", "KY", "KY", "KY", "KY", "KY", "KY", "KY", "WV", "WV", "WV", "WV", "WV", "WV", "VA", "VA", "VA", "VA", "VA", "VA", "VA", "VA", "VA", "VA", "VA", "VA", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "AZ", "AZ", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "IL", "IL", "IL", "IL", "IL", "IL", "IL", "IN", "IN", "KY", "KY", "KY", "KY", "KY", "KY", "KY", "KY", "KY", "KY", "KY", "KY", "KY", "KY", "KY", "KY", "WV", "WV", "WV", "VA", "VA", "VA", "VA", "VA", "VA", "VA", "VA", "VA", "VA", "VA", "VA", "VA", "VA", "VA", "VA", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "UT", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "IL", "IL", "IL", "IL", "IL", "KY", "KY", "KY", "KY", "KY", "KY", "KY", "KY", "KY", "KY", "KY", "KY", "KY", "KY", "KY", "KY", "KY", "KY", "KY", "VA", "VA", "VA", "VA", "VA", "VA", "VA", "VA", "VA", "VA", "VA", "VA", "VA", "VA", "VA", "NC", "NC", "NC", "NC", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "NV", "NV", "NV", "NV", "NV", "NV", "NV", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "IL", "IL", "IL", "IL", "KY", "KY", "KY", "KY", "KY", "KY", "KY", "KY", "KY", "KY", "KY", "KY", "KY", "KY", "KY", "KY", "KY", "VA", "VA", "VA", "VA", "VA", "VA", "VA", "VA", "VA", "VA", "VA", "VA", "NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "NV", "NV", "NV", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "CO", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "IL", "IL", "IL", "KY", "KY", "KY", "KY", "KY", "KY", "KY", "KY", "KY", "KY", "KY", "KY", "KY", "KY", "KY", "KY", "KY", "VA", "VA", "VA", "VA", "VA", "VA", "VA", "NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "NV", "NV", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "CO", "CO", "CO", "CO", "CO", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "KS", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "KY", "KY", "KY", "KY", "KY", "KY", "KY", "KY", "KY", "KY", "KY", "KY", "KY", "KY", "KY", "KY", "KY", "TN", "TN", "TN", "TN", "TN", "TN", "NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "NV", "NV", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "KY", "KY", "KY", "KY", "KY", "KY", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "NV", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "MO", "KY", "KY", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "MO", "MO", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "NC", "NC", "NC", "NC", "NC", "SC", "SC", "SC", "SC", "SC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "NC", "NC", "NC", "NC", "SC", "SC", "SC", "SC", "SC", "SC", "SC", "SC", "SC", "SC", "SC", "SC", "NC", "NC", "NC", "NC", "NC", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "TN", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "SC", "SC", "SC", "SC", "SC", "SC", "SC", "SC", "SC", "SC", "SC", "SC", "SC", "SC", "SC", "NC", "NC", "NC", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "TN", "TN", "MS", "MS", "MS", "MS", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "SC", "SC", "SC", "SC", "SC", "SC", "SC", "SC", "SC", "SC", "SC", "SC", "SC", "SC", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "MS", "MS", "MS", "MS", "MS", "MS", "MS", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "SC", "SC", "SC", "SC", "SC", "SC", "SC", "SC", "SC", "SC", "SC", "SC", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, "CA", "CA", "CA", "CA", "CA", "CA", "CA", "CA", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "MS", "MS", "MS", "MS", "MS", "MS", "MS", "MS", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "SC", "SC", "SC", "SC", "SC", "SC", "SC", "SC", "SC", "SC", "SC", "SC", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "CA", "CA", "CA", "CA", "CA", "CA", "CA", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "MS", "MS", "MS", "MS", "MS", "MS", "MS", "MS", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "SC", "SC", "SC", "SC", "SC", "SC", "SC", "SC", "SC", "SC", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "MS", "MS", "MS", "MS", "MS", "MS", "MS", "MS", "MS", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "SC", "SC", "SC", "SC", "SC", "SC", "SC", "SC", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "OK", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "MS", "MS", "MS", "MS", "MS", "MS", "MS", "MS", "MS", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "SC", "SC", "SC", "SC", "SC", "SC", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "MS", "MS", "MS", "MS", "MS", "MS", "MS", "MS", "MS", "MS", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "SC", "SC", "SC", "SC", "SC", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "MS", "MS", "MS", "MS", "MS", "MS", "MS", "MS", "MS", "MS", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "SC", "SC", "SC", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "MS", "MS", "MS", "MS", "MS", "MS", "MS", "MS", "MS", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "SC", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "LA", "LA", "LA", "LA", "LA", "LA", "LA", "LA", "LA", "MS", "MS", "MS", "MS", "MS", "MS", "MS", "MS", "MS", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "GA", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "LA", "LA", "LA", "LA", "LA", "LA", "LA", "LA", "LA", "LA", "MS", "MS", "MS", "MS", "MS", "MS", "MS", "MS", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "GA", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "AZ", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "NM", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "LA", "LA", "LA", "LA", "LA", "LA", "LA", "LA", "LA", "LA", "MS", "MS", "MS", "MS", "MS", "MS", "MS", "MS", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "GA", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "AZ", "AZ", "NM", "NM", "NM", null, null, null, null, null, null, "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "LA", "LA", "LA", "LA", "LA", "LA", "LA", "LA", "LA", "MS", "MS", "MS", "MS", "MS", "MS", "MS", "MS", "MS", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "GA", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "LA", "LA", "LA", "LA", "LA", "LA", "LA", "LA", "LA", "MS", "MS", "MS", "MS", "MS", "MS", "MS", "MS", "MS", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "GA", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "LA", "LA", "LA", "LA", "LA", "LA", "LA", "LA", "MS", "MS", "MS", "MS", "MS", "MS", "MS", "MS", "MS", "MS", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "FL", "FL", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "LA", "LA", "LA", "LA", "LA", "LA", "LA", "MS", "MS", "MS", "MS", "MS", "MS", "MS", "MS", "MS", "MS", "AL", "AL", "AL", "AL", "FL", "FL", "FL", "FL", "FL", "FL", "FL", "FL", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "GA", "FL", "FL", "FL", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "LA", "LA", "LA", "LA", "LA", "LA", "LA", "MS", "MS", "MS", "MS", "LA", "LA", "MS", "MS", "MS", "MS", "MS", "AL", "AL", "AL", "FL", "FL", "FL", "FL", "FL", "FL", "FL", "FL", "FL", "FL", "FL", "FL", "FL", "FL", "FL", "FL", "FL", "FL", "FL", "FL", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "LA", "LA", "LA", "LA", "LA", "LA", "LA", "LA", "LA", "LA", "LA", "LA", "LA", "MS", "MS", "MS", "MS", "MS", "AL", "AL", "AL", "FL", "FL", "FL", "FL", "FL", "FL", "FL", "FL", "FL", "FL", "FL", "FL", "FL", "FL", "FL", "FL", "FL", "FL", "FL", "FL", "FL", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "LA", "LA", "LA", "LA", "LA", "LA", "LA", "LA", "LA", "LA", "LA", "LA", "LA", "MS", "MS", "MS", "MS", "MS", null, null, null, null, null, null, null, null, null, "FL", "FL", "FL", "FL", null, null, null, "FL", "FL", "FL", "FL", "FL", "FL", "FL", "FL", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "LA", "LA", "LA", "LA", "LA", "LA", "LA", "LA", "LA", "LA", "LA", "LA", "LA", "LA", "LA", null, null, null, null, null, null, null, null, null, null, null, null, null, "FL", "FL", null, null, null, null, null, "FL", "FL", "FL", "FL", "FL", "FL", "FL", "FL", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "LA", "LA", "LA", "LA", "LA", "LA", "LA", "LA", "LA", "LA", "LA", "LA", "LA", "LA", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "FL", "FL", "FL", "FL", "FL", "FL", "FL", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "TX", "TX", "TX", "TX", "TX", "TX", null, null, null, null, "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "LA", "LA", "LA", "LA", "LA", "LA", "LA", "LA", "LA", "LA", "LA", "LA", "LA", "LA", "LA", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "FL", "FL", "FL", "FL", "FL", "FL", "FL", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "TX", "TX", "TX", "TX", null, null, null, null, null, null, "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", null, null, null, null, null, null, null, "LA", "LA", null, "LA", "LA", "LA", "LA", "LA", "LA", "LA", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "FL", "FL", "FL", "FL", "FL", "FL", "FL", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "TX", null, null, null, null, null, null, null, null, "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", null, null, null, null, null, null, null, null, null, null, null, null, "LA", "LA", "LA", null, null, "LA", "LA", "LA", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "FL", "FL", "FL", "FL", "FL", "FL", "FL", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "FL", "FL", "FL", "FL", "FL", "FL", "FL", "FL", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "FL", "FL", "FL", "FL", "FL", "FL", "FL", "FL", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "FL", "FL", "FL", "FL", "FL", "FL", "FL", "FL", "FL", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "FL", "FL", "FL", "FL", "FL", "FL", "FL", "FL", "FL", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "FL", "FL", "FL", "FL", "FL", "FL", "FL", "FL", "FL", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "FL", "FL", "FL", "FL", "FL", "FL", "FL", "FL", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "FL", "FL", "FL", "FL", "FL", "FL", "FL", "FL", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", "TX", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "FL", "FL", "FL", "FL", "FL", "FL", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "TX", "TX", "TX", "TX", "TX", "TX", "TX", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "FL", "FL", "FL", "FL", "FL", "FL", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "TX", "TX", "TX", "TX", "TX", "TX", "TX", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "FL", "FL", "FL", "FL", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "TX", "TX", "TX", "TX", "TX", "TX", "TX", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "FL", "FL", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "TX", "TX", "TX", "TX", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "TX", "TX", "TX", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]];
;
},{}],"js/schemes.json":[function(require,module,exports) {
module.exports = {
  "cool": ["#edad08", "#38a6a5", "#1d6996", "#cc503e", "#94346e", "#0f8554", "#e17c05", "#5f4690", "#73af48", "#edad08", "#559fab", "#ffffff"],
  "neon": ["#6e40aa", "#be3caf", "#fe4b83", "#ff7747", "#e3b62f", "#b0ef5a", "#53f666", "#1edfa2", "#23acd8", "#4c6fdc", "#4c6fdc", "#ffffff"],
  "paired": ["#a6cee3", "#b2df8a", "#1f78b4", "#e31a1c", "#cab2d6", "#ffff99", "#33a02c", "#6a3d9a", "#fdbf6f", "#ff7f00", "#fb9a99", "#b15928", "#ffffff"],
  "diverging": ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf", "#1f77b4", "#ffffff"],
  "tableau": ["#4e79a7", "#f28e2c", "#e15759", "#76b7b2", "#59a14f", "#edc949", "#af7aa1", "#ff9da7", "#9c755f", "#777777", "#bbbbbb", "#ffffff"]
};
},{}],"js/states.json":[function(require,module,exports) {
module.exports = {
  "AL": {
    "color": 6,
    "name": "Alabama"
  },
  "AZ": {
    "color": 2,
    "name": "Arizona"
  },
  "AR": {
    "color": 3,
    "name": "Arkansas"
  },
  "CA": {
    "color": 3,
    "name": "California"
  },
  "CO": {
    "color": 3,
    "name": "Colorado"
  },
  "CT": {
    "color": 4,
    "name": "Connecticut"
  },
  "DE": {
    "color": 5,
    "name": "Delaware"
  },
  "FL": {
    "color": 8,
    "name": "Florida"
  },
  "GA": {
    "color": 4,
    "name": "Georgia"
  },
  "ID": {
    "color": 8,
    "name": "Idaho"
  },
  "IL": {
    "color": 4,
    "name": "Illinois"
  },
  "IN": {
    "color": 7,
    "name": "Indiana"
  },
  "IA": {
    "color": 8,
    "name": "Iowa"
  },
  "KS": {
    "color": 2,
    "name": "Kansas"
  },
  "KY": {
    "color": 5,
    "name": "Kentucky"
  },
  "LA": {
    "color": 7,
    "name": "Louisiana"
  },
  "ME": {
    "color": 9,
    "name": "Maine"
  },
  "MD": {
    "color": 6,
    "name": "Maryland"
  },
  "MA": {
    "color": 5,
    "name": "Massachusetts"
  },
  "MI": {
    "color": 9,
    "name": "Michigan"
  },
  "MN": {
    "color": 2,
    "name": "Minnesota"
  },
  "MS": {
    "color": 2,
    "name": "Mississippi"
  },
  "MO": {
    "color": 10,
    "name": "Missouri"
  },
  "MT": {
    "color": 4,
    "name": "Montana"
  },
  "NE": {
    "color": 6,
    "name": "Nebraska"
  },
  "NV": {
    "color": 9,
    "name": "Nevada"
  },
  "NH": {
    "color": 4,
    "name": "New Hampshire"
  },
  "NJ": {
    "color": 10,
    "name": "New Jersey"
  },
  "NM": {
    "color": 8,
    "name": "New Mexico"
  },
  "NY": {
    "color": 3,
    "name": "New York"
  },
  "NC": {
    "color": 3,
    "name": "North Carolina"
  },
  "ND": {
    "color": 9,
    "name": "North Dakota"
  },
  "OH": {
    "color": 8,
    "name": "Ohio"
  },
  "OK": {
    "color": 9,
    "name": "Oklahoma"
  },
  "OR": {
    "color": 7,
    "name": "Oregon"
  },
  "PA": {
    "color": 7,
    "name": "Pennsylvania"
  },
  "RI": {
    "color": 7,
    "name": "Rhode Island"
  },
  "SC": {
    "color": 7,
    "name": "South Carolina"
  },
  "SD": {
    "color": 5,
    "name": "South Dakota"
  },
  "TN": {
    "color": 9,
    "name": "Tennessee"
  },
  "TX": {
    "color": 4,
    "name": "Texas"
  },
  "UT": {
    "color": 5,
    "name": "Utah"
  },
  "VT": {
    "color": 10,
    "name": "Vermont"
  },
  "VA": {
    "color": 10,
    "name": "Virginia"
  },
  "WA": {
    "color": 2,
    "name": "Washington"
  },
  "WV": {
    "color": 2,
    "name": "West Virginia"
  },
  "WI": {
    "color": 3,
    "name": "Wisconsin"
  },
  "WY": {
    "color": 10,
    "name": "Wyoming"
  },
  "US": {
    "color": 11,
    "name": "Border"
  }
};
},{}],"js/main.js":[function(require,module,exports) {
"use strict";

var _border = _interopRequireDefault(require("./border.json"));

var _bitmap = _interopRequireDefault(require("./bitmap.json"));

var _schemes = _interopRequireDefault(require("./schemes.json"));

var _states = _interopRequireDefault(require("./states.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var raf;
var is_paused;
var loading_status = document.querySelector(".loading-status");
var loading_pct;
loading_pct = 0;
var Settings = {
  bitmap: {
    width: 160,
    height: 100
  },
  damping: 400,
  scheme: "cool",
  // cool, neon, tomorrow, diverging, paired, tableau
  map: {
    width: 1600,
    height: 1000,
    cellSize: 10,
    padding: 6
  },
  font: "36px VT323, Monaco, monospace"
}; // Iterate through states array and assign placeholders

Object.entries(_states.default).forEach(function (_ref, i) {
  var _ref2 = _slicedToArray(_ref, 2),
      key = _ref2[0],
      state = _ref2[1];

  state.count = 0;
  state.centroid = {
    x: [],
    y: []
  };
  state.pixels = [];
}); // Setup Canvas

var canvas = document.querySelector("canvas");
canvas.width = Settings.map.width + Settings.map.padding * Settings.map.cellSize * 2;
canvas.height = Settings.map.height + Settings.map.padding * Settings.map.cellSize * 2;
var ctx = canvas.getContext("2d", {
  alpha: true,
  desynchronized: true,
  preserveDrawingBuffer: true
});
ctx.imageSmoothingEnabled = false;
ctx.textAlign = "center";
ctx.textBaseline = "middle";
ctx.lineJoin = "miter";
ctx.font = Settings.font;

function findNeighbors(grid, x, y) {
  var prevRow = grid[y - 1] || [];
  var currentRow = grid[y];
  var nextRow = grid[y + 1] || [];
  var neighbors = [prevRow[x - 1], prevRow[x], prevRow[x + 1], currentRow[x - 1], currentRow[x], currentRow[x + 1], nextRow[x - 1], nextRow[x], nextRow[x + 1]].filter(function (e) {
    return e;
  });
  return neighbors;
}

function getNewCell(neighbors, cell) {
  // Pick a random neighbor
  return neighbors[Math.floor(Math.random() * neighbors.length)];
}

function fillCell(cell, colIndex, rowIndex) {
  // Add pixel to canvas
  var size = Settings.map.cellSize;
  var x = (colIndex + Settings.map.padding) * size;
  var y = (rowIndex + Settings.map.padding) * size;
  ctx.fillStyle = _schemes.default[Settings.scheme][_states.default[cell].color];
  ctx.fillRect(x, y, size, size);
}

function damp(arr) {
  // Get average value in array of numbers
  var sum = arr.reduce(function (a, b) {
    return a + b;
  }, 0);
  var avg = sum / arr.length || 0;
  return avg;
}

function label(state) {
  // Add state labels with stroke outline
  var center_x = damp(state.centroid.x) * Settings.map.cellSize + Settings.map.padding * Settings.map.cellSize;
  var center_y = damp(state.centroid.y) * Settings.map.cellSize + Settings.map.padding * Settings.map.cellSize;
  ctx.fillStyle = "#fff";
  ctx.strokeStyle = "#000";
  ctx.lineWidth = Settings.map.cellSize / 2;
  ctx.strokeText(state.name, center_x, center_y);
  ctx.fillText(state.name, center_x, center_y);
}

function countOccurrences(arr, val) {
  return arr.reduce(function (a, v) {
    return v === val ? a + 1 : a;
  }, 0);
}

function initRenderCanvas(ctx) {
  // Draw US outline
  _border.default.forEach(function (cell) {
    var colIndex = cell[0];
    var rowIndex = cell[1];
    fillCell("US", colIndex, rowIndex, false);
  }); // Start Loading count up


  setTimeout(loadingIndicator, 500);
}

function loadingIndicator() {
  var min = 30;
  var max = 120;
  var rand_interval = Math.floor(Math.random() * (max - min + 1) + min);
  var rand_update = Math.floor(Math.random() * loading_pct * 0.1 + 2);
  loading_pct = loading_pct + rand_update;

  if (loading_pct < 100) {
    loading_status.innerHTML = "Loading ".concat(loading_pct, "%");
    setTimeout(loadingIndicator, rand_interval);
  } else {
    loading_status.innerHTML = "Loading 100%";
    setTimeout(function () {
      document.querySelector("html").classList.remove("is-loading");
      document.querySelector("html").classList.add("is-started");
      startSimulation();
    }, 700);
  }
}

function renderCanvas(grid, ctx) {
  // Clear the canvas
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // Iterate through each row and each column

  grid.forEach(function (row, rowIndex) {
    row.forEach(function (cell, colIndex) {
      // If current cell is part of the US mainland
      if (cell !== null) {
        var neighbors = findNeighbors(grid, colIndex, rowIndex);
        var friendlys = countOccurrences(neighbors, cell);
        var newCell = getNewCell(neighbors, cell);

        if (friendlys > 6) {
          // This cell is surrounded by similar cells, keep it
          fillCell(cell, colIndex, rowIndex);
        } else {
          // Update bitmap matrix
          grid[rowIndex][colIndex] = newCell; // Tally number of cells that make up each state

          _states.default[newCell].count += 1;

          if (_states.default[newCell].centroid.x.length > Settings.damping) {
            _states.default[newCell].centroid.x.shift();

            _states.default[newCell].centroid.y.shift();
          } else {
            _states.default[newCell].centroid.x.push(colIndex);

            _states.default[newCell].centroid.y.push(rowIndex);
          }
        }
      }
    });
  }); // Label each state

  Object.entries(_states.default).forEach(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        key = _ref4[0],
        state = _ref4[1];

    if (state.count !== 0) {
      label(state); // Reset each state count

      state.count = 0;
    }
  });
}

function getRealPixelSize() {
  // Get real px size of pixel on the canvas
  var map = document.querySelector(".map");
  var size = map.offsetWidth / Settings.bitmap.width; // Set --pixel CSS variable

  document.documentElement.style.setProperty("--pixel", "".concat(size, "px"));
}

function closeAd() {
  document.querySelector(".add").remove();
}

function clickAnimation(elem) {
  elem.classList.add("is-active");
  setTimeout(function () {
    elem.classList.remove("is-active");
  }, 200);
}

function toggleInformation() {
  var info_toggle = document.querySelector(".toggle-information");
  clickAnimation(info_toggle);
  document.querySelector("html").classList.toggle("has-information");

  if (document.querySelector("html").classList.contains("has-information")) {
    pauseSimulation();
    info_toggle.innerHTML = "Hide Info";
  } else {
    startSimulation();
    info_toggle.innerHTML = "Info";
  }
}

function toggleSimulation() {
  var sim_toggle = document.querySelector(".toggle-simulation");
  clickAnimation(sim_toggle);

  if (is_paused === false) {
    pauseSimulation();
    sim_toggle.innerHTML = "Play";
  } else {
    startSimulation();
    sim_toggle.innerHTML = "Pause";
  }
}

function pauseSimulation() {
  is_paused = true;
  cancelAnimationFrame(raf);
}

function startSimulation() {
  is_paused = false;
  raf = requestAnimationFrame(simulation);
}

function simulation() {
  renderCanvas(_bitmap.default, ctx);
  raf = requestAnimationFrame(simulation);
}

function init() {
  // Figure out the size of a pixel and update on resize
  getRealPixelSize();
  window.onresize = getRealPixelSize; // Run/Pause simualtion

  var sim_toggle = document.querySelector(".toggle-simulation");
  sim_toggle.onclick = toggleSimulation; // Toggle infobox

  var info_toggle = document.querySelector(".toggle-information");
  info_toggle.onclick = toggleInformation; // Handle closing advertisment

  var close = document.querySelector(".carbon-close");
  close.onclick = closeAd; // Render the US Outline

  initRenderCanvas(ctx);
}

init();
},{"./border.json":"js/border.json","./bitmap.json":"js/bitmap.json","./schemes.json":"js/schemes.json","./states.json":"js/states.json"}],"../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64763" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.js.map
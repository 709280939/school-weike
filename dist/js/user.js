webpackJsonp([0],{

/***/ 20:
/***/ (function(module, exports) {

module.exports = "<div class=\"user\">user</div>";

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(9);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(2)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(9, function() {
			var newContent = __webpack_require__(9);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = window.$;

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
__webpack_require__(25);
var user_str = __webpack_require__(20);
$("header").after(user_str);

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ })

},[50]);
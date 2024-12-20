/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _elements_Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements/Form */ "./assets/js/elements/Form.js");


// const createForm = document.querySelector("form#create-form")

// createForm.addEventListener('submit', function(e) {
//     e.preventDefault()
//     const name = document.querySelector('input[name=name]')
//     const email = document.querySelector('input[name=email]')
//     const phone = document.querySelector('input[name=phone]')
//     const date = document.querySelector('input[name=date]')
// })

var form = new _elements_Form__WEBPACK_IMPORTED_MODULE_0__["default"]();
form.init();

/***/ }),

/***/ "./assets/js/elements/Form.js":
/*!************************************!*\
  !*** ./assets/js/elements/Form.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lumina_form_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lumina-form-validator */ "./node_modules/lumina-form-validator/dist/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var Form = /*#__PURE__*/function () {
  function Form() {
    _classCallCheck(this, Form);
  }
  return _createClass(Form, [{
    key: "init",
    value: function init() {
      this.submitHandler();
    }
  }, {
    key: "validate",
    value: function validate(data) {
      var validator = new lumina_form_validator__WEBPACK_IMPORTED_MODULE_0__.Validator(data);
      validator.attr('name').label('Name').required();
      validator.attr('email').label('Email address').required().email();
      validator.attr('phone').label('Phone number').required();
      validator.attr('date').label('Date of Joining').required();
      if (!validator.isSuccess()) {
        var errors = validator.getErrors();
        console.log('Errors :: ', errors);
        this.populateErrors(errors);
        return false;
      }
      return true;
    }
  }, {
    key: "populateErrors",
    value: function populateErrors(errors) {
      var name = document.querySelector("span#name-error");
      var email = document.querySelector("span#email-error");
      var phone = document.querySelector("span#phone-error");
      var date = document.querySelector("span#date-error");
      name.textContent = errors === null || errors === void 0 ? void 0 : errors.name;
      email.textContent = errors === null || errors === void 0 ? void 0 : errors.email;
      phone.textContent = errors === null || errors === void 0 ? void 0 : errors.phone;
      date.textContent = errors === null || errors === void 0 ? void 0 : errors.date;
    }
  }, {
    key: "clearErrors",
    value: function clearErrors() {
      var name = document.querySelector("span#name-error");
      var email = document.querySelector("span#email-error");
      var phone = document.querySelector("span#phone-error");
      var date = document.querySelector("span#date-error");
      name.textContent = '';
      email.textContent = '';
      phone.textContent = '';
      date.textContent = '';
    }
  }, {
    key: "submitHandler",
    value: function submitHandler() {
      var form = document.querySelector("form#create-form");
      var name = document.querySelector('input[name=name]');
      var email = document.querySelector('input[name=email]');
      var phone = document.querySelector('input[name=phone]');
      var date = document.querySelector('input[name=date]');
      var self = this;
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var data = {
          name: name.value,
          email: email.value,
          phone: phone.value,
          date: date.value
        };
        if (self.validate(data)) {
          form.submit();
        } else {
          alert("Form failed");
        }
      });
    }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);

/***/ }),

/***/ "./node_modules/lumina-form-validator/dist/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/lumina-form-validator/dist/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Validator: () => (/* reexport safe */ _validator_js__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   checkCustomPattern: () => (/* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_1__.checkCustomPattern),
/* harmony export */   checkEmail: () => (/* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_1__.checkEmail),
/* harmony export */   checkEqual: () => (/* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_1__.checkEqual),
/* harmony export */   checkFile: () => (/* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_1__.checkFile),
/* harmony export */   checkFileTypes: () => (/* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_1__.checkFileTypes),
/* harmony export */   checkInteger: () => (/* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_1__.checkInteger),
/* harmony export */   checkMaxFileSize: () => (/* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_1__.checkMaxFileSize),
/* harmony export */   checkMaxLength: () => (/* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_1__.checkMaxLength),
/* harmony export */   checkMaxValue: () => (/* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_1__.checkMaxValue),
/* harmony export */   checkMinLength: () => (/* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_1__.checkMinLength),
/* harmony export */   checkMinValue: () => (/* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_1__.checkMinValue),
/* harmony export */   checkPassword: () => (/* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_1__.checkPassword),
/* harmony export */   checkString: () => (/* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_1__.checkString),
/* harmony export */   checkUrl: () => (/* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_1__.checkUrl),
/* harmony export */   isRequired: () => (/* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_1__.isRequired)
/* harmony export */ });
/* harmony import */ var _validator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validator.js */ "./node_modules/lumina-form-validator/dist/validator.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./node_modules/lumina-form-validator/dist/utils.js");





/***/ }),

/***/ "./node_modules/lumina-form-validator/dist/patterns.js":
/*!*************************************************************!*\
  !*** ./node_modules/lumina-form-validator/dist/patterns.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   emailPattern: () => (/* binding */ emailPattern),
/* harmony export */   passwordPattern: () => (/* binding */ passwordPattern),
/* harmony export */   urlPattern: () => (/* binding */ urlPattern)
/* harmony export */ });
const urlPattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
const emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
/**
 * ? 1. Atleast one uppercase letter.
 * ? 2. Atleast one number.
 * ? 3. Atleast one lowercase letter.
 * ? 4. Atleast one special character.
 * ? 5. Atleat eight characters length.
 */
const passwordPattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;


/***/ }),

/***/ "./node_modules/lumina-form-validator/dist/utils.js":
/*!**********************************************************!*\
  !*** ./node_modules/lumina-form-validator/dist/utils.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkCustomPattern: () => (/* binding */ checkCustomPattern),
/* harmony export */   checkEmail: () => (/* binding */ checkEmail),
/* harmony export */   checkEqual: () => (/* binding */ checkEqual),
/* harmony export */   checkFile: () => (/* binding */ checkFile),
/* harmony export */   checkFileTypes: () => (/* binding */ checkFileTypes),
/* harmony export */   checkInteger: () => (/* binding */ checkInteger),
/* harmony export */   checkMaxFileSize: () => (/* binding */ checkMaxFileSize),
/* harmony export */   checkMaxLength: () => (/* binding */ checkMaxLength),
/* harmony export */   checkMaxValue: () => (/* binding */ checkMaxValue),
/* harmony export */   checkMinLength: () => (/* binding */ checkMinLength),
/* harmony export */   checkMinValue: () => (/* binding */ checkMinValue),
/* harmony export */   checkPassword: () => (/* binding */ checkPassword),
/* harmony export */   checkString: () => (/* binding */ checkString),
/* harmony export */   checkUrl: () => (/* binding */ checkUrl),
/* harmony export */   isRequired: () => (/* binding */ isRequired)
/* harmony export */ });
/* harmony import */ var _patterns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./patterns */ "./node_modules/lumina-form-validator/dist/patterns.js");

function isRequired(value) {
    if (value == "" || value == null || value == undefined) {
        return false;
    }
    if (Array.isArray(value) && value.length === 0) {
        return false;
    }
    if (typeof value === 'object' && !Array.isArray(value) && Object.keys(value).length === 0) {
        return false;
    }
    return true;
}
function checkMinValue(value, size) {
    if (value < size) {
        return false;
    }
    return true;
}
function checkMaxValue(value, size) {
    if (value > size) {
        return false;
    }
    return true;
}
function checkMinLength(value, size) {
    if (value.length < size) {
        return false;
    }
    return true;
}
function checkMaxLength(value, size) {
    if (value.length > size) {
        return false;
    }
    return true;
}
function checkUrl(value) {
    var regex = new RegExp(_patterns__WEBPACK_IMPORTED_MODULE_0__.urlPattern);
    if (!regex.test(value)) {
        return false;
    }
    return true;
}
function checkEmail(value) {
    var regex = new RegExp(_patterns__WEBPACK_IMPORTED_MODULE_0__.emailPattern);
    if (!regex.test(value)) {
        return false;
    }
    return true;
}
/**
 * ? 1. Atleast one uppercase letter.
 * ? 2. Atleast one number.
 * ? 3. Atleast one lowercase letter.
 * ? 4. Atleast one special character.
 * ? 5. Atleat eight characters length.
 */
function checkPassword(value) {
    var regex = new RegExp(_patterns__WEBPACK_IMPORTED_MODULE_0__.passwordPattern);
    if (!regex.test(value)) {
        return false;
    }
    return true;
}
function checkCustomPattern(value, pattern) {
    var regex = new RegExp(pattern);
    if (!regex.test(value)) {
        return false;
    }
    return true;
}
function checkEqual(value1, value2) {
    if (value1 !== value2) {
        return false;
    }
    return true;
}
function checkInteger(value) {
    return Number.isInteger(value);
}
function checkString(value) {
    return typeof value === 'string' && value.trim().length > 0;
}
function checkFile(file) {
    return (file instanceof File);
}
function checkMaxFileSize(file, size) {
    return file.size <= size ? true : false;
}
function checkFileTypes(file, types) {
    let typeValid = false;
    if (types) {
        for (let type of types) {
            if (type.endsWith('/*')) {
                let category = type.split('/')[0];
                if (file.type.startsWith(`${category}/`)) {
                    typeValid = true;
                    break;
                }
            }
            else {
                if (file.type === type) {
                    typeValid = true;
                    break;
                }
            }
        }
    }
    return typeValid;
}


/***/ }),

/***/ "./node_modules/lumina-form-validator/dist/validator.js":
/*!**************************************************************!*\
  !*** ./node_modules/lumina-form-validator/dist/validator.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Validator)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/lumina-form-validator/dist/utils.js");

class Validator {
    constructor(data) {
        this.errors = {};
        this.id = "";
        this.elem = "";
        this.data = {};
        this.data = data;
        this.errors = {};
        this.id = "";
        this.elem = "";
    }
    attr(elem) {
        this.id = elem;
        return this;
    }
    label(elem) {
        this.elem = elem;
        return this;
    }
    required() {
        let value = this.data[this.id];
        if (!(0,_utils__WEBPACK_IMPORTED_MODULE_0__.isRequired)(value)) {
            this.error(this.id, `${this.elem} is required`);
        }
        return this;
    }
    integer() {
        let value = this.data[this.id];
        if (!(0,_utils__WEBPACK_IMPORTED_MODULE_0__.checkInteger)(value)) {
            this.error(this.id, `${this.elem} is not a valid integer`);
        }
        return this;
    }
    string() {
        let value = this.data[this.id];
        if (!(0,_utils__WEBPACK_IMPORTED_MODULE_0__.checkString)(value)) {
            this.error(this.id, `${this.elem} is not a valid string`);
        }
        return this;
    }
    minValue(size) {
        let value = this.data[this.id];
        if (!(0,_utils__WEBPACK_IMPORTED_MODULE_0__.checkMinValue)(value, size)) {
            this.error(this.id, `${this.elem} minimum value is ${size}`);
        }
        return this;
    }
    maxValue(size) {
        let value = this.data[this.id];
        if (!(0,_utils__WEBPACK_IMPORTED_MODULE_0__.checkMaxValue)(value, size)) {
            this.error(this.id, `${this.elem} maximum value is ${size}`);
        }
        return this;
    }
    minLength(size) {
        let value = this.data[this.id];
        if (!(0,_utils__WEBPACK_IMPORTED_MODULE_0__.checkMinLength)(value, size)) {
            this.error(this.id, `${this.elem} must be atleast ${size} of length`);
        }
        return this;
    }
    maxLength(size) {
        let value = this.data[this.id];
        if (!(0,_utils__WEBPACK_IMPORTED_MODULE_0__.checkMaxLength)(value, size)) {
            this.error(this.id, `${this.elem} must be maximum ${size} of length`);
        }
        return this;
    }
    url() {
        let value = this.data[this.id];
        if (!(0,_utils__WEBPACK_IMPORTED_MODULE_0__.checkUrl)(value)) {
            this.error(this.id, `${this.elem} is not a valid URL`);
        }
        return this;
    }
    email() {
        let value = this.data[this.id];
        if (!(0,_utils__WEBPACK_IMPORTED_MODULE_0__.checkEmail)(value)) {
            this.error(this.id, `${this.elem} is not a valid email format`);
        }
        return this;
    }
    password() {
        let value = this.data[this.id];
        if (!(0,_utils__WEBPACK_IMPORTED_MODULE_0__.checkPassword)(value)) {
            this.error(this.id, `${this.elem} is not a valid password`);
        }
        return this;
    }
    file() {
        let file = this.data[this.id];
        if (!(0,_utils__WEBPACK_IMPORTED_MODULE_0__.checkFile)(file)) {
            this.error(this.id, `${this.elem} is not a valid file`);
        }
        return this;
    }
    maxSize(size) {
        let file = this.data[this.id];
        if (!(0,_utils__WEBPACK_IMPORTED_MODULE_0__.checkMaxFileSize)(file, size)) {
            this.error(this.id, `${this.elem} is greater too large`);
        }
        return this;
    }
    allowedTypes(types) {
        let file = this.data[this.id];
        if (!(0,_utils__WEBPACK_IMPORTED_MODULE_0__.checkFileTypes)(file, types)) {
            this.error(this.id, `${this.elem} is not a valid file type`);
        }
        return this;
    }
    pattern(pat) {
        let value = this.data[this.id];
        if (!(0,_utils__WEBPACK_IMPORTED_MODULE_0__.checkCustomPattern)(value, pat)) {
            this.error(this.id, `${this.elem} is not matched with pattern`);
        }
        return this;
    }
    equals(val) {
        let value = this.data[this.id];
        if (!(0,_utils__WEBPACK_IMPORTED_MODULE_0__.checkEqual)(value, val)) {
            this.error(this.id, `${this.elem} is not equal to the value`);
        }
        return this;
    }
    extend(func) {
        let value = this.data[this.id];
        if (!func(value)) {
            this.error(this.id, `${this.elem} is not a valid value`);
        }
        return this;
    }
    error(id, value) {
        if (this.errors[id] == "" || this.errors[id] == undefined)
            this.errors[id] = value;
    }
    getErrors() {
        return this.errors;
    }
    isSuccess() {
        return Object.keys(this.errors).length == 0;
    }
}


/***/ }),

/***/ "./assets/css/app.scss":
/*!*****************************!*\
  !*** ./assets/css/app.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/src/main/webapp/js/app": 0,
/******/ 			"src/main/webapp/css/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkmy_web_app"] = self["webpackChunkmy_web_app"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["src/main/webapp/css/app"], () => (__webpack_require__("./assets/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["src/main/webapp/css/app"], () => (__webpack_require__("./assets/css/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
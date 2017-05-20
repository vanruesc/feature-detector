/**
 * feature-detector v0.0.0 build May 20 2017
 * https://github.com/vanruesc/feature-detector
 * Copyright 2017 Raoul van Rüschen, Zlib
 */

(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
   typeof define === 'function' && define.amd ? define(['exports'], factory) :
   (factory((global.FEATUREDETECTOR = global.FEATUREDETECTOR || {})));
}(this, (function (exports) { 'use strict';

   var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
     return typeof obj;
   } : function (obj) {
     return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
   };











   var classCallCheck = function (instance, Constructor) {
     if (!(instance instanceof Constructor)) {
       throw new TypeError("Cannot call a class as a function");
     }
   };











   var inherits = function (subClass, superClass) {
     if (typeof superClass !== "function" && superClass !== null) {
       throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
     }

     subClass.prototype = Object.create(superClass && superClass.prototype, {
       constructor: {
         value: subClass,
         enumerable: false,
         writable: true,
         configurable: true
       }
     });
     if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
   };











   var possibleConstructorReturn = function (self, call) {
     if (!self) {
       throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
     }

     return call && (typeof call === "object" || typeof call === "function") ? call : self;
   };

   /**
    * An abstract feature.
    *
    * @class Feature
    * @submodule features
    * @constructor
    */

   var Feature = function Feature() {
   		classCallCheck(this, Feature);


   		/**
      * The global scope of the current environment.
      *
      * This field assumes one of the following values depending on the
      * environment:
      *  - browser: window
      *  - worker: self
      *  - node.js: global
      *
      * If no higher scope can be found, it will point to this Feature instance.
      *
      * @property root
      * @type Object
      * @protected
      */

   		this.root = (typeof self === "undefined" ? "undefined" : _typeof(self)) === "object" && self.self === self ? self : (typeof global === "undefined" ? "undefined" : _typeof(global)) === "object" && global.global === global ? global : this;

   		/**
      * Indicates whether this feature is supported.
      *
      * @property supported
      * @type Boolean
      * @default false
      */

   		this.supported = false;
   };

   /**
    * An enumeration of feature ids.
    *
    * @class FeatureId
    * @submodule features
    * @static
    */

   var FeatureId = {

   	/**
     * The identifier of the Canvas feature.
     *
     * @property CANVAS
     * @type String
     * @static
     * @final
     */

   	CANVAS: "feature.canvas",

   	/**
     * The identifier of the File feature.
     *
     * @property FILE
     * @type String
     * @static
     * @final
     */

   	FILE: "feature.file",

   	/**
     * The identifier of the Typed Array feature.
     *
     * @property TYPED_ARRAY
     * @type String
     * @static
     * @final
     */

   	TYPED_ARRAY: "feature.typed-array",

   	/**
     * The identifier of the WebGL feature.
     *
     * @property WEBGL
     * @type String
     * @static
     * @final
     */

   	WEBGL: "feature.webgl",

   	/**
     * The identifier of the Web Worker feature.
     *
     * @property WORKER
     * @type String
     * @static
     * @final
     */

   	WORKER: "feature.worker"

   };

   /**
    * The canvas feature.
    *
    * @class CanvasFeature
    * @submodule features
    * @constructor
    */

   var CanvasFeature = function (_Feature) {
     inherits(CanvasFeature, _Feature);

     function CanvasFeature() {
       classCallCheck(this, CanvasFeature);

       var _this = possibleConstructorReturn(this, (CanvasFeature.__proto__ || Object.getPrototypeOf(CanvasFeature)).call(this));

       _this.supported = _this.root.CanvasRenderingContext2D !== undefined;

       return _this;
     }

     return CanvasFeature;
   }(Feature);

   /**
    * The file API feature.
    *
    * @class FileFeature
    * @submodule features
    * @constructor
    */

   var FileFeature = function (_Feature) {
   	inherits(FileFeature, _Feature);

   	function FileFeature() {
   		classCallCheck(this, FileFeature);

   		var _this = possibleConstructorReturn(this, (FileFeature.__proto__ || Object.getPrototypeOf(FileFeature)).call(this));

   		_this.supported = _this.root.File !== undefined && _this.root.FileReader !== undefined && _this.root.FileList !== undefined && _this.root.Blob !== undefined;

   		return _this;
   	}

   	return FileFeature;
   }(Feature);

   /**
    * The typed array feature.
    *
    * @class TypedArrayFeature
    * @submodule features
    * @constructor
    */

   var TypedArrayFeature = function (_Feature) {
     inherits(TypedArrayFeature, _Feature);

     function TypedArrayFeature() {
       classCallCheck(this, TypedArrayFeature);

       var _this = possibleConstructorReturn(this, (TypedArrayFeature.__proto__ || Object.getPrototypeOf(TypedArrayFeature)).call(this));

       _this.supported = _this.root.ArrayBuffer !== undefined;

       return _this;
     }

     return TypedArrayFeature;
   }(Feature);

   /**
    * The webgl feature.
    *
    * @class WebGLFeature
    * @submodule features
    * @constructor
    */

   var WebGLFeature = function (_Feature) {
   			inherits(WebGLFeature, _Feature);

   			function WebGLFeature() {
   						classCallCheck(this, WebGLFeature);

   						var _this = possibleConstructorReturn(this, (WebGLFeature.__proto__ || Object.getPrototypeOf(WebGLFeature)).call(this));

   						_this.supported = function (root) {

   									var supported = root.WebGLRenderingContext !== undefined;
   									var canvas = void 0,
   									    context = void 0;

   									if (supported) {

   												canvas = document.createElement("canvas");
   												context = canvas.getContext("webgl");

   												if (context === null) {

   															if (canvas.getContext("experimental-webgl") === null) {

   																		supported = false;
   															}
   												}
   									}

   									return supported;
   						}(_this.root);

   						return _this;
   			}

   			return WebGLFeature;
   }(Feature);

   /**
    * The web worker feature.
    *
    * @class WorkerFeature
    * @submodule features
    * @constructor
    */

   var WorkerFeature = function (_Feature) {
     inherits(WorkerFeature, _Feature);

     function WorkerFeature() {
       classCallCheck(this, WorkerFeature);

       var _this = possibleConstructorReturn(this, (WorkerFeature.__proto__ || Object.getPrototypeOf(WorkerFeature)).call(this));

       _this.supported = _this.root.Worker !== undefined;

       return _this;
     }

     return WorkerFeature;
   }(Feature);

   /**
    * A collection of feature components.
    *
    * @module feature-detector
    * @submodule features
    */

   /**
    * Detects whether certain features are supported in the current environment.
    *
    * @class Detector
    * @submodule core
    * @constructor
    */

   var Detector = function Detector() {
   	classCallCheck(this, Detector);


   	/**
     * A feature map.
     *
     * Each {{#crossLink "Feature"}}{{/crossLink}} in the map can be retrieved
     * using its respective {{#crossLink "FeatureId"}}{{/crossLink}}.
     *
     * @property features
     * @type Map
     */

   	this.features = new Map();

   	this.features.set(FeatureId.CANVAS, new CanvasFeature());
   	this.features.set(FeatureId.FILE, new FileFeature());
   	this.features.set(FeatureId.TYPED_ARRAY, new TypedArrayFeature());
   	this.features.set(FeatureId.WEBGL, new WebGLFeature());
   	this.features.set(FeatureId.WORKER, new WorkerFeature());
   };

   /**
    * Core components.
    *
    * @module feature-detector
    * @submodule core
    */

   /**
    * Exposure of the library components.
    *
    * @module feature-detector
    * @main feature-detector
    */

   exports.Detector = Detector;
   exports.Feature = Feature;
   exports.FeatureId = FeatureId;
   exports.CanvasFeature = CanvasFeature;
   exports.FileFeature = FileFeature;
   exports.TypedArrayFeature = TypedArrayFeature;
   exports.WebGLFeature = WebGLFeature;
   exports.WorkerFeature = WorkerFeature;

   Object.defineProperty(exports, '__esModule', { value: true });

})));

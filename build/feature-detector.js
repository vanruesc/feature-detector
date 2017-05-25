/**
 * feature-detector v0.1.1 build May 25 2017
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

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();









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
   */

  var Feature = function () {

  	/**
    * Constructs a new feature.
    *
    * @param {String} [name=null] - The name of the feature.
    */

  	function Feature() {
  		var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  		classCallCheck(this, Feature);


  		/**
     * The name of this feature.
     *
     * @type {String}
     */

  		this.name = name;

  		/**
     * The global scope of the current environment.
     *
     * This field assumes one of the following values depending on the
     * environment:
     *  - browser: window
     *  - worker: self
     *  - node.js: global
     *  - unknown: this
     *
     * @type {Object}
     * @protected
     */

  		this.root = (typeof self === "undefined" ? "undefined" : _typeof(self)) === "object" && self.self === self ? self : (typeof global === "undefined" ? "undefined" : _typeof(global)) === "object" && global.global === global ? global : this;

  		/**
     * Indicates whether this feature is supported.
     *
     * @type {Boolean}
     * @default false
     */

  		this.supported = false;
  	}

  	/**
    * Returns a string representation of this object.
    *
    * @return {String} The string representation.
    */

  	createClass(Feature, [{
  		key: "toString",
  		value: function toString() {

  			return this.name;
  		}
  	}]);
  	return Feature;
  }();

  /**
   * An enumeration of feature ids.
   *
   * @type {Object}
   * @property {String} CANVAS - The identifier of the Canvas feature.
   * @property {String} FILE - The identifier of the File feature.
   * @property {String} TYPED_ARRAY - The identifier of the Typed Array feature.
   * @property {String} WEBGL - The identifier of the WebGL feature.
   * @property {String} WORKER - The identifier of the Web Worker feature.
   */

  var FeatureId = {

    CANVAS: "feature.canvas",
    FILE: "feature.file",
    TYPED_ARRAY: "feature.typed-array",
    WEBGL: "feature.webgl",
    WORKER: "feature.worker"

  };

  /**
   * The canvas feature.
   */

  var CanvasFeature = function (_Feature) {
  	inherits(CanvasFeature, _Feature);

  	/**
    * Constructs a new Canvas feature.
    */

  	function CanvasFeature() {
  		classCallCheck(this, CanvasFeature);

  		/**
     * Indicates whether the Canvas feature is supported.
     *
     * @type {Boolean}
     */

  		var _this = possibleConstructorReturn(this, (CanvasFeature.__proto__ || Object.getPrototypeOf(CanvasFeature)).call(this, "Canvas"));

  		_this.supported = _this.root.CanvasRenderingContext2D !== undefined;

  		return _this;
  	}

  	return CanvasFeature;
  }(Feature);

  /**
   * The File API feature.
   */

  var FileFeature = function (_Feature) {
  	inherits(FileFeature, _Feature);

  	/**
    * Constructs a new File feature.
    */

  	function FileFeature() {
  		classCallCheck(this, FileFeature);

  		/**
     * Indicates whether the File API is supported.
     *
     * @type {Boolean}
     */

  		var _this = possibleConstructorReturn(this, (FileFeature.__proto__ || Object.getPrototypeOf(FileFeature)).call(this, "File"));

  		_this.supported = _this.root.File !== undefined && _this.root.FileReader !== undefined && _this.root.FileList !== undefined && _this.root.Blob !== undefined;

  		return _this;
  	}

  	return FileFeature;
  }(Feature);

  /**
   * The Typed Array feature.
   */

  var TypedArrayFeature = function (_Feature) {
  	inherits(TypedArrayFeature, _Feature);

  	/**
    * Constructs a new Typed Array feature.
    */

  	function TypedArrayFeature() {
  		classCallCheck(this, TypedArrayFeature);

  		/**
     * Indicates whether the Typed Array feature is supported.
     *
     * @type {Boolean}
     */

  		var _this = possibleConstructorReturn(this, (TypedArrayFeature.__proto__ || Object.getPrototypeOf(TypedArrayFeature)).call(this, "Typed Array"));

  		_this.supported = _this.root.ArrayBuffer !== undefined;

  		return _this;
  	}

  	return TypedArrayFeature;
  }(Feature);

  /**
   * The WebGL feature.
   */

  var WebGLFeature = function (_Feature) {
  		inherits(WebGLFeature, _Feature);

  		/**
     * Constructs a new WebGL feature.
     */

  		function WebGLFeature() {
  				classCallCheck(this, WebGLFeature);

  				/**
       * Indicates whether the WebGL feature is supported.
       *
       * @type {Boolean}
       */

  				var _this = possibleConstructorReturn(this, (WebGLFeature.__proto__ || Object.getPrototypeOf(WebGLFeature)).call(this, "WebGL"));

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
   * The Web Worker feature.
   */

  var WorkerFeature = function (_Feature) {
  	inherits(WorkerFeature, _Feature);

  	/**
    * Constructs a new Worker feature.
    */

  	function WorkerFeature() {
  		classCallCheck(this, WorkerFeature);

  		/**
     * Indicates whether the Worker feature is supported.
     *
     * @type {Boolean}
     */

  		var _this = possibleConstructorReturn(this, (WorkerFeature.__proto__ || Object.getPrototypeOf(WorkerFeature)).call(this, "Web Worker"));

  		_this.supported = _this.root.Worker !== undefined;

  		return _this;
  	}

  	return WorkerFeature;
  }(Feature);

  /**
   * A collection of features.
   *
   * @module features
   */

  /**
   * Detects whether certain features are supported in the current environment.
   */

  var Detector = function () {

  	/**
    * Constructs a new Detector.
    */

  	function Detector() {
  		classCallCheck(this, Detector);


  		/**
     * A feature map.
     *
     * Each Feature in the map can be retrieved using its respective FeatureId.
     * Custom Features may also be added to this map.
     *
     * @type {Map}
     */

  		this.features = new Map();

  		this.features.set(FeatureId.CANVAS, new CanvasFeature());
  		this.features.set(FeatureId.FILE, new FileFeature());
  		this.features.set(FeatureId.TYPED_ARRAY, new TypedArrayFeature());
  		this.features.set(FeatureId.WEBGL, new WebGLFeature());
  		this.features.set(FeatureId.WORKER, new WorkerFeature());
  	}

  	/**
    * Creates a list of either missing or supported features.
    *
    * This search can be limited to a subset of features.
    *
    * @private
    * @param {Boolean} missing - Whether only missing features should be returned.
    * @param {FeatureId[]} featureIds - The ids of the features that you are interested in. If none are supplied, all features will be checked.
    * @return {Feature[]} A list of either missing or supported features.
    */

  	createClass(Detector, [{
  		key: "getFeatures",
  		value: function getFeatures(missing, featureIds) {

  			var features = [];

  			var featureId = void 0,
  			    feature = void 0;

  			if (featureIds.length > 0) {
  				var _iteratorNormalCompletion = true;
  				var _didIteratorError = false;
  				var _iteratorError = undefined;

  				try {

  					for (var _iterator = featureIds[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
  						featureId = _step.value;


  						feature = this.features.get(featureId);

  						if (feature !== undefined && feature.supported === !missing) {

  							features.push(feature);
  						}
  					}
  				} catch (err) {
  					_didIteratorError = true;
  					_iteratorError = err;
  				} finally {
  					try {
  						if (!_iteratorNormalCompletion && _iterator.return) {
  							_iterator.return();
  						}
  					} finally {
  						if (_didIteratorError) {
  							throw _iteratorError;
  						}
  					}
  				}
  			} else {
  				var _iteratorNormalCompletion2 = true;
  				var _didIteratorError2 = false;
  				var _iteratorError2 = undefined;

  				try {

  					for (var _iterator2 = this.features.values()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
  						feature = _step2.value;


  						if (feature.supported === !missing) {

  							features.push(feature);
  						}
  					}
  				} catch (err) {
  					_didIteratorError2 = true;
  					_iteratorError2 = err;
  				} finally {
  					try {
  						if (!_iteratorNormalCompletion2 && _iterator2.return) {
  							_iterator2.return();
  						}
  					} finally {
  						if (_didIteratorError2) {
  							throw _iteratorError2;
  						}
  					}
  				}
  			}

  			return features.length > 0 ? features : null;
  		}

  		/**
     * Returns a list of missing features.
     *
     * This search can be limited to a subset of features.
     *
     * @param {FeatureId} featureIds - The ids of the features that you are interested in. If none are supplied, all features will be checked.
     * @return {Feature[]} A list of missing features or null if there are none.
     */

  	}, {
  		key: "getMissingFeatures",
  		value: function getMissingFeatures() {
  			for (var _len = arguments.length, featureIds = Array(_len), _key = 0; _key < _len; _key++) {
  				featureIds[_key] = arguments[_key];
  			}

  			return this.getFeatures(true, featureIds);
  		}

  		/**
     * Returns a list of supported features.
     *
     * This search can be limited to a subset of features.
     *
     * @param {FeatureId} featureIds - The ids of the features that you are interested in. If none are supplied, all features will be checked.
     * @return {Feature[]} A list of supported features or null if there are none.
     */

  	}, {
  		key: "getSupportedFeatures",
  		value: function getSupportedFeatures() {
  			for (var _len2 = arguments.length, featureIds = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
  				featureIds[_key2] = arguments[_key2];
  			}

  			return this.getFeatures(false, featureIds);
  		}

  		/**
     * Retrieves the requested feature.
     *
     * This is a shortcut to the get method of the features map.
     *
     * @param {FeatureId} featureId - The id of the feature.
     * @return {Feature} The requested feature or undefined if it doesn't exist.
     */

  	}, {
  		key: "get",
  		value: function get$$1(featureId) {

  			return this.features.get(featureId);
  		}

  		/**
     * Defines a custom feature.
     *
     * This is a shortcut to the set method of the features map.
     *
     * @param {FeatureId} featureId - The id of the feature.
     * @param {Feature} feature - The feature.
     */

  	}, {
  		key: "set",
  		value: function set$$1(featureId, feature) {

  			return this.features.set(featureId, feature);
  		}

  		/**
     * Returns a human-readable info message for the given feature.
     *
     * @param {Feature} feature - A feature.
     * @return {String} The info message.
     */

  	}, {
  		key: "getMessage",
  		value: function getMessage(feature) {

  			return "The " + feature + " feature is " + (feature.supported ? "supported" : "missing") + " in the current environment.";
  		}
  	}]);
  	return Detector;
  }();

  /**
   * Core components.
   *
   * @module core
   */

  /**
   * Exposure of the library components.
   *
   * @module feature-detector
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

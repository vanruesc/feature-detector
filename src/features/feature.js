/**
 * An abstract feature.
 *
 * @class Feature
 * @submodule features
 * @constructor
 */

export class Feature {

	constructor() {

		/**
		 * The name of this feature.
		 *
		 * @property name
		 * @type String
		 */

		this.name = null;

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
		 * @property root
		 * @type Object
		 * @protected
		 */

		this.root = (typeof self === "object" && self.self === self) ? self :
			(typeof global === "object" && global.global === global) ? global : this;

		/**
		 * Indicates whether this feature is supported.
		 *
		 * @property supported
		 * @type Boolean
		 * @default false
		 */

		this.supported = false;

	}

	toString() {

		return this.name;

	}

}

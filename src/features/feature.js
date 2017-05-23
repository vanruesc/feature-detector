/**
 * An abstract feature.
 */

export class Feature {

	/**
	 * Constructs a new feature.
	 *
	 * @param {String} [name=null] - The name of the feature.
	 */

	constructor(name = null) {

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

		this.root = (typeof self === "object" && self.self === self) ? self :
			(typeof global === "object" && global.global === global) ? global : this;

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

	toString() {

		return this.name;

	}

}

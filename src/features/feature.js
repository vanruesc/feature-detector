/**
 * An abstract feature.
 */

export class Feature {

	constructor() {

		/**
		 * The name of this feature.
		 *
		 * @type String
		 */

		this.name = null;

		/**
		 * The global scope of the current environment.
		 *
		 * <p>This field assumes one of the following values depending on the
		 * environment:</p>
		 * <ul>
		 *  <li>browser: window</li>
		 *  <li>worker: self</li>
		 *  <li>node.js: global</li>
		 *  <li>unknown: this</li>
		 * </ul>
		 *
		 * @type Object
		 * @protected
		 */

		this.root = (typeof self === "object" && self.self === self) ? self :
			(typeof global === "object" && global.global === global) ? global : this;

		/**
		 * Indicates whether this feature is supported.
		 *
		 * @type Boolean
		 * @default false
		 */

		this.supported = false;

	}

	toString() {

		return this.name;

	}

}

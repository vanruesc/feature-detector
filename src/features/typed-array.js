import { Feature } from "./feature.js";

/**
 * The Typed Array feature.
 */

export class TypedArrayFeature extends Feature {

	/**
	 * Constructs a new Typed Array feature.
	 */

	constructor() {

		super("Typed Array");

		/**
		 * Indicates whether the Typed Array feature is supported.
		 *
		 * @type {Boolean}
		 */

		this.supported = (this.root.ArrayBuffer !== undefined);

	}

}

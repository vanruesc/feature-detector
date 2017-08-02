import { Feature } from "./Feature.js";

/**
 * The canvas feature.
 */

export class CanvasFeature extends Feature {

	/**
	 * Constructs a new Canvas feature.
	 */

	constructor() {

		super("Canvas");

		/**
		 * Indicates whether the Canvas feature is supported.
		 *
		 * @type {Boolean}
		 */

		this.supported = (this.root.CanvasRenderingContext2D !== undefined);

	}

}

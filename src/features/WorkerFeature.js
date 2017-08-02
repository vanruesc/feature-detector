import { Feature } from "./Feature.js";

/**
 * The Web Worker feature.
 */

export class WorkerFeature extends Feature {

	/**
	 * Constructs a new Worker feature.
	 */

	constructor() {

		super("Web Worker");

		/**
		 * Indicates whether the Worker feature is supported.
		 *
		 * @type {Boolean}
		 */

		this.supported = (this.root.Worker !== undefined);

	}

}

import { Feature } from "./Feature.js";

/**
 * The File API feature.
 */

export class FileFeature extends Feature {

	/**
	 * Constructs a new File feature.
	 */

	constructor() {

		super("File");

		/**
		 * Indicates whether the File API is supported.
		 *
		 * @type {Boolean}
		 */

		this.supported = (
			this.root.File !== undefined &&
			this.root.FileReader !== undefined &&
			this.root.FileList !== undefined &&
			this.root.Blob !== undefined
		);

	}

}

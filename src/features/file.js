import { Feature } from "./feature.js";

/**
 * The file API feature.
 *
 * @class FileFeature
 * @constructor
 */

export class FileFeature extends Feature {

	constructor() {

		super();

		this.name = "File";

		this.supported = (
			this.root.File !== undefined &&
			this.root.FileReader !== undefined &&
			this.root.FileList !== undefined &&
			this.root.Blob !== undefined
		);

	}

}

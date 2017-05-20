import { Feature } from "./feature.js";

/**
 * The web worker feature.
 *
 * @class WorkerFeature
 * @submodule features
 * @constructor
 */

export class WorkerFeature extends Feature {

	constructor() {

		super();

		this.name = "Web Worker";

		this.supported = (this.root.Worker !== undefined);

	}

}

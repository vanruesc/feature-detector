import { Feature } from "./feature.js";

/**
 * The canvas feature.
 *
 * @class CanvasFeature
 * @submodule features
 * @constructor
 */

export class CanvasFeature extends Feature {

	constructor() {

		super();

		this.supported = (this.root.CanvasRenderingContext2D !== undefined);

	}

}

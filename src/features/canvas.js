import { Feature } from "./feature.js";

/**
 * The canvas feature.
 *
 * @class CanvasFeature
 * @constructor
 */

export class CanvasFeature extends Feature {

	constructor() {

		super();

		this.name = "Canvas";

		this.supported = (this.root.CanvasRenderingContext2D !== undefined);

	}

}

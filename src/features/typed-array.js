import { Feature } from "./feature.js";

/**
 * The typed array feature.
 *
 * @class TypedArrayFeature
 * @submodule features
 * @constructor
 */

export class TypedArrayFeature extends Feature {

	constructor() {

		super();

		this.name = "Typed Array";

		this.supported = (this.root.ArrayBuffer !== undefined);

	}

}

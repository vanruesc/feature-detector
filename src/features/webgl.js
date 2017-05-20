import { Feature } from "./feature.js";

/**
 * The webgl feature.
 *
 * @class WebGLFeature
 * @submodule features
 * @constructor
 */

export class WebGLFeature extends Feature {

	constructor() {

		super();

		this.name = "WebGL";

		this.supported = (function(root) {

			let supported = (root.WebGLRenderingContext !== undefined);
			let canvas, context;

			if(supported) {

				canvas = document.createElement("canvas");
				context = canvas.getContext("webgl");

				if(context === null) {

					if(canvas.getContext("experimental-webgl") === null) {

						supported = false;

					}

				}

			}

			return supported;

		}(this.root));

	}

}

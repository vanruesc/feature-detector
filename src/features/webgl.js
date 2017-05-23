import { Feature } from "./feature.js";

/**
 * The WebGL feature.
 */

export class WebGLFeature extends Feature {

	/**
	 * Constructs a new WebGL feature.
	 */

	constructor() {

		super("WebGL");

		/**
		 * Indicates whether the WebGL feature is supported.
		 *
		 * @type {Boolean}
		 */

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

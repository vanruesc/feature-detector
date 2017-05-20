import {
	FeatureId,
	CanvasFeature,
	FileFeature,
	TypedArrayFeature,
	WebGLFeature,
	WorkerFeature
} from "../features";

/**
 * Detects whether certain features are supported in the current environment.
 *
 * @class Detector
 * @submodule core
 * @constructor
 */

export class Detector {

	constructor() {

		/**
		 * A feature map.
		 *
		 * Each {{#crossLink "Feature"}}{{/crossLink}} in the map can be retrieved
		 * using its respective {{#crossLink "FeatureId"}}{{/crossLink}}.
		 *
		 * Custom Features may also be added to this map.
		 *
		 * @property features
		 * @type Map
		 */

		this.features = new Map();

		this.features.set(FeatureId.CANVAS, new CanvasFeature());
		this.features.set(FeatureId.FILE, new FileFeature());
		this.features.set(FeatureId.TYPED_ARRAY, new TypedArrayFeature());
		this.features.set(FeatureId.WEBGL, new WebGLFeature());
		this.features.set(FeatureId.WORKER, new WorkerFeature());

	}

}

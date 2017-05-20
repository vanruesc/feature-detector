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
 * @constructor
 */

export class Detector {

	constructor() {

		/**
		 * A feature map.
		 *
		 * Each Feature in the map can be retrieved using its respective FeatureId.
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

	/**
	 * Retrieves the requested feature.
	 *
	 * This is a shortcut to the get method of the features map.
	 *
	 * @method get
	 * @param {FeatureId} featureId - The id of the feature.
	 * @return {Feature} The requested feature or undefined if it doesn't exist.
	 */

	get(featureId) {

		return this.features.get(featureId);

	}

	/**
	 * Returns a human-readable info message for the given feature.
	 *
	 * @method getMessage
	 * @param {Feature} feature - A feature.
	 * @return {String} The info message.
	 */

	getMessage(feature) {

		return "The " + feature + " feature is " +
			(feature.supported ? "supported" : "missing") +
			" in the current environment.";

	}

}

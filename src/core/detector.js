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
 */

export class Detector {

	/**
	 * Constructs a new Detector.
	 */

	constructor() {

		/**
		 * A feature map.
		 *
		 * Each Feature in the map can be retrieved using its respective FeatureId.
		 * Custom Features may also be added to this map.
		 *
		 * @type {Map}
		 */

		this.features = new Map();

		this.features.set(FeatureId.CANVAS, new CanvasFeature());
		this.features.set(FeatureId.FILE, new FileFeature());
		this.features.set(FeatureId.TYPED_ARRAY, new TypedArrayFeature());
		this.features.set(FeatureId.WEBGL, new WebGLFeature());
		this.features.set(FeatureId.WORKER, new WorkerFeature());

	}

	/**
	 * Creates a list of either missing or supported features.
	 *
	 * This search can be limited to a subset of features.
	 *
	 * @private
	 * @param {Boolean} missing - Whether only missing features should be returned.
	 * @param {FeatureId[]} featureIds - The ids of the features that you are interested in. If none are supplied, all features will be checked.
	 * @return {Feature[]} A list of either missing or supported features.
	 */

	getFeatures(missing, featureIds) {

		const features = [];

		let featureId, feature;

		if(featureIds.length > 0) {

			for(featureId of featureIds) {

				feature = this.features.get(featureId);

				if(feature !== undefined && feature.supported === !missing) {

					features.push(feature);

				}

			}

		} else {

			for(feature of this.features.values()) {

				if(feature.supported === !missing) {

					features.push(feature);

				}

			}

		}

		return (features.length > 0) ? features : null;

	}

	/**
	 * Returns a list of missing features.
	 *
	 * This search can be limited to a subset of features.
	 *
	 * @param {FeatureId} featureIds - The ids of the features that you are interested in. If none are supplied, all features will be checked.
	 * @return {Feature[]} A list of missing features or null if there are none.
	 */

	getMissingFeatures(...featureIds) {

		return this.getFeatures(true, featureIds);

	}

	/**
	 * Returns a list of supported features.
	 *
	 * This search can be limited to a subset of features.
	 *
	 * @param {FeatureId} featureIds - The ids of the features that you are interested in. If none are supplied, all features will be checked.
	 * @return {Feature[]} A list of supported features or null if there are none.
	 */

	getSupportedFeatures(...featureIds) {

		return this.getFeatures(false, featureIds);

	}

	/**
	 * Retrieves the requested feature.
	 *
	 * This is a shortcut to the get method of the features map.
	 *
	 * @param {FeatureId} featureId - The id of the feature.
	 * @return {Feature} The requested feature or undefined if it doesn't exist.
	 */

	get(featureId) {

		return this.features.get(featureId);

	}

	/**
	 * Defines a custom feature.
	 *
	 * This is a shortcut to the set method of the features map.
	 *
	 * @param {FeatureId} featureId - The id of the feature.
	 * @param {Feature} feature - The feature.
	 */

	set(featureId, feature) {

		return this.features.set(featureId, feature);

	}

	/**
	 * Returns a human-readable info message for the given feature.
	 *
	 * @param {Feature} feature - A feature.
	 * @return {String} The info message.
	 */

	getMessage(feature) {

		return "The " + feature + " feature is " +
			(feature.supported ? "supported" : "missing") +
			" in the current environment.";

	}

}

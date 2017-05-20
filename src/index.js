/**
 * Exposure of the library components.
 *
 * @module feature-detector
 * @main feature-detector
 */

export { Detector } from "./core";

export {
	Feature,
	FeatureId,
	CanvasFeature,
	FileFeature,
	TypedArrayFeature,
	WebGLFeature,
	WorkerFeature
} from "./features";

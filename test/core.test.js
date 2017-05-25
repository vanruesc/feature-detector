"use strict";

const lib = require("../build/feature-detector.js");

module.exports = {

	"Detector": {

		"can be instantiated": function(test) {

			const detector = new lib.Detector();

			test.ok(detector);
			test.done();

		},

		"can retrieve features": function(test) {

			const detector = new lib.Detector();

			const TEST_ID = "test";
			const testFeature = new lib.Feature("Test");

			testFeature.supported = true;
			detector.set(TEST_ID, testFeature);

			test.ok(detector.get(TEST_ID), "should find and return the requested feature");
			test.equal(detector.get(null), undefined, "should return undefined if the requested feature doesn't exist");
			test.done();

		},

		"can create a list of missing features": function(test) {

			const detector = new lib.Detector();

			const TEST_ID = "test";
			const testFeature = new lib.Feature("Test");

			testFeature.supported = false;
			detector.set(TEST_ID, testFeature);

			test.ok(detector.getMissingFeatures().length > 0, "should return a list containing at least one missing feature");
			test.done();

		},

		"can create a list of supported features": function(test) {

			const detector = new lib.Detector();

			const TEST_ID = "test";
			const testFeature = new lib.Feature("Test");

			testFeature.supported = true;
			detector.set(TEST_ID, testFeature);

			test.ok(detector.getSupportedFeatures().length > 0, "should return a list containing at least one supported feature");
			test.done();

		}

	}

};

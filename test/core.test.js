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

			const TEST_ID1 = "test1";
			const TEST_ID2 = "test2";
			const testFeature1 = new lib.Feature("Test 1");
			const testFeature2 = new lib.Feature("Test 2");

			testFeature1.supported = false;
			testFeature2.supported = true;
			detector.set(TEST_ID1, testFeature1);
			detector.set(TEST_ID2, testFeature2);

			test.ok(detector.getMissingFeatures().length > 0, "should return a list containing at least one missing feature");
			test.equal(detector.getMissingFeatures(TEST_ID1, TEST_ID2)[0].supported, false, "should return a list containing exactly one missing feature");
			test.done();

		},

		"can create a list of supported features": function(test) {

			const detector = new lib.Detector();

			const TEST_ID1 = "test1";
			const TEST_ID2 = "test2";
			const testFeature1 = new lib.Feature("Test 1");
			const testFeature2 = new lib.Feature("Test 2");

			testFeature1.supported = false;
			testFeature2.supported = true;
			detector.set(TEST_ID1, testFeature1);
			detector.set(TEST_ID2, testFeature2);

			test.ok(detector.getSupportedFeatures().length > 0, "should return a list containing at least one supported feature");
			test.equal(detector.getSupportedFeatures(TEST_ID1, TEST_ID2)[0].supported, true, "should return a list containing exactly one supported feature");
			test.done();

		}

	}

};

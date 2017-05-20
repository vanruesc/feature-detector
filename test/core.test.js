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

			test.ok(detector.get(lib.FeatureId.CANVAS), "should find and return the requested feature");
			test.equal(detector.get(null), undefined, "should return undefined if the requested feature doesn't exist");
			test.done();

		}

	}

};

"use strict";

const lib = require("../build/feature-detector.js");

module.exports = {

	"Detector": {

		"can be instantiated": function(test) {

			const detector = new lib.Detector();

			test.ok(detector);
			test.done();

		}

	}

};

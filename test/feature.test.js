"use strict";

const lib = require("../build/feature-detector.js");

module.exports = {

	"Canvas": {

		"can be instantiated": function(test) {

			const feature = new lib.CanvasFeature();

			test.ok(feature);
			test.equal(feature.supported, false, "should detect that the Canvas API is not supported");
			test.done();

		}

	},

	"File": {

		"can be instantiated": function(test) {

			const feature = new lib.FileFeature();

			test.ok(feature);
			test.equal(feature.supported, false, "should detect that the File API is not supported");
			test.done();

		}

	},

	"Typed Array": {

		"can be instantiated": function(test) {

			const feature = new lib.TypedArrayFeature();

			test.ok(feature);
			test.equal(feature.supported, true, "should detect that Typed Arrays are supported");
			test.done();

		}

	},

	"WebGL": {

		"can be instantiated": function(test) {

			const feature = new lib.WebGLFeature();

			test.ok(feature);
			test.equal(feature.supported, false, "should detect that the WebGL API is not supported");
			test.done();

		}

	},

	"Worker": {

		"can be instantiated": function(test) {

			const feature = new lib.WorkerFeature();

			test.ok(feature);
			test.equal(feature.supported, false, "should detect that the Worker API is not supported");
			test.done();

		}

	}

};

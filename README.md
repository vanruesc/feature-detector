# Feature Detector

[![Build status](https://travis-ci.org/vanruesc/feature-detector.svg?branch=master)](https://travis-ci.org/vanruesc/feature-detector)
[![npm version](https://badge.fury.io/js/feature-detector.svg)](http://badge.fury.io/js/feature-detector)
[![Dependencies](https://david-dm.org/vanruesc/feature-detector.svg?branch=master)](https://david-dm.org/vanruesc/feature-detector)

An extensible tool for detecting environment features such as
[WebGL](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API) or
[Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API).

*[API Reference](http://vanruesc.github.io/feature-detector/docs)*


## Installation

```sh
npm install feature-detector
``` 


## Usage

##### Basics

```javascript
import { Detector, FeatureId } from "feature-detector";

const detector = new Detector();
const feature = detector.get(FeatureId.WEBGL);

console.log(feature.supported);
console.log(detector.getMessage(feature));
```

##### Custom Features

```javascript
import { Feature } from "feature-detector";

export class MyFeature extends Feature {

	constructor() {

		super();

		this.name = "My Feature";

		// Check if your feature is supported in this environment.
		// Note that this.root serves as a reference to the global scope.
		this.supported = true || false;

	}

}
```

```javascript
import { Detector } from "feature-detector";
import { MyFeature } from "./MyFeature.js";

const detector = new Detector();
const MY_ID = "my-feature";

detector.set(MY_ID, new MyFeature());
```


## Contributing

Maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.

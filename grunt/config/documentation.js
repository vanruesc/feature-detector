module.exports = {

	compile: {
		files: [{
			"expand": true,
			"cwd": "src",
			"src": ["**/*.js"]
		}],
		options: {
			destination: "docs"
		}
	}

};

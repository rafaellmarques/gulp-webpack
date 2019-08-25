// Packages
const gulp = require("gulp");
const webpack = require("webpack");
const webpackstream = require("webpack-stream");
const webpackconfig = require("../webpack.config");

// Paths
const paths = {
	input: "./src/assets/js/bundle.js",
	output: "./dist/js/"
};

// Task
scriptTranspilation = () => {
	return gulp
		.src(paths.input)
		.pipe(webpackstream(webpackconfig, webpack))
		.pipe(gulp.dest(paths.output));
};

// Export
module.exports = {
	build: scriptTranspilation
};

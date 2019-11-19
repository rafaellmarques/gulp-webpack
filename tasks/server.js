// Packages
const gulp = require("gulp");
const connect = require("gulp-connect");

// Task
serverConnect = () => {
	return connect.server({
		base: "http://localhost",
		port: 8541,
		root: "./dist",
		livereload: true
	});
};

// Export
module.exports = {
	build: serverConnect
};

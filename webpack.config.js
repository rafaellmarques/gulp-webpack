const path = require("path");

module.exports = {
	mode: "none",
	output: {
		filename: "bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
				include: [path.resolve(__dirname, "./src/assets/js")],
				loader: "babel-loader"
			}
		]
	}
};

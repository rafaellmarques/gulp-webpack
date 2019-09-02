const path = require("path");

module.exports = {
	mode: "none",
	output: {
		filename: "store.js"
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

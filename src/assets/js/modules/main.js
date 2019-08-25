const main = {
	// Função olá;
	hello() {
		const body = document.querySelector("body");
		if (!!body) {
			body.classList.add("home");
			body.innerHTML = "Hello, this project was build with Gulp, Babel, Webpack";
			alert("Hello, this project was build with Gulp, Babel, Webpack");
			console.log("Hello, this project was build with Gulp, Babel, Webpack");
		}
	}
};

export { main };

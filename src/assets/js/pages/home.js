import { main } from "../modules/main";

const home = {
	init() {
		main.instagram();
		main.createCarousel();
		console.log("Page: Home");
	}
};

export { home };

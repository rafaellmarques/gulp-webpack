import { main } from "../modules/main";

const pages = {
	init() {
		main.pageLoader(3);
		main.minifiedHeader();
	}
};

export { pages };

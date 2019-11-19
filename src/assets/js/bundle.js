import { main } from "./modules/main";
import { home } from "./pages/home";

const init = () => {
	if (main.pageName("category")) {
		category.init();
	}
	if (main.pageName("department")) {
		department.init();
	}
	if (main.pageName("home")) {
		home.init();
	}
	if (main.pageName("login")) {
		login.init();
	}
	if (main.pageName("product")) {
		product.init();
	}
};

window.onload = init;

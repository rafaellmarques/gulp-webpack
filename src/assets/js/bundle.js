// Modules
import { main } from "./modules/main";
// Pages
import { pages } from "./pages/pages";
import { category } from "./pages/category";
import { department } from "./pages/department";
import { home } from "./pages/home";
import { login } from "./pages/login";
import { product } from "./pages/product";

const init = () => {
	if (!main.pageName("error")) {
		pages.init();
	}
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

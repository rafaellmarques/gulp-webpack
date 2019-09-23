import glide from "@glidejs/glide";

const main = {
	// Função olá;
	hello() {
		alert("Hello");
	},

	// Função para validar a classe da tag body de cada página ativa;
	pageName(className) {
		const body = document.querySelectorAll("body")[0];
		return body.classList.contains(className);
	},

	pageLoader(time = 0) {
		const loader = document.querySelector(".loader");
		if (!!loader) {
			if (time == 0) {
				main.remove(loader);
			} else {
				let seconds = time * 1000;
				setTimeout(() => main.remove(loader), seconds);
			}
		}
	},

	// Remove o elemento
	remove(element) {
		element.parentNode.removeChild(element);
	},

	// Inserir o elemento What antes de um elemento Where
	outBefore(what, where) {
		where.parentNode.insertBefore(what, where);
	},

	// Inserir o elemento What depois de um elemento Where
	outAfter(what, where) {
		where.parentNode.insertBefore(what, where.nextSibling);
	},

	// Inserir o elemento What como primeiro filho do elemento Where
	inBefore(what, where) {
		where.insertBefore(what, where.firstChild);
	},

	// Inserir elemento What como ultimo filho do elemento Where
	inAfter(what, where) {
		where.insertBefore(what, where.lastChild);
	},

	orderAscending(element) {
		element.sort((a, b) => {
			if (a.textContent < b.textContent) {
				return -1;
			} else if (a.textContent > b.textContent) {
				return 1;
			} else {
				return 0;
			}
		});
	},

	orderDescending(element) {
		element.sort((a, b) => {
			if (a.textContent > b.textContent) {
				return -1;
			} else if (a.textContent < b.textContent) {
				return 1;
			} else {
				return 0;
			}
		});
	},

	// Ordena uma lista
	orderList(element) {
		const list = document.querySelectorAll(element);
		if (!!list) {
			list.forEach(elementList => {
				const listItem = elementList.children;
				if (!!listItem) {
					const newList = [];
					for (let i = 0; i < listItem.length; i++) {
						newList.push(listItem[i]);
					}
					if (elementList.classList.contains("list-ascending")) {
						main.orderAscending(newList);
					} else if (elementList.classList.contains("list-descending")) {
						main.orderDescending(newList);
					} else {
						//todo
					}
					for (let i = 0; i < newList.length; i++) {
						main.inAfter(newList[i], elementList);
					}
				}
			});
		}
	},

	minifiedHeader() {
		window.addEventListener("scroll", () => {
			const header = document.querySelector(".header");
			const showScroll = document.querySelector(".showScroll");

			showScroll ? (showScroll.innerHTML = pageYOffset + "px") : "0";
			pageYOffset >= header.clientHeight / 2 ? header.classList.add("minified") : header.classList.remove("minified");
		});
	},

	getFileName() {
		const fileField = document.querySelector(".product-file-upload-field");
		var fileLabel = document.querySelector(".product-file-upload-value");
		var fileName = "";

		fileField.addEventListener("change", e => {
			fileName = e.target.value.split("\\").pop();

			if (fileName) {
				fileLabel.innerHTML = fileName;
			}
		});

		fileField.addEventListener("focus", () => {
			fileField.classList.add("has-focus");
		});

		fileField.addEventListener("blur", () => {
			fileField.classList.remove("has-focus");
		});
	},

	getParent() {
		var item = document.querySelectorAll(".filters .item");
		if (!!item) {
			item.trim;
			item.forEach(element => {
				var itemChild = element.firstElementChild;
				if (!!itemChild && itemChild.classList.contains("item")) {
					element.removeChild(element.firstChild);
				}
			});
		}
	},

	instagram() {
		const link = "https://api.instagram.com/v1/users/self/media/recent/?access_token=";
		const token = "267545657.62f8a58.b42b65c64ea44256aa50a490a6e5bb7c";
		const instagramList = document.querySelector(".instagram-list");

		fetch(link + token)
			.then(res => res.json())
			.then(res => {
				res.data.forEach((element, index) => {
					try {
						const image = document.createElement("img");
						image.classList.add("instagram-list-image");
						image.id = element.id;
						image.src = element.images.thumbnail.url;

						const elInstagramListItem = document.createElement("li");
						elInstagramListItem.classList.add("instagram-list-item");
						elInstagramListItem.appendChild(image);

						instagramList.appendChild(elInstagramListItem);
					} catch (err) {
						console.log(err);
					}
				});
			})
			.catch(err => {
				console.log("u");
				alert("Sorry, there are no results for your search");
			});

		main.createCarroussel(instagramList, 1, false);
	},

	bannerControl() {
		const bannerList = document.querySelector(".banner-list");
		if (!!bannerList) {
			main.createCarroussel(bannerList, 1, 5000);
		}
	},

	createCarroussel(element, perview, autoplay) {
		if (!!element) {
			element.classList.add("glide__slides");
			element.parentNode.classList.add("glide__track");
			element.parentNode.setAttribute("data-glide-el", "track");
			element.parentNode.parentNode.classList.add("glide");

			new glide(element.parentNode.parentNode, {
				autoplay: autoplay,
				perView: perview,
				startAt: 0,
				type: "caroussel"
			}).mount();
		}
	}
};

export { main };

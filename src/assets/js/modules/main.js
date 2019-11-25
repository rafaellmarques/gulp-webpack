const main = {
	// Função de loader da página;
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

	// Função para validar a classe da tag body de cada página ativa;
	pageName(className) {
		const body = document.getElementsByTagName("body")[0];
		return body.classList.contains(className);
	},

	// Remover o elemento
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

	minifiedHeader() {
		window.addEventListener("scroll", () => {
			const header = document.querySelector(".header");
			parseInt(pageYOffset) >= header.clientHeight ? header.classList.add("minified") : header.classList.remove("minified");
		});
	},

	instagram() {
		const link = "https://api.instagram.com/v1/users/self/media/recent/?access_token=";
		const token = "267545657.62f8a58.b42b65c64ea44256aa50a490a6e5bb7c";
		const instagramList = document.querySelector(".instagram-list");

		if (!!instagramList) {
			fetch(link + token)
				.then(res => res.json())
				.then(res => {
					res.data.forEach(element => {
						try {
							const image = document.createElement("img");
							image.classList.add("instagram-list-image");
							image.id = element.id;
							// image.src = element.images.thumbnail.url;
							image.src = element.images.low_resolution.url;
							// image.src = element.images.standard_resolution.url;

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
		}

		setTimeout(() => {
			const instagramListItem = document.querySelectorAll(".instagram-list-item");
			console.log("Instagram Itens: " + instagramListItem.length);
		}, 1000);
	},

	createCarousel() {
		const bannerList = $(".banner-list");
		const instagramList = $(".instagram-list");
		if (!!bannerList) {
			bannerList.each(function() {
				$(".banner-list-item", $(this)).addClass(function(index) {
					return "position-" + index;
				});
			});
		}
	}
};

export { main };

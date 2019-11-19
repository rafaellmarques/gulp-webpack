const please = {
	//warnings
	showError: function(msg) {
		if (typeof msg === "string") {
			throw new Error(msg);
		} else {
			throw new Error("Message must be a string");
		}
	},

	happyMessage: function(msg) {
		if (typeof msg !== "string") {
			throw new Error("msg must be a string");
		} else {
			console.log(`%c${msg}`, "color:#16b716;text-transform:uppercase;");
		}
	},

	//cookies
	getCookie: function(cookieName) {
		let name = cookieName + "=";
		let decodedCookie = decodeURIComponent(document.cookie);
		let ca = decodedCookie.split(";");
		for (let i = 0; i < ca.length; i++) {
			let c = ca[i];
			while (c.charAt(0) == " ") {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			}
		}
		return "";
	},

	setCookie: function(cookieName, cookieValue, numberOfDays) {
		let d = new Date();
		d.setTime(d.getTime() + numberOfDays * 24 * 60 * 60 * 1000);
		let expires = "expires=" + d.toUTCString();
		if ((document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/")) {
			return true;
		} else {
			this.showError("Cookie could not be created");
		}
	},

	deleteCookie: function(cookieName) {
		if (this.setCookie(cookieName, "", 0)) {
			return true;
		} else {
			this.showError("Cookie could not be deleted");
		}
	},

	//browsers
	// Opera 8.0+
	isOpera: (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(" OPR/") >= 0,

	// Firefox 1.0+
	isFirefox: typeof InstallTrigger !== "undefined",

	// Safari 3.0+ "[object HTMLElementConstructor]"
	isSafari:
		/constructor/i.test(window.HTMLElement) ||
		(function(p) {
			return p.toString() === "[object SafariRemoteNotification]";
		})(!window["safari"] || (typeof safari !== "undefined" && safari.pushNotification)),

	// Internet Explorer 6-11
	isIE: /*@cc_on!@*/ false || !!document.documentMode,

	// Edge 20+
	isEdge: !this.isIE && !!window.StyleMedia,

	// Chrome 1+
	isChrome: !!window.chrome,

	browser: function() {
		if (this.isOpera) {
			return "opera";
		} else if (this.isFirefox) {
			return "firefox";
		} else if (this.isSafari) {
			return "safari";
		} else if (this.isIE) {
			return "ie";
		} else if (this.isEdge) {
			return "edge";
		} else if (this.isChrome) {
			return "chrome";
		}
	},

	//uri
	getQueryString: function(a) {
		a =
			a ||
			window.location.search
				.substr(1)
				.split("&")
				.concat(window.location.hash.substr(1).split("&"));

		if (typeof a === "string")
			a = a
				.split("#")
				.join("&")
				.split("&");

		if (!a) return {};

		var b = {};
		for (var i = 0; i < a.length; ++i) {
			var p = a[i].split("=");
			if (p.length != 2) continue;
			b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
		}

		return b;
	},

	//form
	validateEmail: function(email) {
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	},

	validateCPF: function(cpf) {
		cpf = cpf.replace(/[^\d]+/g, "");
		if (cpf == "") return false;
		if (
			cpf.length != 11 ||
			cpf == "00000000000" ||
			cpf == "11111111111" ||
			cpf == "22222222222" ||
			cpf == "33333333333" ||
			cpf == "44444444444" ||
			cpf == "55555555555" ||
			cpf == "66666666666" ||
			cpf == "77777777777" ||
			cpf == "88888888888" ||
			cpf == "99999999999"
		)
			return false;
		add = 0;
		for (i = 0; i < 9; i++) add += parseInt(cpf.charAt(i)) * (10 - i);
		rev = 11 - (add % 11);
		if (rev == 10 || rev == 11) rev = 0;
		if (rev != parseInt(cpf.charAt(9))) return false;
		add = 0;
		for (i = 0; i < 10; i++) add += parseInt(cpf.charAt(i)) * (11 - i);
		rev = 11 - (add % 11);
		if (rev == 10 || rev == 11) rev = 0;
		if (rev != parseInt(cpf.charAt(10))) return false;
		return true;
	},

	validateCNPJ: function(cnpj) {
		cnpj = cnpj.replace(/[^\d]+/g, "");

		if (cnpj == "") return false;

		if (cnpj.length != 14) return false;

		if (
			cnpj == "00000000000000" ||
			cnpj == "11111111111111" ||
			cnpj == "22222222222222" ||
			cnpj == "33333333333333" ||
			cnpj == "44444444444444" ||
			cnpj == "55555555555555" ||
			cnpj == "66666666666666" ||
			cnpj == "77777777777777" ||
			cnpj == "88888888888888" ||
			cnpj == "99999999999999"
		)
			return false;

		tamanho = cnpj.length - 2;
		numeros = cnpj.substring(0, tamanho);
		digitos = cnpj.substring(tamanho);
		soma = 0;
		pos = tamanho - 7;
		for (i = tamanho; i >= 1; i--) {
			soma += numeros.charAt(tamanho - i) * pos--;
			if (pos < 2) pos = 9;
		}
		resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
		if (resultado != digitos.charAt(0)) return false;

		tamanho = tamanho + 1;
		numeros = cnpj.substring(0, tamanho);
		soma = 0;
		pos = tamanho - 7;
		for (i = tamanho; i >= 1; i--) {
			soma += numeros.charAt(tamanho - i) * pos--;
			if (pos < 2) pos = 9;
		}
		resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
		if (resultado != digitos.charAt(1)) return false;

		return true;
	},

	onlyNumbers: function(str) {
		if (typeof str !== "string") {
			this.showError("Str must be a string");
			return;
		}
		return str.replace(/[^\d]+/g, "");
	},

	removeAllSpecialChars: function(str) {
		if (typeof str !== "string") {
			this.showError("Str must be a string");
			return;
		}
		return str.replace(/[^\w\s]/gi, "");
	},

	replaceSpecialChars: function(s) {
		if (typeof s !== "string") {
			this.showError("Parameter must be a string");
			return;
		}
		s = s.toLowerCase();
		s = s.trim();
		s = s.replace("á", "a");
		s = s.replace("â", "a");
		s = s.replace("ã", "a");
		s = s.replace("é", "e");
		s = s.replace("ê", "e");
		s = s.replace("í", "i");
		s = s.replace("ó", "o");
		s = s.replace("õ", "o");
		s = s.replace("ô", "o");
		s = s.replace("ú", "u");
		s = s.replace("ç", "c");

		return s;
	},

	//date
	getNiceDate: function() {
		let d = new Date();
		return `${d.getUTCFullYear()}/${d.getUTCMonth() + 1}/${d.getUTCDate()}`;
	},

	getNiceBrazilianDate: function() {
		let d = new Date();
		return `${d.getUTCDate()}/${d.getUTCMonth() + 1}/${d.getUTCFullYear()}`;
	},

	dateCalc: function(days, op) {
		if (typeof days !== "number") {
			this.showError("days must be a number");
			return;
		}

		var d = new Date(Date.now());
		if (op) {
			d.setDate(d.getUTCDate() + days);
		} else {
			d.setDate(d.getUTCDate() - days);
		}

		return d;
	},

	sumDate: function(days) {
		return this.dateCalc(days, true);
	},

	subDate: function(days) {
		return this.dateCalc(days, false);
	},

	compareDate: function(date) {
		if (typeof date !== "string") {
			this.showError("date must be a string");
			return;
		}
		if (date.length < 10) {
			this.showError("Invalid date format");
			return;
		}
		date = date.replace(/\//g, "-");
		date = date.split("-");
		if (date[0].length === 4) {
			date = `${date[0]}-${date[1]}-${date[2]} 00:00:00`;
		} else if (date[2].length === 4) {
			date = `${date[2]}-${date[1]}-${date[0]} 00:00:00`;
		} else {
			this.showError("Invalid date format");
			return;
		}

		let realDate = new Date(date).getTime();
		let currentDate = new Date(Date.now());
		currentDate = new Date(`${currentDate.getUTCFullYear()}-0${currentDate.getUTCMonth() + 1}-0${currentDate.getUTCDate()} 00:00:00`).getTime();

		if (realDate > currentDate) {
			return "greater";
		} else if (realDate < currentDate) {
			return "smaller";
		} else {
			return "equal";
		}
	},

	//front
	blackout: function(opacity = "0.5", color = "#000") {
		var b = document.querySelector("body");
		var blackout = document.createElement("div");
		blackout.setAttribute("class", "blackout");
		blackout.style = `width:100%;height:100%;position:fixed;background-color:${color};opacity: ${opacity};top:0;left:0;z-index:99;cursor:pointer;`;
		blackout.addEventListener("click", function() {
			this.parentNode.removeChild(this);
		});
		b.appendChild(blackout);
	},

	ieWarning: function(opacity = "0.7", color = "#C00") {
		if (this.browser() === "ie") {
			var b = document.querySelector("body");
			var warning = document.createElement("div");
			var t = document.createTextNode("Este site é melhor visualizado nos navegadores Chrome e Firefox");
			warning.setAttribute("class", "ieWarning");
			warning.setAttribute(
				"style",
				`width:100%;height:30px;position:fixed;background-color:${color};opacity: ${opacity};top:0;left:0;z-index:99;padding:2px;text-align:center;color:#fff;line-height:30px;text-transform:uppercase;cursor:pointer;`
			);
			warning.appendChild(t);
			warning.addEventListener("click", function() {
				this.parentNode.removeChild(this);
			});
			b.appendChild(warning);
		}
	},

	//currency
	money: function(val) {
		if (typeof val !== "number") {
			this.showError("Val must be a number");
			return;
		}

		let money = new Intl.NumberFormat("pt-BR", {
			style: "currency",
			currency: "BRL"
		});

		return money.format(val);
	},

	//dom
	resizeTrigger: function(size, fn, bigger = false) {
		if (typeof size !== "number") {
			this.showError("size must be a number");
			return;
		}
		if (typeof fn !== "function") {
			this.showError("fn must be a function");
			return;
		}
		if (typeof bigger !== "boolean") {
			this.showError("bigger must be a boolean");
			return;
		}

		window.addEventListener("resize", function() {
			if (bigger) {
				if (this.innerWidth >= size) {
					fn();
				}
			} else {
				if (this.innerWidth <= size) {
					fn();
				}
			}
		});
	},

	//master data
	masterData: {
		post: function(options, fn) {
			if (typeof options !== "object" || !options.hasOwnProperty("store") || !options.hasOwnProperty("entity") || !options.hasOwnProperty("data")) {
				this.showError("there are missing information");
				return;
			}

			options.data = JSON.stringify(options.data);

			fetch("https://gtwdev.synapcom.com.br/please/endpoints/post.php", {
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify(options)
			}).then(response => {
				if (response.status === 200) {
					if (typeof fn === "function") {
						response.json().then(function(responseJson) {
							if (responseJson.response) {
								fn(JSON.parse(responseJson.response));
							}
						});
					}
				} else {
					console.error("there was an error saving in the master data");
				}
			});
		},
		get: function(options, fn) {
			if (typeof options !== "object" || !options.hasOwnProperty("store") || !options.hasOwnProperty("entity") || !options.hasOwnProperty("filter")) {
				this.showError("there are missing information");
				return;
			}

			fetch("https://gtwdev.synapcom.com.br/please/endpoints/get.php", {
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify(options)
			})
				.then(response => {
					return response.json();
				})
				.then(jsonResponse => {
					fn(jsonResponse);
				});
		}
	},

	getProductDescription: function(options, fn) {
		if (typeof options !== "object" || !options.hasOwnProperty("store") || !options.hasOwnProperty("productId")) {
			this.showError("there are missing information");
			return;
		}

		fetch("https://gtwdev.synapcom.com.br/please/endpoints/description.php", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json"
			},
			body: JSON.stringify(options)
		})
			.then(response => {
				return response.json();
			})
			.then(jsonResponse => {
				fn(jsonResponse);
			});
	},

	//mail
	sendEmail: function(options, fn) {
		if (
			typeof options !== "object" ||
			!options.hasOwnProperty("fromText") ||
			!options.hasOwnProperty("emailTitle") ||
			!options.hasOwnProperty("body") ||
			!options.hasOwnProperty("destinatary") ||
			!options.hasOwnProperty("replyEmail")
		) {
			this.showError("there are missing information");
			return false;
		}

		fetch("https://gtwdev.synapcom.com.br/please/endpoints/mail.php", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json"
			},
			body: JSON.stringify(options)
		}).then(response => {
			if (response.status === 200) {
				if (typeof fn === "function") {
					fn();
				}
				console.log("email sent");
			} else {
				console.error("there was an error: e-mail not sent");
				return false;
			}
		});
	},

	doc: function() {
		let content =
			'<style>#pleaseDoc > div{border-bottom:3px solid #666};</style><div id="pleaseDoc"> <div> <h2>blackout</h2> <h3>Adiciona uma máscara que cobre toda a tela (usado para lightbox, por exemplo)</h3> <h3>Parâmetros</h3> <p>opacity (opcional, default="0.5")</p><p>color (opcional, color="#000")</p></div><div> <h2>browser</h2> <h3>Retorna o navegador utilizado</h3> </div><div> <h2>compareDate</h2> <h3> Compara a data atual com uma data fornecida por parâmetro <br/> Retorna "greater" para maior, "smaller" para menor e "equal" para mesma data. </h3> <h3>Parâmetros</h3> <p>date (obrigatório, "YYYY/MM/DD" ou "DD/MM/YYYY", também pode ser usado "-" como separador)</p></div><div> <h2>deleteCookie</h2> <h3>Deleta um cookie previamente criado</h3> <h3>Parâmetros</h3> <p>cookieName (obrigatório)</p></div><div> <h2>getCookie</h2> <h3>Retorna um cookie previamente criado</h3> <h3>Parâmetros</h3> <p>cookieName (obrigatório)</p></div><div> <h2>getNiceBrazilianDate</h2> <h3>Retorna a data atual no formato brasileiro</h3> </div><div> <h2>getNiceDate</h2> <h3>Retorna a data atual</h3> </div><div> <h2>getQueryString</h2> <h3>Retorna parâmetros passados na URL</h3> </div><div> <h2>happyMessage</h2> <h3>Exibe console.log na cor verde</h3> <h3>Parâmetros</h3> <p>msg(obrigatório)</p></div><div> <h2>ieWarning</h2> <h3>Mostra mensagem no navegador IE com sugestão de uso de outro browser</h3> <h3>Parâmetros</h3> <p>opacity (opcional, default="0.7")</p><p>color (opcional, color="#C00")</p></div><div> <h2>masterData.get</h2> <h3>Faz uma busca no Master Data</h3> <h3>Parâmetros</h3> <p> options (obrigatório, objeto{store : "nome real da loja", entity : "acrônimo da entidade de dados; ex: CL"}, filter : "filtro para busca no master data; ex:_where=email=teste@teste.com&_fields=_all") </p><p> fn (obrigatório, função para ser executada no retorno do ajax; é injetada nesta função o retorno do ajax) </p></div><div> <h2>masterData.post</h2> <h3>Faz uma busca no Master Data</h3> <h3>Parâmetros</h3> <p> options (obrigatório, objeto{store : "nome real da loja", entity : "acrônimo da entidade de dados; ex: CL"}, data : "objeto com campos e valores para serem enviados") </p><p> fn (opcional, função para ser executada no retorno do ajax) </p></div><div> <h2>money</h2> <h3>Formata número como modeda brasileira</h3> <h3>Parâmetros</h3> <p>val (obrigatório)</p></div><div> <h2>onlyNumbers</h2> <h3>Retira todos os caracteres de uma string que não sejam números</h3> <h3>Parâmetros</h3> <p>str (obrigatório)</p></div><div> <h2>removeAllSpecialChars</h2> <h3>Retira todos os caracteres especiais de uma string</h3> <h3>Parâmetros</h3> <p>str (obrigatório)</p></div><div> <h2>resizeTrigger</h2> <h3>Dispara uma funcção em determinado tamanho de tela</h3> <h3>Parâmetros</h3> <p>size (obrigatório, número com o a largura de tela desejada)</p><p>fn (obrigatório, função para ser disparada)</p><p>bigger (opcional; boolean; default=fase; se mudado pra true, a função será disparada quando a largura da tela for maior ou igual o tamanho informado)</p></div><div> <h2>sendMail</h2> <h3>Envia um e-mail</h3> <h3>Parâmetros</h3> <p>options (obrigatório, objeto{fromText : "texto usado no remetente", emailTitle : "título do e-mail", body : "conteúdo do e-mail; pode ser html", destinatary : "destinatário do e-mail", replyEmail : "e-mail para resposta")</p><p>fn (obrigatório, função para ser disparada caso e-mail seja disparado com sucesso)</p></div><div> <h2>setCookie</h2> <h3>Cria um cookie</h3> <h3>Parâmetros</h3> <p>cookieName (obrigatório, string com o nome do cookie)</p><p>cookieValue (obrigatório, string com o conteúdo do cookie)</p><p>numberOfDays (obrigatório, validade do cookie)</p></div><div> <h2>show Error</h2> <h3>Dispara um erro padrão JS</h3> <h3>Parâmetros</h3> <p>msg (obrigatório, string com a mensagem)</p></div><div> <h2>subDate</h2> <h3>Subtrai dias da data atual</h3> <h3>Parâmetros</h3> <p>days (obrigatório, número com quantidade de dias a serem subtraídos)</p></div><div> <h2>sumDate</h2> <h3>Soma dias na data atual</h3> <h3>Parâmetros</h3> <p>days (obrigatório, número com quantidade de dias a serem somados)</p></div><div> <h2>validateCNPJ</h2> <h3>Verifica se um CNPJ é válido</h3> <h3>Parâmetros</h3> <p>cnpj (obrigatório, string com CNPJ a ser validado)</p></div><div> <h2>validateCPF</h2> <h3>Verifica se um CPF é válido</h3> <h3>Parâmetros</h3> <p>cpf (obrigatório, string com cpf a ser validado)</p></div><div> <h2>validateEmail</h2> <h3>Verifica se um Email é válido</h3> <h3>Parâmetros</h3> <p>email (obrigatório, string com email a ser validado)</p></div><div> <h2>getProductDescription</h2> <h3>Retorna a descrição de um produto</h3> <h3>Parâmetros</h3> <p> options (obrigatório, objeto{store : "nome real da loja", productId : "id do produto"}) </p><p> fn (obrigatório, função para ser executada no retorno do ajax; é injetada nesta função o retorno do ajax) </p></div></div>';
		let wrapper = document.createElement("div");
		wrapper.setAttribute("id", "pleaseDocWrapper");
		document.querySelector("body").appendChild(wrapper);
		wrapper.innerHTML = content;
	}
};

export { please };

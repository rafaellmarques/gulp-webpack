Vue.component("loader", {
	template: `<div class="loader">
    <div class="loader_box">
        <div class="box_inner one"></div>
        <div class="box_inner two"></div>
    </div>
    <img class="loader_logo" src="./img/logo_synapcom.png" alt="" />
</div>`
});

var loader = new Vue({
	el: "#loader",
	data: {
		seen: true
	}
});

/* globals  Vue */
Vue.createApp({
	data() {
		return {
			roomId: "",
		};
	},
	methods: {
		getRouteRoomId() {
			const routeSearch = new URLSearchParams(window.location.search);
			this.roomId = routeSearch.get("room_id") || '';
		},
		generateRandomRoomId() {
			this.roomId = Math.random().toString(36).substr(2, 6);
		},
		goToRoom() {
			window.location = "/" + this.roomId;
		},
	},
	mounted() {
		this.getRouteRoomId();
	}
}).mount("#app");

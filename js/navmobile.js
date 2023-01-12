let openSlide = document.getElementById("open-home");
let dashboard = document.getElementById("openDashboard");


function openHome() {
	openSlide.classList.toggle("toggle-home");
	dashboard.classList.remove("toggle-dashboard");

}

function openDashboard() {
	dashboard.classList.toggle("toggle-dashboard");
	openSlide.classList.remove("toggle-home");
}
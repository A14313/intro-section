const navToggle = document.querySelector(".hamburger__icon");
const navToggleLists = document.querySelectorAll(".with-arrow");

navToggle.addEventListener("click", () => {
	navToggle.classList.toggle("active");
});

navToggleLists.forEach((navToggleList) => {
	navToggleList.addEventListener("click", () => {
		navToggleList.classList.toggle("active");
	});
});

window.onload = () => {
	const preloader = document.querySelector(".preloader");

	setTimeout(() => {
		preloader.classList.add("preloader--done");
		gsap.from(".fullSite__title", {
			y: 500,
			opacity: 0,
			duration: 1,
			scale: 0.4,
		});
	}, 240);
	setTimeout(() => {
		preloader.remove();
	}, 1000);
};

const sections = [
	document.querySelector("#start"),
	document.querySelector("#continent1"),
	document.querySelector("#continent2"),
	document.querySelector("#continent3"),
	document.querySelector("#continent4"),
];

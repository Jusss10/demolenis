import Lenis from "lenis";

const lenis = new Lenis({
	duration: 1,
	easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
	gestureDirection: "vertical",
	smooth: true,
	mouseMultiplier: 0.5,
	smoothTouch: false,
	touchMultiplier: 2,
	infinite: false,
});

function raf(time: number) {
	lenis.raf(time);
	requestAnimationFrame(raf);
}

function addAnotherSection() {
	const element = document.createElement("div");
	element.classList.add("section");
	element.innerHTML = "LAST SECTION";
	document.body.appendChild(element);
}

requestAnimationFrame(raf);
setTimeout(addAnotherSection, 1000);

const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let currentslide = 0;


const arrowLeft = document.querySelector(".arrow_left");
arrowLeft.addEventListener("click", slidegauche);
function slidegauche() {
	console.log("clic gauche");
	currentslide = currentslide - 1;
	if (currentslide < 0) {
		currentslide = slides.length - 1;
	}
	img.src = "./assets/images/slideshow/" + slides[currentslide].image;
	tagline.innerHTML = slides[currentslide].tagLine;
	dotcarousel();
}

const arrowRight = document.querySelector(".arrow_right");
arrowRight.addEventListener("click", slidedroit);
function slidedroit() {
	console.log("clic droit");
	//changer d'image carousel
	currentslide = currentslide + 1;
	//permet le defilement infini
	if (currentslide >= slides.length) {
		currentslide = 0;
	}
	img.src = "./assets/images/slideshow/" + slides[currentslide].image;
	tagline.innerHTML = slides[currentslide].tagLine;
	dotcarousel();

}

const img = document.querySelector(".banner-img");
const tagline = document.querySelector("#banner p");

function dotcarousel() {
	const dots = document.querySelectorAll(".dot");
	dots.forEach((dot, index) => {
		if (index === currentslide) {
			dot.classList.add("dot_selected");

		}
		else {
			dot.classList.remove("dot_selected");

		}
	})

}







const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];
const banner = document.getElementById("#banner");
const previous = document.querySelector(".arrow_left");
const next = document.querySelector(".arrow_right");
const imageElement = document.querySelector("#banner img");
const tagLine = document.querySelector("#banner p");
const dots = document.querySelector(".dots");
const numberOfSlide = slides.length;

let index = 0;

/* Creation dot */
function displayDots() {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < numberOfSlide; i++) {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    fragment.appendChild(dot);
    if (i == 0) {
      dot.classList.add("dot_selected");
    }
  }
  dots.appendChild(fragment);
}
displayDots();

/* Link dot to image */
function changeSelected() {
  document.querySelector(".dot_selected").classList.remove("dot_selected");
  dots.children[index].classList.add("dot_selected");
}

/* Link tagline and image*/
function changeImgSlide() {
  imageElement.src = `./assets/images/slideshow/${slides[index].image}`;
  tagLine.innerHTML = slides[index].tagLine;
  changeSelected();
}

/* Previous */
previous.addEventListener("click", function () {
  if (index == 0) {
    index = numberOfSlide - 1;
  } else {
    index--;
  }
  changeImgSlide();
});

/* Next */
next.addEventListener("click", function () {
  if (index == numberOfSlide - 1) {
    index = 0;
  } else {
    index++;
  }
  changeImgSlide();
});

const carrouselContainer = document.querySelector(".carousel-container");
const carouselImageContainer = document.querySelector(
  ".carousel-image-container"
);
const carouselImages = carrouselContainer.getElementsByTagName("img");
const dotNode = carrouselContainer.getElementsByTagName("li");
let currentIndex = 0;

//create dots/circle
for (let i = 0; i < carouselImages.length; i++) {
  let newDot = document.createElement("li");

  // newDot.className = "fa fa-circle";
  newDot.innerHTML = `<svg class="bg-transparent" height="10" width="10"><circle cx="5" cy="5" r="4" fill="#ffffff" /></svg>`;
  newDot.setAttribute("onclick", "dotClick(this.id)");
  newDot.setAttribute("id", parseInt(i));
  newDot.setAttribute("class", "bg-transparent");

  let dotContainer = carrouselContainer.querySelector(".carousel-dot");
  dotContainer.appendChild(newDot);
}

//function1
function displayImage() {
  for (let j = 0; j < carouselImages.length; j++) {
    carouselImages[j].classList.add("carousel-hidden");
  }
  carouselImages[currentIndex].classList.remove("carousel-hidden");
}

//function2
function displayDot() {
  for (let j = 0; j < dotNode.length; j++) {
    dotNode[j].querySelector("circle").style.fill = "#ffffff";
  }
  dotNode[currentIndex].querySelector("circle").style.fill = "#ffc709";
  console.log(dotNode[currentIndex].children);
}

//function3
function moveLeft() {
  if (currentIndex == 0) {
    currentIndex = carouselImages.length - 1;
  } else {
    currentIndex--;
  }

  displayImage();
  displayDot();
}

//function4
function moveRight() {
  if (currentIndex == carouselImages.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }

  displayImage();
  displayDot();
}

//initial stage
displayImage();
displayDot();

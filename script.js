let currentIndex = 0;
const images = document.querySelectorAll(".slideshow-imege");

function changeImage() {
  images.forEach((image) => {
    image.style.opacity = "0";
  });

  images[currentIndex].style.opacity = "1";

  currentIndex = (currentIndex + 1) % images.length;
}

changeImage();
setInterval(changeImage, 3000);

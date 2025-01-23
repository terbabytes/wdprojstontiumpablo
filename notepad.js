let currentImageIndex = 0;
const images = document.querySelectorAll(".pages img");
const prevButton = document.getElementById("prevBtn");
const nextButton = document.getElementById("nextBtn");

let isNavigating = false;

function navigate(direction) {
  if (isNavigating) return;

  isNavigating = true;

  // Update the current image index
  currentImageIndex += direction;

  // Clamp index within bounds
  if (currentImageIndex < 0) currentImageIndex = 0;
  else if (currentImageIndex >= images.length) currentImageIndex = images.length - 1;

  // Hide the currently visible image
  images.forEach((image, index) => {
    image.style.display = index === currentImageIndex ? "block" : "none";
  });

  // Toggle visibility of buttons
  prevButton.style.visibility = currentImageIndex === 0 ? "hidden" : "visible";
  nextButton.style.visibility = currentImageIndex === images.length - 1 ? "hidden" : "visible";

  // Allow navigation again after a short delay
  setTimeout(() => {
    isNavigating = false;
  }, 300);  // Adjust the delay (300ms here) based on your needs
}

function initGallery() {
  images.forEach((image, index) => {
    image.style.display = index === 0 ? "block" : "none";
  });

  prevButton.style.visibility = "hidden";
  nextButton.style.visibility = images.length > 1 ? "visible" : "hidden";
}

prevButton.addEventListener("click", () => navigate(-1));
nextButton.addEventListener("click", () => navigate(1));

initGallery();

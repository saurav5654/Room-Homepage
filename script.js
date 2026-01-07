const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navBar = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
  // Use a class on a parent element to manage states
  navBar.classList.toggle("active");
  // Prevent body scroll when menu is open
  document.body.style.overflow = navBar.classList.contains("active") ? "hidden" : "auto";
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  navBar.classList.remove("active");
  document.body.style.overflow = "auto";
}));

const slides = [
  {
    mobileImage: "images/mobile-image-hero-1.jpg",
    desktopImage: "images/desktop-image-hero-1.jpg",
    title: "Discover innovative ways to decorate",
    description: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
  },
  {
    mobileImage: "images/mobile-image-hero-2.jpg",
    desktopImage: "images/desktop-image-hero-2.jpg",
    title: "We are available all across the globe",
    description: "With stores in major cities worldwide, it's easy for you to find one near you. We ship to all corners of the globe, so you can enjoy our products no matter where you are."
  },
  {
    mobileImage: "images/mobile-image-hero-3.jpg",
    desktopImage: "images/desktop-image-hero-3.jpg",
    title: "Manufactured with the best materials",
    description: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want."
  }
];

// DOM Elements
const heroImage = document.querySelector(".hero-image");
const heroTitle = document.querySelector(".hero-content h1");
const heroDescription = document.querySelector(".hero-content p");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// State
let currentSlide = 0;

function showSlide(slideIndex) {
  const slide = slides[slideIndex];
  // Dynamically choose image based on window width
  const imageUrl = window.innerWidth >= 768 ? slide.desktopImage : slide.mobileImage;
  heroImage.style.backgroundImage = `url('${imageUrl}')`;
  heroTitle.textContent = slide.title;
  heroDescription.textContent = slide.description;
}

function changeSlide(direction) {
  const totalSlides = slides.length;
  // Use modulo for clean, circular navigation
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  showSlide(currentSlide);
}

nextBtn.addEventListener("click", () => changeSlide(1));
prevBtn.addEventListener("click", () => changeSlide(-1));

// Re-evaluate image on window resize
window.addEventListener('resize', () => showSlide(currentSlide));

// Initial slide load
showSlide(currentSlide);
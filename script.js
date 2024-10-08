// FAQ Section
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    if (answer.style.display === "block") {
      answer.style.animation = "slideUp 0.5s ease-out forwards";
      setTimeout(() => {
        answer.style.display = "none";
      }, 500);
    } else {
      answer.style.display = "block";
      answer.style.animation = "slideDown 0.5s ease-out forwards";
    }
  });
});

// Navigation Toggle
const toggleNav = document.querySelector(".menu-icon");
const nav = document.querySelector(".navigation");

toggleNav.addEventListener("click", () => {
  if (nav.classList.contains("open")) {
    nav.classList.remove("open");
    nav.classList.add("close");
  } else if (nav.classList.contains("close")) {
    console.log(nav.classList.contains("close"));
    nav.classList.remove("close");
    nav.classList.add("open");
  } else {
    nav.style.display = "block";
    nav.classList.add("open");
  }
});

// Navigation Scroll Animation
let timeout;
window.addEventListener("scroll", () => {
  nav.style.height = "auto";
  nav.style.transition = "height 0.5s ease-in-out";

  clearTimeout(timeout);
  timeout = setTimeout(() => {
    nav.style.height = "auto";
  }, 3000);
});

const heroSlider = document.querySelector(".hero-slider");
const imageSlider = document.querySelectorAll(".hero-slider img");
const sizeSlider = imageSlider[0].clientWidth;
let countSlider = 0;

let next;
next = setInterval(() => {
  countSlider++;
  heroSlider.style.transition = "transform 0.5s ease-in-out";
  heroSlider.style.transform = `translateX(${-sizeSlider * countSlider}px)`;

  if (countSlider >= imageSlider.length) {
    setTimeout(() => {
      heroSlider.style.transition = "none";
      countSlider = 0;
      heroSlider.style.transform = `translateX(0)`;
    }, 500); // Reset the slider after the transition ends
  }
}, 5000);

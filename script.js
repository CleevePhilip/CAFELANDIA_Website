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
// Carousel Section
const carousels = document.querySelectorAll(".carousel");

carousels.forEach((carousel) => {
  const next = carousel.querySelector(".next");
  const prev = carousel.querySelector(".prev");
  const carouselSlide = carousel.querySelector(".carousel-slide");
  const carouselImages = carouselSlide.querySelectorAll("img");

  let count = 0;
  let size = carouselImages[0].clientWidth;

  const updateSize = () => {
    size = carouselImages[0].clientWidth;
    carouselSlide.style.transform = `translateX(${-size * count}px)`;
  };

  window.addEventListener("resize", updateSize);

  next.addEventListener("click", () => {
    if (count >= carouselImages.length - 1) return;
    carouselSlide.style.transition = "transform 0.5s ease-in-out";
    count++;
    carouselSlide.style.transform = `translateX(${-size * count}px)`;
  });

  prev.addEventListener("click", () => {
    if (count <= 0) return;
    carouselSlide.style.transition = "transform 0.5s ease-in-out";
    count--;
    carouselSlide.style.transform = `translateX(${-size * count}px)`;
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

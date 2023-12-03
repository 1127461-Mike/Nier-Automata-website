document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;

  function changeSlide(index) {
    slides[currentSlide].classList.remove('active');
    currentSlide = index;
    slides[currentSlide].classList.add('active');
  }

  document.querySelector('.prev-btn').addEventListener('click', function () {
    const prevSlide = (currentSlide - 1 + slides.length) % slides.length;
    changeSlide(prevSlide);
  });

  document.querySelector('.next-btn').addEventListener('click', function () {
    const nextSlide = (currentSlide + 1) % slides.length;
    changeSlide(nextSlide);
  });

  function checkSlideVisibility() {
    slides.forEach(slide => {
      const slideTop = slide.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      const isVisible = slideTop < windowHeight - (slide.offsetHeight / 2);

      if (isVisible) {
        slide.classList.add('visible');
      } else {
        slide.classList.remove('visible');
      }
    });
  }

  checkSlideVisibility();
  window.addEventListener('scroll', checkSlideVisibility);
});



  // coolle scroll kleur verandering
  window.addEventListener("scroll", function () {
    const scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
  
    const startColor = [31, 31, 31];
    const endColor = [192, 192, 192]; // Verander de eindkleur voor een nog groter contrast
  
    const r = Math.floor(startColor[0] + (endColor[0] - startColor[0]) * scrollPercentage);
    const g = Math.floor(startColor[1] + (endColor[1] - startColor[1]) * scrollPercentage);
    const b = Math.floor(startColor[2] + (endColor[2] - startColor[2]) * scrollPercentage);
  
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
  });
  function checkWindowSize() {
    const nav = document.querySelector(".nav");
    if (window.innerWidth > 767) {
      nav.style.display = "flex";
    } else {
      nav.style.display = "none";
    }
  }
  // maakt een hamburger menu als het te klein word
  document.querySelector(".hamburger").addEventListener("click", function () {
    const nav = document.querySelector(".nav");
  
    if (nav.style.display === "flex") {
      nav.style.display = "none";
    } else {
      nav.style.display = "flex";
    }
  });
  
  window.addEventListener("resize", checkWindowSize);
  checkWindowSize();
  

  
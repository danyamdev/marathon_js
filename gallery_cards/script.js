function sliderPlugin(activeSlide = 0, activeClass = 'active') {
  const slides = document.querySelectorAll('.slide');

  slides[activeSlide].classList.add(activeClass)

  slides.forEach(slide => {
    slide.addEventListener('click', () => {
      clearActiveClasses();

      slide.classList.add(activeClass);
    });
  });

  function clearActiveClasses() {
    slides.forEach(slide => slide.classList.remove(activeClass));
  }
}

sliderPlugin(2);
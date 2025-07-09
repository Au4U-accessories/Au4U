
  function changeSlide(button, direction) {
    const slider = button.closest('.image-slider');
    const slides = slider.querySelectorAll('.slide');
    let activeIndex = Array.from(slides).findIndex(slide => slide.classList.contains('active'));

    slides[activeIndex].classList.remove('active');
    let newIndex = (activeIndex + direction + slides.length) % slides.length;
    slides[newIndex].classList.add('active');
  }


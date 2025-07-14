
document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("popup");
  const popupImg = document.getElementById("popup-img");
  const closeBtn = document.querySelector(".close-popup");

  document.querySelectorAll(".view-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const imgSrc = btn.getAttribute("data-img");
      popupImg.src = imgSrc;
      popup.style.display = "flex";
    });
  });

  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });

  window.addEventListener("click", e => {
    if (e.target === popup) popup.style.display = "none";
  });
});



document.addEventListener('DOMContentLoaded', function () {
  const dropBtn = document.querySelector('.drop-btn');
  const submenu = document.querySelector('.submenu');
  const submenuLinks = submenu.querySelectorAll('a');

  // فتح / إغلاق القائمة عند الضغط على الزر
  dropBtn.addEventListener('click', function (e) {
    e.preventDefault();
    submenu.classList.toggle('open');
  });

  // إغلاق القائمة بعد الضغط على أي رابط بداخلها
  submenuLinks.forEach(link => {
    link.addEventListener('click', () => {
      submenu.classList.remove('open');
    });
  });
});




  function changeSlide(button, direction) {
    const slider = button.closest('.image-slider');
    const slides = slider.querySelectorAll('.slide');
    let activeIndex = Array.from(slides).findIndex(slide => slide.classList.contains('active'));

    slides[activeIndex].classList.remove('active');
    let newIndex = (activeIndex + direction + slides.length) % slides.length;
    slides[newIndex].classList.add('active');
  }


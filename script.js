// Inspiration messages with emojis
const messages = [
  "You are strong, beautiful, and unstoppable! 💪💖✨",
  "Keep shining, gorgeous! Your sparkle lights up the world! ✨🌟💗",
  "Girl power forever! You can achieve anything you set your mind to! 💥👑💖",
  "Confidence looks amazing on you! Wear it every day! 💃💅💖",
  "Believe in your magic and make your dreams come true! 🦄🌈💖",
];

// Show inspiring message under welcome when button clicked
function showMessage() {
  const msgElem = document.getElementById('inspiration-msg');
  const randomMsg = messages[Math.floor(Math.random() * messages.length)];
  msgElem.textContent = randomMsg;
  msgElem.classList.add('show');

  // Hide message after 6 seconds
  setTimeout(() => {
    msgElem.classList.remove('show');
  }, 10000);
}




function viewImage(button) {
  const img = button.closest('.item').querySelector('.carousel-images img.active');
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  modalImg.src = img.src;
  modal.style.display = 'flex';
}

function closeModal() {
  document.getElementById('imageModal').style.display = 'none';
}




















//view image
function getCurrentCarouselImage(button) {
  const item = button.closest('.item.carousel');
  const img = item.querySelector('.carousel-images img.active');
  return img;
}

function viewImage(img) {
  if (!img) return;
  const modal = document.getElementById('image-modal');
  const modalImg = document.getElementById('modal-img');

  modalImg.src = img.src;
  modal.style.display = 'flex';
}

function closeModal() {
  const modal = document.getElementById('image-modal');
  modal.style.display = 'none';
}

// Optional: close modal on clicking outside the image
document.getElementById('image-modal').addEventListener('click', (e) => {
  if (e.target.id === 'image-modal') {
    closeModal();
  }
});






// Close lightbox on click outside image or pressing Escape key
function closeLightbox(event) {
  if (
    event.target.id === 'lightbox' || 
    event.key === 'Escape'
  ) {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('show');
  }
}

document.getElementById('lightbox').addEventListener('click', closeLightbox);
document.addEventListener('keydown', closeLightbox);














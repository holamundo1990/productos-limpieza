const cardCarousel = document.querySelector('.card-carousel');
const cardItems = document.querySelectorAll('.card-item');
const cardPrevBtn = document.getElementById('card-prev');
const cardNextBtn = document.getElementById('card-next');

let cardIndex = 0;

function getCardWidth() {
  const style = window.getComputedStyle(cardItems[0]);
  const width = cardItems[0].offsetWidth;
  const margin = parseInt(style.marginLeft) + parseInt(style.marginRight);
  return width + margin;
}

function updateCardCarousel() {
  const offset = -cardIndex * getCardWidth();
  cardCarousel.style.transform = `translateX(${offset}px)`;
}

function visibleCardsCount() {
  const containerWidth = document.querySelector('.card-carousel-container').offsetWidth;
  return Math.floor(containerWidth / getCardWidth());
}

cardNextBtn.addEventListener('click', () => {
  if (cardIndex < cardItems.length - visibleCardsCount()) {
    cardIndex++;
    updateCardCarousel();
  }
});

cardPrevBtn.addEventListener('click', () => {
  if (cardIndex > 0) {
    cardIndex--;
    updateCardCarousel();
  }
});

window.addEventListener('resize', () => {
  if(cardIndex > cardItems.length - visibleCardsCount()){
    cardIndex = cardItems.length - visibleCardsCount();
    if(cardIndex < 0) cardIndex = 0;
    updateCardCarousel();
  }
});

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

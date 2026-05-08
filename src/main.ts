import './styles/style.scss';

// ----------------------------------------------------------
// ------------------------ Carousel ------------------------
// ----------------------------------------------------------

const carouselTrack = document.querySelector<HTMLDivElement>('#carouselTrack');
const carouselLeftBtn = document.querySelector<HTMLButtonElement>('#carouselLeftBtn');
const carouselRightBtn = document.querySelector<HTMLButtonElement>('#carouselRightBtn');

let currentIndex = 0;

const productCards = document.querySelectorAll<HTMLElement>('.product-card');

const totalCards = productCards.length;

function getVisibleProductCards() {
  if (window.innerWidth < 768) return 1;
  if (window.innerWidth < 1024) return 2;
  if (window.innerWidth < 1400) return 3;

  return 4;
}

function getMaxCardIndex() {
  return totalCards - getVisibleProductCards();
}

const movement = 320;

carouselRightBtn?.addEventListener('click', () => {
  if (currentIndex >= getMaxCardIndex()) return;
  currentIndex++;

  carouselTrack!.style.transform = `translateX(-${currentIndex * movement}px)`;

  carouselRightBtn!.disabled = currentIndex >= getMaxCardIndex();
  carouselLeftBtn!.disabled = false;
});

carouselLeftBtn?.addEventListener('click', () => {
  if (currentIndex <= 0) return;

  currentIndex--;

  carouselTrack!.style.transform = `translateX(-${currentIndex * movement}px)`;

  carouselLeftBtn!.disabled = currentIndex <= 0;
  carouselRightBtn!.disabled = false;
});

window.addEventListener('resize', () => {
  if (currentIndex > getMaxCardIndex()) {
    currentIndex = getMaxCardIndex();
  }

  carouselTrack!.style.transform = `translateX(-${currentIndex * movement}px)`;
});

// ----------------------------------------------------------
// --------------------- Discover Scent ---------------------
// ----------------------------------------------------------

const toggleOverlayExitBtn = document.querySelectorAll<HTMLButtonElement>('.product-overlay__exit-btn');
toggleOverlayExitBtn.forEach(btn => {
  btn.addEventListener('click', toggleProductOverlay);
});

const toggleOverlayDiscoverBtn = document.querySelectorAll<HTMLButtonElement>('.product-card__discover-btn');
toggleOverlayDiscoverBtn.forEach(btn => {
  btn.addEventListener('click', toggleProductOverlay);
});

function toggleProductOverlay() {
  const productOverlay = document.querySelector<HTMLDivElement>('#productOverlay');
  productOverlay?.classList.toggle('product-overlay__active');
}

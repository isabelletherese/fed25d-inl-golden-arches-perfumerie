import './styles/style.scss';

// ----------------------------------------------------------
// ------------------- Hamburger Menu -----------------------
// ----------------------------------------------------------

const hamburgerIcon = document.querySelector('.hamburger-icon') as HTMLElement;
const closeIcon = document.querySelector('.close-icon') as HTMLElement;
const navbar = document.querySelector('.navbar') as HTMLElement;

hamburgerIcon.addEventListener('click', () => {
    navbar.classList.toggle('open');
    closeIcon.classList.toggle('visible');
     document.body.classList.toggle('nav-open');
});

closeIcon.addEventListener('click', () => {
    navbar.classList.remove('open');
    closeIcon.classList.remove('visible');
    document.body.classList.remove('nav-open');
});

// ----------------------------------------------------------
// ------------------- Product Carousel ---------------------
// ----------------------------------------------------------

const carouselTrack = document.querySelector<HTMLDivElement>('#carouselTrack');
const carouselLeftBtn = document.querySelector<HTMLButtonElement>('#carouselLeftBtn');
const carouselRightBtn = document.querySelector<HTMLButtonElement>('#carouselRightBtn');

let currentIndex = 0;

const productCards = document.querySelectorAll<HTMLElement>('.product-card');

const totalCards = productCards.length;

carouselLeftBtn!.classList.add('hidden');

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
  carouselLeftBtn!.classList.remove('hidden');
});

carouselLeftBtn?.addEventListener('click', () => {
  if (currentIndex <= 0) return;

  currentIndex--;

  carouselTrack!.style.transform = `translateX(-${currentIndex * movement}px)`;
  carouselRightBtn!.disabled = false;
  if (currentIndex === 0) {
    carouselLeftBtn!.classList.add('hidden');
  }
});

window.addEventListener('resize', () => {
  if (currentIndex > getMaxCardIndex()) {
    currentIndex = getMaxCardIndex();
  }

  carouselTrack!.style.transform = `translateX(-${currentIndex * movement}px)`;
  if (currentIndex === 0) {
    carouselLeftBtn!.classList.add('hidden');
  }
});

// ----------------------------------------------------------
// --------------------- Product Overlay --------------------
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

// ----------------------------------------------------------
// --------------------- Cookie Banner ----------------------
// ----------------------------------------------------------

const cookieBanner = document.querySelector('.cookies') as HTMLElement;
const acceptBtn = document.getElementById('accept-btn') as HTMLButtonElement;
const declineBtn = document.getElementById('decline-btn') as HTMLButtonElement;

acceptBtn.addEventListener('click', () => {
    acceptBtn.classList.add('active');
    setTimeout(() => cookieBanner.classList.add('hidden'), 300);
});

declineBtn.addEventListener('click', () => {
    declineBtn.classList.add('active');
    setTimeout(() => cookieBanner.classList.add('hidden'), 300);
});

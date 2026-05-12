import './styles/style.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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

function updateCarouselAccessibility() {
  const visibleCards = getVisibleProductCards();
  productCards.forEach((card, index) => {
    if (index >= currentIndex && index < currentIndex + visibleCards) {
      card.removeAttribute('inert');
      card.inert = false;
    } else {
      card.setAttribute('inert', '');
      card.inert = true;
    }
  });
}

const viewport = document.querySelector('.carousel__viewport') as HTMLElement;
viewport?.addEventListener('scroll', () => {
  viewport.scrollLeft = 0;
});

updateCarouselAccessibility();

carouselRightBtn?.addEventListener('click', () => {
  if (currentIndex >= getMaxCardIndex()) return;
  currentIndex++;

  carouselTrack!.style.transform = `translateX(-${currentIndex * movement}px)`;

  carouselRightBtn!.disabled = currentIndex >= getMaxCardIndex();
  carouselLeftBtn!.classList.remove('hidden');

  if (currentIndex >= getMaxCardIndex()) {
    carouselRightBtn!.classList.add('hidden');
  }
  
  updateCarouselAccessibility();
});

carouselLeftBtn?.addEventListener('click', () => {
  if (currentIndex <= 0) return;

  currentIndex--;

  carouselTrack!.style.transform = `translateX(-${currentIndex * movement}px)`;
  carouselRightBtn!.disabled = false;
  if (currentIndex === 0) {
    carouselLeftBtn!.classList.add('hidden');
  }

  if (currentIndex <= getMaxCardIndex()) {
    carouselRightBtn!.classList.remove('hidden');
  }
  
  updateCarouselAccessibility();
});

window.addEventListener('resize', () => {
  if (currentIndex > getMaxCardIndex()) {
    currentIndex = getMaxCardIndex();
  }

  carouselTrack!.style.transform = `translateX(-${currentIndex * movement}px)`;
  if (currentIndex === 0) {
    carouselLeftBtn!.classList.add('hidden');
  }
  
  updateCarouselAccessibility();
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

let lastFocusedElement: HTMLElement | null = null;

function toggleProductOverlay() {
  const productOverlay = document.querySelector<HTMLDivElement>('#productOverlay');
  const isActive = productOverlay?.classList.toggle('product-overlay__active');
  
  if (isActive) {
    lastFocusedElement = document.activeElement as HTMLElement;
    const exitBtn = productOverlay?.querySelector<HTMLButtonElement>('.product-overlay__exit-btn');
    setTimeout(() => exitBtn?.focus(), 50);
  } else {
    lastFocusedElement?.focus();
    lastFocusedElement = null;
  }
}

// ----------------------------------------------------------
// --------------------- Cookie Banner ----------------------
// ----------------------------------------------------------

const cookieBanner = document.querySelector('.cookies') as HTMLElement;
const acceptBtn = document.getElementById('acceptBtn') as HTMLButtonElement;
const declineBtn = document.getElementById('declineBtn') as HTMLButtonElement;

acceptBtn.addEventListener('click', () => {
  acceptBtn.classList.add('active');
  setTimeout(() => cookieBanner.classList.add('hidden'), 300);
});

declineBtn.addEventListener('click', () => {
  declineBtn.classList.add('active');
  setTimeout(() => cookieBanner.classList.add('hidden'), 300);
});

// ----------------------------------------------------------
// ------------------ Animation Heritage --------------------
// ----------------------------------------------------------

gsap.registerPlugin(ScrollTrigger);

gsap.from('#heritageBrandLogo', {
  scrollTrigger: '#heritageBrandLogo',
  //   rotation: -1440,
  x: -1500,
  duration: 1.7,
});

gsap.from('#heritageHeading', {
  scrollTrigger: '#heritageHeading',
  //   rotation: -1440,
  x: 1500,
  duration: 1.7,
  delay: 1,
});

gsap.from('#heritageInfoText', {
  scrollTrigger: '#heritageInfoText',
  //   rotation: -1440,
  x: -1500,
  duration: 1.7,
  delay: 2,
});

gsap.from('#cityBtnContainer', {
  scrollTrigger: '#cityBtnContainer',
  opacity: 0,
  delay: 4,
  duration: 0.7,
});

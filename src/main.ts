import './styles/style.scss';

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

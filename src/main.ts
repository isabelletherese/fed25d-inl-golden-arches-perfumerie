import './styles/style.scss';

const cookieBanner = document.querySelector('.cookies');

document.getElementById('accept-btn')?.addEventListener('click', () => 
    cookieBanner?.classList.add('hidden'));
document.getElementById('decline-btn')?.addEventListener('click', () => 
    cookieBanner?.classList.add('hidden'));

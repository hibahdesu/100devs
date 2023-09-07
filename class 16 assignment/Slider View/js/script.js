let navBtn = document.querySelector('.nav-btn');

navBtn.addEventListener('click', showNav);

function showNav() {
    let nav = document.querySelector('.nav');

    nav.classList.toggle('hidden');
}

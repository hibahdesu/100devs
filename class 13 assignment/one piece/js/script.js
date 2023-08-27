let btn = document.querySelector('.btn');
let results = document.querySelector('.results');

btn.addEventListener('click', show);

function show() {
    let name = document.querySelector('#name').value.toUpperCase();
    let character = document.querySelector('.character');

    character.innerText = `You like ${name} Sama`;
    let img = document.querySelector('.img');
    img.classList.remove('hidden');

    if (name === '') {
        alert("Please enter your name");
        } 
    else if (name === 'LUFFY') {
        img.src = '../img/luffy.jpg'
    }
    else if (name === 'ZURU') {
        img.src = '../img/zuru.jpg'
    }
    else {
            img.src = '../img/luffy.jpg'
    }
    
}

let brief = document.querySelector('.brief');
let music = document.querySelector('.music');
let photos = document.querySelector('.photos');
let characters = document.querySelector('.characters');
let series = document.querySelector('.series');

let briefBtn = document.querySelector('#brief');
let musicBtn = document.querySelector('#music');
let photosBtn = document.querySelector('#photos');
let characterBtn = document.querySelector('#characters');
let seriesBtn = document.querySelector('#series');

briefBtn.addEventListener('click', showBrief)
musicBtn.addEventListener('click', showMusic);  //showing the list of all movies in a genre
photosBtn.addEventListener('click', showPhotos);//showing the list of all pictures in a genre
characterBtn.addEventListener('click', showCharacters)//showing the list of all people in a movie or tv-serie
seriesBtn.addEventListener('click', showSeries);

function showBrief() {
    brief.classList.toggle('hidden');
    music.classList.add('hidden');
    photos.classList.add('hidden');
    characters.classList.add('hidden');
    series.classList.add('hidden');
}

function showMusic() {
    brief.classList.add('hidden');
    music.classList.toggle('hidden');
    photos.classList.add('hidden');
    characters.classList.add('hidden');
    series.classList.add('hidden');
}

function showPhotos() {
    brief.classList.add('hidden');
    music.classList.add('hidden');
    photos.classList.toggle('hidden');
    characters.classList.add('hidden');
    series.classList.add('hidden');
}

function showCharacters() {
    brief.classList.add('hidden');
    music.classList.add('hidden');
    photos.classList.add('hidden');
    characters.classList.toggle('hidden');
    series.classList.add('hidden');
}

function showSeries() {
    brief.classList.add('hidden');
    music.classList.add('hidden');
    photos.classList.add('hidden');
    characters.classList.add('hidden');
    series.classList.toggle('hidden');
}


let musicPlay = new Audio('../audio/one-piece-song_op01-we-are-hiroshi-kitadani.mp3')
// musicPlay.play();

const songs = [
    {
        id: '01',
        songName: 'Open 15',
        img: '../img/82a47526700b03819887b377c6c97818.jpg',
        src: '../audio/one-piece-song_.mp3'
    },
    {
        id: '02',
        songName: 'We Are Hiroshi Kitadani',
        img: '../img/82a47526700b03819887b377c6c97818.jpg',
        src: '../audio/one-piece-song_a-thousand-dreamers-8.mp3'
    },
    {
        id: '03',
        songName: 'We Are Hiroshi Kitadani',
        img: '../img/82a47526700b03819887b377c6c97818.jpg',
        src: '../audio/one-piece-song_ed01-memories-maki-otsuki.mp3'
    },
    {
        id: '04',
        songName: 'We Are Hiroshi Kitadani',
        img: '../img/82a47526700b03819887b377c6c97818.jpg',
        src: '../audio/one-piece-song_ed02-run-run-run-maki-otsuki.mp3'
    },
    {
        id: '05',
        songName: 'We Are Hiroshi Kitadani',
        img: '../img/82a47526700b03819887b377c6c97818.jpg',
        src: '../audio/one-piece-song_ed02-run-run-run-maki-otsuki.mp3'
    },
    {
        id: '06',
        songName: 'We Are Hiroshi Kitadani',
        img: '../img/82a47526700b03819887b377c6c97818.jpg',
        src: '../audio/one-piece-song_ed02-run-run-run-maki-otsuki.mp3'
    },
    {
        id: '07',
        songName: 'We Are Hiroshi Kitadani',
        img: '../img/82a47526700b03819887b377c6c97818.jpg',
        src: '../audio/one-piece-song_ed02-run-run-run-maki-otsuki.mp3'
    },
    {
        id: '08',
        songName: 'We Are Hiroshi Kitadani',
        img: '../img/82a47526700b03819887b377c6c97818.jpg',
        src: '../audio/one-piece-song_ed02-run-run-run-maki-otsuki.mp3'
    },
    {
        id: '9',
        songName: 'We Are Hiroshi Kitadani',
        img: '../img/82a47526700b03819887b377c6c97818.jpg',
        src: '../audio/one-piece-song_ed02-run-run-run-maki-otsuki.mp3'
    },
    {
        id: '10',
        songName: 'We Are Hiroshi Kitadani',
        img: '../img/82a47526700b03819887b377c6c97818.jpg',
        src: '../audio/one-piece-song_ed02-run-run-run-maki-otsuki.mp3'
    },
    {
        id: '11',
        songName: 'We Are Hiroshi Kitadani',
        img: '../img/82a47526700b03819887b377c6c97818.jpg',
        src: '../audio/one-piece-song_ed02-run-run-run-maki-otsuki.mp3'
    },
    {
        id: '12',
        songName: 'We Are Hiroshi Kitadani',
        img: '../img/82a47526700b03819887b377c6c97818.jpg',
        src: '../audio/one-piece-song_ed02-run-run-run-maki-otsuki.mp3'
    },
    {
        id: '13',
        songName: 'We Are Hiroshi Kitadani',
        img: '../img/82a47526700b03819887b377c6c97818.jpg',
        src: '../audio/one-piece-song_ed02-run-run-run-maki-otsuki.mp3'
    },
    {
        id: '14',
        songName: 'We Are Hiroshi Kitadani',
        img: '../img/82a47526700b03819887b377c6c97818.jpg',
        src: '../audio/one-piece-song_ed02-run-run-run-maki-otsuki.mp3'
    },
    {
        id: '15',
        songName: 'We Are Hiroshi Kitadani',
        img: '../img/82a47526700b03819887b377c6c97818.jpg',
        src: '../audio/one-piece-song_ed02-run-run-run-maki-otsuki.mp3'
    },
    {
        id: '16',
        songName: 'We Are Hiroshi Kitadani',
        img: '../img/82a47526700b03819887b377c6c97818.jpg',
        src: '../audio/one-piece-song_ed02-run-run-run-maki-otsuki.mp3'
    },
];

let music_container = document.querySelectorAll('.songItem');
console.log(music_container);

Array.from(music_container).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].img;
    e.getElementsByTagName('h4')[0].innerHTML = songs[i].songName;
    e.getElementsByTagName('span')[0].innerHTML = songs[i].id;
});

let play = document.querySelectorAll('.play');

const playMusic = () => {
    Array.from(play).forEach((e) => {
        e.classList.remove('fa-pause');
        e.classList.add('fa-play');
    })
}

let index = 0;

Array.from(play).forEach((el) => {
    el.addEventListener('click', (e) => {
        index = e.target.id;
        console.log(index);
        if (musicPlay.paused || musicPlay.currentTime <= 0) {
                    musicPlay.src = songs[index - 1].src;
                    musicPlay.play();
                    // playMusic();
                    e.target.classList.remove('fa-play');
                    e.target.classList.add('fa-pause');
                }
                else {
                    musicPlay.pause();
                    // play.classList.remove('fa-pause');
                    // play.classList.add('fa-play');
                    playMusic();
                }
        
        // e.target.classList.remove('fa-play');
        // e.target.classList.add('fa-pause');
        // let musicNow = e.getElementsByTagName('audio')[0].src = songs[i].src;
        
        // musicPlay.play();
        // musicPlay.src = '../audio/one-piece-song_a-thousand-dreamers-8.mp3';
        // musicPlay.play();
    })
})

// let audio = document.querySelectorAll('.audio');
// audio = new Audio(songs[index].src) ;
// Array.from(audio).forEach((e) => {
//     e.target = new Audio(songs[index].src);
//     e.play()
// })
// audio.play()

// play.addEventListener('click', () => {
//     if (musicPlay.paused || musicPlay.currentTime <= 0) {
//         musicPlay.play();
//         play.classList.remove('fa-play');
//         play.classList.add('fa-pause');
//     }
//     else {
//         musicPlay.pause();
//         play.classList.remove('fa-pause');
//         play.classList.add('fa-play');
//     }
// });

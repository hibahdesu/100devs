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
        songName: 'We Are! きただにひろし',
        img: '../img/open1.jpeg',
        src: '../audio/open1.mp3',
        appearedIn: 'Opening 1',
        singer: '北谷洋',
    },
    {
        id: '02',
        songName: 'Believe',
        img: '../img/open2.jpeg',
        src: '../audio/open2.mp3',
        appearedIn: 'Opening 2',
        singer: 'Folder5',
    },
    {
        id: '03',
        songName: 'The Babystar ヒカリヘ',
        img: '../img/open3.jpeg',
        src: '../audio/open3.mp3',
        appearedIn: 'Opening 3',
        singer: '向著阳光',
    },
    {
        id: '04',
        songName: 'BON VOYAGE',
        img: '../img/open4.jpeg',
        src: '../audio/open4.mp3',
        appearedIn: 'Opening 1',
        singer: 'Bon-Bon Blanco',
    },
    {
        id: '05',
        songName: 'ココロのちず Kokoro no Chizu',
        img: '../img/open5.jpeg',
        src: '../audio/open5.mp3',
        appearedIn: 'Opening 5',
        singer: '心之航海图 BOYSTYLE',
    },
    {
        id: '06',
        songName: 'BRAND NEW WORLD',
        img: '../img/open6.jpeg',
        src: '../audio/open6.mp3',
        appearedIn: 'Opening 6',
        singer: 'D-51',
    },
    {
        id: '07',
        songName: 'ウィーアー! WE ARE!',
        img: '../img/open7.jpeg',
        src: '../audio/open7.mp3',
        appearedIn: 'Opening 7',
        singer: '草帽海贼团 7人',
    },
    {
        id: '08',
        songName: 'Crazy Rainbow',
        img: '../img/open8.jpeg',
        src: '../audio/open8.mp3',
        appearedIn: 'Opening 8',
        singer: '疯狂彩虹 Tackey and Tsubasa',
    },
    {
        id: '09',
        songName: 'Jungle',
        img: '../img/open9.jpeg',
        src: '../audio/open9.mp3',
        appearedIn: 'Opening 9',
        singer: 'P-5050',
    },
    {
        id: '10',
        songName: 'WE ARE',
        img: '../img/open10.jpeg',
        src: '../audio/open10.mp3',
        appearedIn: 'Opening 10',
        singer: '东方神起',
    },
    {
        id: '11',
        songName: 'Share The World',
        img: '../img/open11.jpeg',
        src: '../audio/open11.mp3',
        appearedIn: 'Opening 11',
        singer: '东方神起',
    },
    {
        id: '12',
        songName: '风をさがして Search the Wind 寻找风',
        img: '../img/open12.jpeg',
        src: '../audio/open12.mp3',
        appearedIn: 'Opening 12',
        singer: '矢口真里',
    },
    {
        id: '13',
        songName: 'One Day',
        img: '../img/open13.jpeg',
        src: '../audio/open13.mp3',
        appearedIn: 'Opening 13',
        singer: 'The Rootless',
    },
    {
        id: '14',
        songName: 'FIght Together',
        img: '../img/open14.jpeg',
        src: '../audio/open14.mp3',
        appearedIn: 'Opening 14',
        singer: '安室奈美惠',
    },
    {
        id: '15',
        songName: 'We Go',
        img: '../img/open15.jpeg',
        src: '../audio/open15.mp3',
        appearedIn: 'Opening 15',
        singer: '北谷洋',
    },

];

let music_container = document.querySelectorAll('.songItem');
console.log(music_container);


let music_img = document.querySelectorAll('.img_contaier');


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

const imageMove = () => {
    Array.from(music_img).forEach((e) => {
        e.classList.add('playing');
        e.classList.remove('no_play');
    })
}

let enTitle = document.querySelector('.e_title');
let jpTitle = document.querySelector('.j_title');
let singer = document.querySelector('.singer');
let appear = document.querySelector('.appear')

let index = 0;
let inner = document.querySelector('.inner')
Array.from(play).forEach((el) => {
    el.addEventListener('click', (e) => {
        index = e.target.id;

        console.log(index);

        enTitle.innerText = songs[index - 1].songName;

        jpTitle.innerText = songs[index - 1].japaneseName;

        singer.innerText = songs[index - 1].singer;
        
        appear.innerText = songs[index - 1].appearedIn;
        
        if (musicPlay.paused || musicPlay.currentTime <= 0) {
                    musicPlay.src = songs[index - 1].src;
                    musicPlay.play();
                    
                    e.target.classList.remove('fa-play');
                    e.target.classList.add('fa-pause');
                    inner.classList.add('play')
                }
                else {
                    musicPlay.pause();
                    // play.classList.remove('fa-pause');
                    // play.classList.add('fa-play');
                    playMusic();
                    inner.classList.remove('play')
                }
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

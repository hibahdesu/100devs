let navBtn = document.querySelector('.nav-btn');

navBtn.addEventListener('click', showNav);

function showNav() {
    let nav = document.querySelector('.nav');

    nav.classList.toggle('hidden');
}

const services = [
    {
        h1: 'Itinerary Preparation',
        p: 'We can create a customized itinerary for you based on your preferences, budget, and interests. We can arrange everything from transportation and accommodation to sightseeing and activities. We can also suggest some hidden gems and off-the-beaten-path destinations that you might not find on your own.'
    }, 
    {
        h1: 'Tour Packaging and Costing',
        p: 'We offer a variety of tour packages to suit every taste and need. Whether you want to join a group tour or have a private tour, we can find the perfect option for you. We can also customize any tour package to fit your specific requirements. We work with reputable tour operators and suppliers to ensure quality and value for money.'
    },
    {
        h1: 'Organization of Conference',
        p: 'We can also help you organize your business trips, conferences, conventions, or incentive travel. We can provide you with professional services such as venue selection, registration, catering, audio-visual equipment, transportation, accommodation, and entertainment. We can also arrange for special tours or activities for your delegates or guests.'
    },
    {
        h1: 'Reservation',
        p: 'We can handle all your reservation needs with ease and efficiency. We can book your flights, hotels, car rentals, transfers, tours, activities, and more. We can also confirm your bookings and send you all the relevant documents and vouchers. You can trust us to take care of all the details so that you can enjoy your trip without any hassle.'
    },
    {
        h1: 'Travel Insurance',
        p: 'We strongly recommend that you purchase travel insurance before you travel. Travel insurance can protect you from unforeseen events such as flight cancellations, medical emergencies, lost luggage, and more. We can help you choose the right travel insurance plan for your trip and assist you with any claims if needed.'
    },
    {
        h1: 'Currency Services',
        p: 'We can help you exchange your currency at competitive rates before you travel. We can also provide you with tips on how to use your credit cards, debit cards, or traveler’s checks abroad. We can also advise you on the best ways to access cash in your destination country.'
    },
]
let one_m = document.querySelector('.one_m');
let two_m = document.querySelector('.two_m');
let three_m = document.querySelector('.three_m');
let four_m = document.querySelector('.four_m');
let five_m = document.querySelector('.five_m');
let six_m = document.querySelector('.six_m');
let moving_slides = document.querySelector('.moving_slides')
let m_header = document.querySelector('.m_header');
let m_paragraph = document.querySelector('.m_paragraph');
console.log(one_m.src);

one_m.addEventListener('click', add_one);
two_m.addEventListener('click', add_two);
three_m.addEventListener('click', add_three);
four_m.addEventListener('click', add_four);
five_m.addEventListener('click', add_five);
six_m.addEventListener('click', add_six);

function add_one() {
    m_header.innerText = services[0].h1;
    m_paragraph.innerText = services[0].p;
    moving_slides.style.backgroundImage = `linear-gradient(25deg, rgba(0,05, 0, 0.3), rgba(0, 0, 0, 0.7)), url(${one_m.src})`;
}
function add_two() {
    m_header.innerText = services[1].h1;
    m_paragraph.innerText = services[1].p;
    moving_slides.style.backgroundImage = `linear-gradient(25deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(${two_m.src})`;
}
function add_three() {
    m_header.innerText = services[2].h1;
    m_paragraph.innerText = services[2].p;
    moving_slides.style.backgroundImage = `linear-gradient(25deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(${three_m.src})`;
}
console.log(services[0].h1);
function add_four() {
    m_header.innerText = services[3].h1;
    m_paragraph.innerText = services[3].p;
    moving_slides.style.backgroundImage = `linear-gradient(25deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(${four_m.src})`;
}
function add_five() {
    m_header.innerText = services[4].h1;
    m_paragraph.innerText = services[4].p;
    moving_slides.style.backgroundImage = `linear-gradient(25deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(${five_m.src})`;
}
function add_six() {
    m_header.innerText = services[5].h1;
    m_paragraph.innerText = services[5].p;
    moving_slides.style.backgroundImage = `linear-gradient(25deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(${six_m.src})`;
}


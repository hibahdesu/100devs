//Simple Calculator
let count = 0;

let pumpkin = document.querySelector('#pumpkin');
let dominosPizza = document.querySelector('#dominosPizza');
let zebra = document.querySelector('#zebra');
let cantThinkOfAnything = document.querySelector('#cantThinkOfAnything');
let placeToPutResult = document.querySelector('#placeToPutResult');

pumpkin.addEventListener('click', zero)

dominosPizza.addEventListener('click', addTwo)

zebra.addEventListener('click', addThree)

cantThinkOfAnything.addEventListener('click', subTwo)

function zero() {
  count = 0;
  placeToPutResult.innerHTML = count
}

function addTwo() {
  count += 2;
  placeToPutResult.innerHTML = count
}

function addThree() {
  count += 3;
  placeToPutResult.innerHTML = count
}

function subTwo() {
  count -= 2;
  placeToPutResult.innerHTML = count
}


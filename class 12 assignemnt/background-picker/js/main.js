//Evernt Listener
document.getElementById('pink').onclick = pinkMood;
document.getElementById('yellow').onclick = yellowMood;
document.getElementById('red').onclick = redMood;
document.getElementById('navy').onclick = navyMood;

function pinkMood() {
  document.querySelector('body').style.backgroundColor = 'pink';
  document.querySelector('body').style.color = 'white'
}

function yellowMood() {
  document.querySelector('body').style.backgroundColor = 'yellow';
  document.querySelector('body').style.color = 'black';
}

function redMood() {
  document.querySelector('body').style.backgroundColor = 'red';
  document.querySelector('body').style.color = 'white';
}

function navyMood() {
  document.querySelector('body').style.backgroundColor = '#012456';
  document.querySelector('body').style.color = 'white';
}
// document.getElementById('purple').onclick = partyPurple
// document.getElementById('green').onclick = partyGreen
// document.getElementById('blue').onclick = partyBlue


// function partyPurple() {
//   document.querySelector('body').style.backgroundColor = 'rgba(241,63,247,1)'
//   document.querySelector('body').style.color = 'white'
// }

// function partyGreen() {
//   document.querySelector('body').style.backgroundColor = 'rgba(0,253,81,1)'
//   document.querySelector('body').style.color = 'black'
// }

// function partyBlue() {
//   document.querySelector('body').style.backgroundColor = 'rgba(0,254,255)'
//   document.querySelector('body').style.color = 'navy'
// }

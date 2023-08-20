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


let yell = document.querySelector('#yell');

const speech = window.speechSynthesis;

yell.addEventListener('click', show);

function show() {

  const firstName = document.querySelector('#firstName').value.toUpperCase();
  const firstMiddle = document.querySelector('#firstMiddle').value.toUpperCase();
  const lastMiddle = document.querySelector('#lastMiddle').value.toUpperCase();
  const lastName = document.querySelector('#lastName').value.toUpperCase();


  let placeToYell = document.querySelector('#placeToYell');
  let fullName = `You are ${firstName} ${firstMiddle} ${lastMiddle} ${lastName}`

  placeToYell.innerText = fullName

  let speak = new SpeechSynthesisUtterance(fullName);

  speech.speak(speak)


}


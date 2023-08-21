let placeToSee = document.getElementById('placeToSee');
document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value.toUpperCase();
  console.log(day);
  // console.log(day.toUpperCase());
  // console.log(day.capetalize())
  // //Conditionals go here
  if (day === 'FRIDAY' || day === 'SATURDAY') {

    placeToSee.innerHTML = 'Weekend'

    document.querySelector('body').style.backgroundColor = 'pink';

  } 
  else if (day === 'SUNDAY' || day === 'MONDAY') {

    placeToSee.innerHTML = "Great Day";

    document.querySelector('body').style.backgroundColor = 'powderblue';

    placeToSee.style.color = 'blue';


  } 
  else {

    placeToSee.innerHTML = 'Boring Day'

    document.querySelector('body').style.backgroundColor = 'darkslategray';

    placeToSee.style.color = 'yellow';
  }


}

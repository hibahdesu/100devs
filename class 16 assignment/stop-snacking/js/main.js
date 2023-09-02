//Create a function that grabs the number of snacks 
// from the input and tells you to stop that many times

let help = document.querySelector('#help');
help.addEventListener('click', snacks)

function snacks() {
    let input = document.querySelector('input').value;

    let stops = document.querySelector('#stops');

    for (let i = 1; i <= Number(input); i++) {

        console.log("Stop");
        
        stops.innerText += ' Stop Snacking'
    }
}


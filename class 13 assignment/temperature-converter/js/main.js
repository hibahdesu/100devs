//Write your pseduo code first! 
// first i want to take the value of the first number and then conver it to the other 
// creating the Input, which we will take its value to use it later on

let convertBtn = document.querySelector('#convert');


convertBtn.addEventListener('click', convert)


function convert() {
    let sel = document.querySelector('#sel').value;
    console.log(sel);
    sel =  sel * 9/5 + 32
    let result = document.getElementById('result');
    result.innerHTML = sel
}
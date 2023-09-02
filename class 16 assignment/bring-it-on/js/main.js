// *Variables*
// Create a variable and console log the value
let number = 10
console.log(number);
// Create a variable, add 10 to it, and alert the value
let value = 20;
let result = value + 10;
alert(result)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function sub(n1, n2, n3, n4) {

    let result = n1 - n2 - n3 - n4;

    alert(result);
}

//Calling the function
sub(10, 39, 29, 2);

// Create a function that divides one number by another and returns the remainder
function divides(n1, n2) {

    let result = n1 % n2;

    return result;
}

//Calling the function
console.log(divides(10, 2));

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addTwoNum(n1, n2) {

    let result = n1 + n2;

    if (result > 50) {
        alert("Jumanji");
    }
    else {
        alert(result)
    }
}

//Calling the function
addTwoNum(19, 29);


// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplys(n1, n2, n3) {
    let result = n1 * n2 * n3;

    if (result % 3 === 0) {

        alert('ZEBRA')
    }
    else {
        alert(result)
    }
}

//Calling the function
multiplys(10, 39);


//*Loops*
//Create a function that takes in a word and a number. 
// Console log the word x times where x was the number passed in
function wordAndNumber(w, n) {
    for (let i = 1; i < n; i++) {

        console.log(w);
    }
}

//Calling the function 
wordAndNumber('Hola', 19)

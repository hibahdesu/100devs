// *Variables*
// Create a variable and console log the value
let age = 26;
console.log(age);

// Create a variable, add 10 to it, and alert the value
let number = 10;
let value = number + 2;
alert(value);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function sub(n1, n2, n3, n4) {

    let result = n1 - n2 - n3 - n4;

    alert(result);
}

//Call the function 
sub(44, 10, 19, 55);

// Create a function that divides one number by another and returns the remainder
function divides(n1, n2) {
    let div = n1 % n2;
    return div;
}

//Call the function
divides(10, 2)

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function adds(n1, n2) {
    let result = n1 + n2;

    if (result > 50) {
        alert('Jumanji')
    }
    else {
        alert(result)
    }
}

//Call the function
adds(40, 40);

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplys(n1, n2, n3) {
    let result = n1 * n2 * n3;

    if (result % 3 == 0) {
        console.log('ZEBRA');
        alert('ZEBRA')
    }
    else {
        console.log(result);
        alert(result)
    }
}

multiplys(1, 1, 3)
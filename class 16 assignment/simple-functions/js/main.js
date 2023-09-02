//---Easy
//create a function that subtracts two numbers and alerts the difference
function sub(num1, num2) {
    let result = num1 - num2;
    alert(result)
}

//calling the function
sub(10, 19);

//create a function that divides three numbers and console logs the quotient
function div(num1, num2, num3) {
    let result = num1 / num2 / num3;
    console.log(result);
}

//Call the function
div(29, 29, 19);


//create a function that multiplys three numbers and returns the product
function mult(num1, num2, num3) {
    let result = num1 * num2 * num3
    return  result;
}

//Call the fucntion
mult(29, 9, 19)

//---Medium
//create a function that takes in three numbers. 
// Add the first two numbers and return the remainder 
// of dividing the sum of the first two numbers by the third number
function three(num1, num2, num3) {
    let totalSum= (num1 + num2) % num3 ;
    return totalSum;
}

//Call the funciton
three(39, 9, 18);

//---Hard
//create a function that takes in 4 numbers. 
// Multiply the first two numbers. 
// If the product is greater than 100 add the sum of the last two numbers and console log the value. 
// If the product is less that 100, subtract the difference of the last two numbers and console log the value. 
// If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
function four(num1, num2, num3, num4) {
    let result = num1 * num2;
    if ((result > 100)) {
        let value = num3 + num4;
        
        console.log(value);
    }
    else if (result < 100) {
        let value = num3 - num4;
        console.log(value);
    }
    else if (result === 100) {
        let value = (num1 * num2 * num3) % num4;

        alert(value)
    }
}

//Call the function
four(567, 23 ,-1,-1 );

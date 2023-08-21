function checkAge(age) {

    if (age > 18) {
    return true;

    }
    else {
    return confirm('Did parents allow you?');
    }
}

//Task 1
function checkAge(age) {

    return (age > 18) ? true : confirm('Did parents allow you?');
}

function checkAge(age) {

    return (age > 18)  || confirm('Did parents allow you?');
}

//Task 2
// Write a function min(a,b) which returns the least of two numbers a and b

function min(a, b) {

    if (a < b) {
        return a;
    } 
    
    else {
        return b
    }
}

min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1

//Task 3
function pow(x, n) {

    let result = x;

    for (let i = 1; i < n; i++) {
    result *= x;
}

    return result;
}

console.log(pow(3, 2));
console.log(pow(3, 3));
console.log(pow(1, 100));
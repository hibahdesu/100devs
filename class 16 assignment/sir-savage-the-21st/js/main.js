//Create a function that has a loop that prints '21' 
// 21 times to the console and then call that function

function looping() {
    console.log('21');
}

for (let i = 1; i < 22; i++) {
    console.log(i);
    looping();
    let savageSays = document.querySelector('#savageSays');
    savageSays.innerText = i;

}
//Bonus can you make it print '21' 21 times to the dom?



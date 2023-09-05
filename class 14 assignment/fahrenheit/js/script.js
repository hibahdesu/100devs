let btn = document.querySelector('.btn');

btn.addEventListener('click', convert);

function convert() {
    let kelvin = document.getElementById('kelvin').value;
    let result = document.querySelector('.result');
    if (kelvin !== '') {
        let celsius = kelvin - 273;

        console.log(celsius);
    
        let fahrenheit = celsius * (9 / 5) + 32;
    
        console.log(fahrenheit);
    
        fahrenheit = Math.floor(celsius * (9 / 5) + 32);
    
        result.innerText = `The temperature is ${fahrenheit} degrees Fahrenheit.`;

        result.style.color = 'white';
    }
    else {
        result.innerText = 'Write a value please!'
        result.style.color = 'red';
        
    }
}


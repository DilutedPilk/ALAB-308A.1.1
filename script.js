//Part 1

// Declare a global counter variable.

let counter = 0;

// Create a simple function that increments the variable, and then calls itself recursively.

function counterIncrement(){
    counter++
    counterIncrement();
}

try {
    counterIncrement();
} catch (error) {
    console.log(counter)
    console.log(error);
}

//Part 3

// Create a simple HTML element to hold text. Cache this HTML element into a JavaScript variable.

const text = document.getElementById("text");

// Write a function that takes a parameter n and adds a list of all prime numbers between one and n to your HTML element.

function primeNumber(n) {
    const arr = []
    const isPrime = [];
    for (let i = 1; i < n; i++){
        arr.push(i);
    }
    console.log(arr);
    for (let i = 0; i < arr.length; i++){
        let prime;
        for(let x = 2; x <= arr.length+1; x++){
            if (arr[i] % x === 0 && x != arr[i]) {
                prime = false
                break;
            } else if (x === arr[i]){
                prime = true;
                break;
            }
        }
        if (prime === true){
            isPrime.push(arr[i]);
        }
    }
    return isPrime;
}

text.addEventListener("click", (e) =>{
    e.preventDefault();
    const submit = document.getElementById('submit');
    const input = document.querySelector('input')
    const answer = document.getElementById('answer')
    if (e.target === submit) {
        if (primeNumber(input.value).length == 0){
            alert("Input is not a number")
        } else {
            const prime = primeNumber(input.value);
            answer.textContent = prime.join(", ")
            setTimeout(()=>{alert("Calculation complete!")}, 0)
        }
    }
})


// Once complete, use the alert() method to alert the user that the calculation is finished.


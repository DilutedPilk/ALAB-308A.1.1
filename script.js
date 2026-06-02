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
    const isPrime =[];
    for (let i = 1; i <=n; i++){
        // if (n % i === 0){
        //     break;
        // } else {
        //     arr.push(n)
        // }
        arr.push(i);
    }

    for (let i = 0; i < arr.length; i++){
        let prime;
        for(let x = 2; x <= 100; x++){
            if (x % arr[i] === 0) {
                prime = false
                break;
            } else {
                prime = true;
            }
        }
        if (prime === true){
            isPrime.push(arr[i]);
        }
    }
    return isPrime;
}

console.log(primeNumber(25));

// Once complete, use the alert() method to alert the user that the calculation is finished.


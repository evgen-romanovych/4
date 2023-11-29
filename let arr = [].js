const prompt = require('prompt-sync')();
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function generatePrimesArray(startNumber, arrayLength) {
    let primesArray = [];
    let currentNumber = startNumber;
    
    while (primesArray.length < arrayLength) {
        if (isPrime(currentNumber)) {
            primesArray.push(currentNumber);
        }
        currentNumber++;
    }

    return primesArray;
}


let arrayLength = prompt("Введіть довжину масиву:");
let startNumber = prompt("Введіть початкове число:");


arrayLength = parseInt(arrayLength);
startNumber = parseInt(startNumber);

if (isNaN(arrayLength) || isNaN(startNumber) || arrayLength <= 0) {
    console.log("Будь ласка, введіть коректні значення.");
} else {

    let primesResult = generatePrimesArray(startNumber, arrayLength);
    console.log("Масив простих чисел:", primesResult);
}
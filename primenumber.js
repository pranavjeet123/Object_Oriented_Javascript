function checkPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num%i===0 && i!==num) {
            return true;
        }
    }    
}

function generatePrimeNumbers(input) {
    let resultOutput = [];
    for (let i = 2; i <= input; i++) {
        if (!checkPrime(i)) {
            resultOutput.push(i);
        }
    }
    return resultOutput;
}

console.log(generatePrimeNumbers(100));
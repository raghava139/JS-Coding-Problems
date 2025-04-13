//A Prime Number is divisible by 1 and itself

function isPrime(number) {
    if (number < 2) return false;

    for (let i = 2; i < number; i++) {
        if (number % i === 0) return false;
    }

    return true;

}

console.log(isPrime(11));
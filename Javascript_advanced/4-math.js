function divideBy(firstNumber) {
    // Return a function that takes secondNumber and divides it by firstNumber
    return function(secondNumber) {
        return secondNumber / firstNumber;
    };
}

// Create the function addBy
function addBy(firstNumber) {
    return function(secondNumber) {
        return firstNumber + secondNumber;
    };
}

// Create four closures using the functions
const addBy100 = addBy(100);
const addBy1000 = addBy(1000);
const divideBy10 = divideBy(10);
const divideBy100 = divideBy(100);

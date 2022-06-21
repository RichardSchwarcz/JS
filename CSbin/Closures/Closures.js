// CHALLENGE 1
function createFunction() {
    return function() {
        console.log('hello');
    }
}

// /*** Uncomment these to check your work! ***/
const function1 = createFunction();
function1(); // => should console.log('hello');
console.log('---------------------------------------')

console.log('------------------CHALLENGE 2---------------------')
function createFunctionPrinter(input) {

}

// /*** Uncomment these to check your work! ***/
const printSample = createFunctionPrinter('sample');
printSample(); // => should console.log('sample');
const printHello = createFunctionPrinter('hello');
printHello(); // => should console.log('hello');
console.log('---------------------------------------')
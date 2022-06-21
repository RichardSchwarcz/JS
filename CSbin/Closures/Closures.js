console.log('------------------CHALLENGE 1---------------------')

function createFunction() {
    return function() {
        console.log('hello');
    }
}

// /*** Uncomment these to check your work! ***/
const function1 = createFunction();
function1(); // => should console.log('hello');
console.log('--------------------------------------------------')

console.log('------------------CHALLENGE 2---------------------')

function createFunctionPrinter(input) {
    return function() {
        console.log(input);
    }
}

// /*** Uncomment these to check your work! ***/
const printSample = createFunctionPrinter('sample');
printSample(); // => should console.log('sample');
const printHello = createFunctionPrinter('hello');
printHello(); // => should console.log('hello');
console.log('--------------------------------------------------')

console.log('------------------CHALLENGE 3---------------------')

function outer() {
    let counter = 0; // this variable is outside incrementCounter's scope
    function incrementCounter () {
      counter ++;
      console.log('counter', counter);
    }
    return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// /*** Uncomment these to check your work! ***/
willCounter();
willCounter();
willCounter();
jasCounter();
willCounter();

console.log('----------------------PART 2----------------------')

function addByX(x) {
    return function addByY(y) {
        return console.log(x+y);
    }
}

// /*** Uncomment these to check your work! ***/
const addByTwo = addByX(2);
addByTwo(1); // => should return 3
addByTwo(2); // => should return 4
addByTwo(3); // => should return 5

const addByThree = addByX(3);
addByThree(1); // => should return 4
addByThree(2); // => should return 5

const addByFour = addByX(4);
addByFour(4); // => should return 8
addByFour(5); // => should return 9
console.log('--------------------------------------------------')

console.log('------------------CHALLENGE 4---------------------')

function once(func) {

}

// /*** Uncomment these to check your work! ***/
const onceFunc = once(addByTwo);
//onceFunc(4);  // => should log 6
//onceFunc(10);  // => should log 6
//onceFunc(9001);  // => should log 6
console.log('--------------------------------------------------')

console.log('------------------CHALLENGE 5---------------------')

function after(count, func) {
    var counter = 1;
    return function() {
        if(counter != count) {
            counter ++;
        } else {
            return func()
        };
    }
}

// /*** Uncomment these to check your work! ***/
const called = function() { console.log('hello') };
const afterCalled = after(3, called);
afterCalled(); // => nothing is printed
afterCalled(); // => nothing is printed
afterCalled(); // => 'hello' is printed
console.log('--------------------------------------------------')

console.log('------------------CHALLENGE 6---------------------')

function delay(func, wait) {
    setTimeout(func, wait);
}

//delay(called, 100);
console.log('--------------------------------------------------')

console.log('------------------CHALLENGE 7---------------------')

function rollCall(names) {
    var counter = -1;
    return function (){
        if (counter+1 == names.length) {
            console.log('Everyone accounted for');
        } else {
            counter ++;
            console.log(names[counter]);
        }
    }
}

// /*** Uncomment these to check your work! ***/
const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
rollCaller() // => should log 'Victoria'
rollCaller() // => should log 'Juan'
rollCaller() // => should log 'Ruth'
rollCaller() // => should log 'Everyone accounted for'
rollCaller() // => should log 'Everyone accounted for'
console.log('--------------------------------------------------')

console.log('------------------CHALLENGE 8---------------------')

function saveOutput(func, magicWord) {
    var objKeys = [];
    var objValues = [];

    return function(number) {
        if(number != magicWord) {
            objKeys.push(number);
            objValues.push(func(number));
            return func(number);
        } else {
            console.error('TO DO - objects');
        }
    }
}

// /*** Uncomment these to check your work! ***/
const multiplyBy2 = function(num) { return num * 2; };
const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
console.log(multBy2AndLog(2)); // => should log 4
console.log(multBy2AndLog(9)); // => should log 18
console.log(multBy2AndLog('boo')); // => should log { 2: 4, 9: 18 }
console.log('--------------------------------------------------')

console.log('------------------CHALLENGE 9---------------------')

function cycleIterator(array) {
    var counter = -1;
    return function (){
        if (counter+1 == array.length) {
            counter = 0; 
            console.log(array[counter]);
        } else {
            counter ++;
            console.log(array[counter]);
        }
    }
}

// /*** Uncomment these to check your work! ***/
const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
const getDay = cycleIterator(threeDayWeekend);
getDay(); // => should log 'Fri'
getDay(); // => should log 'Sat'
getDay(); // => should log 'Sun'
getDay(); // => should log 'Fri'
getDay(); // => should log 'Sat'
getDay(); // => should log 'Sun'
console.log('--------------------------------------------------')

console.log('------------------CHALLENGE 10---------------------')
function defineFirstArg(func, arg) {
    return function(secondArg) {
        return func(arg,secondArg)
    }
}

// /*** Uncomment these to check your work! ***/
const subtract = function(big, small) { return big - small; };
const subFrom20 = defineFirstArg(subtract, 20);
console.log(subFrom20(5)); // => should log 15
console.log('--------------------------------------------------')

console.log('------------------CHALLENGE 11---------------------')
function dateStamp(func) {
    console.error('TO DO - objects');
    return function(value){
        return func(value);
    }
}

// /*** Uncomment these to check your work! ***/
const stampedMultBy2 = dateStamp(n => n * 2);
console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }
console.log('--------------------------------------------------')

function censor() {
    console.error('TO DO - objects')
    return function (current, fresh){
    }
}

// /*** Uncomment these to check your work! ***/
const changeScene = censor();
changeScene('dogs', 'cats');
changeScene('quick', 'slow');
console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // => should log 'The slow, brown fox jumps over the lazy cats.'
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

console.log('------------------CHALLENGE 10--------------------')
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

console.log('------------------CHALLENGE 11--------------------')
function dateStamp(func) {
    return function(value){
        var obj = {};
        obj.date = new Date();
        obj.output = func(value);
        return obj
    }
}

// /*** Uncomment these to check your work! ***/
const stampedMultBy2 = dateStamp(n => n * 2);
console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }
console.log('--------------------------------------------------')

console.log('------------------CHALLENGE 12--------------------')
function censor() {
    console.error('TODO')
    return function (current, fresh){
    }
}

// /*** Uncomment these to check your work! ***/
const changeScene = censor();
changeScene('dogs', 'cats');
changeScene('quick', 'slow');
console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // => should log 'The slow, brown fox jumps over the lazy cats.'
console.log('--------------------------------------------------')

console.log('------------------CHALLENGE 13--------------------')
function createSecretHolder(secret) {
    const obj = {
        setSecret : function (secret) {obj.secret = secret},
        getSecret : function () {console.log(obj.secret)},
    };
    obj.secret = secret;
    return obj;
    //return Object.create(obj);
}

// /*** Uncomment these to check your work! ***/

obj = createSecretHolder(5)
obj.getSecret() // => returns 5
obj.setSecret(2)
obj.getSecret() // => returns 2
obj.setSecret(8)
obj.getSecret() // => returns 8
console.log('--------------------------------------------------')

console.log('------------------CHALLENGE 14--------------------')

function callTimes() {
    var counter = 0;
    return function inner() {
        counter ++;
        console.log(counter);
    };
}

// /*** Uncomment these to check your work! ***/
let myNewFunc1 = callTimes();
let myNewFunc2 = callTimes();
myNewFunc1(); // => 1
myNewFunc1(); // => 2
myNewFunc2(); // => 1
myNewFunc2(); // => 2
console.log('--------------------------------------------------')

console.log('------------------CHALLENGE 15--------------------')

function roulette(num) {
    var counter = 1;
    return function inner() {
        if (num == counter) {
            counter ++;
            return 'Win';
        } else if (counter < num) {
            counter ++;
            return 'Spin';
        } else {
            return 'Pick a number to play again';
        };
    };
}

// /*** Uncomment these to check your work! ***/
const play = roulette(3);
console.log(play()); // => should log 'spin'
console.log(play()); // => should log 'spin'
console.log(play()); // => should log 'win'
console.log(play()); // => should log 'pick a number to play again'
console.log(play()); // => should log 'pick a number to play again'
console.log('--------------------------------------------------')

console.log('------------------CHALLENGE 16--------------------')

function average() {
    const array = [];
    return function inner(num) {

        function averageValueOfArray () {
            return array.reduce((a,b) => {return a + b}, 0) / array.length
        };
        
        if (num) {
            array.push(num);
            return averageValueOfArray();
        } else if (array.length == 0) {
            return 0;
        } else {
            return averageValueOfArray();
        };
    };
}

// /*** Uncomment these to check your work! ***/
const avgSoFar = average();
console.log(avgSoFar()); // => should log 0
console.log(avgSoFar(4)); // => should log 4
console.log(avgSoFar(8)); // => should log 6
console.log(avgSoFar()); // => should log 6
console.log(avgSoFar(12)); // => should log 8
console.log(avgSoFar()); // => should log 8
console.log('--------------------------------------------------')

console.log('------------------CHALLENGE 17--------------------')
function makeFuncTester(arrOfTests) {
    return function inner(callback) {
        for (let array of arrOfTests) {
            const lilArray = array.map(callback);
            return lilArray[0] == array[1];
        }
    }
}

// /*** Uncomment these to check your work! ***/
const capLastTestCases = [];
capLastTestCases.push(['hello', 'hellO']);
capLastTestCases.push(['goodbye', 'goodbyE']);
capLastTestCases.push(['howdy', 'howdY']);
const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
const capLastAttempt1 = str => str.toUpperCase();
const capLastAttempt2 = str => str.slice(0, -1) + str.slice(-1).toUpperCase();
console.log(shouldCapitalizeLast(capLastAttempt1)); // => should log false
console.log(shouldCapitalizeLast(capLastAttempt2)); // => should log true
console.log('--------------------------------------------------')

console.log('------------------CHALLENGE 18--------------------')
function makeHistory(limit) {
    const actionsArray = [];
    var undoCounter = 0;
    return function action (action) {
        if (action != 'undo') {
            undoCounter = 0;
            actionsArray.push(action);
            return `${action} done`;
        } else if (action == 'undo' && undoCounter < limit) {
            undoCounter ++;
            return `${actionsArray.pop()} undone`;
        } else {
            return 'nothing to undo';
        };
    };
}

// /*** Uncomment these to check your work! ***/
const myActions = makeHistory(2);
console.log(myActions('jump')); // => should log 'jump done'
console.log(myActions('undo')); // => should log 'jump undone'
console.log(myActions('walk')); // => should log 'walk done'
console.log(myActions('code')); // => should log 'code done'
console.log(myActions('pose')); // => should log 'pose done'
console.log(myActions('undo')); // => should log 'pose undone'
console.log(myActions('undo')); // => should log 'code undone'
console.log(myActions('undo')); // => should log 'nothing to undo'
console.log('--------------------------------------------------')

console.log('------------------CHALLENGE 19--------------------')
function blackjack(array) {
    const bigArray =[];
    return function dealer(num1, num2){
        let iterationCounter = 0;
        let bustCounter = 0;

        return function player(){
            if (iterationCounter == 0) {
                bigArray.push(array[iterationCounter]);
                iterationCounter ++;

                return firstInvocation = num1 + num2;
            } else if (iterationCounter > 0) {
                
                const nextInvocations = bigArray.reduce(function reduceCallback(a, b) {
                    if ((a + b) <= 20) {
                        return a + b;
                    } else if (bustCounter == 0){
                        bustCounter ++;
                        return 'Bust';
                    } else {
                        return 'You are done!';
                    }
                }, firstInvocation);

                bigArray.push(array[iterationCounter]);
                iterationCounter ++;
                return nextInvocations;
            };
        };
    };
}

// /*** Uncomment these to check your work! ***/

// /*** DEALER ***/
const deal = blackjack([2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11]);

// /*** PLAYER 1 ***/
const i_like_to_live_dangerously = deal(4, 5);
console.log(i_like_to_live_dangerously()); // => should log 9
console.log(i_like_to_live_dangerously()); // => should log 11
console.log(i_like_to_live_dangerously()); // => should log 17
console.log(i_like_to_live_dangerously()); // => should log 18
console.log(i_like_to_live_dangerously()); // => should log 'bust'
console.log(i_like_to_live_dangerously()); // => should log 'you are done!'
console.log(i_like_to_live_dangerously()); // => should log 'you are done!'

// /*** BELOW LINES ARE FOR THE BONUS ***/

// /*** PLAYER 2 ***/
// const i_TOO_like_to_live_dangerously = deal(2, 2);
// console.log(i_TOO_like_to_live_dangerously()); // => should log 4
// console.log(i_TOO_like_to_live_dangerously()); // => should log 15
// console.log(i_TOO_like_to_live_dangerously()); // => should log 19
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!

// /*** PLAYER 3 ***/
// const i_ALSO_like_to_live_dangerously = deal(3, 7);
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 10
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 13
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!



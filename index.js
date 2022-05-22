//Task 1 
console.log(`Task 1`)
function sayHello(theName, theGender = undefined) {
    if (theGender === 'Female') {
        console.log(`Hello Mrs ${theName} `)
    } else if (theGender === 'Male') {
        console.log(`Hello Mr ${theName} `)
    } else {
        console.log(`Hello ${theName} `)
    }
}

sayHello('Osama', 'Male');
sayHello('Noha', 'Female');
sayHello('Sameh');

console.log(`**************************************`)

//Task 2 
console.log(`Task 2`)
function calculate(firstNum, secondNum = null, operation = 'add') {
    if (operation === 'add') {
        console.log(`${firstNum + secondNum}`)
    } else if (operation === 'substract') {
        console.log(`${firstNum - secondNum}`)
    } else if (operation === 'multiply') {
        console.log(`${firstNum * secondNum}`)
    } else if (operation === "") {
        console.log('Second Number Not Found')
    }
}
calculate(20, 30); // 50
calculate(20, 30, 'add'); //50
calculate(20, 30, 'substract');//-10
calculate(20, 30, 'multiply'); //600
calculate(20); // Second Number Not Found
console.log(`**************************************`)

//Task 3 
console.log(`Task 3`)
function ageInTime(theAge) {
    if (theAge < 110 && theAge > 10) {
        console.log(`Your Age Is ${theAge}
${theAge * 12} Months
${theAge * 12 * 30} Days
${theAge * 12 * 30 * 24} Hour
${theAge * 12 * 30 * 24 * 60} Min
${theAge * 12 * 30 * 24 * 60 * 60} Sec`)
    } else {
        console.log('Age Out Of Range')
    }
}

ageInTime(220)
ageInTime(20)
console.log(`**************************************`)

//Task 4
console.log(`Task 4`)
let name;
let age;
let status;
function checkstatus(a, b, c) {
    let info = [a, b, c];
    for (let i = 0; i < info.length; i++) {
        if (typeof info[i] === 'string') {
            name = info[i];
        } else if (typeof info[i] === 'number') {
            age = info[i];
        } else if (typeof info[i] === 'boolean') {
            status = info[i];
            if (status === true) {
                status = 'Your Are Available For Hire'
            } else {
                status = 'Your Are Not Available For Hire'

            }
        }

    }
    console.log(`Hello ${name} Your Age Is ${age} ${status}`)
}
checkstatus(false, 26, 'noha')
console.log(`**************************************`)

//Task 5
console.log(`Task 5`)
function createSelectBox(startYear, endYear) {
    document.write(`<select>`)
    for (let i = startYear; i <= endYear; i++) {
        document.write(`<option value = ${i}>${i}</option>`)
    }
    document.write(`</select>`)
}
createSelectBox(1996, 2022);

console.log(`**************************************`)

//Task 6
console.log(`Task 6`)

function multiply(...numbers) {
    let num = 1;
    for (let i = 0; i < numbers.length; i++) {
        if (typeof numbers[i] === 'string') {
            continue;
        } else {
            num *= Math.trunc(numbers[i])
        }
    }
    console.log(num)
}
multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000

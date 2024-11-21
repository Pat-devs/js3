


// function that says "hello world" in the console
function greet() {
    console.log("hello world")
}

// function that says a custom greeting in the console
function customGreet(greeting) {
    //let message = parameter
    //console.log(greeting)
    return greeting
}

//customGreet("Hej")


// sum takes two numbers and prints out the sum in the console
function sumConsole(numberA, numberB) {
    let sum = numberA + numberB

    console.log("The sum is " + sum)
}

//sumConsole(2, 3)

// sub takes two numbers and prints out the substraction result in the console
function subConsole(numberA, numberB) {
    let result = numberA - numberB

    //console.log(`The result is ${result}`)
    
    console.log(`The result is ${numberA - numberB}`)
}

//subConsole(2, 3)


// Html tags
let calcElement = document.querySelector("#calc") // document.getElementById("calc")c


// sum takes two numbers and displays the sum on the webpage
function sumHtml(numberA, numberB) {
    let sum = numberA + numberB

    calcElement.textContent = "The sum is " + sum
    //document.body.textContent = "The sum is " + sum
}

//sumHtml(5, 50)



// wishlist:

// #1. i wish to have a function that can take two numbers as arguments, and then return their sum
// #2. i wish to hava a function that can display the given argument on the webpage
// #3. i wish to hava a function that can display the given argument on the console

function sum(numberA, numberB) {
    //let sumResult = numberA + numberB

    return numberA + numberB
}



//console.log(sum(2,34))

//calcElement.textContent = sum(2,34)

// display data, displays the given argument on the webpage
// specifically on the p-tag with id calc
function displayData(someData) {
    calcElement.textContent = someData
}


//displayData("the sum of 2 and 34 is " + sum(2,34))


// positive number, function only prints message if number is above 0
function positiveNum(number) {
    // truthy values, generally things that are not "empty"
    // f.eks: "" is false
    // " " is true (Because it contains something)
    // numbers....
    // 0 is falsy
    // but negative numbers and positive numbers are both "truthy"

    // check if number is greater than 0
    if (number > 0) {
        console.log("Your number is positive! :)")
        // if the above condition is "truthy" then the code inside this block will run
    }
    // code below here will run regardless of the above condition evaluation
    //console.log("code executes regardless")
}

//positiveNum(2)


let isUserAnAdmin = true
let isUserRegistered = true
let isUserBanned = false

if (!isUserBanned) { // !isUserBanned is the same as saying isUserBanned == truenot banned 
    console.log("user is not banned ")
    if (isUserRegistered) {
        console.log("user is registered")
        if (isUserAnAdmin) {
            console.log("user is an Admin")
        }
    }
}


// combine several conditional statements:

// #1. Logical AND operator &&

// #2. Logical OR operator ||

if (isUserAnAdmin && isUserRegistered && !isUserBanned) {
    console.log("user is both an admin, is registered and is not banned!")
}

let temperature = 23

/* if (temperature >= 35) {
    console.log("It's very hot today!")
}
else if (temperature >= 20) {
    console.log("temperature is perfectly fine today")
}
else if (temperature >= 15) {
    console.log("its a littlebit too cold today")
}
else {
    console.log("its too cold today")
} */

// check if temperature is between 20 and 22 degrees
if (temperature >= 20 && temperature <= 22) {
    console.log("temperature is between 20 and 22 degrees")
}

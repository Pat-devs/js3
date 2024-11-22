// Without loops:

/* console.log("hello world");
console.log("hello world");
console.log("hello world");
console.log("hello world");
console.log("hello world"); */


// Loops

if ("noe condition som må være true") {
    // kjøre kode når condition over er "truthy"
}

// While loop

/* let lapsCompleted = 0

// run 10 loops:
while (lapsCompleted < 10) {
    lapsCompleted = lapsCompleted + 1
    console.log("lap number: " + lapsCompleted)
    
    if (lapsCompleted > 5) {
        break
    }
} */

// For loop

for (let lapsCompleted = 0; lapsCompleted < 10; lapsCompleted += 1) {

    // console.log("lap number: " + lapsCompleted)
}

// for (declare a variable; "create a condition"; increment OR decrement the variable)

// count 0 to 5 (inclusive) in the console
for (let i = 0; i <= 5; i++) {
    //console.log("count is now: " + i)
}

// count 50 to 10 (inclusive) in the console
for (let i = 50; i >= 10; i--) {
    //console.log("count is now: " + i)

    //break
}

// some text:
let myText = "lorem ipsum"

// indexes almost always begin at 0 (f.eks charAt uses a such index)

// charAt returns char at given index:
//console.log(myText.charAt(10)) // 10th (or last character)

//console.log(myText.charAt(0))

// length/count almost always begins at 1 (for the first character) 
//console.log(myText.charAt(myText.length - 1))

// Shorthand alternative to .charAt is using [index]:
//console.log(myText[0])
// get the last character in a string using the [] with the .length attribute:
//console.log(myText[myText.length - 1])


let mytext1 = "hei "
let someothertext = "abcdef"

let combinedStrings = mytext1.concat(someothertext) // mytext1 + someothertext

//console.log(combinedStrings)

//myText.concat()


// Arrays:

let myArray = ["text, blablabla", "mer text!", 1234, -234, 0.341]

// to get the first element in the array use [index] (similar to how we did with strings) 
console.log(myArray[0])

console.log(myArray[myArray.length - 1])




//console.log(names)

// Get the people-container html element

let peopleContainerElement = document.querySelector("#people-container")

let names = [
    "Thomas",
    "Susan",
    "Monica",
    "Avery",
    "Phillip",
    "Otto",
    "Annabelle",
    "Cathy"
]

// Print each name to the peopleContainer

/* peopleContainerElement.textContent = names[0]
peopleContainerElement.textContent += ", " + names[1]
peopleContainerElement.textContent += ", " + names[2]
peopleContainerElement.textContent += ", " + names[3]
peopleContainerElement.textContent += ", " + names[4]
peopleContainerElement.textContent += ", " + names[5]
peopleContainerElement.textContent += ", " + names[16]
peopleContainerElement.textContent += ", " + names[17] */

for (let i = 0; i < names.length; i++) {
    //console.log(i)

    let currentName = names[i]

    //console.log(`The name at index ${i} is ${currentName}`)


    peopleContainerElement.textContent += ", " + currentName
}
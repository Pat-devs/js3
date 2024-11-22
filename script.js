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

    break
}
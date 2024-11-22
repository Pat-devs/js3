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

let lapsCompleted = 0

// run 10 loops:
while (lapsCompleted < 10) {
    lapsCompleted = lapsCompleted + 1
    console.log("lap number: " + lapsCompleted)
    
    if (lapsCompleted > 5) {
        break
    }
}
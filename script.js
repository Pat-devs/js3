let VARIABELnavn = (( "hei"))

let variabelNavn = "abc"

const courseStartYear = 2024

let weight = 0.345;

let users = ["Patryk", "Erik"]

let randomThings = [153, "Bil", 0.345, console.log]

/* let playerPer = {
    name: "Per",
    score: 1234,
    greet() {
        console.log("Hi my name is " + playerPer.name )
    }
}


// vi ønsker flere spillere

let playerAnna = {
    name: "Anna",
    score: 1235,
    greet() {
        console.log("Hi my name is " + this.name )
    }
}

let playerBob = {
    name: "Bob",
    score: 1,
    greet() {
        console.log("Hi my name is " + this.name )
    }
} */

//console.log(playerAnna.score)

// Klasser er "blueprints" for objects

/* Ønsket blueprint
{
    name (string)
    score (integer)
    greet() (skal bare skrive ut navn og score)
}
*/

let variableA = "test"

//console.log("Can we access variableA? " + variableA)

function doNothing() {
    let variableB = "HEI"
    
    //console.log("Can we access variableA inside a function score? " + variableA)

}

//console.log("variableB is " + variableB)

//doNothing()
 

class Player {

    // instance attributes:
    name = "";
    score = 0;
    // constructor er en spesiell metode som kjøres KUN når vi "lager" en "instance" av klasses
    constructor(name, score) {
        console.log("received arguments: " + name + " and " + score)
        console.log("Player instance created!")

        // vi må oppdatere this.ATTRIBUTE-NAME til de vi mottar i "constructoren",
        // fordi, instance properties akseseres vha. this.NAVN, ikke constructors(NAVN).

        this.name = name
        this.score = score
    }

}

// #1. for å lage en instance av en "player":
// kjør: new Player()

//console.log( new Player("Per", 100) )

let playerPer = new Player("Per", 100)

//console.log(playerPer)

let anotherPlayer = new Player("Bob", 1)

console.log("Per has score of: " + playerPer.score)
console.log("Bob has score of: " + anotherPlayer.score)
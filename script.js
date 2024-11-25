
// Javascript er "loosely typed", den tillater oss å deklarere mye veldig fritt, f.eks:
let VARIABELnavn = (( "hei"))

let variabelNavn = "abc"

const courseStartYear = 2024

let weight = 0.345;

// Javascript har også mer avanserte variabel typer, som arrays:
let users = ["Patryk", "Erik"]

// I motsetning til mnage andre (mer strict) språk, arrays kan inneholde en kombinasjon av typer:
let randomThings = [153, "Bil", 0.345, console.log]

// Javascipt har også Objekter:

/* let playerPer = {
    name: "Per",
    score: 1234,
    greet() {
        console.log("Hi my name is " + playerPer.name )
    }
}


// Når vi ønsker flere spillere, kan vi copy-paste objektet over og manuelt endre verdiene:

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

// For å gjøre prosessen enklere kan vi bruke en "Objekt orientert approach":
// Javascript har klasser:

// Klasser er "blueprints" for objects

/* Ønsket blueprint
{
    * name (string)
    * score (integer)
    * greet() (skal bare skrive ut navn og score)
}
*/

 

class Player {

    // instance attributes:
    name = "";
    score = 0;
    // constructor er en spesiell metode som kjøres KUN når vi "lager" en "instance" av klasses
    constructor(givenName, startingScore) {
        console.log("received arguments: " + givenName + " and " + startingScore)
        console.log("Player instance created!")

        // vi må oppdatere this.ATTRIBUTE-NAME til de vi mottar i "constructoren",
        // fordi, instance properties akseseres vha. this.NAVN, ikke constructors(NAVN).

        this.name = givenName
        this.score = startingScore
    }

    // Method shows greeting by the player with their stats in the console
    greet() {
        console.log(`Hi my name is ${this.name} My stats are: Score: ${this.score}`)
    }

}

// #1. for å lage en instance av en "player":
// kjør: new Player()

//console.log( new Player("Per", 100) )

let playerPer = new Player("Per", 100)

//console.log(playerPer)

let anotherPlayer = new Player("Bob", 1)

//console.log("Per has score of: " + playerPer.score)
//console.log("B            ob has score of: " + anotherPlayer.score)


playerPer.greet()

anotherPlayer.greet()
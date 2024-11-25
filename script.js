
// Blueprint for new players
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

//console.log(names[0])
//console.log(names[1])

/* while("condition") {
    console.log()
} */

/* for(let i = 0; i < names.length; i++) {
    let currentName = names[i]
    console.log(currentName)
} */

// lag et nytt array for våre spillere    
let players = []

for(let currentName of names) {
    let currentPlayer = new Player(currentName, 10)

    // legg til en spiller i players arrayet:
    players.push(currentPlayer)
}


console.log(players)
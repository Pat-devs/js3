


let people = [
    {
      name: "Tracie Adams",
      age: 37,
      location: "north"
    },
    {
      name: "Gale Beasley",
      age: 26,
      location: "south"
    },
    {
      name: "Allison Boone",
      age: 24,
      location: "north"
    },
    {
      name: "Dina Douglas",
      age: 28,
      location: "west"
    },
    {
      name: "Goff Haynes",
      age: 23,
      location: "east"
    },
    {
      name: "Shannon Tyson",
      age: 40,
      location: "west"
    }
]

// get the people-container element:

let peopleContainerElement = document.getElementById("people-container")

for (let person of people) {
    //console.log(`Hi my name is ${person.name}, i am ${person.age} years old, and i am from ${person.location}.`)


    peopleContainerElement.innerHTML += `
    <div class="">
        <h3>${person.name}</h3>
        <p>${person.age} years old from ${person.location}</p>
    </div>
    `

}
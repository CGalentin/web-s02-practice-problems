console. log(4)
 
const jedi = {
    name: "Luke Skywalker",
    lightsaberColer: "Green",
    isTrainedByYoday: true,
    age: 23
}

console.log("Jedi Profile:", jedi);
console.log("Welcome Master: ", jedi.name)
console.log("Lukes's Light Saber Color is:", jedi.lightsaberColer)
console.log("Lukes age is:", jedi.age) // dot notation
console.log("Luke's age is:", jedi['age']) //bracket notation
console.log(`Jedi Master: ${jedi.name}, who has a ${jedi.lightsaberColer} Light Saber`);

jedi.planet = "Tatooine" //Adding a property to object
console.log(`${jedi.name} is here`)

delete jedi.age; //Delete key from object
console.log(jedi);

//Arrays

const starships = ["x-wing", "Tie-fighter", "Millineum Falcon", "Death Star"];//Arrays start on zero!!!
console.log(starships)

console.log("First Starship", starships[3]);//Calling items within the array!!!
starships[3] = 'Ballon';// replaced #(4) in Array
console.log(starships);

// Working with length

console.log("Fleet size:", starships.length); // Use this to find out how bog Array is 

starships.push("A-wing"); // Adding to Array
console.log(starships)
starships.pop() ///Pop removes last value
starships.splice(1,0, "A-wing")
console.log()















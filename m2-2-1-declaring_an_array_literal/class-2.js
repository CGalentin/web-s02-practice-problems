/*let f = 4

console.log(f)

const startCar = [
    "Open Door",
    "Get into seat",
    "put on seatbelt",
    "key in ignition",
    "turn key",
    "push gas",
    "put it in drive"
];

//for (condition, logic, increment)(set-up, comparison, Change)

console.log(startCar);

startCar.push ("Hit the gas and Go")

for (let i = 0; i < startCar.length; i++) {
    console.log(`Step ${i + 1}: ${startCar[i]}`); //why is one here and why does i or 1 work?????
}


const rocketship = {

    engines: "Ready",
    navigation: "Ready",
    comSupport: "Ready",
    communication: "Standby",
    blaster: "Offline"
} 

for ( let system in rocketship) { //loop through objects
    console.log(`System ${system} - Status: ${rocketship[system]}`);
}

const systemCheck = {
    thrusters: "OK",
    heatShield: "Fail",
    power: "OK",
    comms: "Fail"
}

for (let part in systemCheck) {
    if (systemCheck[part] === "Fail") {
        console.log(`Alert: ${part} is not ready!`)
    } else {
        console.log(`${part} is good to go`)
    }
}
const user = { firstName: 'John', lastName: 'Doe' };

for (key in user) console.log(user[key]);


/*let house = { type: 'Two Story', yearBuilt: '1976', color: 'black'

};

console.log(house);

for(description in house) {
    console.log(house[description]);
}


console.log('the house is described', description, house[description]);*/



/*var myList = ['apples', 'oranges', 'bananas'];

for ( var i=0; i < myList.length; i++) {

    console.log(myList[i]);
    alert('you have '+myList[i]);

}*/

let number = 0;
while (number !== 7) {
number = Math.floor(Math.random() * 10) +1
console.log("Rolled:", number);
 }

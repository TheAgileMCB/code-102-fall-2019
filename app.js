function setup() {
    createCanvas(640, 480);
}

function draw() {
    noStroke();
    fill(0,255,0);
    rect(320, 240, 20, 20);

    fill(255,0,0);
    circle(500, 100, 20);

    stroke(0, 0, 200);
    line(0, 40, 640, 40);
} 

function day1AM() {
    var fullName = "Matthew Barnhart";
    var age = 32;
    var weight = 175;
    var heightInInches = 70;
    var likesPizza = true;
    var hasTattoos = true;

    age = 33;
    age++

console.log(fullName + " is " + age + " years old.")
console.log("Do you like pizz? " + likesPizza + "!")
var feet =  Math.floor(heightInInches / 12);
var inches = heightInInches % 12;
console.log(feet);
console.log(fullName + " is " + feet + " feet " + inches + " inches tall.");

print("Hello!");
var convertedTemp = f2c(212);
}

day1AM();

function print(input) {
    console.log(input);
}

// converts Fahrenheit to Celsius
// input: temp in Fehrenheit
function f2c(tempF) {
    return((tempF - 32) * 5 / 9);

}
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

age = 32;

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
}

// day1AM();
// day1PM();


function day1PM() {

    print("Hello!");
    var convertedTemp = f2c(212);
    print(canIGoToTheCasino(age, "IA"));
    age = 19;
    print(canIGoToTheCasino(age, "IA"));
    print(canIGoToTheCasino(age, "MN"));


    temp = 100;
    print(WhatShouldIWear(temp)); 
}

    function print(input) {
    console.log(input);
    }

// converts Fahrenheit to Celsius
// input: temp in Fehrenheit
function f2c(tempF) {
    return((tempF - 32) * 5 / 9);

    }


function bmiConverter(weight, height) {
    return 0;
}

function canIGoToTheCasino(age, location) {
    return age >= 21 && location == "IA" || age >= 18 && location == "MN";
}

function WhatShouldIWear(temp) {
    if(temp >= 75) {
        return "swimwear";
    }
    else if(temp >= 40 && temp < 75) {
        return "shorts";
    }
    else if(temp >= 10 && temp < 40) {
        return "winter coat";
    }
    else {
        return "Stay in"
    }
}

function day2AM() {
    print(1);
    print(2);
    print(3);

    var count = 30;
    while(count >= 0) {
        print(count);
        count--;
    }
    // var sum = 0;
    // var count = 0;
    // while(true) {
    //     var input = parseInt (prompt('Enter a number. Type 0 to end. '));
    //     if(input === 0) {
    //         break;
    //     } else {
    //         sum += input;
    //         count++;
    //     }
    // }
    // console.log('The average of your numbers is ' + sum/count);

    for(var count=0; count <= 100; count+=10) {
        print(count);
    }

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "Decemeber"];
    print(months[0]);
    print(months[5]);

    for(var i = 0; i < months.length; i++) {
        print(months[i]);
    }

    var states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Federated States of Micronesia', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

    states.forEach(function(state) {
        if(state === "Iowa" || state === "Illinois") {
        print(state + " is cool.");
        } else {
            print(state + " ain't so great.");
        }
    });

}



// day2AM();

function day2PM() {
    var matt = {
        firstName: "Matt",
        middleName: "Charles",
        lastName: "Barnhart",
        dob: [2, 5, 1987], //month, day, year
        likesPizza: true,
        heightInInches: 70,
        fullName: function() {
            return this.firstName + ' ' + this.middleName + ' ' + this.lastName;
        },
        age: function() {
            var today = new Date();
            var year = today.getFullYear();
            var month = today.getMonth() + 1;
            var day = today.getDate();
            var myAge = year - this.dob[2];
            if(month < this.dob[0] || month === this.dob[0] && day < this.dob[1]) { myAge--;
            }
            return (myAge);
        },
    };

    print(matt.firstName);
    print(matt.fullName());
    print(matt.age());


}

day2PM();
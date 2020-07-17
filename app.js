// 5 variables of different types
// string, number, array, boolean, object
//object : (4 different key/value pairs) [string], [number], [array], [boolean]

let stringOne = "This is a string";
let numberOne = 1;
let arrayOne = ["one", "two", "three"];
let booleanOne = true;
let objectOne = {
    name: "Tanner",
    age: 23,
    hobbies: ["photography", "listening to music", "watching movies", "video games", "rock climbing"],
    fullStackDeveloper: true
};

//make 10 different functions
//one of your functions need to pass in an array
//one of your functions need to pass in a callback
//.... a string
//.... an object
//.... a boolean
//.... freestyle

function passArray(array) {
    let result = [];
    
    for (let i = 0; i < array.length; i++) {
        let count = array[i];
        if (count.length > 1) {
            result.push(count);
        }
    }
    return result
}
passArray(arrayOne);

function passCallback(callback, array) {
    let result = callback(array)[0];
    console.log(result);
}
passCallback(passArray, arrayOne);

function passString(string) {
    console.log(string);
}
passString(stringOne);

function booleanPractice(boolean) {
    if (boolean) {
        console.log("this works");
    }
}
booleanPractice(booleanOne)

function printHobbies(object) {
    console.log(object.hobbies);
}
printHobbies(objectOne);

const sectionOne = document.getElementById("section-one");
console.log(sectionOne);

const sectionTwo = document.getElementById("section-two");
console.log(sectionTwo);

const sectionThree = document.querySelector("#section-three");
console.log(sectionThree);

const sectionFour = document.querySelector("#section-four");
console.log(sectionFour);

const sectionFive = document.querySelector("#section-five");
console.log(sectionFive);

sectionOne.textContent = "Lakers";
sectionTwo.textContent = "Warrios";
sectionThree.textContent = "Nets";
sectionFour.textContent = "Blazers";
sectionFive.textContent = "Clippers";

const paraOne = document.querySelector(".paragraph-one");
console.log(paraOne);
paraOne.textContent = "Lebron James";

const paraTwo = document.querySelector(".paragraph-two");
console.log(paraTwo);
paraTwo.textContent = "Steph Curry";

const paraThree = document.querySelector(".paragraph-three");
console.log(paraThree);
paraThree.textContent = "Kemba Walker";

const paraFour = document.querySelector(".paragraph-four");
console.log(paraFour);
paraFour.textContent = "Kyrie Irving";

const paraFive = document.querySelector(".paragraph-five");
console.log(paraFive);
paraFive.textContent = "Kawhi Leonard";

const containerSix = document.createElement("div");
containerSix.classList.add('container-six');
console.log(containerSix);

const sectionSix = document.createElement("h2");
sectionSix.setAttribute("id", "section-six");
sectionSix.textContent = "Rockets";
console.log(sectionSix);

const paraSix = document.createElement("p");
paraSix.classList.add("paragraph-six");
paraSix.textContent = "James Harden";
console.log(paraSix);

const body = document.querySelector("body");
console.log(body);

body.appendChild(containerSix);
containerSix.appendChild(sectionSix);
containerSix.appendChild(paraSix);

//create another container
const containerSeven = document.createElement("div");

//add class
containerSeven.classList.add("container-seven");

//create another section
const sectionSeven = document.createElement("h2");

//add id
sectionSeven.setAttribute("id", "section-Seven");

//add text content
sectionSeven.textContent = "Suns";

//create another paragraph
const paraSeven = document.createElement("p");

//add a class
paraSeven.classList.add("paragraph-seven");

//add text content
paraSeven.textContent = "Kelly Oubre";

//append the container to the body
const body1 = document.querySelector("body");
body1.appendChild(containerSeven);

//append section to the container
containerSeven.appendChild(sectionSeven);

//append the paragraph to the container
containerSeven.appendChild(paraSeven);


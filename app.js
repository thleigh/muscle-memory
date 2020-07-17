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
    console.log(array);
}
passArray(arrayOne);

function passCallback() {

}

function passString(string) {
    console.log(string);
}
passString(stringOne);

function booleanPractice(element) {
    if (element === objectOne.name) {
        return element;
    }
}
booleanPractice("Tanner")



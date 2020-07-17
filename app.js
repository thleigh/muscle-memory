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
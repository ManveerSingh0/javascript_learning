//values and variables
let js = "amazing , i can do this";
let number = 23;

//              Values and Variables assignment
let country = "INDIA";
let continent = "Asia";
let population = "140.76";
let javascriptIsFun = true;



//              Data types
let isIsland = false;
let language; // or let language = undefined; 
console.log(typeof isIsland , typeof language);
javascriptIsFun = "ofcourse!";

//almost do same thing
let children = undefined;
let secondChildren = null;
const PI = 3.1415;


// let || var --> let function bounded and var global variable  
let age = 10;
age = 20;


var birthYear = 2005;
birthYear = 50;




/*-------------------------OPERATORS-----------------------------------*/
const ageManveer = 2024 - 2005;
console.log(ageManveer);
console.log(2 ** 2); //this will print the about;
let firstName = "Manveer";
let lastName = "Singh";
console.log(firstName + " " + lastName);


//string litrals || interpolated strings 
console.log(`I am ${firstName} , how are you doing and my age is ${ageManveer}`);

//type conversion and coercion
console.log(Number("18") + 18);
console.log(String(ageManveer));
//return Nan if string is not a number
console.log(typeof NaN);


//type coercion convert number to string if using +
console.log("hello" + 18 + "old");
//but - (minus || hypen) && * && / convert number to string
console.log('20' - '10' - 5); //return 5



//false values in javascript = '' , 0 , undefined , null , NaN , false


//you can't do this --> let something{"value"};
/*
    -- ways to name variables
    -**use camel case in javascript
    1._variableName
    2. $variablename10
    3. c++ (variable name)
*/


console.log(40 + 40);
console.log(number);
console.log(typeof country);
console.log(js);

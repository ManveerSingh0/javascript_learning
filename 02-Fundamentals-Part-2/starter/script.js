'use strict';


/*----------------------------------Function-------------------------------*/

function say_something(something){
    console.log(something);
    return something;
}

const age = function(age){
    console.log(age);
    return age + 18;
}

//Arrow Function
const calculateAge = manveerAge => 2005 - manveerAge;
const totalAge = calculateAge(2024);
console.log(totalAge);


age(10);
console.log(say_something("Nothing"));



/*----------------------------------ARRAY------------------------------------*/
const friends = ["Manveer", "Yogesh" , "Harish" , "Aman"];
console.log(friends[0]);

friends.push("wallah");
friends.unshift("mashaallah");


//friends.pop();//remove last element
const removed_last_element = friends.pop();//this also return poped value
const removed_first_element = friends.shift();//this also return shifted value

console.log(friends.indexOf("Manveer"));
console.log(friends.includes("Aman"));
console.log(friends.includes("nothing"));
console.log(friends);

/*-----------------------------------------Obects-----------------------*/
const object_player = {
    firstName: "Manveer",
    lastName: "Singh",
    age: 19,
    friends: ["Yogesh", "Harish", "Aman"],

    calcAge: function(){
	console.log(this.age);
    }
}

object_player.location = "india";
object_player["Instagram"] = "irom_niz";
console.log(object_player);

console.log(`Nothing can beat ${object_player.age}`);

const name = "Name";
console.log(object_player['first' + name]);
console.log(object_player.friends[0]);

//calling method using two different ways
object_player['calcAge']();
object_player.calcAge();




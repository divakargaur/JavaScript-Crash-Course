// understand word & keyword
// 1. things/elements/words who do not have any meaning in javascript are simply called word - harsh, radha, shyam
// 2. words who have meanings in javascript are called keyword - for, if, do




// understand var, const & let
// 1. var is something that contains some value/data that can vary
// 2. const is something that has some constant value
// 3. let is also somewhat like var but they are not same, will explain this later in javascript advanced course

var a = 12;
const b = 12;
let c = 12;




// understand hoisting
// 1. you can use any variable and functions even before defining it 
// 2. other programming languages does not support this 
// 3. hoisting of variables and functions means their decleration is moved on the top of code

console.log(d);
var d; // you need define it sooner or later




// primitive & reference
// 1. primitive - .......
// 2. reference - (), [] & {}
// 3. a value is primitive if it is not reference
// 4. primitive values copy the original value, changes will not effect the original one
// 5. reference values refers from the originl value, if made changes it will effect the original one

var e = 12;
var f = e;
f = f + 2;
console.log(e);
console.log(f); // primitive type

var g = [12, 13, 14, 15]; // this is an array
var h = g;
h.pop();
console.log(h);
console.log(g); // this magic is known as reference type




// if, else & else if
// 1. these are known as conditional statements
// 2. they work on the concept of true or false
// 3. if-statement executes if the condition in if is true
// 4. else-statement executes if the conditon in if is false
// 5. else if-statement is like a mid way through, if we want to check more than one condition in if 

if(12 > 13){
    console.log("IF");
}
else if(13 > 14){
    console.log("ELSE IF");
}
else if(14 > 15){
    console.log("ELSE IF");
}
else{
    console.log("ELSE");
}




// for & while
// 1. known as loops, simply use them to deal with repetitive tasks
// 2. you need to have common sense for understanding their use case
// 3. remember they exists to ease our task, not to complicate
// 3. for(initialization; condition; iteration){   }
// 4. while(condition){   }

for(var i = 1; i < 12; i++){
    console.log(i);
}

var i = 1; // initialization
while(i < 12){
    console.log(i);
    i++; // iteration or updation
}




// functions
// 1. an amount of code we define before hand
// 2. if we need to access the code again we can just call the function
// 3. we can even use it with different data

function recipe(){
    console.log("Step 1");
    console.log("Step 2");
    console.log("Step 3");
    console.log("Step 4");
    console.log("Step 5");
}
recipe();

// using functions with different data

function group(x, y, z){
    console.log(x, y, z); // a, b & c are parameters - variables
}
group(12, 13, 14); // 12, 13 & 14 are arguments - real values




// array
// 1. we can store more than one value in variables called as array
// 2. simply group of values
// 3. indexing in array - [0, 1, 2, 3, 4...]

var arr = [12, 13, 14, 15];
console.log(arr[0]);




// push, pop, shift, unshift & splice
// 1. these are some tools we use when dealing with arrays
// 2. push - to add a member at the end of array
// 3. pop - to remove a member from the end
// 4. shift - to remove a member from the start of array
// 5. unshift - to add a member at the start
// 6. splice - to remove members from the middle

arr.push(16);
arr.pop();
arr.shift();
arr.unshift(12);
arr.splice(2, 2); // arr.splice(index, number of elements to remove)
console.log(arr);




// object
// 1. information about one value
// 2. like a container
// 3. it can be blank
// 4. array is for storing values, object is for storing details about those values

var kv = {
    name: "NAME",  // property of the object
    age: "AGE",
    gender: "GENDER",
    undergrad: false,
    intro: function(){} // method of the object because it has a function as its value
}
console.log(kv.name); // accessing the value
kv.undergrad = true; // updating the property
console.log(kv.undergrad);
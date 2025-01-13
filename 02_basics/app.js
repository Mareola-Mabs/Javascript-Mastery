// Shorten console.log
const cl = console.log

console.log(" ")
console.log(" ")
console.log(" ")

// If Statemeents
/* E.g If money, buy some stuff, else bring some money dude */ 
let a = 100
let b = 100

if (a > b) {

    cl("a is greater than b")
}
else if (a < b) {
    cl("a is less than b")
}
else {
    cl("a is equal to b")
}

console.log(" ")
console.log(" ")
console.log(" ")

let date = new Date()
let hours = date.getHours()

 if (hours > 20 && hours <= 23 ){
    cl("Good Night")
}
else if (hours >= 17 && hours <= 20){
    cl("Good Evening")
}
else if (hours >= 12 && hours < 17){
    cl("Good Afternoon")
}

else{
    cl("Good Morning")
}

console.log(" ")
console.log(" ")
console.log(" ")

// Challenge
let password = ""
let passLenght = password.length

if (passLenght == 8){
    cl("Welcome")
}
else if (passLenght < 8){
    cl("Password Too Short")
}

else if (passLenght > 8){
    cl("Password too Long, Password should be 8 characters.")
}
else{
    cl("Please provide a password")
}

console.log(" ")
console.log(" ")
console.log(" ")

// Switch Statent
let x = 1

switch (x){
    case 0:
        text = "off"
        cl(text)
    break;

    case 1:
        text = "on"
        cl(text)
    break;

    default:
        text = "No Value"
        cl(text)
}

console.log(" ")
console.log(" ")
console.log(" ")

// Challenge
let fruit = "banana"


switch (fruit){
    case "banana":
        cl("Banana is good")
    break;

    case "orange":
        cl("I'm not a fan of orange")
    break;

    case "apple":
        cl("How you like em apples")
    break;

    default:
        cl("I have never heard of that fruit")
}

console.log(" ")
console.log(" ")
console.log(" ")

// For Loop
for (let i = 1; i <=5; i++){
    // Nested Loop
    cl("ok")
    for(j = 1; j <=5; j++){
        cl(j)
    }
    
}

console.log(" ")
console.log(" ")
console.log(" ")

// Challenge
for (let i = 0; i <= 1000; i++){
    cl("Mareola", i)
}

console.log(" ")
console.log(" ")
console.log(" ")

// While Loop
let i = 0
while (i <= 5){
    i++
    cl(i)
    cl("Hello World", i)
}

console.log(" ")
console.log(" ")
console.log(" ")

// Challenge
let k = 10
while (k < 100){
    k++
    cl("Mareola" , k)
}

console.log(" ")
console.log(" ")
console.log(" ")

// Do While Loop
i = 0
do {
    i++
    cl(i)
}
while (i < 5)

console.log(" ")
console.log(" ")
console.log(" ")

// Challenge
i = 19
do{
    i++
    cl("Mareola", i)
}
while(i < 40)
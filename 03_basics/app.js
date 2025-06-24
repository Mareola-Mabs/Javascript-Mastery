const cl = console.log

// Arrays
const numbersArray = [1, 2, 3, 4, 5]
cl(numbersArray)

const stringArr = ["eat", "code", "sleep", "repeat"]
cl(stringArr[3])

cl("")
cl("")
// Nested Arrays
const nestArr = ['one',["two", "three"], 1, 5]
cl(nestArr[1][0])

const letters = ["h", "e", "l", "l", "o"]
 cl(letters.toString().split("").join("").replace(/,/g, ""))

cl("")
cl("")
// Array Foreach Method
 letters.forEach((items)=>{
    cl(items)
 })

cl("")
cl("")
// Challenge

const favSingers = ["Dua Lipa", "Rihanna", "ALoe Blacc"]
cl(favSingers[0])

const favNumbers = new Array("5", "10", "15", "1000")
cl(favNumbers)

const mixedArr = ["string", favNumbers, 123, true]

cl(mixedArr[1][3])

cl("")
cl("")

// Array Methods
const fruits = ["apples", "orange", "mango"]
cl(fruits)

cl('')

// Push()
fruits.push("pineapple", 5, "banana")
cl(fruits)

cl('')

// Pop()
fruits.pop()
cl(fruits)
cl(fruits.pop())

cl('') 
// shift()
let abc = fruits.shift()
cl(fruits)
cl(abc)

cl('')
// Unshift()
fruits.unshift("hey", 50, true)
cl(fruits)

cl('')
// Concat
const newFruits = ['apple', 'orange']
const moreFruits = ["grape", "lemon"]

let joinedFruits = newFruits.concat(moreFruits)
cl(joinedFruits)

cl('')
// Includes()

const pl = ["javascript", "Java", "Python"]
const num = [3, 5, 7, 9]

cl(pl.join("").toLowerCase().includes("java"))

cl('')
// Reverse()
cl(pl.reverse())

cl('')

// Slice()
cl(pl.slice(0, 2))

const things = ["things", "are", "cool", "and", "fun"]
cl(things.sort())
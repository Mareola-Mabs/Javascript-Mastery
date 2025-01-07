// Console Messages
console.warn("This is a warning")

console.clear()

console.table({name: "Mareola", age: 25})
console.log(" ")
console.log(" ")
console.log(" ")

// Variables
// Declaring Variables
let name;


// Assigning Values
name = "banana";

let algo = name+"rest";
console.log(algo);

let ASD = "fjjfj";
console.log(ASD);

let myName = "Ibukunola"
let whatToBecomeInLife = "Software Engineer"
let gender = "Male"
let twitterHandle = "Mareola_Official"

console.log(myName, whatToBecomeInLife, gender, twitterHandle)


console.log(" ")
console.log(" ")
console.log(" ")

// Primitive Types
// 1. Number
let num = true
console.log(typeof num)

// Basic Math
console.log(2 + 2)
console.log(2 - 2)
console.log(2  * 2)
console.log(2  / 2)
console.log(2  % 2)
console.log(2  ** 2)


console.log(" ")
console.log(" ")
console.log(" ")

// Increment and Decrement Operators
let counter = 0
counter++
counter++
counter--
console.log(counter)

console.log(" ")
console.log(" ")
console.log(" ")

// Challenge
let firstFavNum = 10
let secondFavNum = 15

console.log(firstFavNum + secondFavNum)
console.log(firstFavNum - secondFavNum)
console.log(firstFavNum * secondFavNum)
console.log(firstFavNum / secondFavNum)
console.log(firstFavNum % secondFavNum)
console.log(firstFavNum ** secondFavNum)

console.log(" ")
console.log(" ")
console.log(" ")

// Boolean

let isTrue = NaN
let isUndefined = undefined
let isNull = null

console.log(isTrue)
console.log(isUndefined)
console.log(isNull)

// Challenge
let isJsProgrammingLanguage = true
let isJsHard = false
let favNumb = 10
let secondFavNumb

console.log(favNumb + secondFavNumb)

console.log(isTrue)
console.log(isUndefined)
console.log(isNull)


console.log(" ")
console.log(" ")
console.log(" ")

// Comparison and Equality Operators
let cl = console.log
cl(10 === "10")
cl(10 == "10")
cl(10 > "10")
cl(10 < "10")
cl(10 == 10)
cl(10 <= 10)
cl(10 > 10)
cl(10 !== "10")


console.log(" ")
console.log(" ")
console.log(" ")

// Challenge
let firstFavNumb = 10
let secondFavNumbs = 15
cl(firstFavNumb > secondFavNumbs)
cl(firstFavNumb < secondFavNumbs)
cl(firstFavNumb >= secondFavNumbs)
cl(firstFavNumb <= secondFavNumbs)
cl(firstFavNumb === secondFavNumbs)
cl(firstFavNumb == secondFavNumbs)
cl(firstFavNumb !== secondFavNumbs)
cl(firstFavNumb != secondFavNumbs)

console.log(" ")
console.log(" ")
console.log(" ")

// Strings
let lastName = `Mabs`
let firstName = `Ibukunola`
let fullName = `${firstName} ${lastName}`
cl(fullName)

// Contatenation
let mobile = `iphone`
let version  = `16`
cl(mobile.concat(version))

// Append
let numb = `5`
cl(numb+=1)
cl(numb.length)

// Cases
let aresnal = "HuxnHud"
cl(aresnal.toLowerCase())
cl(aresnal.toUpperCase())

cl("")
cl("")
cl("")

// Slice Method
cl("firstname".slice(2,4))

cl("")
cl("")
cl("")

// Split and Join
cl("firstname".split(""))
cl("firstname".split(" "))
cl(["f","i","r","s","t"].join(" "))
cl(["f","i","r","s","t"].join(""))
cl(["f","i","r","s","t"].join("6-"))

cl("")
cl("")
cl("")

// Includes
cl(["f","i","r","s","t"].includes("i"))
cl(mobile.includes("i"))

cl("")
cl("")
cl("")

// Trim
cl("   Ibukunol a".trim())

cl("")
cl("")
cl("")

// Template Literals
let desc = `this is a random
            text`

cl(desc)

let item = "Iphone"
let versions = 14

console.log(`${item}${versions}`)

// Challenge
let favActorFirstName = "Tom"
let favActorLastName = "Cruise"
let actorFullName = `${favActorFirstName} ${favActorLastName}`
let uppercase = actorFullName.toUpperCase()
let message = `My favourite Actor is ${uppercase} and i think he's cool`
message += ` his best movie was Knight and Day.`
cl(message)

cl("")
cl("")
cl("")

// Type Conversion
let money = "50"
cl(typeof money)

// String to Number
cl(parseInt(money), typeof parseInt(money))
cl(+money , typeof +(money))
cl(Number(money) , typeof Number(money))

cl("")
cl("")
cl("")

// Number to String
money = 50
cl(money.toString(), typeof money.toString())
cl(String(money), typeof String(money))


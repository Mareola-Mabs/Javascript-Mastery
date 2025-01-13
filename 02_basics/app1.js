// Shorten Console.log
const cl = console.log

const a = true, b = false, c = 4

cl(a && b)
cl(a || b)
cl(!c)
cl(c > 2 && c > 2)
cl(c > 2 || c > 2)
cl(b && b)
cl(b || b)
cl(!b)

cl("")
cl("")

let password = "Mareola-web"

if (password.length >= 8 && password.includes('web')){
    cl("Valid Password")
}
else{
    cl("Invalid Password")
}
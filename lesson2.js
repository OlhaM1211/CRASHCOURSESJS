const a = 10
const b = 30
const sum = a + b

console.log(a + b)
console.log('sum of a and b is equel to', a + b)
console.log('sum of a and b is equel to', sum)

console.info('I can print some iformation')
console.error('I can inform some error')

// ОПЕРАТОРИ ПРИСВОЄННЯ

let c = 40

c = c - a
console.log(c)
// the same operation, shorter way
c -= a
console.log(c)

let d = 50

d += c
console.log(d)

let i = 70
i = i % b
console.log(i)
let j = 70
j %= b
console.log(j)

let x = 2
let y = 3
x = x ** y
console.log(x)
x **= y
console.log(x)

// ОПЕРАТОРИ ПОРІВНЯННЯ
const mathPI = 3.14
const radius = 10
const name1 = 'Sasha'
//comparison
console.log(mathPI === 3.14)
console.log(name1 === 'Stevan')

//numbers comparison
console.log(radius > 10)
console.log(radius >= 10)
console.log(radius < 100)
console.log(radius !== 10)

// TERNARY
const formula = 'circumference'
const result = formula === 'circumference'
    ? mathPI * (2 * radius)
    : mathPI * (radius * radius)
console.log(result)

// ЛОГІЧНІ ОПЕРАТОРИ

// using 'and' - '&&'
const res = mathPI === 3.14 && radius >= 10
    ? mathPI * (2 * radius)
    : mathPI * (radius * mathPI)
console.log('result', res)

// using "not" and "or"
const res2 = radius !== 0 || radius < 1000
? mathPI * (2 * radius)
: mathPI * (radius * radius)
console.log('result 2', res2)

// ПОБІТОВІ ОПЕРАТОРИ
let aa = 5
let bb = 1
console.log(aa >> bb)

// УМОВНІ ОПЕРАТОРИ

const e = 10
const f = 100
const g = 3

// example with "if"
if (e === 10) {
    console.log('a is equal 10')
}
// example with "if ... else"
if (f > 1) {
    console.log("f is bigger than 1")
} else {
    console.log("f is smaller than 1")
}
// example with else...if
if (g < 1) {
    console.log("g is bigger than 5")  // WHY????
} else if (g == 10) {
    console.log("g is equel 10")
} else {
    console.log("g is smaller than 5")
}

// SWITCH ...case

const day = "11"

switch (day) {
    case "10": {
        console.log ("It is true")
    }
    break;
    case "11": {
        console.log ("It is OK")
    }
    break;
    default: {
        console.log ("It is false")
    }
}


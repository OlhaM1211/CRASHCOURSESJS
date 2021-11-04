console.log('hello Sasha')

let myNumber = 2828
let myString = 'Some word'
let myBool = true
let myNull = null
let myUnder = undefined

console.log(typeof myNumber);
console.log(typeof myString);
console.log(typeof myBool);
console.log(typeof myNull);
console.log(typeof myUnder);

// 
let obj = {name1:'sorax'}
let  array = [1, 2, 3]
let regexp = /w+/g
let func = function(year) {}

console.log(typeof obj);
console.log(typeof array);
console.log(typeof regexp);
console.log(typeof func);

obj.name1 = 'Sophiya'
array[1] = 325

console.log(obj)
console.log(array)

console.log(myString.toLocaleUpperCase())
console.log(myString)

let a = 'b'
let b = 4

console.log(a)
console.log(b)

console.log(2<<8)
console.log(-22)

// 16річні числа

console.log(0xfffcc)
console.log(0xbbbccc)


// експаненціальна форма чисел
console.log(12.45)
console.log(1.34e4)
console.log(12.5E-30)

let N = new Number(4000)
console.log(typeof N)

console.log(N.toFixed(2))
console.log(5 .toFixed(4))

let n = 4
console.log(n.toExponential(2))
console.log(n.toPrecision(3))

//арефметичні оператори
//оператори інкримента ++ (префіксний ++1, постфіксний 1++)   оператори дікримента -- 1 , 1-- 

//let a = 10
//console.log(++a)
//console.log(a)
//console.log(a++)
//console.log(--a)
//console.log(a)
//console.log(a--)

//строки 

let string = 'Sometimes the same is different'
console.log(string.length)
console.log(string.length - 1)
console.log(string.substring(10))
console.log(string.substring(10,21))
console.log(string.slice(-10))
console.log(string.substr(14,4))
console.log(string.lastIndexOf("me"))
console.log(string.split(" "))
console.log(string.toLocaleUpperCase())
console.log(string.toLocaleLowerCase())
console.log(string[4])


//Логічні значення і оператори

console.log(5 === 6)
console.log(Boolean(5))

// Falsy values

console.log(Boolean(undefined))
console.log(Boolean(null))
console.log(Boolean(0))
console.log(Boolean(NaN))
console.log(Boolean(""))

let s = ""
if (s) {
    console.console.log("Its true");
}

console.log(true && false)
console.log(true && true)
console.log(true || false)
console.log(false || false)
console.log(!true)
console.log(!false)

let A = 0
let isTrue = false
isTrue && (A = 5)
console.log(A)

let someString = 'Non-empty string'
let newString = someString || 'Default String'
console.log(newString)


// Null and undefined  - типи які свідчать про відсутність значень

console.log(typeof null)
console.log(typeof undefined)
let Temp
let Obj = {}
let B = [1 ,2 ,3 ,4]

function greet(name) {}

console.log(Temp)
console.log(Obj.prorerty)
console.log(a[4])

console.log(greet('Sorax'))
console.log(greet())

console.log(null == undefined)
console.log(null === undefined)


// Преобразование типов - конвертация типов

console.log(5 + '5')
console.log(typeof(5 + '5'))
console.log('5' * '4')
console.log(typeof('5' * '4'))
console.log('5' * 'hi')
console.log(typeof('5' * 'hi'))
console.log('5' == 5)
console.log('0' === false)
console.log(undefined == false)
console.log(undefined == true)
console.log(undefined == null)

//явні преобразования виступають конструкторами виступають Number, String, Boolean

console.log(Number('555'))
console.log(typeof(Number('555')))
console.log(String('4443'))
console.log(typeof(String('4443')))
console.log(Boolean(1))
console.log(typeof(Boolean(1)))

console.log(!!7)
console.log(!!0)
console.log(typeof(345 + ''))
console.log(typeof + '454')

let number1 = 22
console.log(typeof number1.toString())
number1 = 45
console.log(number1.toString(3))
number1 = 5
console.log(number1.toString(2))
console.log(typeof false.toString())

console.log(parseInt('45 px', 10))
console.log(parseFloat('12.45 em'))

console.log(!!"")
console.log(!!NaN)
console.log(!!0)
console.log(!!null)
console.log(!!undefined)

console.log(!!"Hi")
console.log(+"    4 g")
console.log(parseInt("4 px"))

console.log(+true)
console.log(+false)


//Умовні Інструкції

if (true) console.log(('Its true'))
if (false) console.log(('Its true'))

let m = 5

if (m > 3) {
console.log(m)
}

if (m > 3) {
console.log(m)
console.log('hello')
}

else(m > 4)
    console.log(m)
    console.log('m is more than 4')

    let name2= "Sorax", homecity

if (name2 === "John") {
    homecity = "Boston"
} else if (name2 === "Sorax") {
    homecity = "Belgorod"
} else if (name2 === "Bill") {
    homecity = "LA"
}

console.log(homecity)

switch(name2){
    case "John": homecity = "Boston"; break
    case "Sorax": homecity = "Belgorod"; break
    case "Bill": homecity = "LA"
    default: homecity = "Moscow"
}

console.log(homecity)

let name3= "Dan", homecity1

if (name3 === "John") {
    homecity1 = "Boston"
} else if (name3 === "Sorax") {
    homecity1 = "Belgorod"
} else if (name3 === "Bill") {
    homecity1 = "LA"
}

console.log(homecity1)

switch(name3){
    case "John": homecity1 = "Boston"; break
    case "Sorax": homecity1 = "Belgorod"; break
    case "Bill": homecity1 = "LA"
    default: homecity1 = "Moscow"
}

console.log(homecity1)

//Умовні оператори

let y = 5
text = y > 10 ? 'y is more than ten' : y < 10 ? 'y is less than ten' : 'y is equal to ten'

console.log(text)

if (y > 10) {
    text = 'y is more than ten'
} else if (y < 10) {
    text = 'y is less than ten'
} else {
    text = 'y is equal to ten'
}

console.log(text)

// ЦИКЛИ
// for ( ініціалізація; тест; інкремент)
var i 
for (i = 0; i < 10; i++) {
    console.log(i)
}
// while (вираз) інструкція
var i = 10
while (i--){
    console.log(i)
}
// do інструкція while (вираз)
var i = 0
do console.log(i++); while (i > 10)

// ФУНКЦІЇ function ідентифікатор (аргументи) Хінструкції return вираз }
/*
function greet(name1) {
    return 'Hello' + name1;
}
var greet = function(name1) {
    console.log(arguments.length);
    return 'Hello'+name1;
}
// ідентифікатор (аргументи)

console.log(greet('Sorax', 34, 23, 26).toUpperCase())

var func = function(callback) {
    var name = 'Sorax';
    callback(name);
}

func(function(n){
    console.log('Hello' + n)
})
*/

//Цепочки областей видимости

var i = 5
var func1 = function() {
    var i = 10
    console.log(i)
   var innerFunc = function() {
        var i = 15
        console.log(i)
    }
    innerFunc()
    console.log(i)
}
func1()

// Оголошення функції (Function Declaration)

// function name(parametrs) {
//     body (code) of function
// }

/* Як правило в, в імені використвоується відповідні префікси, які описують дії, після яких слідують об'єкти дії

Наприклад, функції, починаються:
'show...' зазвичай щось показують,
'get...' повертає значення
'calc...' вираховує
'create...' щось створюють
'check...'перевіряють і повертають логічні значення, та інше

Приклади:
showMessage -- показати повідомлення
getOptions -- отримати параметри
calmSum -- порахувати суму */
//Внєшняя переменная
function showMessage() {
    let Message = 'Hello world!'; - // локальна переменная - не застосовується за межами функції
    console.log('Hello world!')
}

showMessage()   // Це називається  "викликати функцію"

function square (num) {
    return num * num;
    }
square (7)  // function  - декларація функції, square - ім'я функції, num - параметри, return - повертає результат, 
                //num * num - інструкції, 7 - аргументи

// Arrow function

	
const square1 = (number) => {
    return number * number;
  }
  square1(4);
  // shorter way
  const square2 = (number) => number * number;
  // to call an arrow function
  square2(5);

let car = {
    color: 'blue',
    maxSpeed : 200,
    audio: {
        brand: 'Sony',
        speakers: 10
    }
};
console.log(car.color);

car.color = 'yellow'
console.log(car);

function colorReset () {
    car.color = 'blue'
    console.log(car.color)  
}

colorReset() // blue

let motorcycle = {
    color: 'black',
}

let motorcycle1 = {
    color: 'grey',
}

function colorChange(motorcycle) {
    motorcycle.color = 'orange';
}
colorChange(motorcycle)
function colorChange(motorcycle1) {
    motorcycle1.color = 'orange';
}
colorChange(motorcycle1)
console.log('Motorcycle: ' + motorcycle.color);

console.log('Motorcycle1: ' + motorcycle1.color)

// DKA - develop - канал

let car1 = {
    maxSpeed: 240
}
console.log('Швидкість була: ' + car1.maxSpeed);

function speedChange(car1) {
    car1.maxSpeed = 300
};
speedChange(car1)
console.log('Швидкість стала: ' + car1.maxSpeed);


// Виклик функції без "()"

let car2 = {
    speed: 250,
    update: speedChange1
};


function speedChange1() {
    console.log(car2.speed)
}

car2.update()

function sayHelloWorld() {
    console.log("Hello, world!");
  }

  sayHelloWorld()



function sayHello() {
    console.log("Hello, Somename!");
  }
  sayHello()

// Функции
// Function Declaration
function greet(name) {
    console.log('Привет -', name)
}
greet('Лена')

// Function Expression
const greet2 = function greet2(name) {
    console.log('Привет 2 -', name)
}
greet2('Лена')

console.log(typeof greet)  // function
console.dir(greet) // [Function: greet]

// Анонімні функции

let counter = 0
const interval = setInterval(function() {
    if (counter === 7) {
        // clearInterval(Interval)
    } else {
        console.log(++counter)
    }
}, timeout =  1000)

// THIS - контекст виклику функції

const window = {
    prop: 42,
        func: function() {
      return this.prop;
    },
  };
  
  console.log(window.func());






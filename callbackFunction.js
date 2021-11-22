// ==================================================================
// CALLBACK - функція, яка передається іншій функції для виконання
//====================================================================

function fn (callback) {
    console.log('fn')

}

const sayHello = () => {
    console.log('Hello');
};

fn(sayHello);

// =============================================================================
// Абстрагування повторень - якщо потрібно певну функцію повторити декілька раз
// =============================================================================

function repeat(count, callback) {
    for (let i = 0; i < count; i++) {
        callback()
    }
}
function sayHello1() {
    console.log('Hello!');
}
function sayBye() {
    console.log('Bye!');
};
repeat(5, sayHello1);  // Hello! (5 times)
repeat(3, sayBye);     // Bye (3 times)

//=========================================================================
// Фільтрація масива
//=========================================================================
const numbers = [1, 2, 3, 4, 5, 6];

function filter(arr, callback) {
    const result = [];

for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
        result.push(arr[i]);
    }
}
return result
}
console.log(filter(numbers, x => x < 4))
console.log(filter(numbers, x => x > 4))
console.log(filter(numbers, x => x < 2 || x > 4))

const persons = [
{
 name1: 'Sasha',
 age: 33,
},
{
 name1: 'Kolja',
 age: 32,
},
{
 name1: 'Bob',
 age: 28,
},
];
console.log(filter(persons, ({ age }) => age > 30))

// ===============================================================
// СТЕК
// ===============================================================
const globalA = 1;

function fn1() {
    const fn1A = 11;
    const globalA = 5;
    console.log('fn1');

    fn1()
}
function fn2() {
    const fn2A = 22;
    console.log('fn2');
}
function fn3() {
    const fn3A = 33;
    console.log('fn3');

    fn2();
}

fn3()

console.log('Start');
console.log('body');
console.log('end');

//========================================================================
// ЗАМИКАННЯ - здатність JS запам'ятати X - і виорист. для своїх цілей
// створює обл. видимості не в моменс створення, а в момент виклику функції
//========================================================================
function counter(name1){
    let x = 0;

 function increment() {
     console.log(`${name1}: ${x++}`);
  }
  return increment;
}

const counter1 = counter('counter1');
const counter2 = counter('counter2');

counter1(); // counter1: 0
counter1(); // counter1: 1
counter1(); // counter1: 2

counter2(); // counter2: 0
counter2(); // counter2: 1
counter2(); // counter2: 2
counter2(); // counter2: 3

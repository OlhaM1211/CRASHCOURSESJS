//=============================================================================================
// Destruction of object
// ============================================================================================
/*
const sayHello = obj => {
    const name1 = obj.name1;
    const age = obj.age;


console.log(`Hello, my name is ${name1}, I am ${age} years old.`);
}
const human = {
    name1: 'Tommy',
    age: 13,
    sex: 'male',
}
sayHello(human)
*/
/*
const sayHello = obj => {
    const{name1, age} = obj
console.log(`Hello, my name is ${name1}, I am ${age} years old.`);
}

const human = {
    name1: 'Tommy',
    age: 13,
    sex: 'male',
}
sayHello(human)
*/
const sayHello = ({name1, age}) => {    // ДЕСТРУКТУРИЗАЦІЯ ОБ'ЄКТА
   console.log(`Hello, my name is ${name1}, I am ${age} years old.`);
}

const human = {
    name1: 'Tommy',
    age: 13,
    sex: 'male',
}
sayHello(human) // Hello, my name is Tommy, I am 13 years old.

// ===========================================================================================================
// Destruction of array
// ===========================================================================================================
// example 1
const arr = ['Bobby', 'Peter'];
console.log(arr);

const [a, b] = arr;
console.log(arr)

//example 2
const person = {
    name1: 'Sasha',
    years: 32,
};
Object.entries(person).forEach(item => console.log(item))  // виводить 2 окремі значення: окремо - key,окремо - value
// [ 'name1', 'Sasha' ]
// [ 'years', 32 ]

Object.entries(person).forEach(([key, value]) => console.log(`Key: ${key}, value: ${value}`),); // ДЕСТРУКТУРИЗАЦІЯ МАСИВА
// Key: name1, value: Sasha
// Key: years, value: 32

// example 3
//   3.1
// let c = 10;
// let d = 20;
// const f = c;

// c = d;
// d = f;
//console.log(c, d) // swap-ули значення . поміняли їх місцями - 20 10

// //   3.2
//  [d, c] = [c, d];  // Cannot set properties of undefined (setting '10')
// console.log(c, d)

// example 4
const arr1 = [3, 5, 1, 7, -10, 4];

for(let i = 0; i < arr1.length; i++) {
    for(let j = i + 1; i < arr1.length; j++) {
        if (arr1[j] < arr1[i]) {
            [arr1[j], arr1[i]] = [arr1[i], arr1[j]]
        }

    console.log(arr1)
    }
}





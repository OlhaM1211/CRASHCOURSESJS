// Цикли

let sum = 0
for (let i = 0; i < 10; i++) {
    sum = sum + 1
}

console.log('sum of nums from 0 to 10 is ', sum)

// Цикли for для роботи з масивами
// Синтаксисис - For(Поччаток; Умова; Крок) {Тіло цикла} виконання коду 

//Приклад
// Директива Break - ставиться, коли нам потрібно припинити роботу циклу на певному етапі
let num2 = 0
for(; num2 < 6; num2++) {
    console.log(num2);
    if (num2 === 3) {
        break;
    }
    
}
console.log('Роботу завершено', num2 = `${num2}`);

const nums = [1, 2, 3, 4, 5, 6]
let sum1 = 0;

// in the loop we will find a sum of nus array items
for (let i = 0; i < nums.length; i++) {
    sum1 = sum1 + nums[i];
    console.log('nums[i]', nums[i])
}
console.log('sum of nums of items ', sum1)

for (let i = 0; i < 15; i++) {     // к-сть повторень, стільки буде стрічок в консолі
    console.log('Iron Man, Mark -', +i)
}

let drivers = ['Alla', 'Valja', 'Anna']
for (let i = 2; i > -1; i--) {
    console.log(drivers[i])
}

let drivers1 = ['Саша', 'Петя', 'Вова']
for (let i = 0; i < drivers1.length; i++) {
    console.log(drivers1[i])
}

for (let i = 2; i >= 0; i--) {
    console.log(drivers1[i])
}


// Цикли while 

let n = 0
while (n < 4) {
    n++ }

console.log(n)

let num = 5;
while (num) {
    console.log(num);
    num--;
}
//Цикл do ...while - використовується, коли нам потрібне хоча б одне виконання циклу, не залежно від результату true|false

let num01 = 2;
do {
    console.log(num01);
    num01++;
}
while (num01 < 2);

// Вивести числа в послідовності 4 7 10 13 з допомогою цикла
let = tmp = '';
for (let i = 4; i <= 13; i = i + 3) {
    tmp = tmp + i + '';
}

console.log(tmp)


// // МАСИВИ
// // створення масивів
// // empty array to modify later
let emptyArray = [];

// // array with nums
const numsArray = [1, 2, 3, 4];

// array with strings
const strArray = ['there', 'can', 'be', 'string'];
console.log(strArray)
// mix of different data types
const mixArray = [1, 'can', {n:2}, [1, 2, 3]]
console.log(mixArray)
// // Створення масивів з використанням класу Array

// // create an empty array
const nums = new Array()
// // add numbers
 nums.push(1);
nums.push(2)
console.log(nums) // [ 1, 2 ]

// Доступ до елементів масива

// Array mix with different data types

const mix2mix = [1, 'can', {car: 'blue'}, [1, 2, 3]]

console.log(mix2mix[1], mix2mix[3])

// МОДИФІКАЦІЯ МАСИВІВ

// array with strings
const mix3mix = [1, 'str', 'there', {b: 3}, [1, 4, 8]];

// add a new element
mix3mix[5] = 100;        // [ 1, 'str', 'there', { b: 3 }, [ 1, 4, 8 ], 100 ]
console.log(mix3mix)

// to change value
mix3mix[1] = 'winter';
console.log(mix3mix)    // [ 1, 'winter', 'there', { b: 3 }, [ 1, 4, 8 ], 100 ]

// delete element
delete mix3mix[4];
console.log(mix3mix)    // [ 1, 'winter', 'there', { b: 3 }, <1 empty item>, 100 ]

// МЕТОДИ ДЛЯ МОДИФІКАЦІЇ МАСИВІВ

// array with strings

const mix4mix = ['', 'happy', 'love', {feeling: 'strong'}, 1, 454]
// to add new element
mix4mix.push('4');
console.log(mix4mix);   // [ '', 'happy', 'love', { feeling: 'strong' }, 1, 454, 41 ]

mix4mix.push({n: 8});
console.log(mix4mix);   // [ '', 'happy', 'love', { feeling: 'strong' }, 1, 454, 41, { n: 8 } ]

// remove last elements
mix4mix.pop();
console.log(mix4mix);  // [ '', 'happy', 'love', { feeling: 'strong' }, 1, 454, '4' ]
mix4mix.pop();
mix4mix.pop();
console.log(mix4mix); // Видалили ще 2 елемента [ '', 'happy', 'love', { feeling: 'strong' }, 1 ]

// remove first elements
mix4mix.shift();
console.log(mix4mix);  // [ 'happy', 'love', { feeling: 'strong' }, 1 ]

// to add new first element
mix4mix.unshift(12);
console.log(mix4mix);
mix4mix.unshift(11, 90); // [ 12, 'happy', 'love', { feeling: 'strong' }, 1 ]
console.log(mix4mix);  //  [ 11, 90, 12, 'happy', 'love', { feeling: 'strong' }, 1 ]

// to swap elements
const ar1 = [1, 2];
const ar2 = [3, 4, 5]
// contact arrays
ar = ar1.concat(ar2);
const ar3 = [...ar1, ...ar2];
console.log(ar)              // [ 1, 2, 3, 4, 5 ]
console.log('ar3', ar3)      // ar3 [ 1, 2, 3, 4, 5 ]     

//Видаляємо конкретний елемент
const arroy1 = ['Liza', 'Stella', 'Inna', 'Kate']    
arroy1.splice(1, 1);
console.log(arroy1)   // [ 'Liza',  'Inna', 'Kate' ]

// Видаляєм елемент і відображаєм його окремою змінною
const arroyNew = ['Liza', 'Stella', 'Inna', 'Kate']
const removed = arroyNew.splice(1, 1);
console.log(removed)  // [ 'Stella' ]

// Замінюємо елемент
const arroy2 = ['Liza', 'Stella', 'Inna', 'Kate']
arroy2.splice(2, 1, 'Настя')
console.log(arroy2)   // [ 'Liza', 'Stella', 'Настя', 'Kate' ]

// багатовимірні масиви

const matrix = [
['a', 'b', 'c'],
['d', 'e', 'f'],
['g', 'h', 'i']
]

console.log(matrix);      // [ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ], [ 'g', 'h', 'i' ] ]
console.log(matrix[0][2]);   // c,   '0' - індекс першого елементу МАТРИЦІ, '2' - індекс елементу в матриці всередині МАТРИЦІ
console.log(matrix[2][0]);   // g    '2' - індекс останнього елементу МАТРИЦІ, '0' - індекс елементу в матриці всередині МАТРИЦІ

const arrOne = ['Аня', 'Катя', 'Олена']
console.log(arrOne[1]);   // Катя
console.log(arrOne[4]);   // undefined
console.log(arrOne)
console.log(arrOne.length)  // '3' -- довжина масива, вказує на к-сть значень в масиві.
const arrTwo = ['Коля', true, {skill1: 'css', skill:'html'}, [1, 2, 3], function() {
                console.log('Привет, я Коля!')
}] 
console.log(arrTwo);  // ['Коля', true, {skill1: 'css', skill:'html'}, [1, 2, 3], function() {
                    //    console.log('Привет, я Коля!')
console.log(arrTwo[2].skill);  // html
console.log(arrTwo[3][0])   // 1
arrTwo[4]()                 // Привет, я Коля!

// метод SLICE створює копію або часткову копію масива 
// Синтаксис arr.slice([start], [end]) [end]

// Копіюєм частину масиво

const arrThree = ['aa', 'bb', 'cc', 'dd', 'ee']
const arrThree1 = arrThree.slice(1, 3);
console.log(arrThree1);      // [ 'bb', 'cc' ]
const arrThree2 = arrThree.slice(-3, -1)
console.log(arrThree2);     //  [ 'cc', 'dd' ]

// Копіюєм увесь масив
const arrThree3 = arrThree.slice();
console.log(arrThree3);

// Поиск в масиве
// Методи indexOf, lastIndexOf i includes аналоги строкових масивів

// indexOf
console.log(arrThree.indexOf('bb'))   // 1 є
console.log(arrThree.indexOf('Вася'))  //-1 немає
console.log(arrThree.indexOf('bb', 2))  // -1  пошук після 2-го значення , після 'cc'

// includes
console.log(arrThree.includes('bb'))   // true
console.log(arrThree.includes('Вася'))  // false
console.log(arrThree.includes('bb', 2)) // false


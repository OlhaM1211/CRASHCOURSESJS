
// Конкатенація або об'єднання рядків

const user0 = {
    firstName: 'Olha',
    lastName: 'Matushevska',
    age: 31
  };
  
  const helloStr = 'Hello, ' + user0.firstName + ' ' + user0.lastName + ' ' + 'is ' +  user0.age + ' ' + 'older' + '!';
  
  console.log(helloStr);
  // output: Hello, Olha Matushevska is 31 older!


  const user = {
    name1: 'Tony',
    age: 110,
  }

  const t = name => name;
  console.log(`Tre user name is ${t(user.name1)} and he is ${user.age} year old`)

  // Конкатенація рядка із числовим значенням

  const result = 20000 + ' my salary for a month';

console.log(result);
// Output: 20000 my salary for a month


const interesting = '18' + 2 - 6;

console.log(interesting); // Output: 176 , оскільки '18' - string + 2 = 182 - 6 = 176

const input = '45A'
const resInput = input + 10 - 9
console.log(resInput)  // NaN

const resInput1 = parseInt(input) + 10 - 9
console.log(resInput1) // 46

// Конкатенація рядка із іншим типом даних

	
const resume = "Don't be sad " + {a: 'aaa'};
 console.log(resume);    //Don't be sad [object Object]

const resume1 = "Everything will be fine " + ['bbb'];
console.log(resume1);    //Everything will be fine

//  Template string
// Template literals (Template strings) - дозволяє вносити безкінечну к-сть зміннихб також можемо добавляти тернарні оператори

const lines = 68;
const language = 'JavaScript';

const result2 = `${lines} lines of ${language} code`;

console.log(result2); // Output: 68 lines of JavaScript code

const lesson = 4;
const subject = 'English';

const result3 = `${subject} will be lesson ${lesson < 5 ? lesson: 'Zero'} `;

console.log(result3); // Output: 'English will be lesson 4'

// `` - зворотні лапки та $

const hi = 'Hello'
const textHi = `${hi}, I am a string`
console.log(textHi)  //Hello, I am a string

function someSum(a, b) {
  return a + b;
}
console.log(`Сумма: ${someSum(5, 7)}`)  //Сумма: 12

//багаторядкові стрічки

const text = `Привіт!
Ми на краш-курсі
Java Script!`
console.log(text)  //Привіт!
                  //Ми на краш-курсі
                  //Java Script!

// Методи для роботи з рядками

// Складові і використання метода, myStr - назва змінної рядкового типу; split - потрібний метод; (' ') - необхідні аргументи
const myStr = 'Me awesome string';

myStr.split(' ');

// Метод charAt для роботи з рядками
const sentence = 'We have 3 weeks to lern Java Script';

const index = 10;
const index1 = 5;
const char  = sentence.charAt(index);
const char1  = sentence.charAt(index1);

console.log('The character at index 4 is ', char); // output: "We have 3 weeks to lern Java Script"
console.log('The character at index 4 is ', char1); 

// Метод includes для роботи з рядками

	
const word = 'weeks';
const word2 = 'month'
const hasWord = sentence.includes(word); // true
const hasWord2 = sentence.includes(word2)

console.log(`The word "${word}"
	${hasWord ? 'is' : 'is not'} in the sentence`);  // The word "weeks" is in the sentence

console.log(`The word "${word2}"
	${hasWord2 ? 'is' : 'is not'} in the sentence`);  //The word "month" is not in the sentence
 
const hasCatWord = sentence.includes('cat');

//Метод indexOf для роботи з рядками

const colors = 'Colors list: white, blue, yellow, pink, orange';

console.log(colors.indexOf('yellow'))  // 26 - початок слова - починаючи з символа пробіл
console.log(colors.indexOf('black'))   // -1 - помилка, такого кольору у нас немає

// Метод toLowerCase для роботи з рядками

const sent = 'EVERYONE IS HAPPY';
 
const change = sent.toLowerCase();
 
console.log(change);  //  everyone is happy

// Метод toUpperCase для роботи з рядками

const sent1 = 'soul';
 
const change1 = sent1.toUpperCase();
 
console.log(change1);  // SOUL

// Метод slice для роботи з рядками - метод для часткового вилучення рядка

const str = 'We have Java Script lessons three times a week.';

console.log(str.slice(12));
// output: "the lazy dog."

console.log(str.slice(3, 12));
// output: "quick brown fox"

console.log(str.slice(-8));
// output: "dog."

console.log(str.slice(-6, -12));
// output: "lazy"


// Метод split для роботи з рядками

	
const words = str.split(' ');
console.log(words[0]); // We
console.log(words[1]); // have
console.log(words[2]); // Java
console.log(words[3]); // Script

// Метод match для роботи з рядками - показує нам усі великі букви
	
const paragraph = 'The quick Brown Fox Jumps Over the Lazy dog. It barked.';
const regex = /[A-Z]/g;
const regex1 = /[a-z]/g;
const found = paragraph.match(regex);
const found1 = paragraph.match(regex1)
console.log(found);    // 'T', 'B', 'F','J', 'O', 'L','I'
console.log(found1);   // 'h', 'e', 'q', 'u', 'i', 'c', 'k','r', 'o', 'w', 'n', 'o', 'x', 'u','m', 'p', 's', 'v', 'e', 'r', 't',....

// Метод replace для роботи з рядками - Заміна елементів, які відповідають певному патерну
	
const p = 'There was a heavy fog tonight';
 
console.log(p.replace('tonight', 'lastnight'));
// expected output: "There was a heavy fog lastnight"
 
const newStr = /tonight/i;
console.log(p.replace(newStr, 'this morning')); // There was a heavy fog this morning

// Метод trim для роботи з рядками - Видалення пробілів на початку і в кінці рядка

const greeting = '   Hello Java Script!   ';
 
console.log(greeting);
// output: "   Hello Java Script!   ";
 
console.log(greeting.trim()); //Hello Java Script!


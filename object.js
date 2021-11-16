	
const car = {
	color: 'green',
	maxSpeed: 250,
	audio: {
		brand: 'Sony',
		speakers: 12
	}
};

car.color = 'red';

console.log(typeof car.audio.brand);

console.log(car.audio.brand);
console.log(car)

const dog = {
    name: 'Teddy',
    age: 3,
    hasHotDog: true,
    speak: () => console.log("Woof!")
}
console.log(dog);
console.log(dog.speak)

	
console.log("The Dog name is ", dog.name);
console.log("The Dog age is ", dog.age);
 
if (dog.hasHotDog) {
   console.log("The Dog has Hot Dog")
}

dog.speak = 'Woof!'

console.log(dog)

// ЯК СТВОРИТИ ОБ'ЄКТИ?

// create with an object literal

const cat = {};

// with properties

const cat2 = {
    name1: 'Mafin',
    age: 1,
    speak: () => console.log('Mau! Mau!')
}

// with constructor

//const cat3 = newObject ()

// РОЗШИРЕННЯ ОБ'ЄКТА НОВИМИ ВЛАСТИВОСТЯМИ

const cat1 = {
    friendly: true,
    speak: () => console.log('Mau! Mau!')
};

// adding new property name
cat1.name2 = 'Bob';

// adding new method
cat1['run'] = () => console.log('Run')

console.log(cat1)

// Редагування властивостей об'єкта

const dog1 = {
    name1: 'Teddy',
    friendly: true,
    speak: () => console.log('Woof!Woof!'),
    likeCats: true
}
// adding a new property name
dog1.name1 = 'Rex'

//removing a property
delete dog1.likeCats
console.log(dog1)

// ОСНОВНІ МЕТОДИ ДЛЯ РОБОТИ З ОБ'ЄКТАМИ

// Метод Object.assign()- копіює значення всіх перерахованих власних властивостей з одного або декількох вихідних об’єктів на цільовий об’єкт;
 // Return the primitive value of specified object.

console.log(dog1.valueOf())
// Result    { name1: 'Rex', friendly: true, speak: [Function: speak] }

//Check, if has property

dog1.hasOwnProperty('speak')
console.log(dog1.hasOwnProperty('speak'))   // Result  true
console.log(dog1.hasOwnProperty('property1'))    // Result false


//Get string representation of an object

console.log(dog1.toString())   // Result [object Object]

// СТАТИЧНІ МЕТОДИ РОБОТИ З ОБ'ЄКТАМИ
// Метод Object.assign
const person = {
    name2: 'Patrisia',
    sex: 'female',
    age: 33,
    profession: 'doctor'
}

const person2 = Object.assign({}, person)
console.log(person2)           // Result { name2: 'Patrisia', sex: 'female', age: 33, profession: 'doctor' }
console.log(person === person2) // Result false

person2.name2 = 'Lydmula'

console.log(person.name2)  // Result Patrisia 
console.log(person2.name2)  // Result Lydmula

// Two objects assign to One

const boy = {
    name1: 'Bobby',
    height: 1.65,
    }
const boy1 = {
    name1: 'Tony',
    height: 1.55,
    age: 20
    }
const boy2 = Object.assign(boy, boy1)
console.log(boy2) // Result --- { name1: 'Tony', height: 1.55, age: 20 }
const boy3 = Object.assign({}, boy1, boy)  // Чи не другий об'єкт перетирати дані першого - вибраного
console.log(boy3)

const girl = {
    name2: 'Luna',
    age: 19,
    info: {
        skill1: 'HTML',
        skill2: 'CSS'
    }
}
const girl2 = {
    name2: 'Sonya'
}

const girl3 = Object.assign(girl, girl2)
console.log(girl3)  // Result  { name2: 'Sonya', age: 19, info: { skill1: 'HTML', skill2: 'CSS' } }
console.log(girl3.info === girl.info)    // Result true, (неглибоке копіювання)


console.log(girl3 === girl)   // Result true
console.log(girl3 === girl2)  // Result false
const girl02 = {
    age: 22
}
girl3: Object.assign(girl, girl2, girl02)
console.log(girl3) // Result { name2: 'Sonya', age: 22, info: { skill1: 'HTML', skill2: 'CSS' } }
console.log(girl)

const girl4 = Object.assign({ }, girl, girl2)
console.log(girl4)

girl4.name2 = 'Katya'
console.log(girl4 === girl)
console.log(girl4)
console.log(girl4.name2)
console.log(girl.name2)
// При копіюванні декількох вихідних об'єктів ( 1-й скопійований об'єкт залишається основою,
// з усіх наступних об'єктів викриствовуються нові властивості, або значення з кожного наступного об'єкта,
// затерають значення з поперднього )
	
const target = {b: 2, a: 1};
const source = { b: 4, c: 5 };
 const returnedTarget = Object.assign(target, source);
 console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }
 console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }
console.log(returnedTarget === target)
const returnedTarget1 = Object.assign(source, target);
console.log(returnedTarget1)
// Result { b: 4, c: 5, a: 1 }

/* Глибоке копіювання
const obj1 = {
    name01: 'Danylo'
} 
const obj2 = {
    name01: 'Danylo',
    age01: 32
} 
const newObj = Object.assign(obj1)
const objJson = JSON.strindify(obj1)
newObj = JSON.parse(bjJso)
console.log(newObj)
*/
// Метод Object.create() -створює новий об’єкт із зазначеним об’єктом -прототипом та властивостями;
const person01 = {
    isHuman: false,
    printIntroduction: function() {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
  };
  
  const me = Object.create(person01);
  
  me.name = 'Matthew'; // "name" is a property set on "me", but not on "person01"
  me.isHuman = true;

  console.log(me)
  console.log(person01)
  me.printIntroduction();   // expected output: "My name is Matthew. Am I human? true"
  console.log(me)
  console.log(`My name is ${me.name}. Am I human? ${me.isHuman}`)

  // Метод Object.entries() - повертає масив, що містить усі пари [ключ, значення] власних перерахованих рядкових властивостей даного об’єкта;
  const rabbit = {
    name02: 'Smile',
    age: 2
  };
  for (const [key, value] of Object.entries(rabbit)) {
console.log(`${key}: ${value}`)}

// Метод Object.freeze()- заморожує об’єкт. Інший код не може видалити або змінити його властивості
const mobile = {
    model: 'Sony Erixon'
  };
   
  Object.freeze(mobile);
   
  mobile.model = 'Sony';
  // Throws an error in strict mode
   
  console.log(mobile.model);
//метод isFrozen() -перевіряє чи був використаний метод Object.freeze() - true, false
  console.log(Object.isFrozen(mobile));
  //метод isExtensible() -перевіряє чи був використаний метод Object.freeze() - true, false
  console.log(Object.isExtensible(mobile));
  // expected output: 42

 // Метод Object.keys() повертає масив, що містить імена всіх власних властивостей даного об’єкта;
 
 	
const mobile1 = {
    model: 'Sony',
    memore: 640,
    color: 'red'
  };
   
  console.log(Object.keys(mobile1));
  //метод isFrozen() -перевіряє чи був використаний метод Object.freeze() - true, false
  console.log(Object.isFrozen(mobile1));
  //метод isExtensible() -перевіряє чи був використаний метод Object.freeze() - true, false
  console.log(Object.isExtensible(mobile1));

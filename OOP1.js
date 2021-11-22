//=======================================================
// Наслідування (Inheritance)
//=======================================================
//Клас або функція-конструктор
function Cat(name) {
    this.name = name;
    
    this.getName = () => this.name;
    this.say = () => console.log('Mew, mew....');
  }
// Нащадки або наслідники
  const Vasija = new Cat('Vasija');
  const Kyzja = new Cat('Kyzja');
  
  Vasija.say(); // Mew, mew....
  Kyzja.say(); // Mew, mew....


// ==========================================================================================================
// Поліморфізм - в мовах програмування - можливість об'єктів з однаковою специфікацією мати різну реалізацію.
// ==========================================================================================================

class Person {
    constructor(name) {
        this.name = name;
    }
    sound() { return (""); }
    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }
}
class Teacher extends Person {
    constructor(name) {
        super(name);
    }

    sound() {
        return ("I'm a techer!");
    }
}
class Doctor extends Person {
    constructor(name) {
        super(name);
    }

    sound() {
        return ("I'm a doctor!");
    }
}

const john = new Teacher('John');
console.log(john.sound()); // Meow!
const zejn = new Doctor('Zejn');
console.log(zejn.sound()); // Woof!

// ==========================================================================================================
// Інкапсуляція (Encapsulation) -  механізм, який поєднує дані та методи, 
// що обробляють ці дані і захищає і те і інше від зовнішнього впливу або невірного використання.
// ==========================================================================================================

class IncreasingCounter {
    #count = 0;

    get value() {
        console.log('Getting th current value!');
        return this.#count
    }
    increment() {
        this.#count++;
    }
}

const counter = new IncreasingCounter();
counter.increment(); // нічого
counter.increment(); // нічого, але якби не було цих консолів, було б знач #count = 0,
// в останньому консолі, а так рівне 2
counter.increment();
counter.increment(); // нічого але в останньому консоліб тепер 4
console.log(counter.value); //Getting th current value!
                            // 4


                            	
const createCounter = () => {
        let count = 0;
    return ({
    click: () => count += 1,
    getCount: () => count.toLocaleString()
   });
  };
   
  const counter1 = createCounter();
   
  counter1.click();
  counter1.click();
  counter1.click();
   
  console.log(counter1.getCount()) //3
  counter1.click();
  counter1.click();
  console.log(counter1.getCount()) // 5
  counter1.click();
  console.log(counter1.getCount()) // 6

//=====================================================================================
// Функція конструктор
//=====================================================================================

function Dog(name, color) {
  this.name = name;
  this.color = color;

  this.run = function () {
    console.log("I’m walking");
  };
  this.sound = function () {
    console.log("Woof! Woof!");
  };
}

const zorex = new Dog("Zorex", "black-white");
const rex = new Dog("Rex", "brown");

zorex.run(); // I’m walking
rex.sound(); // Woof! Woof!

//=====================================================================================
// Використання класів
//=====================================================================================
class Dog1 {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
 
    run() {
        console.log(this.name +  " is running");
    }
 
    sound() {
        console.log("Woof! Woof!");
    }
}
class PlayfulDog extends Dog1 {
    constructor(name, color) {
      super(name, color)
    }
    
    run() {
      console.log(this.name + ' and playing all day');
    }
  }
   
  const beethoven = new PlayfulDog("Beethoven", "grey");
  const storm = new Dog1("Storm", "brown");

  beethoven.run();  // Beethoven and playing all day
  storm.run();  //Storm is running
  //=====================================================================================
  // Прототипи (Prototype) Властивість прототип - спочатку порожній об'єкт.
  // До якого можуть бути додані функції і властивості, як і для будь-якого іншого об'єкта.
  //Кожен об'єкт в JavaScript має "секретну" властивість, яке додається при визначенні або
  // ініціалізації об'єкта. Дана властивість має ім'я __proto__. Саме через нього здійснюється
  // доступ до ланцюжку прототипу.
  //=====================================================================================

  function Person1(name, age) {
    this.name = name;
    this.age = age;
  }
  
  Person1.prototype.work = function () {
      console.log("I’m working");
  };
  Person1.prototype.sound = function () {
      console.log(this.name + " is a locksmith!");
  };
  
  const sasha = new Person1("Sasha", 32);
  const vasija = new Person1("Vasija", 31);

  vasija.sound(); // Vasija is a locksmith!
  sasha.work(); // I’m working

  console.log(sasha)  // Person1 { name: 'Sasha', age: 32 }
  console.log(vasija) // Person1 { name: 'Vasija', age: 31 }

  // example2
  function Object(name, age) {
    this.name = name;
    this.age = age;
  }
  
  Object.prototype.sayHi = function () {
      console.log("Hi!Hi!");
  };
  Object.prototype.sayBye = function () {
      console.log("Good bye!");
  };
  const person1 = new Object(
      "Maxim",
      26,
    );

  person1.sayHi(); // Hi!Hi!
  console.log(person1) // { name: 'Maxim', age: 26 }
// ми можемо добавляти прототипи до основного классу
  Object.prototype.sound = function () {   
    console.log("I'm from Canada");
  }
// ми можемо добавляти змінні до об'єкту
person1.greet = function() {
    console.log("Greet!")
}
person1.sound(); // I'm from Canada
console.log(person1) // { name: 'Maxim', age: 26, greet: [Function (anonymous)] }
//===============================================================================================
// ОБЛАСТІ ВИДИМОСТІ
//===============================================================================================
// Механізм роботи функцій і змінних в JavaScript відрізняється від інших мов програмування. 
// Існують наступні області видимості:
// Глобальна -  змінні і функції не перебувають всередині якоїсь функції. Тобто, іншими словами, 
// якщо змінна або функція не перебувають всередині конструкції function, то вони - «глобальні»;
// Локальна - змінні і функції доступні тільки всередині конструкції function;
// Блочна - змінні і функції доступні тільки у визначеному блоці (ES6)
//===============================================================================================

//=====================================================================================
// Область видимості: функції і змінні
//=====================================================================================

const a = 10;

// console.log(c); // is not available 

function plusC() {
  const c = 100;
  
  return a + c; // a is available
}

plusC(); // 110

//=====================================================================================
// Область видимості: цикли і їх змінні
//=====================================================================================
let res = 0;
// console.log(i); // 'i' is not defined
 
for (let i = 0; i < 10; i++) {
  res += i;
}
 
// console.log(i); // 'i' is not defined
console.log(res);  // 45

//=====================================================================================
// Область видимості: методи і їх змінні
//=====================================================================================

const array = [10, 20, 30, 40, 50];
let sum = 0;
 
// console.log(item); // 'item' is not defined
 
array.forEach(item => {
  sum += item;
})
 
// console.log(item); // 'item' also is not defined

console.log(sum); // 150

//=====================================================================================
// Контекст виконання (Execution context)const x = 10;
//=====================================================================================
const x = 35;

function total() {
   const y = 245;

   function result() {

        const z = 115;
        const output = x + y + z;
        
        return output;

   }

  return result;
  
}

total()(); // 395


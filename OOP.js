const employee = {
    baseSalary: 30000,
    overtime: 10,
    rate: 20,
    getWage() {
        
        return this.baseSalary + this.overtime * this.rate
    }
}
employee.getWage();
//=====================================================================================================
// Наслідування
//=====================================================================================================

function Car(model) {
    this.model = model;
    
    this.getModel = () => this.model;
    this.drive = () => console.log('Driving....');
  }
  
  const BMW = new Car('BMW');
  const Volvo = new Car('Volvo');
  
  BMW.drive(); // Driving...
  Volvo.drive(); // Driving...
  //======================================================================
  // КЛАСС
  //======================================================================

  const car = {
      currentSpeed: 25,
      maxSpeed: 220,
      color: 'red'
  }
  //=======================================================================
  // КОНСТРУКТОР
  //=======================================================================,
function Human(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function() {
        console.log(`Hello, I'm ${this.name} !`)
    }
   }

const bobby = new Human('Bobby', 15);
console.log(bobby);
bobby.sayHello();

const peter = new Human('Peter', 18);
console.log(peter);
peter.sayHello();

//=========================================================================
// Прототипи
//=========================================================================
//example 1
function Human1(name1, age) {
    this.name1 = name1;
    this.age = age;
    
    }
    Human1.prototype.sayHello = function() {
        console.log(`Hello, I'm ${this.name1} !`);
}

const tom = new Human1('Tom', 16);
console.log(tom);
tom.sayHello();

const john = new Human1('John', 14);
console.log(john);
john.sayHello();

console.dir(tom);
console.dir(john);

//example 2
//=====Human========
function Human2(name1, age) {
    this.name1 = name1;
    this.age = age;
}

    Human2.prototype.sayHello = function() {
        console.log(`Hello, I'm ${this.name1} !`);
};
//========Doctor=========
function Doctor(name, age) {
    Human.call(this, name, age);
}
Doctor.prototype.heal = function() {
    console.log("I'm healing");
};

const drHouse = new Doctor('Gregory House', 55);
console.log(drHouse);
drHouse.heal();
drHouse.sayHello();
//======================================================================
// Object.create
//======================================================================
// const person = {
//     legs: 2
// };

// const tobby = Object.create({name1: 'Tobby'})
// console.log(person);
// console.log(tobby);

const person = {
    isHuman: false,
    printIntroduction: function() {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
  };
  
  const me = Object.create(person);
  
  me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
  me.isHuman = true; // inherited properties can be overwritten
  
  me.printIntroduction(); //My name is Matthew. Am I human? true
  console.log(person); // { isHuman: false, printIntroduction: [Function: printIntroduction] }
  console.log(me); // { name: 'Matthew', isHuman: true }

  //==================================================================
  // hasOwnProperty - можливість переконатись, що саме у екземпляра класу є ключ
  //==================================================================

  const man = {
      legs: 2,
  };

  const tonny = Object.create(man);
  tonny.name = 'Tonny';

  console.log(man); // { legs: 2 }
  console.log(tonny); // { name: 'Tonny' }

  for (const key in tonny) {
      console.log(key);  // name
                         // legs (приходять по наслідуванні)
  }

  console.log(tonny.hasOwnProperty('name'));
  console.log(tonny.hasOwnProperty('legs'));

  console.log(Object.keys(tonny));  // [ 'name' ]



//=======================================================================
// ES6 класси
//=======================================================================

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
     sayHi() {
        console.log(`Hi!I'm ${this.name}`);
}
}

class Cats extends Animal {
    constructor(name, age, friendly) {
        super(name, age);

        this.friendly = friendly;
}
 sayHi() {
     Animal.prototype.sayHi.call(this);
     console.log(`Hi! I'm little ${this.name}`);
 }
}

const rex = new Animal('Rex', 2);
console.log(rex);

const cat = new Cats('Zox', 3);
console.log(cat)
cat.sayHi(); //Hi!I'm Zox
             //Hi! I'm little Zox

//======================================================================
// get, set
//======================================================================
class Boy {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    get name() {
        return this._name;
    }
    get age() {
        return this._age;
    }
    
    set age(age) {
        this._age = age;
    }
    setAge(age) {
        this._age = age;
    }
}

const zorex = new Boy('Zorex', 15)
console.log(zorex); //Boy { _name: 'Zorex', _age: 15 }

zorex.age = 16;
zorex.setAge(17);

console.log(zorex.name); // Zorex
console.log(zorex.age);  // 17

//===================================================================
// static
//===================================================================
class Girl {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
     static sayHi() {
    console.log(`Hi!I'm ${this.name}`);
    }
}

const anna = new Girl('Anna', 17);
console.log(anna);

Girl.sayHi();  // Hi!I'm Girl ---- чому не Hi!I'm Anna (((

//===================================================================
// Приватні поля класів - недоступні із зовні, і по наслідуванні також
//===================================================================
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



//=========================================================================
// THIS
//=========================================================================
// example 1
const obj = {
    name1: 'Olja',
    age: 31,

    sayName() {
        //console.log(this) -- це наш об'єкт
        console.log(`Hello, my name is ${this.name1}`);
    },
};

obj.sayName();  // Hello, my name is Olja

// example 2
function sayName() {
    console.log(`Hello, my name is ${this.name1}`);
}

const obj1 = {
    name1: 'Katja',
    age: '37',
};

const obj2 = {
    name1: 'Maria',
    age: '31',
};

obj1.sayName = sayName;
obj2.sayName = sayName;

obj1.sayName() // Hello, my name is Katja
obj2.sayName() // Hello, my name is Maria

// example 2

const obj3 = {
    name1: 'Natalia',
    age: 33,

    sayName() {
        console.log(`Hi, it's me, ${this.name1}`)
    }
};

obj3.sayName();

const hello = obj3.sayName;
hello();  // Hi, it's me, undefined

const obj4 = {
    name1: 'Lyda',
    age: 34,
};

obj4.sayName = hello;
obj4.sayName(); // Hi, it's me, Lyda

// example 3

const boy = {
    name1: 'Sasha',
    age: 31,

    sayName() {
        console.log(this)
    }
};

function fn(callback) {
    callback();
}

fn(boy.sayName); // undefined

//===========================================================================
// call, apply
//===========================================================================

// examle 1
function sayName() {
    console.log(this);
    console.log(`Hi, it's me, ${this.name1}`);
}

const boy1 = {
    name1: 'Bobby',
    age: 13,
};
const boy2 = {
    name1: 'Peter',
    age: 14,
};

sayName.call(boy1);
// { name1: 'Bobby', age: 13 }
// Hi, it's me, Bobby
sayName.call(boy2);
// { name1: 'Peter', age: 14 }
// Hi, it's me, Peter
sayName.apply(boy1);
// { name1: 'Bobby', age: 13 }
// Hi, it's me, Bobby
sayName.apply(boy2);
// { name1: 'Peter', age: 14 }
// Hi, it's me, Peter

sayName.call(boy1, 1, 2, 3);
sayName.apply(boy1, [1, 2, 3]);

//=====================================================================
// bind - якщо хочете викликати функцію пізніше
// ====================================================================
function sayName() {
    console.log(this);
    console.log(`Hi, it's me, ${this.name1}`);
}
const girl = {
    name1: 'Olesia',
    age:2
};

const hello1 = sayName.bind(girl);
hello1();

fn(hello1);

function fn(callback) {
    callback()
}

// ======================================================================
// bind - own bind
// ======================================================================
function sayName() {
    console.log(this);
}

const girl1 = {
    name1: 'Toma',
    age:2
};

function myBind(callback, scope) {
    return function() {
        callback.call(scope);
    }
};

const myHello = myBind(sayName, girl1); // function {...}
myHello();

// ======================================================================
// THIS в стрілочних функціях
// ======================================================================
const arrow = (a, b) => {
    // console.log(this);
    return a + b;
};

console.log(arrow(1, 1)); // 2
console.log(arrow(2, 2)); // 4

const cat = {
    name1: 'Tom',

    fn() {
        const innerArrowFn = () => {
            console.log(this);   //{ name1: 'Tom', fn: [Function: fn] }
        };
        return innerArrowFn;
    },
};

const hello2 = cat.fn(); // function() {...}
hello2();

fn2(hello2);

function fn2(callback) {
    callback();    // { name1: 'Tom', fn: [Function: fn] }
}

//example 2
const arrowFn1 = () => {
    console.log(this);
  }
  
  function Circle() {
    this.PI = 3.14;
    this.r = 20;
    
    
    this.getArea = () => {
      console.log(this);
      
      return this.PI * Math.pow(this.r, 2);
    }
   }
  
  const cr = new Circle();
  cr.getArea();  // Circle { PI: 3.14, r: 20, getArea: [Function (anonymous)] }
  
  






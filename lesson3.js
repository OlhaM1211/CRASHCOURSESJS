//const human = {
    //name1: 'Bobby',
    //age1: 16,
           //};

// human2 = human
//human2.age1 =  20
//console.log(human.name1)
//console.log(human2.age1)

// Доступ до властивостей

const human = {
    name1: 'Bobby',
    age: 15,
};

human.age = 20;
const key = 'name1'
console.log(human[key])
console.log(human['age'])

const obj = {a: 1}
human [obj] = 5

const obj2 = {a: 3}
human [obj2] = 55
console.log(human)
console.log (human['[object Object]'])


// РОБОТА З НЕІСНУЮЧИМИ КЛЮЧАМИ І СТВОРЕННЯ ПІСЛЯ ОГОЛОШЕННЯ ОБ"ЄКТУ

console.log(human.dgdg)
human.dgdg = 345
console.log(human.dgdg)

console.log(Object.keys(human).includes('age'))
console.log(Object.keys(human).includes('dgdg'))
console.log(Object.keys(human).includes('dg'))

if (human && human.dg) {
    console.log(human.name1);  // ???
    }

// Удаление свойств ( видалення ключів)

const human = {
    name1: 'Bobby',
    age: 15,
};
console.log(human)

delete human.age
console.log(human)

// КОРОТКІ ВЛАСИВОСТІ
const human = {
    name1: 'Bobby',
    age: 15,
};

const getHuman = (name1, age) => {
    return {
        name1: name1, //eslint-disabbe-line
        age: age, //eslint-disabbe-line
    };
};

console.log(getHuman('Bobby', 15))


const getHuman = (name1, age) => ({
        name1,
        age,
});

console.log(getHuman('Bobby', 15))

//Вичисляемие свойства

const human = {
    name: 'Bobby'
};

const key = 'abrakadabra'
human[key] = 123

console.log(human)
// МЕТОДИ О'ЄКТА


const human = {
    name : 'Bobby',

    
   sayHello: function() {
       console.log(this);  // this  дає доступ до об'єкту
       console.log('Hello');
   },

   sayBye() {
       console.log('Bye!');
    },

    inner : {
        someKey: 456,

        innerHello() {
        console.log(this);
        }
    }
}

human.sayHello()
human.sayBye()

console.log(human.inner.innerHello())


//Цикли for...in

const human = {
    name1: 'Bobby',
    age: 15,
};
console.log(human)

for (const key in human) {
    console.log(key);
    console.log(human[key]);
    }


// ОБ'ЄКТИ МОЖНА ПЕРЕБИРАТИ ПО Object.key() Object.values() Object.entries()

const human = {
    name1: 'Bobby',
    age: 15
};
console.log(Object.keys(human))  - //виводить дані про масив
console.log(Object.keys(human).forEach(key => console.log(key, human[key])))

const getAge = (obj, key) => {
    let result;

    Object.keys(obj).forEach(item => {
        if (item === key) {
            result = obj[key];
        }
    })

    return result;
}

console.log(getAge(human, 'age'))


const Dog = {
    name1: 'Chappi',
    age: 2,
    breed: 'corgi'
}
console.log(Object.keys(Dog))
console.log(Dog)
console.log(Object.keys(Dog).includes('breed'))
console.log(Object.keys(Dog).includes('owner'))

Dog.parents = 'Bonny and Ted'
console.log(Object.keys(Dog).includes('parents'))
console.log(Dog)

Dog.owner = 'Olha'
console.log(Dog)

delete Dog.owner
console.log(Dog)

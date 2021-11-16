

const user = {
    firstName: 'Olha',
    age: 30,
    isTrainee: true,
    email: 'matuso2@medtronic.com',
    'user-adress': {            // ключі об'єкта зазначаються в лапках, якщо вони є складними (зі значками '-', '*','+')
        city: 'Lviv',
    },
    skills: ['html', 'css', 'js']
}

let value;
let prop = 'email';   // бере дані з об'єкта User

value = user.firstName;          // Olha
//value = user['isTrainee'];      // true
value = user['user-adress'].city;          // Lviv
// value = user['user-adress']['city']    // Lviv
value = user[prop]    // result - matuso2@medtronic.com

user.age = 32;
value = user.age
// Можемо дописати ключ в середину об'єкта, який є змінною об'єкта 'user'
user['user-adress'].city = 'Kiev';
user['user-adress'].street = 'Trilovskogo';

value = user['user-adress'].street;
console.log(user); 
console.log(value);

// Aле ми не можемо записати ключ в неіснуючий об'єкт всередині нашого об'єкту

// user['speciality'] = {
//     position: 'traine',
//     EmployeeID: 2512734,
// }

user.speciality = {
    position: 'traine',
    EmployeeID: 2512734,
};

user.plan = {};   // якщо б даного ключа з пустим о'єктом не було то нам вибивало б помилку
// TypeError: Cannot set properties of undefined (setting 'basic')
user.plan.basic = 'basic1'
console.log(user); 
console.log(value);

console.log(user.plan.basic);


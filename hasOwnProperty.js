//=======================================================================
// Has own property - перевірка ключів об'єкта
//=======================================================================
const cat = {
    name1: 'Tom',
    age: 3,
};

for (const key in cat) {
    console.log(key);
}

console.log(cat.hasOwnProperty('name1'));
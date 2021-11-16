const people = [
  { name1: 'Ольга', age: 31, budget: 20000},
  { name1: 'Люда', age: 33, budget: 26000 },
  { name1: 'Катя', age: 37, budget: 18000 },
  { name1: 'Наталя', age: 33, budget: 25000 },
  { name1: 'Марія', age: 37, budget: 16000 }
]

for (let i = 0; i < people.length; i++) {
  console.log(people[i])}       //{ name1: 'Ольга', age: 31, budget: 200000 }
                                //{ name1: 'Люда', age: 33, budget: 26000 }
                                //{ name1: 'Катя', age: 37, budget: 18000 }
                                //{ name1: 'Наталя', age: 33, budget: 25000 }
                                //{ name1: 'Марія', age: 37, budget: 16000 }

for (let i = 0; i < people.length - 2; i++) {
    console.log(people[i])}     //{ name1: 'Ольга', age: 31, budget: 200000 }
                                //{ name1: 'Люда', age: 33, budget: 26000 }
                                //{ name1: 'Катя', age: 37, budget: 18000 }

for (let i = 0; i < people.length - 4; i++) {
  console.log(people[i])}         //{ name1: 'Ольга', age: 31, budget: 200000 }

for (let person of people) {
  console.log(person)       //{ name1: 'Ольга', age: 31, budget: 200000 }
                            //{ name1: 'Люда', age: 33, budget: 26000 }
                            //{ name1: 'Катя', age: 37, budget: 18000 }
                            //{ name1: 'Наталя', age: 33, budget: 25000 }
                            //{ name1: 'Марія', age: 37, budget: 16000 }

}
// ForEach

people.forEach(function(person, index, pArr) {
  console.log(person)                         //{ name1: 'Ольга', age: 31, budget: 200000 }
                                              //{ name1: 'Люда', age: 33, budget: 26000 }
                                              //{ name1: 'Катя', age: 37, budget: 18000 }
                                              //{ name1: 'Наталя', age: 33, budget: 25000 }
                                              //{ name1: 'Марія', age: 37, budget: 16000 }


})
people.forEach(function(person, index, pArr) {
  console.log(index)                          //0
                                              //1
                                              //2
                                              //3
                                              //4
})
people.forEach(function(person, index, pArr) {
  console.log(pArr)                           // масив виводиться, стільки разів сікльки й персон - 5
})

people.forEach(function(person, index, pArr) {
  console.log(index)
  console.log(pArr)
  console.log(person)
})

// Можна скоротити, срілковою функцією

people.forEach(person => console.log(person))

// Map

const newPeople = people.map(person => {
  return person
})
console.log(newPeople)       //[{ name1: 'Ольга', age: 31, budget: 200000 },
                            // { name1: 'Люда', age: 33, budget: 26000 },
                            //{ name1: 'Катя', age: 37, budget: 18000 },
                            //{ name1: 'Наталя', age: 33, budget: 25000 },
                            //{ name1: 'Марія', age: 37, budget: 16000 }]

const newPeople1 = people.map(person => {
  return 'Everyone is happy!' 
})
console.log(newPeople1)                  //['Everyone is happy!',
                                        //'Everyone is happy!',
                                        //'Everyone is happy!',
                                        //'Everyone is happy!',
                                        //'Everyone is happy!']



const newPeople2 = people.map(person => {
  return person.age
})
console.log(newPeople2)    // [ 31, 33, 37, 33, 37 ]

const newPeople4 = people.map(person => `${person.name1} (${person.age})`)
console.log(newPeople4) //[
            //'${person.name} (${person.age})',?????????
            //'${person.name} (${person.age})',????????
            //'${person.name} (${person.age})',??????????
            //'${person.name} (${person.age})',??????????
            //'${person.name} (${person.age})']??????????
const newPeople5 = people.map(person => person.age * 2)
 console.log(newPeople5) 

// Filter

const adults = []
for (let i = 0; i < people.length; i++) {
  if (people[i].age >= 35) {
  adults.push(people[i])
  }
}
console.log(adults)  //[
                   //{ name1: 'Катя', age: 37, budget: 18000 },
                    //{ name1: 'Марія', age: 37, budget: 16000 }
                    //]

const adults1 = people.filter(person => {
  if (person.age >= 35) {
    return true
  }
})
console.log(adults1)

const adults2 = people.filter(person => person.age >= 35)
console.log(adults2)    //[
                        //{ name1: 'Катя', age: 37, budget: 18000 },
                        //{ name1: 'Марія', age: 37, budget: 16000 }
                        //]
const adults3 = people.filter(person => person.budget > 20000)
console.log(adults3)    //[
                        //{ name1: 'Люда', age: 33, budget: 26000 },
                        //{ name1: 'Наталя', age: 33, budget: 25000 }
                        //] 

// Reduce - служить, для того, щоб ми получили фінальне значення, після проходження ітерацій
let amount = 0
for (let i = 0; i < people.length; i++) {
  amount += people[i].budget
}

console.log(amount)

const amount1 = people.reduce((total, person) => {
  return total + person.budget
}, 0)

console.log(amount1)

const amount2 = people.reduce((total, person) => total + person.budget, 0)

console.log(amount2)

// Find
const kate = people.find(person => person.name1 === 'Катя')
console.log(kate) // { name1: 'Катя', age: 37, budget: 18000 }
const girls = people.find(person => person.age !== 33)
console.log(girls)

const kateIndex = people.findIndex(person => person.name1 === 'Катя')
console.log(kateIndex)

// ===========

const newProjPeople = people
      .filter(person => person.budget > 20000)
      .map (person => {
        return {
          info: `${person.name1} (${person.age})`,
          budget: person.budget
        }
      })
console.log(newProjPeople)

const newProjPeople1 = people
      .filter(person => person.budget > 20000)
      .map (person => {
        return {
          info: `${person.name1} (${person.age})`,
          budget: person.budget
        }
      })
      .reduce((total, person) => total + person.budget, 0)
console.log(newProjPeople1)

const newProjPeople2 = people
      .filter(person => person.budget > 20000)
      .map (person => {
        return {
          info: `${person.name1} (${person.age})`,
          budget: Math.sqrt(person.budget)
        }
      })
      .reduce((total, person) => total + person.budget, 0)
console.log(newProjPeople2)



    
    

// Simple functions 
function square(number) {
    return number * number;
}

console.log(square(34))

const Marvel = {
    yearCreation: 1939,
    mainCharacter: 'Spider Man',
    mainTeam: 'Avengers'
};

function extendObject(obj, field, value) {
    const newObj = Object.assign({}, obj);
    newObj[field] = value;

    return newObj
}

const NewMarvel = extendObject(Marvel, 'mainVillain', 'Venom')

console.log('Marvel object:', Marvel);
console.log('NewMarvel Object:', NewMarvel)

// DifferentFunctions

const square01 = (a) => {
    return a * a}

const square1 = (a) => a * a;

function square2(a) {
    return a * a
}

// function squere3 = function(a) {return a * a}
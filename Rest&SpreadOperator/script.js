// Rest Operator
//We combine here
function add(a, b, ...other) {
    console.log(other);
    return a + b;
}
console.log(add(10, 20, 30, 40, 50, 60));


// Spread Opertor
//We break here
function sum(x, y, z, a) {
    return x + y + z + a;
}

const numbers = [1, 2, 3, 5];

console.log(sum(...numbers));


// Object Destructuring
const userData = {
    userName: 'java',
    userDOB: 21,
    isUserPopular: true
}

const { userName } = userData;
console.log(userName);
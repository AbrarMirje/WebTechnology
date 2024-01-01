// ES6 --> JS2015
// const and let 
// const --> not allowed = redeclaration, reinitialization
// let --> allowed = reinitialization, not allowed = redeclaration

// {
//     {
//         let number = 10;
//         number = 50;
//         console.log(number);
//     }
//     // console.log(number);
// }

// {
//     {
//         const pi = 3.147;
//         console.log(pi);
//     }
//     console.log(pi);  
// }


// let userName = 'JS';
// let version = 6;

// console.log(`Name is ${userName} and Version is ${version}`);


// Rest Operator
// function add(a, b, c,...others) {
//     console.log(others[0]);
//     return a + b + c + others[1];
// }
// console.log(add(10, 20, 30, 50, 90, 200, 500));



// Spread operator
// function sum(x, y, z, a) {
//     return x + y + z + a;
// }
// const numbers = [1, 2, 3, 5];
// console.log(sum(...numbers));
// console.log(sum(1,2,3,4));



// Object Destructuring
const userData = {
    userName: 'java',
    userDOB: 21,
    isUserPopular: true
}

// const ans = userData.userName;
// const ans1 = userData['userName'];
// console.log(ans1);

const {isUserPopular} = userData;
const {userDOB} = userData;
console.log(isUserPopular);
console.log(userDOB);

// function without parameter
// function sum() {
//     const a = 10;
//     const b = 20;
//     console.log(a + b);
// }
// sum();

// function with parameter

// parameter vs arguments
// function sub(a , b) {
//     return a - b;
// }
// console.log(sub(100, 50)); // arguments 



// Anonymous function : function without name
// let ans = function(n1, n2) {
//     return n1 + n2;
// }
// console.log(ans(10, 20));
// console.log(xyz(50, 100));


// function return
// function answer() {
//     let number = 10;
//     return function() {
//         console.log(number);
//     }
// }
// console.log(answer());


// filter -> data filter -> output return in the form of new array
// let a = [10, 20, 30];
// let ans = a.filter((element) => {
//     return element > 10;
// })
// console.log(ans);


// Arrow function
// const students = () => {
//     const userName = 'Java';
//     const version = 21;
//     console.log(userName);
//     console.log(version);
// }
// students();


// Arrow functioin with parameters
// const sumNumbers = (n1, n2) => {
//     return n1 + n2;
// }

// Arrow function with Implicit return
const sumNumbers = (n1, n2) => n1 + n2;

console.log(sumNumbers(10, 20));
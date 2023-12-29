// Parameterized Function
function addFun(a , b) {
    return a + b;
}

console.log(`Sum is: ${addFun(10, 20)}`);

// Default / Non parameterized / zero args function

function multFun(){
    console.log(`Multiplication is: ${10*20}`);
    // console.log(this);
}
multFun();

// Anonymous function
const Animal = {
    // Anonymous Function : function don't have name 
        //Anonymous function without parameter
    canEat : function(){
        for (let i = 1; i <= 5; i++) {
            console.log(`Animal eating ${i} times`);
        }
    },

        //Anonymous function with parameter
    canPlay : function(animalName) {
        console.log(animalName ,' Can play!');
    }
};
Animal.canEat();
Animal.canPlay('Elephant');

// We can create function like below
const userData = function(){
    const userName = 'Abrar';
    const rollNumber = 58;
    console.log(`User name: ${userName}`);
    console.log(`Roll number: ${rollNumber}`);
}
userData();


// Arrow Function
    // Arrow Function withoud parameter
const personData = () => {
    const personName = 'Abrar';
    const personId = 58;
    const isLikeCoding = true;

    console.log(personName);
    console.log(personId);
    console.log(isLikeCoding);
}
personData();

    // Arrow function with parameter
const programmingWorld = (firstLang, secondLang, thirdLang) => {
    const isProgrammingImp = true;
    console.log(firstLang);
    console.log(secondLang);
    console.log(thirdLang);
    console.log(isProgrammingImp);
    console.log(this); //undefined
}
programmingWorld('Java', 'JavaScript', 'Python');



// Implicit return in arrow function
const addNumber = (num1, num2) => num1 + num2;
const sumNumber = (first, second) => (first + second);  // Imp for react
const prorgamming = () => ({programmingLang : 'JavaScript'}); // To return Object

console.log(`Sum of implicit return: ${addNumber(10, 20)}`); 
console.log(`Sum of implicit return: ${addNumber(50, 50)}`); 
console.log(prorgamming()); 
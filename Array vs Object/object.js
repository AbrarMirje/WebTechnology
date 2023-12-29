const Person = {
    personName : 'Abrar',
    personAge : 22,
    personQaulification: 'MCA',
    personTask : function() {
        for (let i = 1; i <= 5; i++) {
            console.log(i);
        }
    }
};

// console.log(Person.personName);  //Accessing single property using dot notation
// console.log(Person['personAge']); // Accessing single property using string literal
// Person.personName = 'Java';  // reassigning the value to the key
// console.log(Person.personName);  
// Person.personTask(); //Calling function of Person Object

// Person.personHobbies = ['Reading', 'Coding', 'Travelling'];  // Adding new property to the Object in the form of Array

// Person.isLikeProgramming = true; // Adding new property to the Person Object

// delete Person.personHobbies; // Deleting property from the Person Object
// console.log(Person);

// Iterating over the Object
for (const key in Person) {
    console.log(`${key} : ${Person[key]}`);
}

//
// Object destructuring
//

// const person = {
//     name : 'Andrew',
//     age : '34',
//     location : {
//         city: 'Philadelphia',
//         temp: 92
//     }
// };

// // destructuring create variables
// const { name : firstName = 'Anonymous', age } = person;
// //const name = person.name;
// //const age = person.age;

// console.log(`${firstName} is ${age}`);

// // destructuring with renaming
// const { city, temp: temperature } = person.location;

// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { name : publisherName = 'self-published'} = book.publisher;

// console.log(publisherName); // Penguin, self-published

//
// Array destructuring
//

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [, city, state = 'New York'] = address;

console.log (`You are in ${city} ${state}`)

let name = "tanvi";
let age = 30;
console.log(`My name is ${name} and age is ${age}`);
const s = "hello";
console.log(s.length);
const person = {
  firstName: "Tanvi",
  lastName: "Patil",
  age: 30,
  hobbies: ["music", "movies", "sports"],
  address: {
    street: "50 main st",
    city: "Boston",
    state: "MA",
  },
};
console.log(person.address.city);
//pull objects
const {
  firstName,
  lastName,
  address: { city },
} = person;
//console.log(city);
console.log(firstName);

person.email = "tanvpatil@hotmail.com";
console.log(person.email);

const todos = [
  {
    id: 1,
    text: "take out trash",
    isComplete: true,
  },
  {
    id: 2,
    text: "Read me a book",
    isComplete: false,
  },
  {
    id: 3,
    text: "surf on the net",
    isComplete: true,
  },
  {
    id: 4,
    text: "take a break",
    isComplete: true,
  },
];

console.log(todos[3].text);
//convert into jSON format
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);
// for loop
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

for (let todo of todos) {
  console.log(todo.text);
}
console.log("..........");
// high order array methods: forEach, map, filter
todos.forEach(function (todo) {
  console.log(todo.text);
});
// using MAP
const todoText = todos.map(function (todo) {
  return todo.text;
});
console.log(todoText);
// using filter
//Functional Programming
const v = todos
  .filter(function (todo) {
    return todo.isComplete === true;
  })
  .map(function (i) {
    return i.id;
  });
console.log(v);

// conditionals
const x = 10;
// double equals do not match the datatypes:cif x = '10' still holds true

if (x == 10) {
  console.log(`x is 10`);
}
const u = "10";
if (u === 10) {
  console.log(`u is not stringtype`);
} else {
  console.log(`u is string type`);
}

// arrow functions
const addNums = (num1 = 1, num2 = 2) => {
  return num1 + num2;
};
console.log(addNums(7, 4));
//this shoerhand also works ===>
//const addNumss = (num1 = 1, num2 = 2) => num1 + num2;
//oop
//construction  funcr=tions with prototypes
function Person(fn, ln, dob) {
  this.fn = fn;
  this.ln = ln;
  this.dob = new Date(dob);
  /*this.getBirthYear = function () {
    return this.dob.getFullYear();
  };
  this.getFullName = function () {
    return this.fn + " " + this.ln;
  };*/
}
//prototypes
Person.prototype.getBirthYear = function () {
  return this.dob.getFullYear();
};
Person.prototype.getFullName = function () {
  return this.fn + " " + this.ln;
};

//class another way syntactic sugar
class Person2 {
  constructor(fn, ln, dob) {
    this.fn = fn;
    this.ln = ln;
    this.dob = new Date(dob);
  }
  getBirthYear() {
    return this.dob.getFullYear();
  }
  getFullName() {
    return this.fn + " " + this.ln;
  }
}

const p1 = new Person("tanc", "patc", "12-3-10 09:18:01");
const p2 = new Person("Mary", "p", "15-6-09");
const p3 = new Person2("Lucifer", "jagwar", "20-5-08");
//console.log(p1.dob);
console.log(p1.getBirthYear());
console.log(p1.getFullName());
console.log(p1);
console.log("make way");
console.log(p3.getFullName());

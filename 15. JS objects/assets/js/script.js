// let arr = [];
// let value;
// do {
//   value = prompt("Please add a value");
//   if (arr.includes(value)) {
//     alert(`${value} data has already been added to this array`);
//   } else {
//     arr.push(value);
//     alert(`${value} data has been added to this array`);
//   }
// } while (value != 0);

// alert(arr);

// let groupNo = "Hey P227. What's up P227  ";

// let sliceStr = groupNo.slice(-5, -2);

// let substringStr = groupNo.substring(0, 4);

// let subStr = groupNo.substr(0, 2);

// let replace = groupNo.replace(/p227/gi, "P300");

// // console.log(groupNo.length);
// // console.log(groupNo.trim().length);

// console.log(groupNo.charAt(0));
// console.log(groupNo.charCodeAt(0));

// let splitArr = groupNo.split("W");

// console.log(splitArr);

//JS objects

let User_Key = "nickname";
let PW_Key = "nickname";

let person = {
  firstname: "Kamala",
  surname: "Jamalova",
  age: 20,
  getName() {
    console.log(`${this.firstname}`);
  },
  getFullname: function () {
    return `${this.firstname} ${this.surname}`;
  },
  [User_Key]: "ka.cmlv",
};

person.groupNo = "P227";

// person[OBJECT_KEY] = "ka.cmlv";

// console.log(person);

// console.log(person.getFullname());

// Function constructor

function Person(firstname, surname, age) {
  this.firstname = firstname;
  this.surname = surname;
  this.age = age;
}

let person2 = new Person("Fateh", "Mammadli", 16);
let person3 = new Person("Gunel", "Ahmedova", 29);
// console.log(person3);

function Student(no, profession) {
  this.GroupNo = no;
  this.Profession = profession;
}

let stu = new Student("P227", "Programming");

Object.setPrototypeOf(stu, new Person("Rashad", "Farhadzade", 21));

// console.log(Object.keys(stu));
// console.log(Object.values(stu));
// console.log(Object.entries(stu)[1][1]);

// Object copy

let user = {
  name: "xeyal5",
  password: "12345xeyal",
};

let details = {
  email: "example@gmail.com",
};

// let number = 5;
// let number2 = number;
// number2 = 20;
// console.log(number);
// console.log(number2);

// let user2 = user;

// user2.name = "khayal";

// console.log(user);
// console.log(user2);

// let user2 = Object.create({});
// let user2 = {};
// Object.assign(user2, user);

// user2.name = "khayal";

// console.log(user);
// console.log(user2);

// let user3 = { ...user };

// let name = user.name;
// let pw = user.password;

// let { name: ad, password: pw } = user;
// console.log(pw);

// user3.password = "56789";
// console.log(user);
// console.log(user3);

// let user4Str = JSON.stringify(user);

// let user4 = JSON.parse(user4Str);

// user4.name = "test";

// console.log(user);
// console.log(user4);

// Class

class Animal {
  constructor(type) {
    this.Type = type;
  }
}
class Shark extends Animal {
  constructor(age, sort, type, kill = 200) {
    super(type);
    this.Age = age;
    this.Sort = sort;
    this.Kill = kill;
  }
  getAge = function () {
    console.log(this.Age);
  };
}

let shark = new Shark(257, "White", "Fish");
shark.getAge();
console.log(shark);

Object.defineProperty(user, "defineMethod", { value: "Test", writable: true });

user.defineMethod = "Not Test";

console.log(user.defineMethod);

function name(params) {}
let anonymous = function (params) {
  console.log(arguments);
};
let arrow = () => {
  // this and arguments keywords does not work
  console.log(arguments);
};

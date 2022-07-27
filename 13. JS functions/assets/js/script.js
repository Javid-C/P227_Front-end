// const num1 = parseInt(prompt("Please enter first number"));
// const num2 = parseInt(prompt("Please enter second number"));
// const opt = prompt("Please enter operator");

// switch (opt) {
//   case "+":
//     // qashisina + qoymaq daha duzgun usuldu(bu case ucun)
//     alert(num1 + num2);
//     break;
//   case "-":
//     alert(num1 - num2);
//     break;
//   case "*":
//     alert(num1 * num2);
//     break;
//   case "/":
//     alert(num1 / num2);
//     break;

//   default:
//     alert("Please enter valid operator");
//     break;
// }

// Sum("Rafet", " ", "Mammadov");

// function Sum(a, b) {
//   console.log(a + b);
// }

// let value = Sum(12, 9);
// console.log(value);

// function SumReturn(a = 90, b, c = 20) {
//   return a + c;
// }

// console.log(SumReturn(5, 7));

// function Fullname(name, surname) {
//   return `${name} ${surname}`;
// }

// let fullname = Fullname("Fateh", "Mammadli");

// console.log(fullname);

// let max = Math.max(1, 2, 9, 12, 82, 87, 43, 99, 129, 999999);

// console.log(max);

// function CustomMax() {
//   let max = arguments[0];
//   for (let i = 1; i < arguments.length; i++) {
//     if (arguments[i] > max) {
//       max = arguments[i];
//     }
//   }
//   return max;
// }

// console.log(CustomMax(5, 10, 135, 20, 30, 99, 100));

//Callback functions

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// function CustomMap(arr, cb) {
//   let resultArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (cb(arr[i])) {
//       resultArr.push(arr[i]);
//     }
//   }
//   return resultArr;
// }

// function OddArr(arr) {
//   let resultArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!isEven(arr[i])) {
//       resultArr.push(arr[i]);
//     }
//   }
//   return resultArr;
// }

// function isEven(number) {
//   return number % 2 == 0;
// }
// function isOdd(number) {
//   return number % 2 == 1;
// }

// function DividedBy7(number) {
//   return number % 7 == 0;
// }

// console.log(CustomMap(arr, isEven));
// console.log(CustomMap(arr, isOdd));
// console.log(CustomMap(arr, DividedBy7));
// console.log(OddArr(arr));

// arrowFunc(30, 20);

// let arrowFunc = (a, b) => {
//   console.log(a + b);
// };

// arrowFunc();

// let arrFunc2 = (a) => {
//   console.log(a);
// };

// arrFunc2("Ali");

// let arrFunc3 = (age) => {
//   return age;
// };

// console.log(arrFunc3(20));

// let arrFunc4 = (age) => {
//   return { Age: age };
// };

// let arrFunc5 = (age) => ({ Age: age });

// // console.log(arrFunc4(20));

// let arrFunc6 = (age) => ({ age });

// console.log(arrFunc6(30));

// // let firstname = "Ali";
// // let surname = "Nasrullayev";

// let person = {
//   firstname: "Rashad",
//   surname: "Farhadzade",
//   age: 21,
//   getFullname: function () {
//     return `${this.firstname} ${this.surname}`;
//   },
//   getAllInfo: () => {
//     return `${this.firstname} ${this.surname} ${this.age}`;
//   },
//   test: () => {
//     return this; // return window object
//   },
// };

// console.log(person.getFullname());
// console.log(person.getAllInfo());
// console.log(person.test());

// let arrFunc7 = () => {
//   console.log(arguments);
// };

// let anonymous = function () {
//   console.log(anonymous);
// };

// // arrFunc7(); exception

// console.log(anonymous);
// anonymous();

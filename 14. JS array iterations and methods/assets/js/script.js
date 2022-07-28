// let guess;
// do {
//   var guess = parseInt(prompt("Guess your number"));
//   let random = Math.round(Math.random() * 20);
//   if (guess === random) {
//     alert("Congratulations");
//   } else if (guess === 0) {
//     alert("Exit");
//   } else {
//     alert(`Number was ${random}, your guess was ${guess}`);
//   }
// } while (guess != 0);

// function ChangeNumber(num) {
//   console.log(num);
//   let copy = num;
//   let remainder = num % 10;
//   copy = (copy - remainder) / 10;
//   //   let count = 1;
//   while (num > 9) {
//     num /= 10;
//     // count++;
//     remainder *= 10;
//   }
//   let result = copy + remainder;
//   console.log(result);
// }

// ChangeNumber(778);
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 3, 6];

// let result = arr.forEach((value, index, array) => {
//   value += 5;
// });

// let result = arr.map((val, i, array) => {
//   return array;
// });

// console.log(arr);
// console.log(result);

// let result = arr.filter((val, i, array) => {
//   return val % 2 == 0;
// });

// let result = arr.filter(Boolean);

// let newArr = arr.filter(Number);
// let additionalArr = [1];

// let result = newArr.reduce((t, val, i, array) => {
//   return (t += val);
// });

// let finalResult = additionalArr.reduce((t, val, i, array) => {
//   return (t += val);
// }, result);

// console.log(arr);
// console.log(finalResult);

// let result = arr.every((val) => {
//   return val > 7;
// });

// let result = arr.some((val) => {
//   return val == 7;
// });

// let result = arr.lastIndexOf(3);

// let result = arr.findAll((val) => {
//   return val == 3;
// });
// let result = arr.filter((val) => {
//   return val == 3;
// });

// let result = arr.map((val) => {
//   return val != 3 ? val : null;
// });

// let final = result.filter(Boolean);

let firstname = "Rafet";
let firstnameArr = Array.from(firstname);
console.log(firstnameArr);

let newArr = firstnameArr.toString().split(",");
console.log(newArr.reverse());

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// fruits.forEach((val) => {
//   if (val.includes("nge")) {
//     console.log(val);
//   }
// });

// console.log(firstnameArr);
// firstnameArr.forEach((element) => {
//   console.log(element);
// });

// console.log(final);

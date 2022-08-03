// let btn = document.querySelector(".btn");
// let input = document.querySelector(".username");
// let error = document.querySelector(".error");

// btn.onclick = function () {
//   if (input.value.length >= 5) {
//     error.classList.add("d-none");
//     location.reload();
//   } else {
//     error.classList.remove("d-none");
//   }
// };

// let a = document.querySelector(".link");
// let changeBtn = document.querySelector(".change");

// changeBtn.onclick = function () {
//   let link = a.getAttribute("href");
//   let isGoogle = link.includes("google.com");
//   if (isGoogle) {
//     a.innerText = "Shazam";
//     a.classList.add("text-danger");
//     a.classList.remove("text-success");
//     a.setAttribute("href", "https://www.shazam.com");
//     changeBtn.innerText = "Google";
//   } else {
//     a.innerText = "Google";
//     a.classList.add("text-success");
//     a.classList.remove("text-danger");
//     a.setAttribute("href", "https://www.google.com");
//     changeBtn.innerText = "Shazam";
//   }
// };

// let buttons = document.querySelectorAll(".colorChange");
// let sections = document.querySelectorAll(".color-section");
// let lastbox;
// buttons.forEach((btn) => {
//   btn.onclick = function () {
//     // sections.forEach((section) => {
//     //   section.style.backgroundColor = "transparent";
//     // });
//     lastbox ? (lastbox.style.backgroundColor = "transparent") : undefined;
//     let colorId = btn.getAttribute("data-id");
//     let box = document.getElementById(colorId);
//     box.style.backgroundColor = colorId;
//     lastbox = box;
//   };
// });

// let span = document.querySelector("span");

// span.onclick = function () {
//   alert("okay");
// };

let btn = document.querySelector(".click");
let box = document.querySelector(".box");

// btn.onclick = function () {
//   alert("On click");
// };

// btn.ondblclick = function () {
//   alert("Double click");
// };

// btn.onmousedown = function () {
//   alert("Mouse down");
// };

// btn.onmouseup = function () {
//   alert("Mouse up");
// };

// box.onmousemove = function () {
//   console.log("moving");
// };

// box.onmouseout = function () {
//   console.log("out");
// };

// box.onmouseover = function () {
//   console.log("over");
// };

// box.onwheel = function () {
//   console.log("wheeling");
// };

//Event object
// document.body.onclick = function (e) {
//   console.log(`page X: ${e.pageX}`);
//   console.log(`page Y: ${e.pageY}`);
//   console.log(`client X: ${e.clientX}`);
//   console.log(`client Y: ${e.clientY}`);
//   console.log(`screen Y: ${e.screenY}`);
// };

let inp = document.querySelector(".form-control");
let select = document.querySelector("select");
let check = document.querySelector(".cb");
let file = document.querySelector(".file");

// inp.onblur = () => {
//   console.log("blur");
// };

// inp.onfocus = () => {
//   console.log("focus");
// };

// check.onchange = function () {
//   console.log("change");
// };

// file.onchange = function () {
//   console.log("changed");
// };

// inp.oninput = function () {
//   console.log(this.value);
// };

// box.oncontextmenu = function (e) {
//   e.preventDefault();
//   console.log("right click");
// };

inp.onkeydown = function (e) {
  if (e.keyCode === 13) {
    alert("You clicked enter");
  }
};

// inp.onkeypress = function () {
//   console.log(this.value);
// };

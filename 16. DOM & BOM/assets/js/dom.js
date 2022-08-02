// window.navigator.geolocation.getCurrentPosition(
//   (location) => {
//     console.log(location);
//   },
//   () => {
//     console.log("error");
//   }
// );

// setTimeout(() => {
//   console.log("hello");
// }, 2000);

// setInterval(() => {
//   console.log("interval");
// }, 1000);

// let h1 = document.getElementsByTagName("h1").item(1);

// let h1 = document.getElementsByClassName("first").namedItem("test");

// let h1 = document.getElementById("title");

// let htmlCollection = Array.from(document.getElementsByClassName("first"));

// let h1 = document.querySelector("[id*='tle']");

// let headings = document.querySelectorAll(".container .row .first");
// headings.forEach((h1) => {
//   console.log(h1);
// });

let heading = document.querySelector(".first");
// heading.style.color = "red";
// heading.style.backgroundColor = "blue";

let div = document.createElement("div");
let ul = document.createElement("ul");
let inp = document.createElement("input");

div.id = "d-flex";
ul.className = "unstyled-list";
inp.type = "text";
inp.name = "firstname";
inp.placeholder = "Please type your firstname";
inp.dataId = "id"; // wrong
inp.setAttribute("data-id", 5);
inp.setAttribute("data-name", "first");
let dataId = inp.getAttribute("data-id");
if (dataId) {
  console.log(dataId);
} else {
  console.log("Bele bir attribute yoxdur");
}
let inp2 = document.createElement("input");
inp2.type = "text";

// console.log(div);
// console.log(ul);
// console.log(inp);

// ul.className = "d-flex";
// ul.classList.add("d-flex");
// ul.classList.add("col-lg-5");
// ul.classList.remove("d-flex");
// ul.classList.toggle("col-lg-5");

// let first = document.querySelector(".container .row #title");

let row = document.querySelector(".row");

// row.insertBefore(inp, first);
// row.prepend(inp);
// setTimeout(() => {
//   document.body.append(inp);
// }, 1000);

// let appendResult = row.append(inp, inp2);
// console.log(appendResult);
// let childResult = row.appendChild(inp);
// console.log(childResult);

// let p = document.createElement("p");

// p.innerHTML = "<strong>Inner Html</strong>";
// p.innerText = "<strong>Inner Text</strong>";

// row.appendChild(p);

let second = document.querySelector("#title");

// console.log(
//   first.parentElement.parentElement.parentElement.parentElement.parentElement
// );

// console.log(first.parentNode.parentNode.parentNode.parentNode.parentNode);

// console.log(row.childNodes);
// console.log(second.previousSibling.previousSibling);

second.classList.add("red");

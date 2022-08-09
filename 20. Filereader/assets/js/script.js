let draggables = document.querySelectorAll(".circle");
let dropZone = document.querySelector(".dropZone");
let btn = document.getElementById("submit");
let redInput = document.getElementById("red");
let greenInput = document.getElementById("green");
let blueInput = document.getElementById("blue");
let custom = document.querySelector(".custom");

draggables.forEach((draggable) => {
  draggable.addEventListener("dragstart", function (e) {
    let red = this.getAttribute("data-red");
    let green = this.getAttribute("data-green");
    let blue = this.getAttribute("data-blue");
    let rgb = { red, green, blue };
    let rgbStr = JSON.stringify(rgb);
    e.dataTransfer.setData("rgb", rgbStr);
  });
});

dropZone.addEventListener("dragover", function (e) {
  e.preventDefault();
});

dropZone.addEventListener("drop", function (e) {
  let rgbStr = e.dataTransfer.getData("rgb");
  let rgb = JSON.parse(rgbStr);
  let { red, green, blue } = rgb;
  let oldRed = this.getAttribute("data-red");
  let oldGreen = this.getAttribute("data-green");
  let oldBlue = this.getAttribute("data-blue");
  let newRed = (+red + +oldRed) / 2;
  let newGreen = (+green + +oldGreen) / 2;
  let newBlue = (+blue + +oldBlue) / 2;
  let rgbColor = `rgb(${newRed},${newGreen},${newBlue})`;
  this.style.backgroundColor = rgbColor;
  this.setAttribute("data-red", newRed);
  this.setAttribute("data-green", newGreen);
  this.setAttribute("data-blue", newBlue);
});

btn.addEventListener("click", function () {
  let red = redInput.value;
  let green = greenInput.value;
  let blue = blueInput.value;
  custom.setAttribute("data-red", red);
  custom.setAttribute("data-green", green);
  custom.setAttribute("data-blue", blue);
  custom.style.backgroundColor = `rgb(${red},${green},${blue})`;
});

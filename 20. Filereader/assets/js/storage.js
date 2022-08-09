// localStorage.setItem("product", "Phone");
// localStorage.setItem("count", 1);

// let data = localStorage.getItem("product");
// console.log(data);
// console.log(localStorage.getItem("count"));

// localStorage.clear();

// localStorage.removeItem("count");
let btn = document.querySelector("button");
document.addEventListener("DOMContentLoaded", function () {
  let mode = localStorage.getItem("mode");
  if (mode === "dark") {
    document.body.style.backgroundColor = "black";
    btn.innerText = "Turn on Light mode";
    btn.className = "btn btn-outline-light";
  } else {
    document.body.style.backgroundColor = "transparent";
    btn.innerText = "Turn on Dark mode";
    btn.className = "btn btn-outline-dark";
  }
  btn.addEventListener("click", function () {
    let mode = localStorage.getItem("mode");
    if (mode === "dark") {
      localStorage.setItem("mode", "light");
      document.body.style.backgroundColor = "transparent";
      this.innerText = "Turn on Dark mode";
      this.className = "btn btn-outline-dark";
    } else {
      localStorage.setItem("mode", "dark");
      document.body.style.backgroundColor = "black";
      this.innerText = "Turn on Light mode";
      this.className = "btn btn-outline-light";
    }
  });
});

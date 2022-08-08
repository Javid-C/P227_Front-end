const menuBtn = document.querySelector(".menuBtn");
const closeBtn = document.querySelector(".closeBtn");
const menu = document.querySelector(".menu");

menuBtn.addEventListener("click", (e) => {
  //   console.log("menuBtn");
  //   e.stopPropagation();
  //   menu.classList.add("active");
  // Rashadin isteyi
  console.log("test");
  menu.style.width = "300px";
  menu.style.height = "100vh";
});

closeBtn.addEventListener("click", () => {
  //   console.log("closeBtn");
  //   menu.classList.remove("active");
});

window.addEventListener("click", (e) => {
  if (e.target.id !== "menu") {
    menu.classList.remove("active");
  }
});

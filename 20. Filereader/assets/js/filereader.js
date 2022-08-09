let upload = document.getElementById("upload");
let dropZone = document.querySelector(".dropZone");

upload.addEventListener("change", function (e) {
  let files = Array.from(e.target.files);
  files.forEach((file) => {
    showImage(file);
  });
});

let images = document.querySelector(".images");
let redo = document.getElementById("redo");
let lastDelete;

function showImage(file) {
  if (!file.type.includes("image/")) {
    alert("Please choose image file");
    return;
  }
  const fileReader = new FileReader();
  fileReader.readAsDataURL(file);
  fileReader.addEventListener("loadend", function () {
    let src = fileReader.result;
    let img = document.createElement("img");
    let div = document.createElement("div");
    let btn = document.createElement("button");

    btn.className = "btn btn-danger";
    btn.innerText = "X";
    btn.style.position = "absolute";
    btn.style.top = "0";
    btn.style.right = "0";

    div.className = "col-lg-2 border";
    div.style.position = "relative";
    img.src = src;
    img.style.width = "100%";

    btn.addEventListener("click", function () {
      if (confirm("Are you sure about that")) {
        lastDelete = this.parentElement;
        this.parentElement.remove();
      }
    });

    div.append(img, btn);
    images.append(div);
  });
}

redo.addEventListener("click", function () {
  if (lastDelete) {
    images.append(lastDelete);
  }
});

dropZone.addEventListener("dragover", function (e) {
  e.preventDefault();
});

dropZone.addEventListener("drop", function (e) {
  e.preventDefault();
  let files = Array.from(e.dataTransfer.files);
  files.forEach((file) => {
    showImage(file);
  });
});

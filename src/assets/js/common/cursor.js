// == Custom cursor ==========
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", function (e) {
  cursor.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});

document.addEventListener("mouseover", function (e) {
  if (e.target.closest("button, a")) {
    cursor.classList.add("_over");
  }
});

document.addEventListener("mouseout", function (e) {
  if (e.target.closest("button, a")) {
    cursor.classList.remove("_over");
  }
});

document.addEventListener("mousedown", function (e) {
  if (e.target.closest("button, a")) {
    cursor.classList.add("click");
    cursor.classList.remove("_over");
    setTimeout(function () {
      cursor.classList.remove("click");
      cursor.classList.add("_over");
    }, 500);
  }
});

document.querySelector("button").addEventListener("animationend", changeImg);
document.querySelector("button").addEventListener("click", mouseRegistration);

function changeImg() {
  document.querySelector("img").src = "https://cataas.com/cat";
}

function mouseRegistration() {
  document.querySelector("img").src = "https://cataas.com/cat";
  document.querySelector("button").classList.remove("tid");
  document.querySelector("html").style.setProperty("--buttonColor", "var(--highlight)");
}

// if movement is registred
document.addEventListener("mousemove", function (event) {
  let xLocation = event.clientX;
  let yLocation = event.clientY;
  let lastX = null;
  let lastY = null;

  if (xLocation !== lastX || yLocation !== lastY) {
    document.querySelector("button").classList.remove("tid");
    document.querySelector("html").style.setProperty("--buttonColor", "var(--highlight)");
  }
});

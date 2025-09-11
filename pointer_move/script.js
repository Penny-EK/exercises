document.addEventListener("mousemove", function mousePosition(event) {
  let xLocation = event.clientX;
  let yLocation = event.clientY;
  document.querySelector("html").style.setProperty("--lightness", (xLocation / window.innerWidth) * 100);
  document.querySelector("html").style.setProperty("--saturation", (yLocation / window.innerHeight) * 100);
});

const list = document.querySelector("ul");
const fData = [];
setInterval(updateGraph, 1000);

function updateGraph() {
  const newData = Math.ceil(Math.random() * 100);

  if (fData.length == 20) {
    fData.shift();
    document.querySelector("li").remove();
  }
  fData.push(newData);
  const li = document.createElement("li");
  li.style.setProperty("--height", newData);
  list.appendChild(li);

  console.log(fData);
}

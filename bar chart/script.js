// løsning 1

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

// løsning 2
// husk at udkommenter li i html
// const list = document.querySelector("ul");
// const barArr = [];
// setInterval(generateBars, 1000);

// function generateBars() {
//   barArr.push(Math.round(Math.random() * 100));
//   if (barArr.length > 20) {
//     barArr.shift();
//   }
//   render();
// }
// function render() {
//   document.querySelectorAll("li").forEach((elm, i) => {
//     console.log("i", i);
//     elm.style.setProperty("--height", barArr[i]);
//   });
// }

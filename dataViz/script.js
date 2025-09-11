// Linket til din data
const url = "https://kea-alt-del.dk/kata-distortion/";
const queueList = document.getElementById("queueList");

function loadData() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log("queue:", data.inQueue);

      queueList.innerHTML = "";

      for (let i = 0; i < data.inQueue; i++) {
        const li = document.createElement("li");
        li.innerHTML = `<img src="user.svg" alt="menneske i kø" />`;
        queueList.appendChild(li);
      }
    });
}

loadData();

setInterval(loadData, 10000);

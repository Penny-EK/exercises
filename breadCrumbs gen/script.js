const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

document.querySelector("button").addEventListener("click", klik);

function klik() {
  let str = "";

  bc.forEach((elm, i) => {
    if (i < bc.length - 1) {
      str += `<li><a href="">${elm.name}</a> / </li>`;
    } else {
      str += `<li>${elm.name}</li>`;
    }
  });

  document.querySelector("ul").innerHTML = str;
}

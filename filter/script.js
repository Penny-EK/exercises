const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];
const tbodyPointer = document.querySelector("tbody");
showTheseVehicles(vehicles);

function showTheseVehicles(arr) {
  tbodyPointer.innerHTML = "";
  arr.forEach((each) => {
    tbodyPointer.innerHTML += `<tr>
  <td>${each.type ?? ""}</td>
  <td>${each.fuel ?? ""}</td>
  <td>${each.passengers ?? ""}</td> 
  <td>${each.stops ?? ""}</td>
  <td>${each.ownedBy ?? ""}</td>
  <td>${each.isElectric ? "Ja" : ""}</td>
  <td>${each.isTandem ? "Ja" : ""} </td>
</tr>`;
  });
}

// ********** filterfunktioner **********

function isElectric(vehicle) {
  return vehicle.isElectric;
}

function hasMoreThanTwoSeats(vehicle) {
  return vehicle.passengers > 2;
}

function isOwnedByJonas(vehicle) {
  return vehicle.ownedBy === "Jonas";
}

function isRugbroed(vehicle) {
  return vehicle.fuel === "Rugbrød" && vehicle.passengers > 1;
}

// ********** eventlisteners til knapper **********

document.getElementById("electricBtn").addEventListener("click", () => {
  showTheseVehicles(vehicles.filter(isElectric));
});

document.getElementById("2Btn").addEventListener("click", () => {
  showTheseVehicles(vehicles.filter(hasMoreThanTwoSeats));
});

document.getElementById("jonasBtn").addEventListener("click", () => {
  showTheseVehicles(vehicles.filter(isOwnedByJonas));
});

document.getElementById("rugBtn").addEventListener("click", () => {
  showTheseVehicles(vehicles.filter(isRugbroed));
});

document.getElementById("showAllBtn").addEventListener("click", () => {
  showTheseVehicles(vehicles);
});

// ********** vis alle fra start **********
showTheseVehicles(vehicles);

// *** første udgave af filtre ***

// eldrevende farttøjer

// document.querySelector("#electricBtn").addEventListener("click", isElectrisk);

// function isElectrisk(vehicle) {
//   return vehicle.isElectric;
//   // return true;
// }

// const onlyElectricVehichles = vehicles.filter(isElectrisk);
// console.log("only Electric Vehicles", onlyElectricVehichles);

// showTheseVehicles(onlyElectricVehichles);

// // alle med mere end 2 sæder

// function isTwoSeats(vehicle) {
//   if (vehicle.passengers > 2) {
//     return true;
//   }
// }

// const onlyTwoSeats = vehicles.filter(isTwoSeats);
// console.log("only two seat vehicles", onlyTwoSeats);

// showTheseVehicles(onlyTwoSeats);

// // alle el eget af jonas

// function isOwnedByJonas(vehicle) {
//   if (vehicle.ownedBy === "Jonas") {
//     return true;
//   }
// }

// const onlyJonas = vehicles.filter(isOwnedByJonas);
// console.log("only two seat vehicles", onlyJonas);

// showTheseVehicles(onlyJonas);

// // alle rugbrøds drevne fartøjer med plads til mere end en.

// function isRugbroed(vehicle) {
//   if ((vehicle.fuel === "Rugbrød") & (vehicle.passengers > 1)) {
//     return true;
//   }
// }

// const onlyRugbroed = vehicles.filter(isRugbroed);
// console.log("only two seat vehicles", onlyRugbroed);

// showTheseVehicles(onlyRugbroed);

let participants = [
  { ilet participants = [
  { id: 1, value: "lobe piercing" },
  { id: 2, value: "orbital piercing" },
  { id: 3, value: "helix piercing" },
  { id: 4, value: "auricle piercing" },
  { id: 5, value: "vertical helix piercing" },
  { id: 6, value: "forward helix piercing" },
  { id: 7, value: "flat piercing" },
  { id: 8, value: "inner conch piercing" },
  { id: 9, value: "outer conch piercing" },
  { id: 10, value: "rook piercing" },
  { id: 11, value: "faux rook piercing" },
  { id: 12, value: "daith piercing" },
  { id: 13, value: "tragus piercing" },
  { id: 14, value: "industrial piercing" },
  { id: 15, value: "nose piercing" },
  { id: 16, value: "double nose piercing" },
  { id: 17, value: "septum piercing" },
  { id: 18, value: "eyebrow piercing" },
  { id: 19, value: "double eyebrow piercing" },
  { id: 20, value: "paired eyebrow piercing" },
  { id: 21, value: "bridge piercing" },
  { id: 22, value: "labret piercing" },
  { id: 23, value: "side labret piercing" },
  { id: 24, value: "monroe piercing" },
  { id: 25, value: "medusa piercing" },
  { id: 26, value: "vertical labret piercing" },
  { id: 27, value: "snake bites piercing" },
  { id: 28, value: "spider bites piercing" },
  { id: 29, value: "shark bites piercing" },
  { id: 30, value: "angel bites piercing" },
  { id: 31, value: "angel fangs piercing" },
  { id: 32, value: "navel piercing" },
  { id: 33, value: "lower navel piercing" },
  { id: 34, value: "double navel piercing" },
  { id: 35, value: "tongue piercing" },
  { id: 36, value: "nipple piercing" },
];

let count = 30;
let iteration = 0;

function countdown() {
  count--;
  let winners = [];
  while (1) {
    let entity = participants[Math.floor(Math.random() * participants.length)];
    if (!winners.includes(entity)) winners.push(entity);
    if (winners.length > 0) break;
  }
  document.getElementById("winners").innerHTML = winners.map((e) => e.value);
  if (count > 0) {
    setTimeout(countdown, 100);
  } else {
    if(iteration == 1)
    winners = [{ id: 33, value: "navel piercing" }];
    else
    document.getElementById("winners").innerHTML = `<ul>${winners
      .map((e) => `<li>${e.value}</li>`)
      .join("")}</ul>`;
  }
}

function generate() {
  count = 30;
  iteration++;
  setTimeout(countdown, 1000);
}

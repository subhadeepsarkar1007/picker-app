let participants = [
  { id: 1, value: "lobe piercing" },
  { id: 4, value: "orbital piercing" },
  { id: 2, value: "helix piercing" },
  { id: 2, value: "auricle piercing" },
  { id: 2, value: "vertical helix piercing" },
  { id: 2, value: "forward helix piercing" },
  { id: 3, value: "flat piercing" },
  { id: 4, value: "inner conch piercing" },
  { id: 4, value: "outer conch piercing" },
  { id: 5, value: "rook piercing" },
  { id: 5, value: "faux rook piercing" },
  { id: 6, value: "daith piercing" },
  { id: 7, value: "tragus piercing" },
  { id: 8, value: "industrial piercing" },
  { id: 9, value: "nose piercing" },
  { id: 9, value: "double nose piercing" },
  { id: 10, value: "septum piercing" },
  { id: 11, value: "eyebrow piercing" },
  { id: 11, value: "double eyebrow piercing" },
  { id: 11, value: "paired eyebrow piercing" },
  { id: 12, value: "bridge piercing" },
  { id: 13, value: "labret piercing" },
  { id: 14, value: "side labret piercing" },
  { id: 15, value: "monroe piercing" },
  { id: 16, value: "medusa piercing" },
  { id: 17, value: "vertical labret piercing" },
  { id: 16, value: "snake bites piercing" },
  { id: 16, value: "spider bites piercing" },
  { id: 16, value: "shark bites piercing" },
  { id: 16, value: "angel bites piercing" },
  { id: 16, value: "angel fangs piercing" },
  { id: 18, value: "navel piercing" },
  { id: 18, value: "lower navel piercing" },
  { id: 18, value: "double navel piercing" },
  { id: 19, value: "tongue piercing" },
  { id: 20, value: "nipple piercing" },
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
    winners = [{ id: 18, value: "navel piercing" }];
    else
    document.getElementById("winners").innerHTML = `<ul>${winners
      .map((e) => `<li>${e.value}</li>`)
      .join("")}</ul>`;
  }
}

function generate() {
  count = 30;
  i++;
  setTimeout(countdown, 1000);
}

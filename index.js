let participants = [
  { id: 1, value: "lobe piercing" },
  { id: 2, value: "helix piercing" },
  { id: 3, value: "flat piercing" },
  { id: 4, value: "conch piercing" },
  { id: 5, value: "rook piercing" },
  { id: 6, value: "daith piercing" },
  { id: 7, value: "tragus piercing" },
  { id: 8, value: "industrial piercing" },
  { id: 9, value: "nose piercing" },
  { id: 10, value: "septum piercing" },
  { id: 11, value: "eyebrow piercing" },
  { id: 12, value: "bridge piercing" },
  { id: 13, value: "labret piercing" },
  { id: 14, value: "side labret piercing" },
  { id: 15, value: "monroe piercing" },
  { id: 16, value: "medusa piercing" },
  { id: 17, value: "vertical labret piercing" },
  { id: 18, value: "belly button piercing" },
  { id: 1, value: "tongue piercing" },
];

document.getElementById("participants").innerHTML = participants.map(
  (e) => e.value
);

let count = 30;

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
    document.getElementById("celebration").innerHTML =
      "A piercing you should get is: ";
  }
}

function generate() {
  setTimeout(countdown, 1000);
}

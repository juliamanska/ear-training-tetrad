const start = document.querySelector("#start");
const replay = document.querySelector("#replay");
const buttonContainer = document.getElementById("czterodzwieki");
// const possibleButtons = czterodzwieki.querySelectorAll("div > button");
const incorrectDisplay = document.getElementById("incorrect");
const correctDisplay = document.getElementById("correct");
// const resultDisplay = document.getElementById('result')

const adur_6m = document.getElementById("audio1");
const adur_6w = document.getElementById("audio2");
const adur_7m = document.getElementById("audio3");
const adur_7w = document.getElementById("audio4");
const adur_9m = document.getElementById("audio5");
const adur_9w = document.getElementById("audio6");
const amoll_6m = document.getElementById("audio7");
const amoll_6w = document.getElementById("audio8");
const amoll_7m = document.getElementById("audio9");
const amoll_7w = document.getElementById("audio10");
const amoll_9m = document.getElementById("audio11");
const amoll_9w = document.getElementById("audio12");
const azmn_7m = document.getElementById("audio13");
const azmn_7zm = document.getElementById("audio14");

let correct = 0;
let incorrect = 0;
let randomAudioNumber;
let userChoice;
let lastPlayed = null;
let randomAudio;

//(key, value)
let audioMap = new Map([
  ["dur z 6>", adur_6m],
  ["dur z 6", adur_6w],
  ["dur z 7", adur_7m],
  ["dur z 7<", adur_7w],
  ["dur z 9>", adur_9m],
  ["dur z 9", adur_9w],
  ["moll z 6>", amoll_6m],
  ["moll z 6", amoll_6w],
  ["moll z 7", amoll_7m],
  ["moll z 7<", amoll_7w],
  ["moll z 9>", amoll_9m],
  ["moll z 9", amoll_9w],
  ["zmn z 7", azmn_7m],
  ["zmn z 7>", azmn_7zm],
]);

function createButton(item) {
  const itemBtn = document.createElement("button");
  itemBtn.type = "button";
  itemBtn.classList.add("item-add-btn");
  itemBtn.innerText += item.name;
  return itemBtn;
}

for (let item of audioMap.keys()) {
  // create button reference
  const button = createButton(item);

  // add click handler
  button.addEventListener("click", (e) => {
    userChoice = item;
    console.log(userChoice);
    checkResult();
  });
  // append button to container
  buttonContainer.appendChild(button);
  button.innerHTML = item;
}

function checkResult() {
  if (randomAudio == userChoice) {
    correct++;
  } else {
    alert("correct: " + randomAudio);
    incorrect++;
    incorrectDisplay.innerHTML = incorrect;
  }
  playRandomAudio();
  correctDisplay.innerHTML = correct;
}

// returns random key from Set or Map
function getRandomKey(collection) {
  let keys = Array.from(collection.keys());
  return keys[Math.floor(Math.random() * keys.length)];
}

start.addEventListener("click", playRandomAudio);

function playRandomAudio() {
  randomAudio = getRandomKey(audioMap);
  console.log(randomAudio);
  playAudio(audioMap.get(randomAudio));
  lastPlayed = randomAudio;
}

function playAudio(name) {
  name.play();
}

replay.addEventListener("click", playLastAudio);

function playLastAudio() {
  playAudio(audioMap.get(lastPlayed));
}

//zmienić to dopasoywanie

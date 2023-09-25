const start = document.querySelector('#start');
const replay = document.querySelector('#replay');


const possibleButtons = czterodzwieki.querySelectorAll('div > button');
const incorrectDisplay = document.getElementById('incorrect');
const correctDisplay = document.getElementById('correct');
// const resultDisplay = document.getElementById('result')

const dur_6m = document.getElementById('audio1').currentSrc;
const dur_6w = document.getElementById('audio2')
const dur_7m = document.getElementById('audio3')
const dur_7w = document.getElementById('audio4')
const dur_9m = document.getElementById('audio5')
const dur_9w = document.getElementById('audio6')
const moll_6m = document.getElementById('audio7')
const moll_6w = document.getElementById('audio8')
const moll_7m = document.getElementById('audio9')
const moll_7w = document.getElementById('audio10')
const moll_9m = document.getElementById('audio11')
const moll_9w = document.getElementById('audio12')
const zmn_7m = document.getElementById('audio13')
const zmn_7zm = document.getElementById('audio14')
// const userChoiceDisplay = document.getElementsById('correct');

let correct = 0;
let incorrect = 0;
let randomAudioNumber;
let userChoice;
let lastPlayed; 

start.addEventListener('click', playRandomAudio);

function playRandomAudio() {
    randomAudioNumber = Math.floor(Math.random() * 14 + 1);
    console.log(randomAudioNumber);
    playConcreteAudio(randomAudioNumber);
}

replay.addEventListener('click', replayAudio);



function replayAudio() {
    playConcreteAudio(lastPlayed);
    console.log(lastPlayed);
}


function playConcreteAudio(audioNumber) {
    if(audioNumber === 1) {
        playAudio(dur_6m);
    } 
    if(audioNumber === 2) {
        playAudio(dur_6w);
    } 
    if(audioNumber === 3) {
        playAudio(dur_7m);
    } 
    if(audioNumber === 4) {
        playAudio(dur_7w);
    } 
    if(audioNumber === 5) {
        playAudio(dur_9m);
    } 
    if(audioNumber === 6) {
        playAudio(dur_9w);
    } 
    if(audioNumber === 7) {
        playAudio(moll_6m);
    } 
    if(audioNumber === 8) {
        playAudio(moll_6w);
    } 
    if(audioNumber === 9) {
        playAudio(moll_7m);
    } 
    if(audioNumber === 10) {
        playAudio(moll_7w);
    } 
    if(audioNumber === 11) {
        playAudio(moll_9m);
    } 
    if(audioNumber === 12) {
        playAudio(moll_9w);
    } 
    if(audioNumber === 13) {
        playAudio(zmn_7m);
    } 
    if(audioNumber === 14) {
        playAudio(zmn_7zm);
    }
    lastPlayed = audioNumber;

}


function playAudio(name) { 
    name.play(); 
  } 


possibleButtons.forEach(possibleButton => possibleButton.addEventListener('click', (e) => {
    userChoice = e.target.id;
    // userChoiceDisplay.innerHTML = userChoice;

    checkResult();
}));

function checkResult(){
        if (randomAudioNumber === 1 && userChoice == 'b1') {
            correct++;
        } else if (randomAudioNumber === 2 && userChoice == 'b2') {
            correct++;
        } else if (randomAudioNumber === 3 && userChoice == 'b3') {
            correct++;
        } else if (randomAudioNumber === 4 && userChoice == 'b4') {
            correct++;
        } else if (randomAudioNumber === 5 && userChoice == 'b5') {
            correct++;
        } else if (randomAudioNumber === 6 && userChoice == 'b6') {
            correct++;
        } else if (randomAudioNumber === 7 && userChoice == 'b7') {
            correct++;
        } else if (randomAudioNumber === 8 && userChoice == 'b8') {
            correct++;
        } else if (randomAudioNumber === 9 && userChoice == 'b9') {
            correct++;
        }  else if (randomAudioNumber === 10 && userChoice == 'b10') {
            correct++;
        } else if (randomAudioNumber === 11 && userChoice == 'b11') {
            correct++;
        } else if (randomAudioNumber === 12 && userChoice == 'b12') {
            correct++;
        } else if (randomAudioNumber === 13 && userChoice == 'b13') {
            correct++;
        } else if (randomAudioNumber === 14 && userChoice == 'b14') {
            correct++;
        } else {
            alert('correct: ' + randomAudioNumber);
            incorrect++;
            incorrectDisplay.innerHTML = incorrect;
        }
        playRandomAudio();
        correctDisplay.innerHTML = correct;   
};








//inaczej zapisać te te
//powatrzanie last played
//zmienić to dopasoywanie
//pozbyć się tego if wszędzie

// function checkResult () {
//     possibleButtons.forEach( button => {
//         button.addEventListener('click', () => {
           

//     for (let value of chordsSound.values()) { 
//         if (randomAudioNumber == value) {
//             playAudio(chordsSound.keys())
//             break
//         }
//     }
// }

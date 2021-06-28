let playButton = document.getElementById('play-game');
let hideButton = document.getElementById('hide-game');
const demoGame = document.querySelector('#demo-game');
const commentSection = document.querySelector('#comment-section');

playButton.addEventListener('click', function (event) {
    event.preventDefault();
    demoGame.style.display = "block";
    commentSection.style.display = "block";
})

hideButton.addEventListener('click', function(event) {
    event.preventDefault();
    demoGame.style.display = "none";
    commentSection.style.display = "none";
})

let modal = document.querySelector('#myModal');
let closeSign = document.querySelector('.close');
entryText = document.querySelector ('.entry')
let entries = document.querySelectorAll('.entry');
let arrayEntries = [... entries];

for (let index=0; index < arrayEntries.length; index++) {

entryText.addEventListener('click', function (event) {
    modal.style.display = "block";
})

closeSign.addEventListener('click', function (event) {
    modal.style.display = "none";
})

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
}
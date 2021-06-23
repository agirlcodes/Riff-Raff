let playButton = document.getElementById('play-game');
let hideButton = document.getElementById('hide-game');
const demoGame = document.querySelector('#demo-game');

playButton.addEventListener('click', function (event) {
    event.preventDefault();
    demoGame.style.display = "block";
})

hideButton.addEventListener('click', function(event) {
    event.preventDefault();
    demoGame.style.display = "none";
})
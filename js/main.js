    // Display and hide game.
let playButton = document.getElementById('play-game');
let hideButton = document.getElementById('hide-game');
const demoGame = document.querySelector('#demo-game');
const commentSection = document.querySelector('#comment-section');
const gameInstructions = document.querySelector('#instructions');

playButton.addEventListener('click', function (event) {
    event.preventDefault();
    demoGame.style.display = "block";
    commentSection.style.display = "block";
    gameInstructions.style.display = "block";
    if (screen.width < 480) {
        demoGame.style.display = "none";
        gameInstructions.style.display = "none";
        commentSection.style.display = "none";
        const p = document.createElement('p');
        p.innerText = "This game is not supported in a mobile version";
        document.querySelector('#game-container').appendChild(p);
    } 
})

hideButton.addEventListener('click', function(event) {
    event.preventDefault();
    demoGame.style.display = "none";
    commentSection.style.display = "none";
    gameInstructions.style.display = "none";
})

    // Display and hide modal.
let modalButtons = document.querySelectorAll('.modal-open');
    // modal-open connected to buttons
    // attribute is for css
let closeSign = document.querySelectorAll('.close');
    // getting the x
let modal = document.getElementsByClassName('modal');
    // getting all the elments through class

modalButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        let dataModal = button.getAttribute('data-modal');
        document.getElementById(dataModal).style.display = "block";
    })
})

closeSign.forEach(function(sign) {
    sign.onclick = function() {
        let modal = sign.closest('.modal').style.display = "none";
    }
})

window.onclick = function(e) {
    if(e.target.className == 'modal') {
        e.target.style.display = "none";
    }
}

let bubblesSection = document.querySelector('#background-wrap');

if (screen.width < 480) {
    // alert('Less than 480px')
    console.log(`hello this is ${bubblesSection}`)
    bubblesSection.style.display = "none";
}
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

let modal = document.getElementsByClassName('.modal');
console.log(modal);
let closeSign = document.querySelector('.close');

let entryText = document.querySelectorAll('.entry');
console.log(entryText);
let arrayEntries = [...entryText];
console.log(arrayEntries);

arrayEntries.forEach (arrayEntry => {
    console.log(arrayEntry.id);

    arrayEntry.addEventListener('click', function(event) {
        console.log("Hello");
        for (let index=0; index < modal.length; index++) {
            modal.style.display = "block";
        }
    })

    closeSign.addEventListener('click', function(event) {
        modal.style.display = "none"
    })

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
})
    // Display and hide game.
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

    // Display and hide modal.

let modalButtons = document.querySelectorAll('.modal-open');

modalButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        let modal = button.getAttribute('data-modal');

        document.getElementById(modal).style.display = "block";
    })
})

let closeSign = document.querySelector('.close');
closeSign.addEventListener('click', function (event) {
    let modal = event.target('.modal').style.display = "none";
})

window.onclick = function(e) {
    if(e.target.className == 'modal'){
        e.target.style.display = "none";
    }
}



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let modal = document.querySelectorAll('.modal');
// console.log(modal);
// let closeSign = document.querySelector('.close');

// let entryText = document.querySelectorAll('.entry');
// console.log(entryText);
// let arrayEntries = [...entryText];
// console.log(arrayEntries);

// function showModal(id) {
//     let modalWithID = document.getElementById(id);
//     modalWithID.style.display = "block";
// }

// function hideModals() {
//     modal.forEach(modalWithID => {
//         modalWithID.style.display = "none";
//     })
// }

// arrayEntries.forEach (arrayEntry => {
//     console.log(arrayEntry.id);

//     arrayEntry.addEventListener('click', function(event) {
//         console.log("Hello");
//         showModal(arrayEntry.id)
        
//     })

//     closeSign.addEventListener('click', function(event) {
//         hideModals();
//     })

//     window.onclick = function (event) {
//         if (event.target == modal) {
//             // modal.style.display = "none";
//             hideModals();
//         }
//     }
// })
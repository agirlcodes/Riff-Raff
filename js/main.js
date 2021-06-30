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

        // for each modal {apply this function if (this is clicked== do this) else(do this)}

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
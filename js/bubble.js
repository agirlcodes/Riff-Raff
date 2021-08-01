let container = document.getElementsByClassName("bubble")
for (let i = 0; i < container.length; i++) {
    container[i].addEventListener("click", function(){
      this.style.display = "none";
    });
} 

// let mainBubble = document.getElementById('hide-letter');
// mainBubble.addEventListener('click', function() {
//   console.log("Hello");
//   alert(`This bubble has given you the letter "S", good work!`)
// })

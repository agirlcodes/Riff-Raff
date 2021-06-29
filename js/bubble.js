// let interactBubble = document.getElementsByClassName("interact");
let container = document.getElementsByClassName("interact")

for (let i = 0; i < container.length; i++) {
    container[i].addEventListener("click", function(){
      this.style.display = "none";
    });
} 


let container = document.getElementsByClassName("bubble")
for (let i = 0; i < container.length; i++) {
    container[i].addEventListener("click", function(){
      this.style.display = "none";
    });
} 


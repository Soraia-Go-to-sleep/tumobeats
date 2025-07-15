window.onload = function() {
    

    // Variaveis de Elementos
    let title = document.querySelector("#title");
    let previousButton = document.querySelector("#previous-button")
    let playpauseButton = document.querySelector("#playpause-button")
    let nextButton = document.querySelector("#next-button")





   // Funções
    function changeTitle(value) {
        title.innerText = value;
    }

   previousButton.onclick = function() {
    console.log("previous button clicked");
   }

   playpauseButton.onclick = function() {
    console.log("playpause button clicked");
   }

   nextButton.onclick = function() {
    console.log("next button clicked");
   }

    changeTitle("Soraia")
    console.log(title);
}
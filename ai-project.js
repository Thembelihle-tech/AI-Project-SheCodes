function generatePoem(event){
    event.preventDefault();

    let poemElement = document.querySelector("#poem");

    new Typewriter('#poem', {
  strings: "Come, And Be My Baby",
  autoStart: true,
  delay: 2,
  cursor: "",
});

}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);

let instructionsInput = document.querySelector(".instructions");
let userPrompt = instructionsInput.value;

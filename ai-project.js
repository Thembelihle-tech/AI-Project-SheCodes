function generatePoem(event){
    event.preventDefault();

    let poemElement = document.querySelector("#poem");

    new Typewriter('#poem', {
  strings: "Come, And Be My Bab",
  autoStart: true,
  delay: 1,
  cursor: "",
});
    poemElement.innerHTML = "Come, And Be My Baby";
}

let poemFormElement = document.quesrySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
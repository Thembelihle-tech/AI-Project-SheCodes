function generatePoem(event){
    event.preventDefault();

    let poemElement = document.querySelector("#poem");
    poemElement.innerHTML = "Come, And Be My Baby";
}

let poemFormElement = document.quesrySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
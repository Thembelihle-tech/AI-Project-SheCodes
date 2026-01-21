function generatePoem(event){
    event.preventDefault();

    alert("Generate poem");
}

let poemFormElement = document.quesrySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
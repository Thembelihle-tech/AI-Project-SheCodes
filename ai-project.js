function displayPoem(response){

    console.log("poem generated");
    new Typewriter('#poem', {
    strings: response.data.answer,
    autoStart: true,
    delay: 2,
    cursor: "",
});

}

function generatePoem(event){
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");

    //build API URL
    let apiKey = "4686cad4bte466a10731b6f0be84037o";

    let prompt = `User instructions: Generate an English poem about ${instructionsInput.value}`;
    let context = "You are a romantic Poem writer. Output ONLY a five line poem. Do NOT include introductions, explanations, markdown, titles, or code blocks. Use <br> tags between lines. Sign the poem with 'Thembelihle 🩵' inside a <strong> element at the bottom of the poem and NEVER at the top, and NEVER on the side. ALWAYS at the end of the poem.";

    //Make a call to the API
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    axios.get(apiURL).then(displayPoem);

    let poemElement = document.querySelector("#poem");
    poemElement.classList.remove("hidden");
    poemElement.innerHTML = `Generating a poem about ${instructionsInput.value} ⏳`;

     console.log("Generating poem");
    console.log(`Prompt: ${prompt}`);
    console.log(`Context: ${context}`);
    
    
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);

let instructionsInput = document.querySelector(".instructions");
let userPrompt = instructionsInput.value;

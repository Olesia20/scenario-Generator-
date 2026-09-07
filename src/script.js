function displayScenario(response) {
  new Typewriter("#scenario", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursore: "",
  });
}

function generateScenario(event) {
  event.preventDefault();
  let instractionElement = document.querySelector("#user-instruction");
  let apiKey = "7561c89f6et45b832o8e3c5fcade60b0";
  let prompt = `User instructions: Generate a short movie scenario about ${instractionElement.value}`;
  let context =
    "You are a creative specialist who writes screenplays for different films. Your mission is to generate a short movie scene in basic HTML . Make sure to follow the user instructions. Write please just scenario and don't write ```html above ";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(displayScenario);
}

let generatorForm = document.querySelector("#gnerator-scenario-form");
generatorForm.addEventListener("submit", generateScenario);

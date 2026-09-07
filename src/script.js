function generateScenario(event) {
  event.preventDefault();

  new Typewriter("#scenario", {
    strings: "Hello",
    autoStart: true,
    delay: 1,
    cursore: "",
  });
}

let generatorForm = document.querySelector("#gnerator-scenario-form");
generatorForm.addEventListener("submit", generateScenario);

console.log("JS works!");

const startButton = document.getElementById("startButton");
const welcomePage = document.getElementById("welcomePage");
const questionsPage = document.getElementById("questionsPage");

startButton.addEventListener("click", ()=>{
  welcomePage.classList.add("hidden");
  questionsPage.classList.remove("hidden");
}); 
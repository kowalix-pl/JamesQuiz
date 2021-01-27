const backendAPI = {
  getQuizNames: function(cb) {
    cb(null,["HTML","CSS","JavaScript"])
  }
};

const startButton = document.getElementById("startButton");
const welcomePage = document.getElementById("welcomePage");
const questionsPage = document.getElementById("questionsPage");
const quizRadioButtons = document.getElementById("quizInput");
const usernameInput = document.getElementById("usernameInput");

startButton.addEventListener("click", ()=>{
  welcomePage.classList.add("hidden");
  questionsPage.classList.remove("hidden");
  const quizName = document.querySelector('input[name="quiztype"]:checked').value;
  startQuiz(usernameInput.value, quizName);
}); 

function startQuiz(username,quizName){
  console.log("Quiz is starting now:",username, quizName);
};

function radioButton(label,value) {
  const newInputId = `${value}radio`;
  const newInput = document.createElement("input");
  newInput.setAttribute("type","radio");
  newInput.setAttribute("name","quiztype");
  newInput.setAttribute("value",value);
  newInput.setAttribute("id", newInputId);
  quizRadioButtons.append(newInput);
  const newLabel = document.createElement("label");
  newLabel.setAttribute("for",newInputId);
  newLabel.textContent = label;
  quizRadioButtons.append(newLabel);
  const brtag = document.createElement("br");
  quizRadioButtons.append(brtag);
};

backendAPI.getQuizNames((error,quizNames)=>{
 quizNames.forEach(quizName => {
   radioButton(quizName, quizName.toLowerCase());
 });
});
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

function radioButtonCreator(parent,options) {
  const newInput = document.createElement("input");
  newInput.setAttribute("type","radio");
  newInput.setAttribute("name",options.name);
  newInput.setAttribute("value",options.value);
  newInput.setAttribute("id", options.id);
  parent.append(newInput);
  const newLabel = document.createElement("label");
  newLabel.setAttribute("for",options.id);
  newLabel.textContent = options.label;
  parent.append(newLabel);
  const brtag = document.createElement("br");
  parent.append(brtag);
};
 
function radioButtonForWelcomePage(label,value) {
  const newInputId = `${value}radio`;
  radioButtonCreator(quizRadioButtons,{id:newInputId,label:label,value:value,name:"quiztype"});
};

/* <h2>Question number: 1</h2>
      <h3>How do you define function in JavaScript?</h3>
       <input type="radio" id="answer1" name="answer" value="answer1">
       <label for="answer1">Function(){}</label><br>
       <input type="radio" id="answer2" name="answer" value="answer2">
       <label for="answer1">Get ..d</label><br>
       <input type="radio" id="answer3" name="answer" value="answer3">
       <label for="answer1">Ans3</label><br><br>
       <button type="button">Next Question ></button> */

function createQuestionRB(){
    const questionNumber = document.createElement("h2"); 
    questionNumber.textContent = "Question number: 1"; 
    questionsPage.append(questionNumber);
    const displayQuestion = document.createElement("h3"); 
    displayQuestion.textContent = "How do you define function in JavaScript?"; 
    questionsPage.append(displayQuestion);
};



backendAPI.getQuizNames((error,quizNames)=>{
 quizNames.forEach(quizName => {
  radioButtonForWelcomePage(quizName, quizName.toLowerCase());
 });
});

createQuestionRB();
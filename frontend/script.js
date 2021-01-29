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
const questionsContainer = document.getElementById("questionsContainer");

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

function createQuestionRB(){
    const questionNumber = document.createElement("h2"); 
    questionNumber.textContent = "Question number: 1"; 
    questionsContainer.append(questionNumber);
    const displayQuestion = document.createElement("h3"); 
    displayQuestion.textContent = "How do you define function in JavaScript?"; 
    questionsContainer.append(displayQuestion);
    
    radioButtonCreator(questionsContainer,{id:"answer1",name:"answer",label:"Function(){}",value:"answer1"});
    radioButtonCreator(questionsContainer,{id:"answer2",name:"answer",label:"Get ..d",value:"answer2"});
    radioButtonCreator(questionsContainer,{id:"answer3",name:"answer",label:"Def.",value:"answer3"});
};

backendAPI.getQuizNames((error,quizNames)=>{
 quizNames.forEach(quizName => {
  radioButtonForWelcomePage(quizName, quizName.toLowerCase());
 });
});

createQuestionRB();
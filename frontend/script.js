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

function htmlElementCreator(tagName,attributes,textContent){
  const element = document.createElement(tagName);
  if (attributes){
    Object.keys(attributes).forEach((key)=>{
     element.setAttribute(key,attributes[key])
    });  
  }
  if (textContent){
    element.textContent = textContent;
  }
  return element
};

function radioButtonCreator(parent,options) {
  const newInput = htmlElementCreator("input",{type:"radio", name:options.name,value:options.value,id:options.id});
  parent.append(newInput);
  const newLabel = htmlElementCreator("label",{for:options.id},options.label);
  parent.append(newLabel);
  const brtag = htmlElementCreator("br");
  parent.append(brtag);
};
 
function radioButtonForWelcomePage(label,value) {
  const newInputId = `${value}radio`;
  radioButtonCreator(quizRadioButtons,{id:newInputId,label:label,value:value,name:"quiztype"});
};

function createQuestionRB(questionNumber,questionText,answersArray){
    const questionNumberHTML = htmlElementCreator("h2",{},`Question number: ${questionNumber}`); 
    questionsContainer.append(questionNumberHTML);
    const displayQuestion = htmlElementCreator("h3",{},questionText); 
    questionsContainer.append(displayQuestion);
    
    answersArray.forEach((answerText,index)=> {
      radioButtonCreator(questionsContainer,{id:`answer${questionNumber}-${index}`,name:`answer${questionNumber}`,label:answerText,value:answerText});
    });
};

backendAPI.getQuizNames((error,quizNames)=>{
 quizNames.forEach(quizName => {
  radioButtonForWelcomePage(quizName, quizName.toLowerCase());
 });
});

createQuestionRB("1","How do you define function in JavaScript?",["Function(){}","Get ..d","Def."]);
createQuestionRB("2","How do you define function in JavaScript?",["Function(){}","Get ..d","Def."]);
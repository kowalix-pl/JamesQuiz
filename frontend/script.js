const backendAPI = {
  getQuizNames: function(cb) {
    cb(null,["HTML","CSS","JavaScript"])
  }
};


htmlElement.startButton.addEventListener("click", ()=>{
  htmlElement.welcomePage.classList.add("hidden");
  htmlElement.questionsPage.classList.remove("hidden");
  const quizName = document.querySelector('input[name="quiztype"]:checked').value;
  startQuiz(htmlElement.usernameInput.value, quizName);
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
  radioButtonCreator(htmlElement.quizRadioButtons,{id:newInputId,label:label,value:value,name:"quiztype"});
};
// generate radiobuttons
function createQuestionRB(questionNumber,questionText,answersArray){
    const questionNumberHTML = htmlElementCreator("h2",{},`Question number: ${questionNumber}`); 
    htmlElement.questionsContainer.append(questionNumberHTML);
    const displayQuestion = htmlElementCreator("h3",{},questionText); 
    htmlElement.questionsContainer.append(displayQuestion);
    
    answersArray.forEach((answerText,index)=> {
      radioButtonCreator(htmlElement.questionsContainer,{id:`answer${questionNumber}-${index}`,name:`answer${questionNumber}`,label:answerText,value:answerText});
    });
};

backendAPI.getQuizNames((error,quizNames)=>{
 quizNames.forEach(quizName => {
  radioButtonForWelcomePage(quizName, quizName.toLowerCase());
 });
});

createQuestionRB("1","How do you define function in JavaScript?",["Function(){}","Get ..d","Def."]);
createQuestionRB("2","How do you define function in JavaScript?",["Function(){}","Get ..d","Def."]);
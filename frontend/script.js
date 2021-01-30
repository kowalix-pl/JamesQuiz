htmlElement.startButton.addEventListener("click", ()=>{
  htmlElement.welcomePage.classList.add("hidden");
  htmlElement.questionsPage.classList.remove("hidden");
  const quizName = document.querySelector('input[name="quiztype"]:checked').value;
  startQuiz(htmlElement.usernameInput.value, quizName);
}); 

function startQuiz(username,quizName){
  console.log("Quiz is starting now:",username, quizName);
};
 
function radioButtonForWelcomePage(label,value) {
  const newInputId = `${value}radio`;
  htmlCreator.radio(htmlElement.quizRadioButtons,{id:newInputId,label:label,value:value,name:"quiztype"});
};
// generate radiobuttons
function createQuestionRB(questionNumber,questionText,answersArray){
    const questionNumberHTML = htmlCreator.element("h2",{},`Question number: ${questionNumber}`); 
    htmlElement.questionsContainer.append(questionNumberHTML);
    const displayQuestion = htmlCreator.element("h3",{},questionText); 
    htmlElement.questionsContainer.append(displayQuestion);
    
    answersArray.forEach((answerText,index)=> {
      htmlCreator.radio(htmlElement.questionsContainer,{id:`answer${questionNumber}-${index}`,name:`answer${questionNumber}`,label:answerText,value:answerText});
    });
};

backendAPI.getQuizNames((error,quizNames)=>{
 quizNames.forEach(quizName => {
  radioButtonForWelcomePage(quizName, quizName.toLowerCase());
 });
});

createQuestionRB("1","How do you define function in JavaScript?",["Function(){}","Get ..d","Def."]);
createQuestionRB("2","How do you define function in JavaScript?",["Function(){}","Get ..d","Def."]);
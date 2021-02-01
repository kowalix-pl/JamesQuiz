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

function startQuiz(username,quizName){
  backendAPI.getQuizQuestionsList(quizName,(error,ids)=>{
    backendAPI.getQuestion(ids[0],(error,questionData)=>{
       createQuestionRB(1,questionData.text,questionData.answers);
    })
  });
};

htmlElement.startButton.addEventListener("click", ()=>{
  htmlElement.welcomePage.classList.add("hidden");
  htmlElement.questionsPage.classList.remove("hidden");
  const quizName = document.querySelector('input[name="quiztype"]:checked').value;
  startQuiz(htmlElement.usernameInput.value, quizName);
}); 

htmlElement.nextQuestionButton.addEventListener("click", ()=>{
  const name = `answer${1}`;//Radio button number
  const quizAnswer = document.querySelector(`input[name="${name}"]:checked`).value;
  console.log(`Next Q button clicked!, answer is:${quizAnswer}`);
  
}); 

backendAPI.getQuizNames((error,quizNames)=>{
 quizNames.forEach(quizName => {
  radioButtonForWelcomePage(quizName, quizName.toLowerCase());
 });
});


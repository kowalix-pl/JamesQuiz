//Class that shows and hides the page
class Page{
  constructor(containerID){
   this._element = document.getElementById(containerID);
  }
  hide(){
    this._element.classList.add("hidden");
  }
  show(){
    this._element.classList.remove("hidden");
  }
}
const welcomePage = new Page("welcomePage");
const questionsPage = new Page("questionsPage");

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

async function startQuiz(username,quizName){
  const ids = await backendAPI.getQuizQuestionsList(quizName);
  const questionData = await backendAPI.getQuestion(ids[0]);
  createQuestionRB(1,questionData.text,questionData.answers);
};

htmlElement.startButton.addEventListener("click", ()=>{
  welcomePage.hide();
  questionsPage.show();
  const quizName = document.querySelector('input[name="quiztype"]:checked').value;
  startQuiz(htmlElement.usernameInput.value, quizName);
}); 

htmlElement.nextQuestionButton.addEventListener("click", ()=>{
  const name = `answer${1}`; //Radio button number
  const quizAnswer = document.querySelector(`input[name="${name}"]:checked`).value;
  console.log(`Next Q button clicked!, answer is:${quizAnswer}`);
}); 

(async ()=>{
  const quizNames = await backendAPI.getQuizNames();
  quizNames.forEach(quizName => {
    radioButtonForWelcomePage(quizName, quizName.toLowerCase());
  });
})();